import React from 'react'
const articlesSkeleton = [1,2,3,4,5,6]
const ArticleLoading = () => {
  return (
    <section className='fix-height container m-auto px-5 animate-pulse'> 
    
      <div className='bg-gray-300 my-5 w-full md:w-2/3 m-auto h-12 rounded'></div> 
      <div className='flex items-center justify-center flex-wrap gap-7'>
        {articlesSkeleton.map((item) => (
          <div key={item} className="p-5 rounded-lg my-1 bg-gray-200 w-full md:w-2/5 lg:w-1/4">
             <h3 className="bg-gray-300 h-6"></h3>
             <p className="my-2 p-1 h-10 bg-gray-300"></p>
             <div className=" w-full block bg-gray-400 p-1 rounded-lg h-8"></div>
          </div>
        ))}
      </div>
      <div className='flex items-center justify-center mt-5 mb-10'>
        <div className='bg-gray-300 h-10 w-60 rounded-sm'></div>
      </div>

    </section>
  )
}

export default ArticleLoading
