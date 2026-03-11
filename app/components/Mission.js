export default function Mission() {
  return (
<div className="h-[470px] px-12 py-2.5 bg-[#FAFAFA] flex flex-col justify-center items-center gap-5">
    <div className="max-w-screen-lg w-full text-center mx-auto"><span className="text-zinc-800 text-3xl font-normal font-['Alexandria'] tracking-wide">We are a 501(c)(3) </span><span className="text-orange-900 text-3xl font-normal font-['Alexandria'] tracking-wide">nonprofit</span><span className="text-zinc-800 text-3xl font-normal font-['Alexandria'] tracking-wide"> </span><span className="text-orange-900 text-3xl font-normal font-['Alexandria'] tracking-wide">organization </span><span className="text-zinc-800 text-3xl font-normal font-['Alexandria'] tracking-wide">who preserves and promotes the rich</span><span className="text-orange-900 text-3xl font-normal font-['Alexandria'] tracking-wide"> heritage</span><span className="text-zinc-800 text-3xl font-normal font-['Alexandria'] tracking-wide"> of </span><span className="text-orange-900 text-3xl font-normal font-['Alexandria'] tracking-wide">Indian dance</span><span className="text-zinc-800 text-3xl font-normal font-['Alexandria'] tracking-wide"> through education, performance, and community engagement.</span></div>
    <div className="flex justify-center items-start gap-56">
        <div className="p-2.5 rounded-[20px] inline-flex flex-col justify-center items-center gap-2.5">
            <div className="w-20 h-20 relative">
                <div className="w-16 h-14 left-[6.67px] top-[8.33px] absolute bg-amber-800" />
            </div>
            <div className="text-center text-zinc-800 text-3xl font-bold font-['Alexandria']">Community</div>
        </div>
        <div className="p-2.5 rounded-[20px] inline-flex flex-col justify-center items-center gap-2.5">
            <div className="w-20 h-20 relative">
                <div className="w-16 h-14 left-[6.67px] top-[13.33px] absolute bg-amber-800" />
                <div className="w-9 h-9 left-[40.08px] top-[40px] absolute bg-yellow-800" />
            </div>
            <div className="text-center text-zinc-800 text-3xl font-bold font-['Alexandria']">Tradition</div>
        </div>
        <div className="p-2.5 rounded-[20px] inline-flex flex-col justify-center items-center gap-2.5">
            <div className="w-20 h-20 relative">
                <div className="w-16 h-14 left-[10px] top-[10px] absolute bg-amber-800" />
            </div>
            <div className="text-center text-zinc-800 text-3xl font-bold font-['Alexandria']">Inclusion</div>
        </div>
    </div>
    <div data-state="Default" className="h-16 px-5 bg-amber-700 rounded-[20px] inline-flex justify-center items-center gap-2.5 overflow-hidden">
        <div className="text-center justify-center text-neutral-50 text-2xl font-bold font-['Alexandria']">LEARN MORE</div>
    </div>
</div>
  );
}