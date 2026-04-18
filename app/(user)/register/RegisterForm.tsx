"use client";
import { useState } from "react"
import React from 'react'
import { toast } from "react-toastify";


const RegisterForm = () => {
    const [username,setUsername] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const formSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if(username === "") return toast.error("Username is required");
        if(email === "") return toast.error("Email is required");
        if(password === "") return toast.error("Password is required");

    };
 
  return (
    <form className="flex flex-col" onSubmit={formSubmitHandler}>
        <input className="mb-4 border rounded p-2 text-xl" type="text" placeholder="Enter your username"
        value={username} onChange={(e)=>setUsername(e.target.value)}
        ></input>
        <input className="mb-4 border rounded p-2 text-xl" type="email" placeholder="Enter your email"
        value={email} onChange={(e)=>setEmail(e.target.value)}
        ></input>-
        <input className="mb-4 border rounded p-2 text-xl" type="password" placeholder="Enter your password"
        value={password} onChange={(e)=>setPassword(e.target.value)}
        ></input>
        <button type="submit" className="text-2xl text-white bg-blue-800 p-2 rounded-lg font-bold">Register</button>
    </form>
  )
}

export default RegisterForm
