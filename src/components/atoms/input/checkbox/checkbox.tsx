'use client'

import { ForwardRefRenderFunction, forwardRef, useEffect, useState } from "react";

interface IFormCheckbox {
  isChecked: boolean;
  description: string;
  showMessage: boolean;
  errorMessage: string;
  onClick: () => void;
}

const FormCheckbox: ForwardRefRenderFunction<
  HTMLInputElement,
  IFormCheckbox & Record<string, unknown>
> = ({ isChecked, description, showMessage, errorMessage, onClick, ...restProps }, ref) => {
  return (
    <>
      <label className="grid grid-cols-[20px_auto]">
        <input
          id="my-checkbox"
          type="checkbox"
          className="hidden"
          ref={ref}
          {...restProps}
        />
        <div
          className="flex h-[20px] w-[20px] border-[1px] border-black"
          onClick={onClick}
        >
          <span
            className={`ml-[3px] mt-[3px] h-[12px] w-[12px] bg-black ${
              isChecked ? "block" : "hidden"
            }`}
          ></span>
        </div>
        <p className="ml-1 mt-[-5px]">{description}</p>
      </label>
      <label className={showMessage ? "block" : "hidden"}>{errorMessage}</label>
    </>
  );
};

export default forwardRef(FormCheckbox);