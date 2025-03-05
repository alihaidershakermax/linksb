"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function MovieCard({ movie, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
    >
      <Image
        src={movie.posterUrl || "/placeholder.svg"}
        alt={movie.title}
        width={300}
        height={450}
        className="w-full h-auto"
        loading="lazy"
      />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{movie.title}</h3>
        <p className="text-gray-400">⭐ {movie.rating}/5</p>
      </div>
    </motion.div>
  )
}

