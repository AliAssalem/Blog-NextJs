import ArticleItem from "../components/articles/ArticleItem"
import Pagination from "../components/articles/Pagination"
import SearchArticleInput from "../components/articles/SearchArticleInput"
import { Article } from "../utils/types"


const ArticlesPage = async () => {

  const response = await fetch('https://jsonplaceholder.typicode.com/posts',{cache:"no-store"}) 

  if (!response.ok) {
    throw new Error("Failed to fetch articles")
  }

  const articles: Article[] = await response.json() 

  return (
    <section className="fix-height container m-auto px-5">
      <SearchArticleInput/>
      <div className="flex items-center justify-center flex-wrap gap-7">
        {articles.slice(0, 6).map(item => (
          <ArticleItem article={item} key={item.id}/>
        ))}
      </div>
      <Pagination/>
    </section>
  )
}

export default ArticlesPage