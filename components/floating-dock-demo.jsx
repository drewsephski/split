import React from "react";
import { FloatingDock } from "./ui/floating-dock";
import Footer from "./ui/Footer";

export default function FloatingDockDemo() {
  const links = [
    {
      title: "Home",
      icon: (
        <svg className="h-full w-full text-neutral-700 dark:text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      href: "/",
    },
    {
      title: "Products",
      icon: (
        <svg className="h-full w-full text-neutral-700 dark:text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      href: "/products",
    },
    {
      title: "Templates",
      icon: (
        <svg className="h-full w-full text-neutral-700 dark:text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      href: "/templates",
    },
    {
      title: "Split",
      icon: (
        <svg className="h-full w-full text-neutral-700 dark:text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      href: "/",
    },
    {
      title: "Pricing",
      icon: (
        <svg className="h-full w-full text-neutral-700 dark:text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      href: "/pricing",
    },
  ];

  return (
    <>
      <div className="flex items-center justify-center h-[35rem] w-full mt-20">
        <FloatingDock
          mobileClassName="translate-y-20"
          items={links}
        />
      </div>
      <Footer />
    </>
  );
}