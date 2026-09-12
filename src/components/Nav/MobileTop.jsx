import { useState, useEffect, useRef, useId, memo } from "react";
import { Link, useNavigate } from "react-router-dom";
import classNames from "classnames";

import useAuth from "../../hooks/use-auth";
import ptapLogo from "../../img/logo.webp";
import classes from "./MobileTop.module.css";

const MobileTop = memo(() => {
  const { uid, currentUser } = useAuth();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const triggerRef = useRef(null);
  const menuRef = useRef(null);

  const buttonId = useId();
  const menuId = useId();
  const navigate = useNavigate();

  const getAvatarLetter = () => {
    if (uid && currentUser) {
      const name = currentUser.displayName?.trim();
      if (name && name.length > 0) {
        return name.charAt(0).toUpperCase();
      }
      const email = currentUser.email?.trim();
      if (email && email.length > 0) {
        return email.charAt(0).toUpperCase();
      }
    }
    return "A";
  };

  const avatarLetter = getAvatarLetter();

  useEffect(() => {
    if (!isDropdownOpen) return;

    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isDropdownOpen]);

  const getFocusableItems = () => {
    if (!menuRef.current) return [];
    return Array.from(
      menuRef.current.querySelectorAll(
        'button:not([disabled]), [role="menuitem"]:not([disabled])'
      )
    );
  };

  const handleTriggerKeyDown = (event) => {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setIsDropdownOpen(true);
      requestAnimationFrame(() => {
        const items = getFocusableItems();
        items[0]?.focus();
      });
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setIsDropdownOpen(true);
      requestAnimationFrame(() => {
        const items = getFocusableItems();
        items[items.length - 1]?.focus();
      });
    } else if (event.key === "Escape" && isDropdownOpen) {
      event.preventDefault();
      setIsDropdownOpen(false);
    }
  };

  const handleMenuKeyDown = (event) => {
    const items = getFocusableItems();
    const currentIndex = items.indexOf(document.activeElement);

    if (event.key === "ArrowDown") {
      event.preventDefault();
      if (items.length === 0) return;
      const nextIndex =
        currentIndex === -1 ? 0 : (currentIndex + 1) % items.length;
      items[nextIndex]?.focus();
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      if (items.length === 0) return;
      const prevIndex = currentIndex <= 0 ? items.length - 1 : currentIndex - 1;
      items[prevIndex]?.focus();
    } else if (event.key === "Home") {
      event.preventDefault();
      items[0]?.focus();
    } else if (event.key === "End") {
      event.preventDefault();
      items[items.length - 1]?.focus();
    } else if (event.key === "Escape") {
      event.preventDefault();
      setIsDropdownOpen(false);
      triggerRef.current?.focus();
    } else if (event.key === "Tab") {
      setIsDropdownOpen(false);
    }
  };

  const handleNavigate = (path) => {
    setIsDropdownOpen(false);
    navigate(path);
  };

  return (
    <header className={classes.mobileTop} aria-label="Górna nawigacja mobilna">
      <Link
        to="/"
        className={classes.logoLink}
        title="Przejdź na stronę główną"
        aria-label="PTAP - Strona główna"
        onClick={() => setIsDropdownOpen(false)}
      >
        <img
          src={ptapLogo}
          alt="PTAP - Pilot Training Arma Project"
          className={classes.logoImg}
          width="44"
          height="44"
        />
      </Link>

      <div className={classes.dropdownContainer} ref={dropdownRef}>
        <button
          ref={triggerRef}
          id={buttonId}
          type="button"
          className={classes.avatarTrigger}
          onClick={() => setIsDropdownOpen((prev) => !prev)}
          onKeyDown={handleTriggerKeyDown}
          aria-haspopup="menu"
          aria-expanded={isDropdownOpen}
          aria-controls={isDropdownOpen ? menuId : undefined}
          aria-label={
            uid
              ? `Menu konta użytkownika: ${
                  currentUser?.displayName || currentUser?.email || "Zalogowany"
                }`
              : "Menu logowania"
          }
        >
          <span className={classes.avatar} aria-hidden="true">
            {avatarLetter}
          </span>
        </button>

        {isDropdownOpen && (
          <div
            ref={menuRef}
            id={menuId}
            role="menu"
            tabIndex={-1}
            aria-labelledby={buttonId}
            className={classes.dropdownMenu}
            onKeyDown={handleMenuKeyDown}
          >
            {uid ? (
              <>
                <div className={classes.userHeader} role="none">
                  <span className={classes.userGreeting}>Zalogowano jako</span>
                  <span className={classes.userEmail}>
                    {currentUser?.displayName || currentUser?.email}
                  </span>
                </div>
                <hr className={classes.divider} />
                <button
                  type="button"
                  role="menuitem"
                  className={classes.dropdownItem}
                  onClick={() => handleNavigate("/console")}
                >
                  Konsola
                </button>
                <button
                  type="button"
                  role="menuitem"
                  className={classNames(
                    classes.dropdownItem,
                    classes.logoutItem
                  )}
                  onClick={() => handleNavigate("/wylogowanie")}
                >
                  Wyloguj się
                </button>
              </>
            ) : (
              <>
                <button
                  type="button"
                  role="menuitem"
                  className={classes.dropdownItem}
                  onClick={() => handleNavigate("/logowanie")}
                >
                  Zaloguj się
                </button>
                <button
                  type="button"
                  role="menuitem"
                  className={classes.dropdownItem}
                  onClick={() => handleNavigate("/rejestracja")}
                >
                  Zarejestruj się
                </button>
              </>
            )}
          </div>
        )}
      </div>
    </header>
  );
});

MobileTop.displayName = "MobileTop";

export default MobileTop;
