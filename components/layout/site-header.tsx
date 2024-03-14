import React from "react"

import MainNav from "@/components/layout/main-nav"

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <MainNav></MainNav>
      </div>
    </header>
  )
}
