"use client";

import Image from "next/image";
import { useState } from "react";

const contributions = [
  {
    stat: "$5000",
    title: "funds raised for\nlocal organizations",
    description:
      "Conducted Dance Against Covid–a series of online dance workshops where we collected funds along with food donations from participants. We donated about $5000 total between three organizations. Issaquah Food and Clothing Bank, Northwest Share Food Truck, and Bellevue Life Spring.",
    image: "/Contribution1.JPG",
    caption: "Dance Workshop Fundraiser",
    imageLeft: true,
  },
  {
    stat: "7000+",
    title: "meals provided to children",
    description:
      "Collaborated with IFB to serve more than 7000 meals to students in Issaquah school district in the first week of school closures during the pandemic. IFB is continuously striving to make sure no child is left without meals.",
    image: "/Contribution2.jpg",
    caption: "Issaquah Food Bank",
    imageLeft: false,
  },
  {
    stat: "200-400",
    title: "meals served a day\nto people in need",
    description:
      "Partnered with a volunteer-run food truck that serves freshly made, nutrition-rich vegetarian food to unhoused people and people in need in downtown Seattle.",
    image: "/Contribution3.jpg",
    caption: "Northwest Share Food Truck",
    imageLeft: true,
  },
  {
    stat: "1000-3500",
    title: "students in poverty\nsupported",
    description:
      "Assisted an organization that works with Bellevue school district, serving students identified in poverty. We focused on providing feminine necessities as part of our collaboration with them as it touches us personally.",
    image: "/Contribution4.jpg",
    caption: "Bellevue Life Spring",
    imageLeft: false,
  },
  {
    stat: "500+",
    title: "feminine products donated",
    description:
      "Organized a feminine product drive within the community. We collected over 500 feminine products that were donated to various women's shelters in Seattle.",
    image: "/Contribution5.JPG",
    caption: "Women's Shelter Drive",
    imageLeft: true,
  },
];

function ContributionRow({ item }) {
  const [open, setOpen] = useState(false);

  const imageBlock = (
    <div className="flex flex-col gap-2 min-w-0">
      <div className="relative pb-3 pr-3">
        <div
          className="absolute rounded-[10px] border-[3px] border-[#FFCB77]"
          style={{ top: "12px", left: "12px", right: "0", bottom: "0" }}
        />
        <div className="relative overflow-hidden rounded-[10px]">
          <Image
            src={item.image}
            alt={item.caption}
            width={600}
            height={400}
            className="w-full object-cover"
          />
        </div>
      </div>
      <p className="text-sm text-white font-[var(--font-alexandria)] pl-1">{item.caption}</p>
    </div>
  );

  const textBlock = (
    <div className="relative flex flex-col justify-center gap-4 min-w-0">
      <p
        className="text-[#FFCB77] leading-none"
        style={{ fontFamily: '"Alcazar", serif', fontSize: "52px", fontWeight: 400 }}
      >
        {item.stat}
      </p>
      <p
        className="text-white font-bold font-[var(--font-alexandria)] whitespace-pre-line leading-tight"
        style={{ fontSize: "28px" }}
      >
        {item.title}
      </p>
      <p className="text-white font-[var(--font-alexandria)] text-base leading-relaxed">
        {item.description}
      </p>
    </div>
  );

  return (
    <>
      {/* Mobile */}
      <div className="md:hidden flex flex-col gap-3">
        {imageBlock}

        <p
          className="text-[#FFCB77] leading-none"
          style={{ fontFamily: '"Alcazar", serif', fontSize: "40px", fontWeight: 400 }}
        >
          {item.stat}
        </p>
        <p
          className="text-white font-bold font-[var(--font-alexandria)] leading-tight"
          style={{ fontSize: "22px" }}
        >
          {item.title.replace(/\n/g, " ")}
        </p>

        <div className="border-t border-white/20">
          <button
            onClick={() => setOpen((o) => !o)}
            className="flex w-full items-center justify-between py-2 font-[var(--font-alexandria)] text-[16px] text-white transition-colors"
          >
            <span>Read More</span>
            <span className="text-2xl leading-none">{open ? "×" : "+"}</span>
          </button>
          {open && (
            <p className="pb-3 text-[15px] leading-relaxed text-white font-[var(--font-alexandria)]">
              {item.description}
            </p>
          )}
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden md:block p-6">
        <div className="grid grid-cols-2 gap-10 items-center">
          {item.imageLeft ? (
            <>
              {imageBlock}
              {textBlock}
            </>
          ) : (
            <>
              {textBlock}
              {imageBlock}
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default function OurContributions() {
  return (
    <section
      id="contributions"
      className="scroll-mt-[90px] relative overflow-hidden px-6 py-10 md:px-8 md:py-14"
      style={{
        background:
          "linear-gradient(120deg, var(--color-primary) 0%, var(--color-primary-2) 70%, var(--color-primary-2) 30%)",
      }}
    >
      <div className="pointer-events-none absolute bottom-0 right-0">
        <Image src="/Flower.png" alt="" width={400} height={433} />
      </div>

      <div className="relative">
        <h2
          className="mb-8 text-center text-white md:mb-10"
          style={{ fontFamily: '"Alcazar", serif', fontSize: "40px", fontWeight: 400, lineHeight: "100%" }}
        >
          Our Contributions
        </h2>

        <div className="flex flex-col gap-6 md:gap-4">
          {contributions.map((item, i) => (
            <ContributionRow key={i} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
