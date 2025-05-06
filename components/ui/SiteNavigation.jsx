import React, { useState } from "react";
import { FloatingDock } from "./floating-dock";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./navbar-menu.jsx";
import { cn } from "../../lib/utils";
import Link from "next/link";
import Brand from "./Brand";

export default function SiteNavigation() {
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
    <div className="relative">
      <ModernNavbar />
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
        <FloatingDock
          items={links}
          desktopClassName="shadow-lg"
          mobileClassName="shadow-lg"
        />
      </div>
      <div className="pb-20"></div> {/* Spacer to ensure content doesn't get hidden behind the floating dock */}
    </div>
  );
}

function ModernNavbar() {
  const [active, setActive] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="fixed top-6 inset-x-0 max-w-4xl mx-auto z-50">
      <div className="flex items-center justify-between px-4 py-2 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md rounded-full shadow-lg border border-gray-200 dark:border-gray-700 mx-4">
        <Link href="/" className="flex items-center">
          <Brand />
        </Link>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 rounded-md text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        {/* Desktop menu */}
        <div className="hidden md:block">
          <Menu setActive={setActive}>
            <MenuItem setActive={setActive} active={active} item="Features">
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="#features">All Features</HoveredLink>
                <HoveredLink href="#features">Traffic Growth</HoveredLink>
                <HoveredLink href="#features">SEO Optimization</HoveredLink>
                <HoveredLink href="#features">Analytics</HoveredLink>
              </div>
            </MenuItem>
            <MenuItem setActive={setActive} active={active} item="Templates">
              <div className="text-sm grid grid-cols-2 gap-10 p-4">
                <ProductItem
                  title="Landing Pages"
                  href="/templates"
                  src="https://assets.aceternity.com/demos/algochurn.webp"
                  description="Professionally designed landing pages for your business."
                />
                <ProductItem
                  title="E-commerce"
                  href="/templates"
                  src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
                  description="Complete e-commerce solutions with payment integration."
                />
                <ProductItem
                  title="Blogs"
                  href="/templates"
                  src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
                  description="Beautiful blog templates to showcase your content."
                />
                <ProductItem
                  title="Portfolios"
                  href="/templates"
                  src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
                  description="Showcase your work with our portfolio templates."
                />
              </div>
            </MenuItem>
            <MenuItem setActive={setActive} active={active} item="Pricing">
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/pricing">Basic</HoveredLink>
                <HoveredLink href="/pricing">Pro</HoveredLink>
                <HoveredLink href="/pricing">Enterprise</HoveredLink>
                <HoveredLink href="/pricing">Custom</HoveredLink>
              </div>
            </MenuItem>
            <MenuItem setActive={setActive} active={active} item="Resources">
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="#faqs">FAQs</HoveredLink>
                <HoveredLink href="/blog">Blog</HoveredLink>
                <HoveredLink href="/docs">Documentation</HoveredLink>
                <HoveredLink href="/contact">Contact</HoveredLink>
              </div>
            </MenuItem>
          </Menu>
        </div>

        {/* Desktop CTA buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Link href="/login" className="text-gray-800 dark:text-white hover:text-gray-900 dark:hover:text-gray-100 font-medium">
            Sign in
          </Link>
          <Link href="/pricing" className="px-4 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-500 transition-colors font-medium">
            Get Started
          </Link>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-4 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md rounded-lg shadow-lg p-4 mx-4 border border-gray-200 dark:border-gray-700">
          <div className="flex flex-col space-y-3">
            <Link href="#features" className="text-gray-800 dark:text-white hover:text-gray-900 dark:hover:text-gray-100 py-2 font-medium">
              Features
            </Link>
            <Link href="/templates" className="text-gray-800 dark:text-white hover:text-gray-900 dark:hover:text-gray-100 py-2 font-medium">
              Templates
            </Link>
            <Link href="/pricing" className="text-gray-800 dark:text-white hover:text-gray-900 dark:hover:text-gray-100 py-2 font-medium">
              Pricing
            </Link>
            <Link href="#faqs" className="text-gray-800 dark:text-white hover:text-gray-900 dark:hover:text-gray-100 py-2 font-medium">
              FAQs
            </Link>
            <div className="pt-2 border-t border-gray-200 dark:border-gray-700">
              <Link href="/login" className="block text-gray-800 dark:text-white hover:text-gray-900 dark:hover:text-gray-100 py-2 font-medium">
                Sign in
              </Link>
              <Link href="/pricing" className="block text-center mt-2 px-4 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-500 transition-colors font-medium">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
