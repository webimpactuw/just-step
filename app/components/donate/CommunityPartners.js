import Image from "next/image";

const partners = [
  {
    name: "Issaquah Food & Clothing Bank",
    logo: "/Issaquah-Food-Clothing.png",
    width: 260,
    height: 80,
  },
  {
    name: "NorthWest Share",
    logo: "/NorthWest-Share.png",
    width: 220,
    height: 80,
  },
  {
    name: "Bellevue LifeSpring",
    logo: "/Bellevue-Life-Spring.png",
    width: 220,
    height: 80,
  },
];

export default function CommunityPartners() {
  return (
    <section className="bg-white px-6 py-12 md:py-16">
      <h2
        className="mb-10 text-center text-[#28282B]"
        style={{ fontFamily: '"Alcazar", serif', fontSize: "40px", fontWeight: 400, lineHeight: "100%" }}
      >
        Community Partners
      </h2>

      <div className="mx-auto flex max-w-4xl flex-col items-center gap-8 md:flex-row md:justify-center md:gap-16">
        {partners.map((partner) => (
          <div key={partner.name} className="flex items-center justify-center">
            <Image
              src={partner.logo}
              alt={partner.name}
              width={partner.width}
              height={partner.height}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
