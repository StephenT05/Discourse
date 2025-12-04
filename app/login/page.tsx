import Image from "next/image"
import Link from "next/link"
import logo from "@/assets/discourse.svg"

import { AuthForm } from "@/components/auth-form"

export default function LoginPage() {
  return (
    <div className="relative bg-neutral-100 dark:bg-neutral-950 dark:bg-[url('https://www.transparenttextures.com/patterns/cartographer.png')] dark:bg-repeat min-h-screen flex items-center justify-center">
      <div className="relative z-10 mx-auto w-full max-w-md p-6 bg-white dark:bg-black/30 rounded-lg border-2 border-neutral-800 dark:border-transparent shadow-2xl">
        <header className="flex items-center justify-center mb-6">
          <Link href="/" className="flex items-center justify-center">
            <div className="relative w-40 h-14">
              <Image src={logo} alt="DISCOURSE logo" fill className="object-contain" priority />
            </div>
          </Link>
        </header>

        <main>
          <AuthForm mode="login" />
        </main>
      </div>
    </div>
  )
}
