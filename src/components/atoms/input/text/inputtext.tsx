import React, { ForwardRefRenderFunction, forwardRef } from "react";

interface InputTextProps {
  placeholder: "Name" | "Email" | "Phone";
  showError: boolean;
  errorMessage?: string;
}

const InputText: ForwardRefRenderFunction<
  HTMLInputElement,
  InputTextProps & Record<string, unknown>
> = ({
  placeholder,
  showError = false,
  errorMessage,
  ...restProps
}, ref) => {
  return (
    <>
      <input
        className="p-[15px] text-[15px] w-full transition-all duration-350 ease focus:border-black border-2 border-[#FFBC01] focus:rounded-none focus:outline-none"
        type="text"
        placeholder={placeholder}
        ref={ref}
        {...restProps}
      />
      <label className={showError ? "block" : "hidden"}>{errorMessage}</label>
    </>
  );
};

export default forwardRef(InputText);