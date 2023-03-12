import React from "react"
import search from "../page"

type PageProps = {
  params: {
    searchTerm: string
  }
}

type SearchResults = {
  organic_results: [
    {
      position: number
      title: string
      link: string
      thumbnail: string
      snippet: string
    }
  ]
}

const searchFunc = async (searchTerm: string) => {
   console.log(searchTerm);
  const res = await fetch(
    `https://serpapi.com/search.json?q=${searchTerm}&api_key=${process.env.API_KEY}`
  )

  // throw new Error("Whoops something went wrong");
  const data: SearchResults = await res.json()

  return data;
}

const SearchResults = async ({ params: { searchTerm } }: PageProps) => {
  const searchResults = await searchFunc(searchTerm)

  return (
    <div>
      <p>You searched for: {searchTerm}</p>
      <ol className="space-y-5 p-5">
        {searchResults.organic_results.map((result) => (
          <li key={result.title} className="list-decimal">
            <p className="font-bold">{result.title}</p>
            <p>{result.snippet}</p>
          </li>
        ))}
      </ol>
    </div>
  )
}

export default SearchResults
