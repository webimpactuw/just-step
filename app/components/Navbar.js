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
      {/* Height 98px, padding L/R 20px, space-between */}
      <div className="mx-auto flex h-[98px] w-full items-center justify-between px-[20px]">
        {/* Logo: fills navbar height */}
        <Link href="/" className="relative h-full w-[260px]">
          <Image
            src="/Logo-Text.png"
            alt="JustStep Logo"
            fill
            priority
            className="object-contain object-left"
            sizes="260px"
          />
        </Link>

        {/* Nav + Donate grouped so spacing is consistent */}
        <div className="flex items-center gap-[30px]">
          <nav aria-label="Primary">
            {/* equal spacing between tabs */}
            <ul className="flex items-center gap-[30px]">
              {links.map((item) => {
                const active = pathname === item.href;

                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={[
                        "group relative",
                        "font-[var(--font-alexandria)] font-bold text-[20px] leading-[1]",
                        "text-[color:var(--foreground)]",
                        "transition-colors duration-150",
                        "hover:text-[color:var(--color-tertiary)]",
                      ].join(" ")}
                    >
                      {item.label}

                      {/* Hover underline (closer to text) */}
                      <span
                        style={{ backgroundColor: "var(--color-tertiary)" }}
                        className="pointer-events-none absolute left-0 right-0 -bottom-[3px] mx-auto h-[3px] w-full 
                                   opacity-0 transition-opacity duration-150 group-hover:opacity-100"
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Donate button: height 60px, radius 20px, padding L/R 20px */}
          <Link
            href="/donate"
            className="font-[var(--font-alexandria)] inline-flex h-[60px] items-center justify-center rounded-[20px] px-[20px] text-[24px] font-black leading-[1] text-white shadow-sm transition-colors duration-150 hover:text-[color:var(--foreground)]"
            style={{ backgroundColor: "var(--color-secondary)" }}
            onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "var(--color-accent)";
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