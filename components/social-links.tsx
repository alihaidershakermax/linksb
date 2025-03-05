"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Github, Twitter, Instagram, Linkedin, Mail, Youtube, Music, Twitch, Facebook } from "lucide-react"
import { siteConfig } from "@/config"

const iconMap = {
  Github,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Youtube,
  Music,
  Twitch,
  Facebook,
}

export default function SocialLinks() {
  return (
    <div className="space-y-4">
      {siteConfig.social
        .filter((social) => social.show)
        .map((social, index) => {
          const IconComponent = iconMap[social.icon as keyof typeof iconMap]

          return (
            <motion.div
              key={index}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <Button
                variant="outline"
                className={`w-full h-16 text-xl bg-${social.name.toLowerCase()}/10 hover:bg-${social.name.toLowerCase()}/20 border-${social.name.toLowerCase()}/20 text-white transition-all duration-300 ease-in-out transform hover:scale-105`}
                asChild
              >
                <Link href={social.url} className="flex items-center justify-between">
                  <span>{social.name}</span>
                  {IconComponent && <IconComponent className="h-8 w-8" />}
                </Link>
              </Button>
            </motion.div>
          )
        })}
    </div>
  )
}

