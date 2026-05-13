"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/events", label: "Events" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-[#FAFAFA] shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
      <div className="mx-auto flex h-[78px] w-full max-w-[1440px] items-center justify-between px-5">
        <Link
          href="/"
          className="flex h-[78px] w-[431px] shrink-0 items-center px-5 py-[9px]"
        >
          <div className="relative h-[60px] w-full">
            <Image
              src="/Logo-Text.png"
              alt="JustStep Logo"
              fill
              priority
              className="object-contain object-left"
              sizes="431px"
            />
          </div>
        </Link>

        <div className="flex items-center gap-8">
          <nav aria-label="Primary">
            <ul className="flex items-center gap-8">
              {links.map((item) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);

                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`inline-flex h-[20px] items-center justify-center border-b-[3px] pb-[0px] font-[var(--font-alexandria)] text-[16px] font-bold leading-none transition-colors duration-150 ${
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
            className="inline-flex h-[48px] min-w-[118px] box-border items-center justify-center rounded-[20px] border-[3px] border-transparent bg-[var(--color-dark-blue)] px-5 font-[var(--font-alexandria)] text-[16px] font-extrabold leading-none text-white transition-colors duration-150 hover:border-[var(--color-dark-blue)] hover:bg-[var(--color-text-light)] hover:text-[var(--color-dark-blue)]"
          >
            DONATE
          </Link>
        </div>
      </div>
    </header>
  );
}