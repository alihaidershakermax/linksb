"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { getMoreMovieData } from "@/lib/tracktv"
import MovieCard from "./movie-card"
import SearchBar from "./search-bar"

export default function MovieSection({ initialData, isActive }) {
  const [movies, setMovies] = useState(initialData)
  const [page, setPage] = useState(1)
  const [ref, inView] = useInView()
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    if (inView && isActive) {
      loadMore()
    }
  }, [inView, isActive])

  const loadMore = async () => {
    const newMovies = await getMoreMovieData(page + 1)
    setMovies([...movies, ...newMovies])
    setPage(page + 1)
  }

  const filteredMovies = movies.filter((movie) => movie.title.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
    <div>
      <SearchBar onSearch={setSearchTerm} />
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {filteredMovies.map((movie, index) => (
            <MovieCard key={movie.id} movie={movie} index={index} />
          ))}
        </motion.div>
      </AnimatePresence>
      <div ref={ref}></div>
    </div>
  )
}

