import { siteConfig } from "@/config"

export default function Footer() {
  return (
    <footer className="mt-8 text-center text-gray-500 dark:text-gray-400">
      <p>{siteConfig.footer.text}</p>
    </footer>
  )
}

