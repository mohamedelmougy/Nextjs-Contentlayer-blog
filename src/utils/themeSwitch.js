"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "../components/icons";
import Image from "next/image";
import { cx } from ".";

export function ThemeSwitch() {
  const [mounted, setMounted] = useState(false)
  const { setTheme, resolvedTheme } = useTheme()

  useEffect(() =>  setMounted(true), [])

  if (!mounted) return (
    <Image
      src="data:image/svg+xml;base64,PHN2ZyBzdHJva2U9IiNGRkZGRkYiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjIwMHB4IiB3aWR0aD0iMjAwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB4PSIyIiB5PSIyIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjIiIHJ4PSIyIj48L3JlY3Q+PC9zdmc+Cg=="
      width={24}
      height={24}
      sizes="24x24"
      alt="Loading Light/Dark Toggle"
      priority={false}
      title="Loading Light/Dark Toggle"
    />
  )

  if (resolvedTheme === 'dark') {
    return <SunIcon onClick={() => setTheme('light')} className={cx(
      "w-6 h-6 ease-out ml-2 flex items-center justify-center rounded-full p-1 cursor-pointer",
      resolvedTheme === "light" ? "bg-dark text-light" : "bg-light text-dark"
    )}/>
  }

  if (resolvedTheme === 'light') {
    return <MoonIcon onClick={() => setTheme('dark')} className={cx(
      "w-6 h-6 ease-out ml-2 flex items-center justify-center rounded-full p-1 cursor-pointer",
      resolvedTheme === "light" ? "bg-dark text-light" : "bg-light text-dark"
    )}/>
  }
}
