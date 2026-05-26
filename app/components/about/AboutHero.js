import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="mx-auto max-w-5xl px-6 pt-10 pb-10 md:pt-14 md:pb-16">
      <h1
        className="mb-8 text-center text-[#28282B] md:mb-10"
        style={{ fontFamily: '"Alcazar", serif', fontSize: '40px', fontWeight: 400, lineHeight: '100%', letterSpacing: '0%' }}
      >
        Preserving Heritage, Inspiring Communities
      </h1>

      <div className="relative pb-3 pr-3">
        <div
          className="absolute rounded-[12px] border-[3px] border-[#3F6F7A]"
          style={{ top: "12px", left: "12px", right: "0", bottom: "0" }}
        />
        <div className="relative overflow-hidden rounded-[12px]">
          <Image
            src="/About-Image.png"
            alt="JUSTstep dancers performing outdoors"
            width={1024}
            height={500}
            className="w-full object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
