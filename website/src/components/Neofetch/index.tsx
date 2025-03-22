"use client"

import React from "react"

const Neofetch = () : React.JSX.Element => {
    const startDate = new Date(2022, 1, 17);
    const today = new Date();
    const diffYears = today.getFullYear() - startDate.getFullYear();
    const diffMonths = today.getMonth() - startDate.getMonth();
    const diffDays = today.getDate() - startDate.getDate();

    let uptime = diffYears;
    if (diffMonths < 0 || (diffMonths === 0 && diffDays < 0)) {
        uptime--;
    }

    return <>
        <div className="flex gap-8 mt-4">
            <pre className="hidden sm:block text-orange-500">
{`      .--.     
     |o_o |    
     |:_/ |    
    //   \\ \\   
   (|     | )  
   /'\\_   _/\`\\  
   \\___)=(___/  `}
            </pre>
            <div className="text-orange-400">
                <p><span className="text-orange-500 font-bold">OS:</span> CyberSec Portfolio v2.10</p>
                <p><span className="text-orange-500 font-bold">Host:</span> L30_IL_L30</p>
                <p><span className="text-orange-500 font-bold">Kernel:</span> Full-Stack Developer & Cybersecurity</p>
                <p><span className="text-orange-500 font-bold">Uptime:</span> {uptime}+ years in cybersecurity</p>
                <p><span className="text-orange-500 font-bold">Shell:</span> Web Security & Networking</p>
                <p><span className="text-orange-500 font-bold">DE:</span> System Administration & Development</p>
                <p><span className="text-orange-500 font-bold">WM:</span> Network Engineering & Ethical Hacking</p>
            </div>
        </div>
    </>
}

export default Neofetch