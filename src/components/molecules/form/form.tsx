'use client'
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import React, { ForwardRefRenderFunction, forwardRef } from "react";
import { Submit } from "@/components/atoms/button/submit/submit";
import Checkbox from "@/components/atoms/input/checkbox/checkbox";
import InputText from "@/components/atoms/input/text/inputtext";
import InputTextArea from "@/components/atoms/input/textarea/inputtextarea";

interface IForm {
  name: string;
  email: string;
  phone: string;
  message: string;
  checked: boolean;
}

const Form: any = () => {
  const [checkboxStatus, setCheckboxStatus] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<IForm>();

  const fields = {
    name: register("name", { required: "This is a required fields." }),
    email: register("email", { required: "This is a required fields." }),
    phone: register("phone", { }),
    message: register("message", { required: "This is a required fields." }),
    checked: register("checked", { required: "This is a required fields." }),
  };

  const onSubmit: SubmitHandler<IForm> = async () => {
    alert("submit");
  };

  return (
<div className="w-full md:w-full lg:w-1/2 xl:w-1/2 p-4 font-gilroy">
  <div className="bg-[#FFBC01] w-full h-full rounded-l-3xl rounded-tr-3xl">
    <div className="xs:py-[17px] xs:px-[17px] sm:py-[17px] sm-[17px] lg:py-[60px] lg:px-[55px] xl:py-[60px] xl:px-[55px]">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3 className="text-[30px] font-semibold mb-[25px] font-allroundgothic">
          How can we help you?
        </h3>
        <p className="text-[17px] mb-[25px] font-semibold">
          Are you ready to truly make a difference for your customers?
          Do you have any questions about us, our ecommerce platform,
          or our marketing technology? Let us know, and we'll be happy
          to tell you all about it!
        </p>
        <div className="mb-[20px]">
          <InputText 
            errorMessage={errors.name?.message?.toString()}
            placeholder="Name" 
            showError={errors.name ? true : false} 
            {...fields.name}
          />
        </div>
        <div className="mb-[20px]">
          <InputText 
            errorMessage={errors.email?.message?.toString()}
            placeholder="Email" 
            showError={errors.name ? true : false} 
            {...fields.email}
          />
        </div>
        <div className="mb-[20px]">
          <InputText 
            errorMessage={errors.phone?.message?.toString()}
            placeholder="Phone" 
            showError={errors.phone ? true : false} 
            {...fields.phone}
          />
        </div>
        <div className="mb-[20px]">
          <InputTextArea 
            placeholder="Your question/message"
            showError={errors.message ? true : false}
            errorMessage={errors.message?.message?.toString()}
            {...fields.message} 
          />         
        </div>
        <div className="space-x-2 max-w-[270px]">
        <Checkbox
            onClick={() => setCheckboxStatus(!checkboxStatus)}
            description="I consent to the processing of my data. You can read more about how we
          handle your data in our general terms and conditions ."
            isChecked={checkboxStatus ? true : false}
            showMessage={errors.checked ? true : false}
            errorMessage={errors.checked?.message?.toString()}
            {...fields.checked}
          />          
        </div>
        <div
          className="mt-[10px] flex justify-end text-[17px] font-semibold"
        >
        <Submit label="Submit" />
        </div>
      </form>
    </div>
  </div>
</div>    
  )    
};

export default Form;
