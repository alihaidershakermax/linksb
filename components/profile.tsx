"use client"

import Image from "next/image"
import { siteConfig } from "@/config"
import { motion } from "framer-motion"

export default function Profile() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center mb-8"
    >
      <Image
        src={siteConfig.personal.avatar || "/placeholder.svg"}
        alt="Profile Picture"
        width={112}
        height={112}
        className="rounded-full mx-auto mb-4"
        loading="eager"
        priority
      />
      <h1 className="text-3xl font-bold mb-2">{siteConfig.personal.name}</h1>
      <p className="text-xl text-gray-300 dark:text-gray-700">{siteConfig.personal.bio}</p>
    </motion.div>
  )
}

