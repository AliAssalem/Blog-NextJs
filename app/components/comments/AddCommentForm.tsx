"use client";
import { useState } from "react"
import React from 'react'
import { toast } from "react-toastify";


const AddCommentForm = () => {
    const [text,setText] = useState("");

    const formSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if(text ==="") return toast.error("please write yor comment")
    };
 
  return (
    <form className="my-5 w-full md:w-2/3 m-auto" onSubmit={formSubmitHandler}>
        <input className="w-full p-3 rounded text-xl border-none bg-white text-gray-900" type="text" placeholder="Enter your comment..."
        value={text} onChange={(e)=>setText(e.target.value)}
        ></input>
        <button type="submit" className="bg-green-700 text-white mt-2 p-3 w-min text-xl rounded-lg hover:bg-green-900 transition">
            Comment
        </button>
    </form>
  )
}

export default AddCommentForm
