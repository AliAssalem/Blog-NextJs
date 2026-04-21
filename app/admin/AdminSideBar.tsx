import Link from 'next/link'
import React from 'react'
import { CgMenuGridR } from 'react-icons/cg'
import { MdOutlineArticle, MdOutlineComment } from 'react-icons/md'

const AdminSideBar = () => {
  return (
    <>
      <Link href="/admin" className='flex items-center justify-center text-lg lg:text-2xl font-semibold'>
      <CgMenuGridR className='text-3xl me-1'/>
      <span className='hidden lg:block'>Dashboard</span>
      </Link>
      <ul className='mt-10 flex items-center justify-center flex-col  lg:items-start'>
        <Link className='flex items-center text-xl mb-5 lg:border-b border-gray-300 hover:text-yellow-200 transition-colors' href="/admin/articles-table">
          <MdOutlineArticle className='me-1'/>
          <span className='hidden lg:block ml-2'>Articles</span>
        </Link>
        <Link className='flex items-center text-xl mb-5 lg:border-b border-gray-300 hover:text-yellow-200 transition-colors' href="/admin/comments-table">
          <MdOutlineComment className='me-1'/>
          <span className='hidden lg:block ml-2'>Comments</span>
        </Link>
      </ul>
    </>
  )
}

export default AdminSideBar
