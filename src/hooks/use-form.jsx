import { useState } from "react";

const useForm = (validateFnc) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const isValid = validateFnc(enteredValue);
  const isInvalid = !isValid && isTouched;

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
    isValid,
    isInvalid,
    changeHandler,
    blurHandler,
    resetInput,
  };
};

export default useForm;
