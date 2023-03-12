'use client'

import { useRouter } from 'next/navigation'
import React, {useState, FormEvent} from 'react';
 
const Search = () => {
   const [search, setSearch] = useState("")
   const router = useRouter();

   const handleSearch = async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setSearch("");
      router.push(`/search/${search}`);
   };

  return (
      <form onSubmit={handleSearch}>
         <input type="text" value={search} placeholder="Enter the search item" onChange={e => setSearch(e.target.value)} />
         <button type="submit" className="btn ml-3 px-4 py-1 bg-blue-500 text-base text-white rounded-lg">Search</button>
      </form>
  )
}

export default Search