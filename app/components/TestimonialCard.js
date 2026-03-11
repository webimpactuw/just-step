import Image from 'next/image';

export default function TestimonialCard({ name, quote, image }) {
  return (
    <div className="font-[family-name:var(--font-alexandria)] bg-[#82442B] p-8 rounded-2xl shadow-xl flex flex-col h-full border border-white/5">
      <div className="flex items-center gap-4 mb-6">   
        <div className="relative w-20 h-20 rounded-full bg-[#FFD789] overflow-hidden shrink-0 shadow-inner">
          <Image 
            src={image} 
            alt={name}
            fill
            className="object-cover object-top scale-125" 
          />
        </div>
        <h3 className="text-white font-bold text-2xl leading-tight">
          {name}
        </h3>
      </div>
      <div className="flex-grow">
        <p className="text-white/90 text-lg leading-snug relative">
          <span className="text-[#FFCB77] text-3xl mr-1">“</span>
          {quote}
          <span className="text-[#FFCB77] text-3xl absolute -bottom-2 ml-1 inline-block">”</span>
        </p>
      </div>
    </div>
  );
}