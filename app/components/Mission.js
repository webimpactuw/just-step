import Link from 'next/link';
import Image from 'next/image';

export default function Mission() {
  return (
<div className="h-[470px] px-12 pt-12 pb-2.5 bg-white flex flex-col justify-center items-center gap-5">
    <div className="max-w-screen-lg w-full text-center mx-auto mb-4"><span className="text-zinc-800 text-3xl font-normal font-['Alexandria'] tracking-wide">We are a 501(c)(3) </span><span className="text-orange-900 text-3xl font-normal font-['Alexandria'] tracking-wide">nonprofit</span><span className="text-zinc-800 text-3xl font-normal font-['Alexandria'] tracking-wide"> </span><span className="text-orange-900 text-3xl font-normal font-['Alexandria'] tracking-wide">organization </span><span className="text-zinc-800 text-3xl font-normal font-['Alexandria'] tracking-wide">who preserves and promotes the rich</span><span className="text-orange-900 text-3xl font-normal font-['Alexandria'] tracking-wide"> heritage</span><span className="text-zinc-800 text-3xl font-normal font-['Alexandria'] tracking-wide"> of </span><span className="text-orange-900 text-3xl font-normal font-['Alexandria'] tracking-wide">Indian dance</span><span className="text-zinc-800 text-3xl font-normal font-['Alexandria'] tracking-wide"> through education, performance, and community engagement.</span></div>
    <div className="flex justify-center items-start gap-56">
        <div className="p-2.5 rounded-[20px] flex flex-col justify-center items-center gap-2.5">
            <Image src="/icons/community.svg" alt="Community" width={80} height={80} />
            <div className="text-center text-zinc-800 text-3xl font-bold font-['Alexandria']">Community</div>
        </div>
        <div className="p-2.5 rounded-[20px] flex flex-col justify-center items-center gap-2.5">
            <Image src="/icons/tradition.svg" alt="Tradition" width={80} height={80} />
            <div className="text-center text-zinc-800 text-3xl font-bold font-['Alexandria']">Tradition</div>
            <Link href="/about">
              <div data-state="Default" className="mt-8 h-16 px-5 bg-amber-700 rounded-[20px] flex justify-center items-center gap-2.5 overflow-hidden">
                <div className="text-center justify-center text-neutral-50 text-2xl font-bold font-['Alexandria']">LEARN MORE</div>
              </div>
            </Link>
        </div>
        <div className="p-2.5 rounded-[20px] flex flex-col justify-center items-center gap-2.5">
            <Image src="/icons/inclusion.svg" alt="Inclusion" width={80} height={80} />
            <div className="text-center text-zinc-800 text-3xl font-bold font-['Alexandria']">Inclusion</div>
        </div>
    </div>
</div>
  );
}