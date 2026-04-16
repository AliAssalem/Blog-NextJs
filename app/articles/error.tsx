"use client"

import Link from "next/link"

interface ErrorPageProps{
  error:Error,
  reset:() =>void
}
 
const ArticlesErrorPage = ({error,reset}:ErrorPageProps) => {
  return (
    <div className="fix-height pt-7 px-5 text-center">
        <div className="text-3xl text-red-600 font-semibold">
            Something went wrong in articles page
        </div>
        <h2 className="text-gray-700 text-xl my-3">{error.message}</h2>
        <button onClick={() => reset()} className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-full px-4 py-2"> Try Again</button>
        <Link className="text-xl text-blue-700 underline block mt-6" href='/'>
          Go Home
        </Link>
    </div>
  )
}

export default ArticlesErrorPage
