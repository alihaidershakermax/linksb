"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function SpotifySection({ recentTracks, theme }) {
  return (
    <div className="space-y-4">
      <h3 className="font-medium">Recently Played</h3>
      {recentTracks.map((track, index) => (
        <motion.div
          key={index}
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: index * 0.1 }}
          className={`${theme.accent} p-3 rounded-lg flex items-center space-x-3`}
        >
          <div className="w-12 h-12 bg-gray-900 rounded relative overflow-hidden">
            <Image
              src={track.albumArt || "/placeholder.svg?height=48&width=48"}
              alt={`${track.title} album art`}
              fill
              className="object-cover"
            />
          </div>
          <div className="flex-1">
            <div className="font-medium text-sm">{track.title}</div>
            <div className={`text-xs ${theme.mutedText}`}>{track.artist}</div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

