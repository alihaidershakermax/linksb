import Link from "next/link"
import Image from "next/image"
import { ChevronLeft, Star, Clock, Film, Tv2 } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { getMovieStats, getWatchedMovies, getWatchedShows, getWatchlist } from "@/lib/tracktv"
import { getCurrentTheme } from "@/config/site"

export default async function MoviesPage() {
  // In a real implementation, these would be fetched from the TrackTV API
  const stats = await getMovieStats()
  const watchedMovies = await getWatchedMovies()
  const watchedShows = await getWatchedShows()
  const watchlist = await getWatchlist()

  const theme = getCurrentTheme()

  return (
    <main className={`min-h-screen bg-gradient-to-b ${theme.gradient} ${theme.text}`}>
      <div className="max-w-2xl mx-auto p-4">
        <div className="mb-6">
          <Link href="/" className={`inline-flex items-center ${theme.mutedText} hover:${theme.text}`}>
            <ChevronLeft className="h-4 w-4 mr-1" />
            Back to Home
          </Link>
        </div>

        <div
          className={`${theme.cardBg} backdrop-blur-md rounded-xl shadow-xl overflow-hidden mb-6 border border-white/5`}
        >
          <div className="p-6">
            <h1 className="text-2xl font-bold mb-6">My Movie & TV Stats</h1>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className={`${theme.accent} p-4 rounded-lg text-center`}>
                <div className="text-3xl font-bold">{stats.moviesWatched}</div>
                <div className={`text-sm ${theme.mutedText}`}>Movies Watched</div>
              </div>
              <div className={`${theme.accent} p-4 rounded-lg text-center`}>
                <div className="text-3xl font-bold">{stats.showsWatched}</div>
                <div className={`text-sm ${theme.mutedText}`}>TV Shows</div>
              </div>
              <div className={`${theme.accent} p-4 rounded-lg text-center`}>
                <div className="text-3xl font-bold">{stats.totalHours}</div>
                <div className={`text-sm ${theme.mutedText}`}>Hours Watched</div>
              </div>
              <div className={`${theme.accent} p-4 rounded-lg text-center`}>
                <div className="text-3xl font-bold">{stats.avgRating}</div>
                <div className={`text-sm ${theme.mutedText}`}>Avg Rating</div>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <h2 className="text-xl font-semibold">Favorite Genres</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {stats.genres.map((genre, index) => (
                  <div key={index} className={`${theme.accent} p-3 rounded-lg`}>
                    <div className="font-medium">{genre.name}</div>
                    <div className={`text-sm ${theme.mutedText}`}>{genre.count} titles</div>
                    <div className="w-full bg-white/10 h-1.5 rounded-full mt-2">
                      <div
                        className={`bg-gradient-to-r ${theme.highlight} h-1.5 rounded-full`}
                        style={{ width: `${genre.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Tabs defaultValue="movies" className="w-full">
              <TabsList className={`grid w-full grid-cols-3 ${theme.accent}`}>
                <TabsTrigger value="movies" className="flex items-center gap-1">
                  <Film className="h-3.5 w-3.5" />
                  <span>Movies</span>
                </TabsTrigger>
                <TabsTrigger value="shows" className="flex items-center gap-1">
                  <Tv2 className="h-3.5 w-3.5" />
                  <span>TV Shows</span>
                </TabsTrigger>
                <TabsTrigger value="watchlist" className="flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5" />
                  <span>Watchlist</span>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="movies" className="mt-4 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {watchedMovies.map((movie) => (
                    <div key={movie.id} className={`${theme.accent} rounded-lg overflow-hidden flex`}>
                      <div className="w-16 h-24 relative flex-shrink-0">
                        <Image
                          src={movie.posterUrl || "/placeholder.svg?height=96&width=64"}
                          alt={movie.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-3 flex-1">
                        <h3 className="font-medium text-sm line-clamp-1">{movie.title}</h3>
                        <div className={`flex items-center mt-1 text-xs ${theme.mutedText}`}>
                          <Star className="h-3 w-3 fill-yellow-400 text-yellow-400 mr-1" />
                          <span>{movie.rating}/5</span>
                          <span className="mx-2">•</span>
                          <span>{movie.year}</span>
                        </div>
                        <p className={`text-xs ${theme.mutedText} mt-2 line-clamp-2`}>{movie.overview}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="shows" className="mt-4 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {watchedShows.map((show) => (
                    <div key={show.id} className={`${theme.accent} rounded-lg overflow-hidden flex`}>
                      <div className="w-16 h-24 relative flex-shrink-0">
                        <Image
                          src={show.posterUrl || "/placeholder.svg?height=96&width=64"}
                          alt={show.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-3 flex-1">
                        <h3 className="font-medium text-sm line-clamp-1">{show.title}</h3>
                        <div className={`flex items-center mt-1 text-xs ${theme.mutedText}`}>
                          <Star className="h-3 w-3 fill-yellow-400 text-yellow-400 mr-1" />
                          <span>{show.rating}/5</span>
                          <span className="mx-2">•</span>
                          <span>{show.seasons} seasons</span>
                        </div>
                        <p className={`text-xs ${theme.mutedText} mt-2 line-clamp-2`}>{show.overview}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="watchlist" className="mt-4 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {watchlist.map((item) => (
                    <div key={item.id} className={`${theme.accent} rounded-lg overflow-hidden flex`}>
                      <div className="w-16 h-24 relative flex-shrink-0">
                        <Image
                          src={item.posterUrl || "/placeholder.svg?height=96&width=64"}
                          alt={item.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-3 flex-1">
                        <h3 className="font-medium text-sm line-clamp-1">{item.title}</h3>
                        <div className={`flex items-center mt-1 text-xs ${theme.mutedText}`}>
                          <span>{item.type}</span>
                          <span className="mx-2">•</span>
                          <span>{item.year}</span>
                        </div>
                        <p className={`text-xs ${theme.mutedText} mt-2 line-clamp-2`}>{item.overview}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </main>
  )
}

