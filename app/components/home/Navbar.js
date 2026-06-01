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
              className="inline-flex h-[48px] min-w-[118px] items-center justify-center rounded-[20px] bg-[#3F6F7A] px-5 font-[var(--font-alexandria)] text-[18px] font-extrabold leading-none text-white transition-colors duration-150 hover:bg-[#325a63]"
            >
              DONATE
            </Link>
          </div>

          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((o) => !o)}
            className="flex h-11 w-11 items-center justify-center text-[#28282B] lg:hidden"
          >
            {isOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <line x1="3" y1="6" x2="21" y2="6"/>
                <line x1="3" y1="12" x2="21" y2="12"/>
                <line x1="3" y1="18" x2="21" y2="18"/>
              </svg>
            )}
          </button>
        </div>
      </header>

      <div className="h-[78px]" aria-hidden="true" />

      {isOpen && (
        <div className="fixed inset-0 z-40 flex flex-col bg-[#FAFAFA] lg:hidden">
          <div className="flex items-center justify-between px-4 py-4 shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
            <Link href="/" onClick={() => setIsOpen(false)} className="relative h-[52px] w-[180px]">
              <Image
                src="/Logo-Text.png"
                alt="JustStep Logo"
                fill
                className="object-contain object-left"
                sizes="180px"
              />
            </Link>
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
              className="flex h-11 w-11 items-center justify-center text-[#28282B]"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
          </div>

          <nav className="flex flex-1 flex-col items-center justify-center gap-8" aria-label="Mobile primary">
            {links.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`border-b-[3px] pb-1 font-[var(--font-alexandria)] text-[24px] font-bold transition-colors duration-150 ${
                    isActive
                      ? "border-[#3F6F7A] text-[#3F6F7A]"
                      : "border-transparent text-[#28282B] hover:text-[#3F6F7A]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}

            <Link
              href="/donate"
              onClick={() => setIsOpen(false)}
              className="mt-4 inline-flex h-[56px] w-[200px] items-center justify-center rounded-[20px] bg-[#3F6F7A] font-[var(--font-alexandria)] text-[20px] font-extrabold text-white transition-colors hover:bg-[#325a63]"
            >
              DONATE
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}
