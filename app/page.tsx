"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ExternalLink, Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import SocialLinks from "@/components/social-links"
import SpotifySection from "@/components/spotify-section"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { siteConfig, getCurrentTheme } from "@/config"
import { getLatestViews } from "@/lib/tracktv"
import { getRecentTracks } from "@/lib/spotify"
import { motion, AnimatePresence } from "framer-motion"

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [theme, setTheme] = useState(getCurrentTheme())
  const [latestViews, setLatestViews] = useState([])
  const [recentTracks, setRecentTracks] = useState([])

  useEffect(() => {
    getLatestViews().then(setLatestViews)
    getRecentTracks().then(setRecentTracks)
  }, [])

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    setTheme(getCurrentTheme())
  }

  return (
    <AnimatePresence>
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className={`min-h-screen bg-gradient-to-b ${theme.gradient} flex flex-col items-center justify-center p-4 ${theme.text}`}
      >
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className={`w-full max-w-md mx-auto ${theme.cardBg} backdrop-blur-md rounded-xl shadow-xl overflow-hidden border border-white/5`}
        >
          <div className="p-8 flex flex-col items-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="relative w-28 h-28 mb-4"
            >
              <Image
                src={siteConfig.personal.avatar || "/placeholder.svg"}
                alt="Profile Picture"
                fill
                className="rounded-full object-cover border-4 border-white/10"
                priority
              />
            </motion.div>

            <motion.h1
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-2xl font-bold mb-1"
            >
              {siteConfig.personal.name}
            </motion.h1>
            <motion.p
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
              className={`text-sm ${theme.mutedText} mb-6 text-center`}
            >
              {siteConfig.personal.bio}
            </motion.p>

            <Button variant="outline" size="icon" onClick={toggleDarkMode} className="absolute top-4 right-4">
              {isDarkMode ? <Sun className="h-[1.2rem] w-[1.2rem]" /> : <Moon className="h-[1.2rem] w-[1.2rem]" />}
              <span className="sr-only">Toggle theme</span>
            </Button>

            <Tabs defaultValue="links" className="w-full">
              <TabsList className={`grid w-full grid-cols-3 ${theme.accent}`}>
                <TabsTrigger value="links">Links</TabsTrigger>
                <TabsTrigger value="movies">Movies & TV</TabsTrigger>
                <TabsTrigger value="music">Music</TabsTrigger>
              </TabsList>

              <TabsContent value="links" className="mt-6 space-y-4">
                <SocialLinks />
              </TabsContent>

              <TabsContent value="movies" className="mt-6">
                <div className="space-y-5">
                  <div className="flex justify-between items-center">
                    <h3 className="font-medium">Movie Stats</h3>
                    <Link href="/movies" className="text-xs underline">
                      View All
                    </Link>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className={`${theme.accent} p-3 rounded-lg text-center`}>
                      <div className="text-2xl font-bold">124</div>
                      <div className={`text-xs ${theme.mutedText}`}>Movies Watched</div>
                    </div>
                    <div className={`${theme.accent} p-3 rounded-lg text-center`}>
                      <div className="text-2xl font-bold">48</div>
                      <div className={`text-xs ${theme.mutedText}`}>TV Shows</div>
                    </div>
                    <div className={`${theme.accent} p-3 rounded-lg text-center`}>
                      <div className="text-2xl font-bold">4.2</div>
                      <div className={`text-xs ${theme.mutedText}`}>Avg Rating</div>
                    </div>
                    <div className={`${theme.accent} p-3 rounded-lg text-center`}>
                      <div className="text-2xl font-bold">12</div>
                      <div className={`text-xs ${theme.mutedText}`}>Watchlist</div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-sm font-medium">Latest Views</h4>
                    {latestViews.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: index * 0.1 }}
                        className={`${theme.accent} p-3 rounded-lg flex items-center space-x-3`}
                      >
                        <div className="w-10 h-14 bg-gray-900 rounded relative overflow-hidden">
                          <Image
                            src={item.posterUrl || "/placeholder.svg?height=56&width=40"}
                            alt={`${item.title} poster`}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <div className="font-medium text-sm">{item.title}</div>
                          <div className={`text-xs ${theme.mutedText}`}>
                            ⭐ {item.rating}/5 • {item.watchedDate}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <Button
                    className="w-full mt-2 bg-gradient-to-r from-red-700 to-red-900 hover:from-red-800 hover:to-red-950 text-white"
                    asChild
                  >
                    <Link href="/movies" className="flex items-center justify-center gap-2">
                      View All Movie Stats
                      <ExternalLink className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="music" className="mt-6">
                <SpotifySection recentTracks={recentTracks} theme={theme} />
              </TabsContent>
            </Tabs>
          </div>

          <div className="px-8 py-4 bg-black/50 text-center text-xs">
            <p>{siteConfig.footer.text}</p>
          </div>
        </motion.div>
      </motion.main>
    </AnimatePresence>
  )
}

