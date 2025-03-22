"use client"

import React from "react"
import { ExternalLink } from "lucide-react"

const WhoAmI : React.FC<{}> = () => (
    <div className="mt-4 text-orange-400">
        <h2 className="text-xl font-bold mb-4 text-orange-500">Personal Information</h2>

        <div className="space-y-2">
            <p><span className="text-orange-500 font-bold">Name:</span> Leo Ventura</p>
            <p><span className="text-orange-500 font-bold">Role:</span> Full-Stack Developer & Cybersecurity</p>
            <p><span className="text-orange-500 font-bold">Location:</span> Bisceglie 76011, Italy</p>
            <p><span className="text-orange-500 font-bold">Skills:</span> Web Security, Malware Analysis, Network Security</p>

            <div className="mt-6">
                <h3 className="text-lg font-bold mb-2 text-orange-500">Connect with me</h3>
                <div className="space-y-2">
                    <a href="https://www.linkedin.com/in/leo-ventura-9505a4286/" target="_blank" rel="noopener noreferrer"
                       className="flex items-center gap-2 hover:text-orange-500 transition-colors">
                        <ExternalLink size={16} /> LinkedIn
                    </a>
                    <a href="https://ctftime.org/user/167775" target="_blank" rel="noopener noreferrer"
                       className="flex items-center gap-2 hover:text-orange-500 transition-colors">
                        <ExternalLink size={16} /> CTFtime
                    </a>
                    <a href="https://www.instagram.com/l3o_v3ntur4/" target="_blank" rel="noopener noreferrer"
                       className="flex items-center gap-2 hover:text-orange-500 transition-colors">
                        <ExternalLink size={16} /> Instagram
                    </a>
                </div>
            </div>
        </div>
    </div>
);

export default WhoAmI