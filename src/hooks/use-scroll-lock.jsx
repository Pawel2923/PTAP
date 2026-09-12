import { useEffect } from "react";

let lockCount = 0;
let lastTouchY = 0;

let originalBodyStyles = {
  overflow: "",
  paddingRight: "",
  touchAction: "",
  overscrollBehavior: "",
};

let originalHtmlStyles = {
  overflow: "",
  overscrollBehavior: "",
};

const listenerOptions = { passive: false, capture: true };
const passiveOptions = { passive: true, capture: true };

const findScrollableAncestor = (element) => {
  let el = element;
  while (el && el !== document.body && el !== document.documentElement) {
    const style = window.getComputedStyle(el);
    const overflowY = style.overflowY;
    if (
      (overflowY === "auto" || overflowY === "scroll") &&
      el.scrollHeight > el.clientHeight
    ) {
      return el;
    }
    el = el.parentElement;
  }
  return null;
};

const handleTouchStart = (event) => {
  if (event.touches.length === 1) {
    lastTouchY = event.touches[0].clientY;
  }
};

const handleTouchEnd = () => {
  lastTouchY = 0;
};

const handleTouchMove = (event) => {
  // Prevent multi-touch pinch-to-zoom / pan gestures while locked
  if (event.touches.length > 1) {
    if (event.cancelable) {
      event.preventDefault();
    }
    return;
  }

  const currentY = event.touches[0].clientY;
  if (lastTouchY === 0) {
    lastTouchY = currentY;
    return;
  }

  const deltaY = currentY - lastTouchY;
  lastTouchY = currentY;

  const scrollableEl = findScrollableAncestor(event.target);

  // If target is not inside an active scroll container, prevent touch scroll
  if (!scrollableEl) {
    if (event.cancelable) {
      event.preventDefault();
    }
    return;
  }

  // If inside an active scroll container, prevent bounce/chaining at edges
  const isAtTop = scrollableEl.scrollTop <= 0;
  const isAtBottom =
    scrollableEl.scrollTop + scrollableEl.clientHeight >=
    scrollableEl.scrollHeight - 1;

  if ((isAtTop && deltaY > 0) || (isAtBottom && deltaY < 0)) {
    if (event.cancelable) {
      event.preventDefault();
    }
  }
};

const handleWheel = (event) => {
  const scrollableEl = findScrollableAncestor(event.target);

  if (!scrollableEl) {
    if (event.cancelable) {
      event.preventDefault();
    }
    return;
  }

  const isAtTop = scrollableEl.scrollTop <= 0;
  const isAtBottom =
    scrollableEl.scrollTop + scrollableEl.clientHeight >=
    scrollableEl.scrollHeight - 1;

  if ((isAtTop && event.deltaY < 0) || (isAtBottom && event.deltaY > 0)) {
    if (event.cancelable) {
      event.preventDefault();
    }
  }
};

/**
 * Locks body and document scrolling across desktop and mobile browsers (iOS Safari, Firefox Mobile).
 * Uses reference counting so concurrent modals do not conflict.
 */
export const lockScroll = () => {
  if (typeof document === "undefined") return;

  if (lockCount === 0) {
    originalBodyStyles = {
      overflow: document.body.style.overflow,
      paddingRight: document.body.style.paddingRight,
      touchAction: document.body.style.touchAction,
      overscrollBehavior: document.body.style.overscrollBehavior,
    };

    originalHtmlStyles = {
      overflow: document.documentElement.style.overflow,
      overscrollBehavior: document.documentElement.style.overscrollBehavior,
    };

    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    document.documentElement.style.overflow = "hidden";
    document.documentElement.style.overscrollBehavior = "none";

    document.body.style.overflow = "hidden";
    document.body.style.touchAction = "none";
    document.body.style.overscrollBehavior = "none";

    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    document.addEventListener("touchstart", handleTouchStart, passiveOptions);
    document.addEventListener("touchmove", handleTouchMove, listenerOptions);
    document.addEventListener("touchend", handleTouchEnd, passiveOptions);
    document.addEventListener("wheel", handleWheel, listenerOptions);
  }

  lockCount++;
};

/**
 * Unlocks body and document scrolling when all locks are released.
 */
export const unlockScroll = () => {
  if (typeof document === "undefined") return;

  lockCount = Math.max(0, lockCount - 1);

  if (lockCount === 0) {
    document.removeEventListener(
      "touchstart",
      handleTouchStart,
      passiveOptions
    );
    document.removeEventListener("touchmove", handleTouchMove, listenerOptions);
    document.removeEventListener("touchend", handleTouchEnd, passiveOptions);
    document.removeEventListener("wheel", handleWheel, listenerOptions);
    lastTouchY = 0;

    document.documentElement.style.overflow = originalHtmlStyles.overflow;
    document.documentElement.style.overscrollBehavior =
      originalHtmlStyles.overscrollBehavior;

    document.body.style.overflow = originalBodyStyles.overflow;
    document.body.style.paddingRight = originalBodyStyles.paddingRight;
    document.body.style.touchAction = originalBodyStyles.touchAction;
    document.body.style.overscrollBehavior =
      originalBodyStyles.overscrollBehavior;
  }
};

/**
 * Hook to lock background scrolling while a component is mounted.
 *
 * @param {boolean} [enabled=true] - Whether to activate scroll locking.
 */
export const useScrollLock = (enabled = true) => {
  useEffect(() => {
    if (!enabled) return;

    lockScroll();

    return () => {
      unlockScroll();
    };
  }, [enabled]);
};

export default useScrollLock;
