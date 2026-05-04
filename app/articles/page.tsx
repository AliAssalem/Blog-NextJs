import { Metadata } from "next"
import { getArticles } from "../apiCalls/articleApiCall"
import ArticleItem from "../components/articles/ArticleItem"
import Pagination from "../components/articles/Pagination"
import SearchArticleInput from "../components/articles/SearchArticleInput"
import { Article } from "@prisma/client"
import { ARTICLE_PER_PAGE } from "../utils/constants"
import prisma from "../utils/db"

// app/articles/page.tsx

interface ArticlesPageProps {
  // Update: searchParams must be a Promise
  searchParams: Promise<{ pageNumber?: string }>;
}

const ArticlesPage = async ({ searchParams } : ArticlesPageProps) => {
  // 1. You MUST await searchParams before destructuring
  const { pageNumber } = await searchParams;
  
  // 2. Default to "1" if pageNumber is undefined or NaN
  const currentPage = pageNumber && !isNaN(parseInt(pageNumber)) ? pageNumber : "1";

  // 3. Pass the valid string to your API call
  const articles: Article[] = await getArticles(currentPage);
  const count: number = await prisma.article.count();

  const pages = Math.ceil(count / ARTICLE_PER_PAGE);

  return (
    <section className="container fix-height m-auto px-5">
      <SearchArticleInput />
      <div className="flex items-center justify-center flex-wrap gap-7">
        {articles.map(item => (
          <ArticleItem article={item} key={item.id} />
        ))}
      </div>
      {/* Parse to Int for the Pagination component calculation */}
      <Pagination pageNumber={parseInt(currentPage)} route="/articles" pages={pages} />
    </section>
  )
}


export default ArticlesPage;

export const metadata: Metadata = {
  title: 'Articles Page',
  description: 'Articles about programming',
}