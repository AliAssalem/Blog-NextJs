"use client";
import { useState } from "react"
import React from 'react'
import { toast } from "react-toastify";
import LoginForm from "../(user)/login/LoginForm";


const AddArticleForm = () => {
    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");

    const formSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if(title === "") return toast.error("Title is required");
        if(description === "") return toast.error("description is required");

    };
 
  return (
    <form className="flex flex-col" onSubmit={formSubmitHandler}>
        <input className="mb-4  rounded p-2 text-xl bg-white" type="text" placeholder="Enter article title"
        value={title} onChange={(e)=>setTitle(e.target.value)}
        ></input> 
        <textarea className="mb-4 p-2 lg:text-xl reounded resize-none bg-white" rows={5} placeholder="Enter article description" value={description} onChange={(e)=>setDescription(e.target.value)}></textarea>
        <button type="submit" className="text-2xl text-white bg-blue-700 hover:bg-blue-900 p-2 rounded-lg font-bold">Add Article</button>
    </form>
  )
}

export default AddArticleForm
