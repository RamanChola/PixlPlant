import React from "react";
import { useForm } from "react-hook-form";
import './App.css';

export default function App() {
  const {register, handleSubmit} = useForm();

  const onSubmit = (data) => {
    console.log(data)
  }

  return(
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="username" {...register('Username', { required: true })} />
      <input type="password" {...register('Password', { required: true })} />
      <input type="submit" />
    </form>
  );
}
