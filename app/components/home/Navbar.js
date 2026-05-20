"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/events", label: "Events" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      <header className="fixed left-0 top-0 z-50 w-full bg-[#FAFAFA] shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
        <div className="mx-auto flex h-[78px] w-full max-w-[1440px] items-center justify-between px-4 sm:px-5">
          <Link
            href="/"
            className="flex h-[78px] w-[220px] shrink-0 items-center py-[9px] sm:w-[300px] lg:w-[431px]"
            onClick={() => setIsOpen(false)}
          >
            <div className="relative h-[52px] w-full sm:h-[60px]">
              <Image
                src="/Logo-Text.png"
                alt="JustStep Logo"
                fill
                priority
                className="object-contain object-left"
                sizes="(max-width: 640px) 220px, (max-width: 1024px) 300px, 431px"
              />
            </div>
          </Link>

          <div className="hidden items-center gap-6 lg:flex xl:gap-8">
            <nav aria-label="Primary">
              <ul className="flex items-center gap-6 xl:gap-8">
                {links.map((item) => {
                  const isActive =
                    item.href === "/"
                      ? pathname === "/"
                      : pathname.startsWith(item.href);

                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className={`inline-flex h-[24px] items-center justify-center border-b-[3px] font-[var(--font-alexandria)] text-[16px] font-bold leading-none transition-colors duration-150 ${
                          isActive
                            ? "border-[#3F6F7A] text-[#3F6F7A]"
                            : "border-transparent text-[#28282B] hover:border-[#3F6F7A] hover:text-[#3F6F7A]"
                        }`}
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <Link
              href="/donate"
              className="inline-flex h-[48px] min-w-[118px] items-center justify-center rounded-[20px] border-[3px] border-transparent bg-[var(--color-dark-blue)] px-5 font-[var(--font-alexandria)] text-[18px] font-extrabold leading-none text-white transition-colors duration-150 hover:border-[var(--color-dark-blue)] hover:bg-[var(--color-text-light)] hover:text-[var(--color-dark-blue)]"
            >
              DONATE
            </Link>
          </div>

          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((current) => !current)}
            className="flex h-11 w-11 items-center justify-center rounded-[12px] border-[2px] border-[#3F6F7A] text-[#3F6F7A] lg:hidden"
          >
            <span className="relative h-[18px] w-[22px]">
              <span
                className={`absolute left-0 h-[3px] w-full rounded-full bg-current transition-all duration-200 ${
                  isOpen ? "top-[7px] rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 top-[7px] h-[3px] w-full rounded-full bg-current transition-opacity duration-200 ${
                  isOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 h-[3px] w-full rounded-full bg-current transition-all duration-200 ${
                  isOpen ? "top-[7px] -rotate-45" : "top-[14px]"
                }`}
              />
            </span>
          </button>
        </div>

        <div
          className={`overflow-hidden border-t border-[#3F6F7A]/20 bg-[#FAFAFA] transition-[max-height] duration-300 lg:hidden ${
            isOpen ? "max-h-[420px]" : "max-h-0"
          }`}
        >
          <nav aria-label="Mobile primary" className="px-4 py-4">
            <ul className="flex flex-col gap-4">
              {links.map((item) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);

                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`inline-flex w-full items-center border-b-[3px] py-2 font-[var(--font-alexandria)] text-[18px] font-bold transition-colors duration-150 ${
                        isActive
                          ? "border-[#3F6F7A] text-[#3F6F7A]"
                          : "border-transparent text-[#28282B] hover:border-[#3F6F7A] hover:text-[#3F6F7A]"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <Link
              href="/donate"
              onClick={() => setIsOpen(false)}
              className="mt-5 inline-flex h-[48px] w-full items-center justify-center rounded-[20px] border-[3px] border-transparent bg-[var(--color-dark-blue)] px-5 font-[var(--font-alexandria)] text-[18px] font-extrabold leading-none text-white transition-colors duration-150 hover:border-[var(--color-dark-blue)] hover:bg-[var(--color-text-light)] hover:text-[var(--color-dark-blue)]"
            >
              DONATE
            </Link>
          </nav>
        </div>
      </header>

      <div className="h-[78px]" aria-hidden="true" />
    </>
  );
}