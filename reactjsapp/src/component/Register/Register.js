import React from 'react'
import { useForm } from "react-hook-form";

function Register() {
  let { register, handleSubmit, formState: { error } } = useForm();
  const onSubmit = data => {
    console.log(data);
  }
  return (
    <div className='container mt-2  pt-2 pb-2 d-grid gap-2 col-3 mx-auto'>
      <h1 className='text-center text-info'>Elearning</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="border borde-5 rounded-3 border-success p-5 bg-info">
        <label htmlFor="name" className='me-3 mb-2'>Enter Name</label>
        <input type="text" {...register("name",{required:true,minLength: 8})} />
        <br></br>
        <label htmlFor="email" className='me-3 mb-2'>Enter email id</label>
        <input type="email" {...register("email",{required:true})} placeholder="example@gmail.com" />
        <br></br>
        <label htmlFor="password" className='me-3 mb-2'>Enter password</label>
        <input type='password' {...register("password",{required:true,maxLength: 20})} />
        <br></br>
        <label htmlFor="gender" className='me-3 mb-2'>Select gender</label>
        <select {...register("gender")}>
          <option value="female">female</option>
          <option value="male">male</option>
          <option value="other">other</option>
        </select>
        <br></br>
        <button type="submit" class="btn btn-success text align-center fs-4 mb-2">Success</button>
      </form>
    </div>
  )
}

export default Register;
