export default function OurStory() {
  return (
    <section className="bg-white px-8 py-14">
      <div className="mx-auto max-w-2xl">
        <h2
          className="mb-8 text-center text-[#28282B]"
          style={{ fontFamily: '"Alcazar", serif', fontSize: "40px", fontWeight: 400, lineHeight: "100%" }}
        >
          Our Story
        </h2>

        <p className="mb-5 text-[#28282B] font-[var(--font-alexandria)]" style={{ fontSize: '20px', fontWeight: 400, lineHeight: '150%' }}>
          Founded in 2020, JustStep Inc. is a{" "}
          <span className="font-bold text-[#3F6F7A]">
            Washington-based 501(c)(3) nonprofit corporation dedicated to the
            preservation, education, and advancement of Indian classical dance
            forms, with a special emphasis on Kuchipudi.
          </span>{" "}
          Rooted in tradition yet responsive to contemporary communities,
          JustStep Inc. works to make classical dance accessible, meaningful,
          and relevant for today&apos;s learners.
        </p>

        <p className="mb-5 text-[#28282B] font-[var(--font-alexandria)]" style={{ fontSize: '20px', fontWeight: 400, lineHeight: '150%' }}>
          We emphasize rigorous technique, cultural literacy, and expressive
          storytelling, ensuring that students gain not only performance skills
          but also a deep understanding of the art form&apos;s historical,
          spiritual, and aesthetic foundations.
        </p>

        <p className="text-[#28282B] font-[var(--font-alexandria)]" style={{ fontSize: '20px', fontWeight: 400, lineHeight: '150%' }}>
          <span className="font-bold text-[#3F6F7A]">
            Through structured training programs, workshops, and performance
            opportunities, JustStep Inc. serves students of all ages, abilities,
            and backgrounds.
          </span>{" "}
          Our initiatives encourage confidence, discipline, and creative
          expression, while also strengthening cultural connection and community
          engagement. By bridging traditional knowledge with thoughtful
          mentorship and public outreach, JustStep Inc. seeks to cultivate the
          next generation of artists and audiences, ensuring the continued
          vitality of Kuchipudi for years to come.
        </p>
      </div>
    </section>
  );
}
