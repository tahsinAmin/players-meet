import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

export default function SignIn() {
  const { register, handleSubmit, setFocus, formState: { errors } } = useForm();
  const onSubmit = (data)  => {
    if(data.email === 't@t' && data.password === 'qweqweqwe'){
      alert("NICE!!")
    }
    console.log(data);
  }

  useEffect(() => {
    setFocus("email")
  }, [setFocus])


  return (
    <form className="flex h-screen" onSubmit={handleSubmit(onSubmit)}>
      <div className="m-auto">
        <input
          type="email"
          className="border-2 p-2"
          placeholder="Email" 
          {...register("email", {required: "EMAIL IS REQUIRED",})}
        />
        {errors.email && <p className="text-red-900 text-xs bold">{errors.email.message}</p>}
        <input
        type="password"
        className="border-2 p-2" 
        placeholder="Password" 
        {...register("password", { required: "PASSWORD IS REQUIRED", minLength: {value: 8, message: "Password must have at least 8 characters"}})}

        />
        {errors.password && <p className="text-red-900 text-xs bold">{errors.password.message}</p>}
        <input type="Submit" />
      </div>
    </form>
  )
}