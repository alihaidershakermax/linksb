export async function getInitialMusicData() {
  // Fetch initial music data from Spotify API
  // This is a placeholder implementation
  return [
    { id: 1, title: "Song 1", artist: "Artist 1", albumArt: "/placeholder.svg" },
    { id: 2, title: "Song 2", artist: "Artist 2", albumArt: "/placeholder.svg" },
    { id: 3, title: "Song 3", artist: "Artist 3", albumArt: "/placeholder.svg" },
  ]
}

export async function getMoreMusicData(page: number) {
  // Fetch more music data from Spotify API
  // This is a placeholder implementation
  return [
    { id: 4 + page, title: `Song ${4 + page}`, artist: `Artist ${5 + page}`, albumArt: "/placeholder.svg" },
    { id: 5 + page, title: `Song ${5 + page}`, artist: `Artist ${6 + page}`, albumArt: "/placeholder.svg" },
    { id: 6 + page, title: `Song ${6 + page}`, artist: `Artist ${7 + page}`, albumArt: "/placeholder.svg" },
  ]
}

export async function getRecentTracks() {
  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 500))

  return [
    {
      title: "Midnight City",
      artist: "M83",
      albumArt: "/placeholder.svg?height=48&width=48",
    },
    {
      title: "The Less I Know The Better",
      artist: "Tame Impala",
      albumArt: "/placeholder.svg?height=48&width=48",
    },
    {
      title: "Feel Good Inc.",
      artist: "Gorillaz",
      albumArt: "/placeholder.svg?height=48&width=48",
    },
  ]
}

