import Image from 'next/image'

export default function Footer() {
    return (
        <footer className="font-[family-name:var(--font-alexandria)] w-full bg-[#AA4C11] text-white">
            <div className="flex flex-row items-start justify-between py-5 px-[30px] gap-[10px] min-h-[200px]">
                <div className="flex flex-col items-start gap-3">
                    <Image
                        src="/Logo.png"
                        alt="JustStep Logo"
                        width={100}
                        height={40}
                        className="mb-4"
                    />
                    <p> Tax ID: 83-2272271 </p>
                    <p> © 2026 JustStep Inc. All rights reserved.</p>
                </div>
                <div className="flex flex-col items-start gap-3">
                    <h4 className="text-base font-bold border-b-2 border-[#FFC700] pb-0 inline-block"> Events </h4>
                    <a> Upcoming Events </a>
                    <a> Past Events </a>
                </div>
                <div className="flex flex-col items-start gap-3">
                    <h4 className="text-base font-bold border-b-2 border-[#FFC700] pb-0 inline-block"> About </h4>
                    <a> Our Story </a>
                    <a> Board Members </a>
                </div>
                <div className="flex flex-col items-start gap-3">
                    <h4 className="text-base font-bold border-b-2 border-[#FFC700] pb-0 inline-block"> Donate </h4>
                    <a> Impacts </a>
                    <a> Instructions </a>
                </div>
                <div className="flex flex-col items-start gap-3">
                    <h4 className="text-base font-bold border-b-2 border-[#FFC700] pb-0 inline-block"> Contact Us </h4>
                    <p> (425) 394-8871 </p>
                    <p> juststepinc@gmail.com </p>
                    <div> 
                        <p> 205 164th Ave NE, </p>
                        <p> Bellevue, WA 98008 </p>
                    </div>        
                </div>
                <div className="flex flex-col items-start gap-3">
                    <h4 className="text-base font-bold pb-0"> Follow Us </h4>
                    <a href="https://www.instagram.com/seattle_juststep?igsh=MTNneG00ZmdrM3F1NQ==" className="mx-auto">
                        <Image
                            src="/Instagram.png"
                            alt="Instagram Logo"
                            width={24}
                            height={24}
                        />
                    </a>
                </div>  
            </div>
        </footer>
    );
}