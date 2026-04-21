"use client";
import { useState } from "react"
import React from 'react'
import { toast } from "react-toastify";


const SearchArticleInput = () => {
    const [searchText,setSearchText] = useState("");

    const formSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

    };
 
  return (
    <form className="bg-white my-5 w-full md:w-2/3 m-auto" onSubmit={formSubmitHandler}>
        <input className="w-full p-3 rounded text-xl border-none text-gray-900" type="search" placeholder="Search articles..."
        value={searchText} onChange={(e)=>setSearchText(e.target.value)}
        ></input>
    </form>
  )
}

export default SearchArticleInput
