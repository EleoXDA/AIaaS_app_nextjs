"use client";

import Image from "next/image"
import Link from "next/link"
export const LandingNavbar = () => {

  return (
    <nav className="px-4 bg-transparent content-center justify-center">
      <Link href="/" className="flex justify-center	">
        <div className="relative h-120 w-220 ml-0 my-0">
          <Image height={600} width={600}  alt="Logo" src="/GenAIaaS_landing.png" />
        </div>
      </Link>
    </nav>
  )
}