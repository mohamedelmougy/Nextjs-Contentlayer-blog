"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { DribbbleIcon, GithubIcon, LinkedinIcon, TwitterIcon } from "../icons";
import Link from "next/link";
import siteMetadata from "@/src/utils/siteMetadata";

const Footer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <footer className="flex flex-col items-center m-2 mt-16 text-center rounded-2xl bg-dark dark:bg-accentDark/90 sm:m-10 text-light dark:text-dark">
      <h3 className="px-4 mt-16 text-2xl font-medium text-center capitalize dark:font-bold sm:text-3xl lg:text-4xl">
        Interesting Stories | Updates | Guides
      </h3>
      <p className="w-full px-4 mt-5 text-sm font-light text-center sm:w-3/5 dark:font-medium sm:text-base">
        Subscribe to learn about new technology and updates. Join over 5000+
        members community to stay up to date with latest news.
      </p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-6 w-fit sm:min-w-[384px] flex items-stretch bg-light dark:bg-dark p-1 sm:p-2 rounded mx-4"
      >
        <input
          type="email"
          placeholder="Enter your email"
          {...register("Email", { required: true })}
          className="w-full pb-1 pl-2 mr-2 bg-transparent border-0 border-b text-dark focus:border-dark focus:ring-0 sm:pl-0"
        />

        <input
        value="submit"
          type="submit"
          className="px-3 py-1 font-medium rounded cursor-pointer bg-dark text-light dark:text-dark dark:bg-light sm:px-5"
        />
      </form>
      <div className="flex items-center mt-8">
        <a href={siteMetadata.linkedin} className="inline-block w-6 h-6 mr-4">
          <LinkedinIcon className="transition-all duration-200 ease-out hover:scale-125" />
        </a>
        <a href={siteMetadata.twitter} className="inline-block w-6 h-6 mr-4">
          <TwitterIcon className="transition-all duration-200 ease-out hover:scale-125" />
        </a>
        <a
          href={siteMetadata.github}
          className="inline-block w-6 h-6 mr-4 fill-light"
        >
          <GithubIcon className="transition-all duration-200 ease-out fill-light dark:fill-dark hover:scale-125" />
        </a>
        <a href={siteMetadata.dribbble} className="inline-block w-6 h-6 mr-4">
          <DribbbleIcon className="transition-all duration-200 ease-out hover:scale-125" />
        </a>
      </div>

      <div className="relative flex flex-col items-center justify-between w-full px-8 py-6 mt-16 font-medium border-t border-solid md:mt-24 border-light md:flex-row">
        <span className="text-center">
          &copy; 2023 CodeBucks. All rights reserved.
        </span>
        <Link href="/sitemap.xml" className="my-4 text-center underline md:my-0">
          sitemap.xml
        </Link>
        <div className="text-center">
          Made with &hearts; by{" "}
          <a  className="underline">
            Mohamed Elmougy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
