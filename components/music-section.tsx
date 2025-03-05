"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { getMoreMusicData } from "@/lib/spotify"
import TrackCard from "./track-card"

export default function MusicSection({ initialData, isActive }) {
  const [tracks, setTracks] = useState(initialData)
  const [page, setPage] = useState(1)
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView && isActive) {
      loadMore()
    }
  }, [inView, isActive])

  const loadMore = async () => {
    const newTracks = await getMoreMusicData(page + 1)
    setTracks([...tracks, ...newTracks])
    setPage(page + 1)
  }

  return (
    <div>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {tracks.map((track, index) => (
            <TrackCard key={track.id} track={track} index={index} />
          ))}
        </motion.div>
      </AnimatePresence>
      <div ref={ref}></div>
    </div>
  )
}

