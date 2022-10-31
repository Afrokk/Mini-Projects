import "./InputField.sass";
import { useEffect, useState } from "react";


//Typedef:
type InputFieldProps = {
  //Passing fieldType prop for regexes (For validation purposes)
  fieldType: "POSTCODE" | "AMOUNT" | "PERCENTAGE" | "TEXT";

  //Standard Props
  label: string;
  required: boolean;
};

const InputField = ({
  label,
  fieldType,
  required,
}: InputFieldProps): JSX.Element => {

  //State for placeholder-to-label animation
  const [value, setValue] = useState<string>("");

  //For validation
  const [isValid, setIsValid] = useState<boolean>(true);

  //For live validation of input
  useEffect(() => {
    setIsValid(validateInput());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(e.target.value);
  };

  //Validator function to validate according to Regex supplied
  const validateInput = (): boolean =>
    fieldType === "TEXT" ||
    !value ||
    (required && VALIDATOR[fieldType].test(value)) ||
    (!required && !!value && VALIDATOR[fieldType].test(value));

  //Conditions to toggle success/error classes according to isValid
  return (
    <div
      className={`input-field-component ${
        (!isValid && "error") ||
        (!value && " ") ||
        (isValid && fieldType !== "TEXT" && "success")
      }`}
    >
      <input onChange={handleChange} />
      <label className={value && "in-focus"}>{label}</label>
    </div>
  );
};


//Setting default props (no validation on TEXT fieldType)
InputField.defaultProps = {
  label: "",
  fieldType: "TEXT",
  required: false,
};

//VALIDATOR variable, regexes can be declared here
const VALIDATOR: { [key: string]: RegExp } = {
  //ADD VALIDATION REGEX(S) HERE
};

export default InputField;
