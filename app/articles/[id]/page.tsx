interface SingleArticlePageProps {
  params: Promise<{ id: string }>
}

const SingleArticlePage = async ({ params }: SingleArticlePageProps) => {

  const { id } = await params

  console.log("id:", id)

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  )

  if (!response.ok) {
    throw new Error("Failed to fetch article")
  }

  const article = await response.json()

  return (
    <section className='fix-height container m-auto px-5 pt-8 md:w-3/4'>
      <div className='bg-white p-7 rounded-lg'>
        <h1 className='text-3xl font-bold text-gray-700 mb-2'>
          {article.title}
        </h1>
        <div className='text-gray-400'>1/1/2026</div>
        <p className='text-gray-800 text-xl mt-5'>
          {article.body}
        </p>
      </div>
    </section>
  )
}

export default SingleArticlePage