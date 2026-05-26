"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="font-[family-name:var(--font-alexandria)] w-full bg-[#C05812] text-[#FAFAFA]">

      <div className="flex flex-col gap-6 px-6 py-6 lg:hidden">
        <div className="flex items-start justify-between">
          <Image src="/Logo.png" alt="JustStep Logo" width={72} height={72} className="object-contain" />
          <div className="flex flex-col items-start gap-3">
            <p className="text-[16px] font-bold">Follow Us</p>
            <div className="flex items-center gap-4">
              <a href="#" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="https://www.instagram.com/seattle_juststep?igsh=MTNneG00ZmdrM3F1NQ==" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                <Image src="/Instagram.png" alt="Instagram" width={24} height={24} className="object-contain" />
              </a>
              <a href="#" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.96-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#C05812"/></svg>
              </a>
            </div>
          </div>
        </div>

        <div className="flex items-start justify-between gap-4">
          <div className="flex flex-col gap-3 text-[16px] font-bold">
            <Link href="/events" className="underline underline-offset-2">Events</Link>
            <Link href="/about" className="underline underline-offset-2">About</Link>
            <Link href="/donate" className="underline underline-offset-2">Donate</Link>
          </div>
          <div className="flex flex-col gap-3 text-[14px]">
            <p className="text-[16px] font-bold">Contact Us</p>
            <ContactRow icon="/Phone.png" alt="Phone">
              <a href="tel:+14253948871" className="hover:underline">(425) 394-8871</a>
            </ContactRow>
            <ContactRow icon="/Email.png" alt="Email">
              <a href="mailto:juststepinc@gmail.com" className="hover:underline">juststepinc@gmail.com</a>
            </ContactRow>
            <ContactRow icon="/Location.png" alt="Location" alignTop>
              <a href="https://www.google.com/maps/search/?api=1&query=205+164th+Ave+NE+Bellevue+WA+98008" target="_blank" rel="noopener noreferrer" className="hover:underline">
                <span>205 164th Ave NE,</span><br /><span>Bellevue, WA 98008</span>
              </a>
            </ContactRow>
          </div>
        </div>

        <div className="flex flex-col gap-1 text-[13px]">
          <p>Tax ID: 83-2272271</p>
          <p>© 2026 JustStep Inc. All rights reserved.</p>
        </div>
      </div>

      <div className="hidden min-h-[232px] w-full flex-row items-start justify-between gap-[10px] px-8 py-8 lg:flex">
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