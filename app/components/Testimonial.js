import TestimonialCard from './TestimonialCard';

const testimonialData = [
    {
        id: 1,
        name: "Participant",
        quote: "At first I thought online dance would be weird, but it was actually super fun! The teachers made it easy to follow, and I learned a whole routine from my living room.",
        image: "/Profile-Pic-1.png"
    },
    {
        id: 2,
        name: "Parent",
        quote: "My daughter looked forward to every session. The instructors did a wonderful job keeping the kids engaged online, and we loved that the workshop supported a local women’s shelter.",
        image: "/Profile-Pic-2.png"
    },
    {
        id: 3,
        name: "Parent",
        quote: "This was such a positive experience during a difficult time. My child stayed active, connected with other kids virtually, and learned about giving back to the community through dance.",
        image: "/Profile-Pic-3.png"
    }
];

export default function Testimonial() {
    return (
        <section className="bg-white py-20 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonialData.map((item) => (
                        <TestimonialCard
                            key={item.id}
                            name={item.name}
                            quote={item.quote}
                            image={item.image}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}