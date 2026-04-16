import Link from 'next/link'
import React from 'react'

const NotFoundPage = () => {
  return (
    <section className='fix-height flex justify-center items-center flex-col'>
      <h1 className='text-7xl text-gray-700 font-bold mt-5'>404</h1>
      <p className='text-gray-500 text-3xl mt-2 mb-5'>Page Not Found</p>
      <Link className='text-xl text-blue-700 underline' href='/'>Go To Home</Link>
    </section>
  )
}

export default NotFoundPage
