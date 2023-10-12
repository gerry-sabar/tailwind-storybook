import React, { ForwardRefRenderFunction, forwardRef } from "react";

interface InputTextProps {
  placeholder: string;
  showError: boolean;
  errorMessage?: string;
}

const InputTextArea: ForwardRefRenderFunction<
HTMLTextAreaElement,
InputTextProps & Record<string, unknown>
> = ({ placeholder, showError, errorMessage, ...restProps }, ref) => {
    return(
    <>
    <textarea
        className="h-[113px] text-[15px] p-[15px] w-full transition-all duration-350 ease focus:border-black border-2 border-[#FFBC01] focus:rounded-none focus:outline-none resize-none"
        placeholder={placeholder}
        ref={ref}
    ></textarea> 
    <label className={showError ? "block" : "hidden"}>{errorMessage}</label>
    </>
)}

export default forwardRef(InputTextArea);