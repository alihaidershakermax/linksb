import { personalConfig } from "./personal"
import { themeConfig, themePresets, getCurrentTheme } from "./theme"
import { socialConfig } from "./social"
import { spotifyConfig } from "./spotify"
import { trackTVConfig } from "./tracktv"
import { footerConfig } from "./footer"

export const siteConfig = {
  personal: personalConfig,
  theme: themeConfig,
  social: socialConfig,
  spotify: spotifyConfig,
  trackTV: trackTVConfig,
  footer: footerConfig,
}

export { getCurrentTheme, themePresets }

