"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="font-[family-name:var(--font-alexandria)] w-full bg-[#C05812] text-[#FAFAFA]">
      <div className="flex min-h-[232px] w-full flex-row items-start justify-between gap-[10px] px-8 py-8">
        <div className="flex w-[278px] flex-col items-start gap-6">
          <Image
            src="/Logo.png"
            alt="JustStep Logo"
            width={100}
            height={100}
            className="h-[100px] w-[100px] object-contain"
          />

          <div className="flex flex-col items-start gap-[10px] text-[14px] font-normal leading-[100%]">
            <p>Tax ID: 83-2272271</p>
            <p>© 2026 JustStep Inc. All rights reserved.</p>
          </div>
        </div>

        <FooterColumn title="Events">
          <FooterLink href="/events#upcoming-events">Upcoming Events</FooterLink>
          <FooterLink href="/events#past-events">Past Events</FooterLink>
        </FooterColumn>

        <FooterColumn title="About">
          <FooterLink href="/about#board-members">Board Members</FooterLink>
          <FooterLink href="/about#our-story">Our Story</FooterLink>
          <FooterLink href="/about#vision">Vision</FooterLink>
        </FooterColumn>

        <FooterColumn title="Donate">
          <FooterLink href="/donate#options">Options</FooterLink>
          <FooterLink href="/donate#contributions">Contributions</FooterLink>
        </FooterColumn>

        <div className="flex w-[228px] flex-col items-start gap-5 text-[16px] font-normal leading-[100%]">
          <FooterHeading>Contact Us</FooterHeading>

          <ContactRow icon="/Phone.png" alt="Phone icon">
            <a href="tel:+14253948871" className="hover:underline">
              (425) 394-8871
            </a>
          </ContactRow>

          <ContactRow icon="/Email.png" alt="Email icon">
            <a href="mailto:juststepinc@gmail.com" className="hover:underline">
              juststepinc@gmail.com
            </a>
          </ContactRow>

          <ContactRow icon="/Location.png" alt="Location icon" alignTop>
            <a
              href="https://www.google.com/maps/search/?api=1&query=205+164th+Ave+NE+Bellevue+WA+98008"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col gap-[6px] hover:underline"
            >
              <span>205 164th Ave NE,</span>
              <span>Bellevue, WA 98008</span>
            </a>
          </ContactRow>
        </div>

        <div className="flex w-[110px] flex-col items-start gap-5 text-[16px] font-normal leading-[100%]">
          <FooterHeading>Follow Us</FooterHeading>

          <div className="flex flex-row items-center gap-[10px]">
            <a
              href="https://www.instagram.com/seattle_juststep?igsh=MTNneG00ZmdrM3F1NQ=="
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow JustStep on Instagram"
            >
              <Image
                src="/Instagram.png"
                alt="Instagram Logo"
                width={24}
                height={24}
                className="h-6 w-6 object-contain"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, children }) {
  return (
    <div className="flex w-[190px] flex-col items-start gap-5 text-[16px] font-normal leading-[100%]">
      <FooterHeading>{title}</FooterHeading>
      {children}
    </div>
  );
}

function FooterHeading({ children }) {
  return (
    <h4 className="inline-flex h-5 flex-row items-start gap-[10px] border-b-2 border-[#FFCB77] text-[16px] font-bold leading-[100%]">
      {children}
    </h4>
  );
}

function FooterLink({ href, children }) {
  function handleClick(event) {
    const url = new URL(href, window.location.origin);
    const isSamePage = window.location.pathname === url.pathname;
    const targetId = url.hash.replace("#", "");

    if (!isSamePage || !targetId) {
      return;
    }

    const target = document.getElementById(targetId);

    if (!target) {
      return;
    }

    event.preventDefault();

    window.history.pushState(null, "", `${url.pathname}${url.hash}`);

    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  return (
    <Link href={href} onClick={handleClick} className="h-5 w-[190px] hover:underline">
      {children}
    </Link>
  );
}

function ContactRow({ icon, alt, children, alignTop }) {
  return (
    <div
      className={`flex w-[228px] flex-row gap-5 ${
        alignTop ? "items-start" : "items-center"
      }`}
    >
      <Image
        src={icon}
        alt={alt}
        width={20}
        height={22}
        className="h-[21.65px] w-[19.97px] shrink-0 object-contain"
      />

      <div className="text-[16px] font-normal leading-[100%]">{children}</div>
    </div>
  );
}