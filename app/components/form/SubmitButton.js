import React from "react";

import { useFormikContext } from "formik";
import AppButton from "../AppButton";

const SubmitButton = ({ title, color, textColor, ...otherProps }) => {
  const { handleSubmit } = useFormikContext();
  return (
    <AppButton
      title={title}
      onPress={handleSubmit}
      bg={color}
      textColor={textColor}
      {...otherProps}
    />
  );
};

export default SubmitButton;
