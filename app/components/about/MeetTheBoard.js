"use client";

import Image from "next/image";
import { useState } from "react";

const boardMembers = [
  {
    name: "Nithika Yechuri",
    role: "Founder",
    image: "/bio-img3.jpg",
    bio: "I've been training in Kuchipudi for 16 years, and I'm also a singer. Growing up around the arts wasn't just a hobby for me — it was a huge part of my childhood. Dance practices, music, and performances shaped who I am.\n\nAs a teenager, Kuchipudi helped me find my sense of identity. It gave me confidence, discipline, and a way to express myself when I didn't always have the words. It truly grounded me during some of the most formative years of my life.\n\nNow, as a young adult, I want to give that same experience to others. Just Step was created with that intention — an organization committed to bringing the beauty of the arts to the next generation and creating a space where young people can grow, connect, and find themselves through dance.",
  },
  {
    name: "Mounica Sonikar",
    role: "Director",
    image: "/bio-img2.jpg",
    bio: "I grew up surrounded by music and movement. My sister and cousins sang and danced, and our home was always filled with rhythm, rehearsals, and the joy of performance. The arts were never just an activity for me; they were how we connected to each other and to our culture.\n\nNow, as a new mom, I see that same spark in my own children. The way their faces light up around dance reminds me why this tradition is so powerful. I founded this Indian classical dance nonprofit to nurture that joy in the next generation — to create a space where children can connect to their roots, build confidence, and experience the beauty and discipline of classical dance in a supportive, uplifting community.",
  },
  {
    name: "Kiran K Sanjay",
    role: "Director",
    image: "/bio-img1.jpg",
    bio: "My mother's family was big into arts. I have grown up with my sisters learning Kuchipudi and folk dances and performing at various venues.\n\nI was a Chinmaya Mission coordinator, WPB and had the pleasure of organizing various events which included performances by the kids.\n\nI am a Suzuki mom and have helped my kids in their journey of music. I was also active in the Suzuki group, which was a NGO that helped them in various activities.\n\nI love to encourage kids to learn music and dance as it helps them handle stress and express their joy!",
  },
];

function BoardCard({ member }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col gap-3">
      <div className="relative pb-3 pr-3">
        <div
          className="absolute rounded-[10px] border-[3px] border-[#3F6F7A]"
          style={{ top: "12px", left: "12px", right: "0", bottom: "0" }}
        />
        <div className="relative overflow-hidden rounded-[10px] aspect-[3/4]">
          <Image
            src={member.image}
            alt={member.name}
            fill
            className="object-cover object-top"
          />
        </div>
      </div>

      <div>
        <p
          className="font-bold text-[#28282B]"
          style={{ fontFamily: '"Alcazar", serif', fontSize: "22px" }}
        >
          {member.name}
        </p>
        <p
          className="font-semibold text-[#3F6F7A] font-[var(--font-alexandria)]"
          style={{ fontSize: "16px" }}
        >
          {member.role}
        </p>
      </div>

      <div className="border-t border-[#28282B]/20">
        <button
          onClick={() => setOpen((o) => !o)}
          className="flex w-full items-center justify-between py-2 font-[var(--font-alexandria)] text-[16px] text-[#28282B] hover:text-[#3F6F7A] transition-colors"
        >
          <span>Bio</span>
          <span className="text-2xl leading-none">{open ? "×" : "+"}</span>
        </button>
        {open && (
          <div className="pb-3 flex flex-col gap-4">
            {member.bio.split("\n\n").map((para, i) => (
              <p key={i} className="text-[16px] leading-relaxed text-[#28282B] font-[var(--font-alexandria)]">
                {para}
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function MeetTheBoard() {
  return (
    <section className="bg-white px-8 py-14">
      <h2
        className="mb-10 text-center text-[#28282B]"
        style={{ fontFamily: '"Alcazar", serif', fontSize: "40px", fontWeight: 400, lineHeight: "100%" }}
      >
        Meet the Board
      </h2>
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-10 sm:grid-cols-3">
        {boardMembers.map((m) => (
          <BoardCard key={m.name} member={m} />
        ))}
      </div>
    </section>
  );
}
