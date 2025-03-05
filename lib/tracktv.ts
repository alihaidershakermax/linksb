export async function getInitialMovieData() {
  // Fetch initial movie data from TrackTV API
  // This is a placeholder implementation
  return [
    { id: 1, title: "Inception", rating: 4.8, posterUrl: "/placeholder.svg" },
    { id: 2, title: "The Dark Knight", rating: 4.9, posterUrl: "/placeholder.svg" },
    { id: 3, title: "Interstellar", rating: 4.7, posterUrl: "/placeholder.svg" },
  ]
}

export async function getMoreMovieData(page: number) {
  // Fetch more movie data from TrackTV API
  // This is a placeholder implementation
  return [
    { id: 4 + page, title: `Movie ${4 + page}`, rating: 4.5, posterUrl: "/placeholder.svg" },
    { id: 5 + page, title: `Movie ${5 + page}`, rating: 4.6, posterUrl: "/placeholder.svg" },
    { id: 6 + page, title: `Movie ${6 + page}`, rating: 4.7, posterUrl: "/placeholder.svg" },
  ]
}

export async function getMovieStats() {
  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 500))

  return {
    moviesWatched: 124,
    showsWatched: 48,
    totalHours: 412,
    avgRating: 4.2,
    genres: [
      { name: "Sci-Fi", count: 32, percentage: 85 },
      { name: "Drama", count: 28, percentage: 75 },
      { name: "Action", count: 24, percentage: 65 },
      { name: "Comedy", count: 18, percentage: 50 },
      { name: "Thriller", count: 14, percentage: 40 },
      { name: "Horror", count: 8, percentage: 25 },
    ],
  }
}

export async function getWatchedMovies() {
  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 500))

  return [
    {
      id: 1,
      title: "Dune: Part Two",
      year: 2024,
      rating: 4.5,
      posterUrl: "/placeholder.svg?height=96&width=64",
      overview:
        "Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family.",
    },
    {
      id: 2,
      title: "Oppenheimer",
      year: 2023,
      rating: 4.8,
      posterUrl: "/placeholder.svg?height=96&width=64",
      overview:
        "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.",
    },
    {
      id: 3,
      title: "Poor Things",
      year: 2023,
      rating: 4.3,
      posterUrl: "/placeholder.svg?height=96&width=64",
      overview:
        "The incredible tale about the fantastical evolution of Bella Baxter, a young woman brought back to life by the brilliant and unorthodox scientist Dr. Godwin Baxter.",
    },
    {
      id: 4,
      title: "The Batman",
      year: 2022,
      rating: 4.1,
      posterUrl: "/placeholder.svg?height=96&width=64",
      overview:
        "When a sadistic serial killer begins murdering key political figures in Gotham, Batman is forced to investigate the city's hidden corruption.",
    },
    {
      id: 5,
      title: "Everything Everywhere All at Once",
      year: 2022,
      rating: 4.7,
      posterUrl: "/placeholder.svg?height=96&width=64",
      overview:
        "An aging Chinese immigrant is swept up in an insane adventure, where she alone can save the world by exploring other universes.",
    },
    {
      id: 6,
      title: "Parasite",
      year: 2019,
      rating: 4.6,
      posterUrl: "/placeholder.svg?height=96&width=64",
      overview:
        "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
    },
  ]
}

export async function getWatchedShows() {
  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 500))

  return [
    {
      id: 1,
      title: "The Last of Us",
      seasons: 1,
      rating: 4.8,
      posterUrl: "/placeholder.svg?height=96&width=64",
      overview:
        "After a global pandemic destroys civilization, a hardened survivor takes charge of a 14-year-old girl who may be humanity's last hope.",
    },
    {
      id: 2,
      title: "Succession",
      seasons: 4,
      rating: 4.9,
      posterUrl: "/placeholder.svg?height=96&width=64",
      overview:
        "The Roy family is known for controlling the biggest media and entertainment company in the world. However, their world changes when their father steps down from the company.",
    },
    {
      id: 3,
      title: "Severance",
      seasons: 1,
      rating: 4.7,
      posterUrl: "/placeholder.svg?height=96&width=64",
      overview:
        "Mark leads a team of office workers whose memories have been surgically divided between their work and personal lives.",
    },
    {
      id: 4,
      title: "The Bear",
      seasons: 2,
      rating: 4.6,
      posterUrl: "/placeholder.svg?height=96&width=64",
      overview: "A young chef from the fine dining world returns to Chicago to run his family's sandwich shop.",
    },
  ]
}

export async function getWatchlist() {
  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 500))

  return [
    {
      id: 1,
      title: "Challengers",
      type: "Movie",
      year: 2024,
      posterUrl: "/placeholder.svg?height=96&width=64",
      overview:
        "Follows three players who knew each other when they were teenagers as they compete in a tennis tournament to be the world-famous grand slam winner.",
    },
    {
      id: 2,
      title: "Shogun",
      type: "TV Show",
      year: 2024,
      posterUrl: "/placeholder.svg?height=96&width=64",
      overview:
        "Set in Japan in the year 1600, at the dawn of a century-defining civil war, Lord Yoshii Toranaga is fighting for his life as his enemies on the Council of Regents unite against him.",
    },
    {
      id: 3,
      title: "Civil War",
      type: "Movie",
      year: 2024,
      posterUrl: "/placeholder.svg?height=96&width=64",
      overview:
        "In a near-future America ravaged by political division, a team of journalists travel across the country during a rapidly escalating civil war.",
    },
    {
      id: 4,
      title: "House of the Dragon",
      type: "TV Show",
      year: 2022,
      posterUrl: "/placeholder.svg?height=96&width=64",
      overview: "The story of the House Targaryen set 200 years before the events of Game of Thrones.",
    },
  ]
}

export async function getLatestViews() {
  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 500))

  return [
    {
      title: "Dune: Part Two",
      rating: 4.5,
      posterUrl: "/placeholder.svg?height=56&width=40",
      watchedDate: "2 days ago",
    },
    {
      title: "The Last of Us",
      rating: 4.8,
      posterUrl: "/placeholder.svg?height=56&width=40",
      watchedDate: "5 days ago",
    },
    {
      title: "Oppenheimer",
      rating: 4.7,
      posterUrl: "/placeholder.svg?height=56&width=40",
      watchedDate: "1 week ago",
    },
  ]
}

