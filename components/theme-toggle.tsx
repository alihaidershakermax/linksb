"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"
import { motion } from "framer-motion"

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="fixed top-4 right-4 p-2 rounded-full bg-gray-800 dark:bg-gray-200 text-white dark:text-black"
    >
      {theme === "dark" ? <Sun size={24} /> : <Moon size={24} />}
    </motion.button>
  )
}

