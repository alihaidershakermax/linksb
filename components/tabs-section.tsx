"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import SocialLinks from "./social-links"
import MovieSection from "./movie-section"
import MusicSection from "./music-section"

export default function TabsSection({ initialMovieData, initialMusicData }) {
  const [activeTab, setActiveTab] = useState("links")

  return (
    <Tabs defaultValue="links" onValueChange={setActiveTab}>
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="links">Links</TabsTrigger>
        <TabsTrigger value="movies">Movies & TV</TabsTrigger>
        <TabsTrigger value="music">Music</TabsTrigger>
      </TabsList>
      <TabsContent value="links">
        <SocialLinks />
      </TabsContent>
      <TabsContent value="movies">
        <MovieSection initialData={initialMovieData} isActive={activeTab === "movies"} />
      </TabsContent>
      <TabsContent value="music">
        <MusicSection initialData={initialMusicData} isActive={activeTab === "music"} />
      </TabsContent>
    </Tabs>
  )
}

