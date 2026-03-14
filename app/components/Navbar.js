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
    <header className="w-full bg-[color:var(--background)] shadow-[0_2px_0_rgba(0,0,0,0.10)]">
      <div className="mx-auto flex w-full flex-wrap items-center justify-between gap-4 px-4 py-4 md:flex-nowrap md:px-5">
        <Link href="/" className="relative h-[44px] w-[150px] shrink-0 md:h-[60px] md:w-[260px]">
          <Image
            src="/Logo-Text.png"
            alt="JustStep Logo"
            fill
            priority
            className="object-contain object-left"
            sizes="(max-width: 768px) 150px, 260px"
          />
        </Link>

        <div className="flex flex-wrap items-center justify-end gap-4 md:gap-8">
          <nav aria-label="Primary">
            <ul className="flex flex-wrap items-center gap-4 md:gap-8">
              {links.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`group relative font-[var(--font-alexandria)] text-[16px] font-bold leading-none transition-colors duration-150 md:text-[20px] ${
                      item.label === "Home"
                        ? "text-[color:var(--color-tertiary)]"
                        : "text-[color:var(--foreground)] hover:text-[color:var(--color-tertiary)]"
                    }`}
                  >
                    {item.label}
                    <span
                      style={{ backgroundColor: "var(--color-tertiary)" }}
                      className={`pointer-events-none absolute left-0 right-0 -bottom-[3px] mx-auto h-[3px] w-full transition-opacity duration-150 ${
                        item.label === "Home" ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                      }`}
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <Link
            href="/donate"
            className="inline-flex h-[44px] items-center justify-center rounded-[16px] border-[3px] border-[color:var(--color-secondary)] px-4 font-[var(--font-alexandria)] text-[18px] font-black leading-none text-white shadow-sm transition-colors duration-150 hover:text-[color:var(--color-secondary)] md:h-[60px] md:rounded-[20px] md:px-5 md:text-[24px]"
            style={{ backgroundColor: "var(--color-secondary)" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "var(--background)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "var(--color-secondary)";
            }}
          >
            DONATE
          </Link>
        </div>
      </div>
    </header>
  );
}