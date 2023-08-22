"use client";

import Image from "next/image"
import Link from "next/link"
export const LandingNavbar = () => {

  return (
    <nav className="p-4 bg-transparent content-center justify-center">
      <Link href="/" className="flex justify-center	">
        <div className="relative h-120 w-220 ml-4 my-0">
          <Image height={290} width={290}  alt="Logo" src="/GenAIaaS.png" />
        </div>
      </Link>
    </nav>
  )
}