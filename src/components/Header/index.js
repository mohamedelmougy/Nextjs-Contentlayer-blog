"use client";
import Link from "next/link";
import Logo from "./Logo";
import {
  LinkedinIcon,
  TwitterIcon,
  GithubIcon,
  DribbbleIcon,
  SunIcon,
  MoonIcon,
} from "../icons";
import siteMetadata from "@/src/utils/siteMetadata";
import { useState } from "react";
import { ThemeSwitch } from "@/src/utils/themeSwitch";
import { cx } from "@/src/utils";

const Header = () => {
  const [click, setClick] = useState(false);
  const toggle = () => {
    setClick((prev) => !prev);
  };
  return (
    <header className="w-full p-4 px-5 sm:px-10 flex items-center justify-between">
      <Logo />
      <button className="inline-block sm:hidden z-50" onClick={toggle}>
        <div className="w-6 cursor-pointer transition-all ease-out duration-300">
          <div className="relative">
            <span
              className="absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-white rounded transition-all ease-out duration-200"
              style={{
                transform: click
                  ? "rotate(-45deg) translateY(0)"
                  : "rotate(0deg) translateY(6px)",
              }}
            >
              &nbsp;
            </span>
            <span
              className="absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-white rounded transition-all ease-out duration-200"
              style={{
                opacity: click ? 0 : 1,
              }}
            >
              &nbsp;
            </span>
            <span
              className="absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-white rounded transition-all ease-out duration-200"
              style={{
                transform: click
                  ? "rotate(45deg) translateY(0)"
                  : "rotate(0deg) translateY(-6px)",
              }}
            >
              &nbsp;
            </span>
          </div>
        </div>
      </button>

      <nav
        className="w-max py-3 px-6 sm:px-8 border border-solid border-dark text-dark rounded-full font-medium capitalize flex sm:hidden items-center gap-6 fixed top-6 right-1/2 translate-x-1/2 bg-light/80 backdrop-blur-sm z-[1000] transition-all ease-out duration-300"
        style={{
          top: click ? "1rem" : "-5rem",
        }}
      >
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
          <ThemeSwitch />
      </nav>

      <nav className="w-max py-3 px-6 sm:px-8 border border-solid border-dark text-dark rounded-full font-medium capitalize hidden sm:flex items-center gap-6 fixed top-6 right-1/2 translate-x-1/2 bg-light/80 backdrop-blur-sm z-[1000]">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>

         <ThemeSwitch />
      </nav>
      <div className="hidden sm:flex items-center">
        <a href={siteMetadata.linkedin} className="inline-block w-6 h-6 mr-4">
          <LinkedinIcon className="hover:scale-125 transition-all ease-out duration-200" />
        </a>
        <a href={siteMetadata.twitter} className="inline-block w-6 h-6 mr-4">
          <TwitterIcon className="hover:scale-125 transition-all ease-out duration-200" />
        </a>
        <a href={siteMetadata.github} className="inline-block w-6 h-6 mr-4">
          <GithubIcon className="hover:scale-125 transition-all ease-out duration-200 dark:fill-light" />
        </a>
        <a href={siteMetadata.dribbble} className="inline-block w-6 h-6 mr-4">
          <DribbbleIcon className="hover:scale-125 transition-all ease-out duration-200" />
        </a>
      </div>
    </header>
  );
};

export default Header;
