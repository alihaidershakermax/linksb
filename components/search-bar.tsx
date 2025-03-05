"use client"

import { useState } from "react"
import { Search } from "lucide-react"

export default function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("")

  const handleSearch = (e) => {
    e.preventDefault()
    onSearch(searchTerm)
  }

  return (
    <form onSubmit={handleSearch} className="mb-4">
      <div className="relative">
        <input
          type="text"
          placeholder="Search movies or TV shows..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full py-2 pl-10 pr-4 text-gray-700 bg-white border rounded-full dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
        />
        <button type="submit" className="absolute inset-y-0 left-0 flex items-center pl-3">
          <Search className="w-5 h-5 text-gray-400" />
        </button>
      </div>
    </form>
  )
}

