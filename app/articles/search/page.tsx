
interface SearchPageProps{
  searchParams : {searchText:string}
}

const SearchPage = async ({ searchParams }: SearchPageProps) => {
  const { searchText } = await searchParams
  return (
    <div className="fix-height conatainer m-auto">
       <h1 className="text-2xl font-bold ">
        Search Page : {searchText}
       </h1>
    </div>
  )
}

export default SearchPage
