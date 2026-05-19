import Image from "next/image";

const visionItems = [
  {
    icon: "/Access.png",
    title: "Accessibility",
    description: "Create scholarships and accessibility programs to reduce financial barriers to participation",
  },
  {
    icon: "/Partnership.png",
    title: "Partnerships",
    description: "Build partnerships with schools, local service groups, and cultural organizations to extend our impact",
  },
  {
    icon: "/Support.png",
    title: "Support",
    description: "Provide resources, services, and assistance to individuals and families facing hardship",
  },
  {
    icon: "/Outreach.png",
    title: "Outreach",
    description: "Expand arts education and cultural enrichment programs for diverse communities",
  },
];

export default function Vision() {
  return (
    <section
      className="relative overflow-hidden px-8 py-14"
      style={{
        background: "linear-gradient(90deg, #c7641f 0%, #9f4b18 38%, #7a2d0b 100%)",
      }}
    >
      <div className="pointer-events-none absolute bottom-0 right-0">
        <Image src="/Flower.png" alt="" width={360} height={390} />
      </div>

      <div className="relative mx-auto max-w-3xl">
        <h2
          className="mb-12 text-center text-white"
          style={{ fontFamily: '"Alcazar", serif', fontSize: "40px", fontWeight: 400, lineHeight: "100%" }}
        >
          Vision
        </h2>

        <div className="grid grid-cols-4 gap-x-10">
          {visionItems.map((item) => (
            <div key={item.title} className="flex flex-col items-center text-center gap-3">
              <div className="flex items-center justify-center h-[72px]">
                <Image src={item.icon} alt={item.title} width={68} height={68} />
              </div>
              <p
                className="font-bold text-white font-[var(--font-alexandria)]"
                style={{ fontSize: "22px" }}
              >
                {item.title}
              </p>
              <p className="leading-relaxed text-white/90 font-[var(--font-alexandria)]" style={{ fontSize: "16px" }}>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
