// Site Configuration
// Edit this file to customize your Linkees site

export const siteConfig = {
  // Personal Info
  name: "Dark Cinephile",
  bio: "Exploring the shadows of cinema and sound",
  avatar: "/avatar.png", // Place your avatar image in the public folder

  // Theme Settings
  theme: {
    // Color options: "blood", "midnight", "abyss", "phantom"
    colorScheme: "blood",
  },

  // Spotify Configuration
  spotify: {
    username: "your_spotify_username",
    clientId: "your_spotify_client_id",
    clientSecret: "your_spotify_client_secret",
  },

  // Social Media Links
  social: [
    {
      name: "Twitter",
      url: "https://twitter.com/yourusername",
      icon: "Twitter",
      color: "#1DA1F2",
      show: true,
    },
    {
      name: "Instagram",
      url: "https://instagram.com/yourusername",
      icon: "Instagram",
      color: "#E4405F",
      show: true,
    },
    {
      name: "TikTok",
      url: "https://tiktok.com/@yourusername",
      icon: "Music",
      color: "#000000",
      show: true,
    },
    {
      name: "YouTube",
      url: "https://youtube.com/@yourusername",
      icon: "Youtube",
      color: "#FF0000",
      show: true,
    },
    {
      name: "Twitch",
      url: "https://twitch.tv/yourusername",
      icon: "Twitch",
      color: "#9146FF",
      show: true,
    },
    {
      name: "GitHub",
      url: "https://github.com/yourusername",
      icon: "Github",
      color: "#6e5494",
      show: true,
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/yourusername",
      icon: "Linkedin",
      color: "#0077B5",
      show: true,
    },
    {
      name: "Facebook",
      url: "https://facebook.com/yourusername",
      icon: "Facebook",
      color: "#1877F2",
      show: true,
    },
    {
      name: "Email",
      url: "mailto:your.email@example.com",
      icon: "Mail",
      color: "#ffffff",
      show: true,
    },
  ],

  // Footer
  footer: {
    text: "The darkness within reflects the films I consume and the music I embrace",
  },
}

// Theme presets
export const themePresets = {
  blood: {
    gradient: "from-red-900 to-black",
    cardBg: "bg-black/40",
    accent: "bg-red-900/20 hover:bg-red-900/30 border-red-900/30",
    text: "text-red-50",
    mutedText: "text-red-200/60",
    highlight: "from-red-700 to-red-900",
  },
  midnight: {
    gradient: "from-indigo-900 to-black",
    cardBg: "bg-black/40",
    accent: "bg-indigo-900/20 hover:bg-indigo-900/30 border-indigo-900/30",
    text: "text-indigo-50",
    mutedText: "text-indigo-200/60",
    highlight: "from-indigo-700 to-indigo-900",
  },
  abyss: {
    gradient: "from-blue-900 to-black",
    cardBg: "bg-black/40",
    accent: "bg-blue-900/20 hover:bg-blue-900/30 border-blue-900/30",
    text: "text-blue-50",
    mutedText: "text-blue-200/60",
    highlight: "from-blue-700 to-blue-900",
  },
  phantom: {
    gradient: "from-purple-900 to-black",
    cardBg: "bg-black/40",
    accent: "bg-purple-900/20 hover:bg-purple-900/30 border-purple-900/30",
    text: "text-purple-50",
    mutedText: "text-purple-200/60",
    highlight: "from-purple-700 to-purple-900",
  },
}

// Get current theme based on site config
export const getCurrentTheme = () => {
  return themePresets[siteConfig.theme.colorScheme as keyof typeof themePresets] || themePresets.blood
}

