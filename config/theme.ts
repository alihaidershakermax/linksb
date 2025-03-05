export const themeConfig = {
  // Color options: "blood", "midnight", "abyss", "phantom"
  colorScheme: "blood",
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
  return themePresets[themeConfig.colorScheme as keyof typeof themePresets] || themePresets.blood
}

