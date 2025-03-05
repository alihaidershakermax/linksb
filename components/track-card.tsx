"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function TrackCard({ track, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-gray-800 rounded-lg overflow-hidden shadow-lg flex items-center p-4"
    >
      <Image
        src={track.albumArt || "/placeholder.svg"}
        alt={track.title}
        width={64}
        height={64}
        className="rounded-md mr-4"
        loading="lazy"
      />
      <div>
        <h3 className="text-lg font-bold">{track.title}</h3>
        <p className="text-gray-400">{track.artist}</p>
      </div>
    </motion.div>
  )
}

