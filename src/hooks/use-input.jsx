import { useState, useEffect } from "react";

const useInput = (validateFnc) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);
  const [isInvalid, setIsInvalid] = useState(false);

  useEffect(() => {
    const isValid = validateFnc(enteredValue);
    setIsInvalid(!isValid && isTouched);
  }, [enteredValue, isTouched, validateFnc])
  

  const resetInput = () => {
    setEnteredValue("");
    setIsTouched(false);
  };

  const changeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const blurHandler = () => {
    setIsTouched(true);
  };

  return {
    value: enteredValue,
    setValue: setEnteredValue,
    isInvalid,
    changeHandler,
    blurHandler,
    resetInput,
  };
};

export default useInput;
