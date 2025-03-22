"use client"

import React, { useEffect, useState } from "react"
import { TypeWriterProps } from "@/lib/interfaces"

const TypeWriter : React.FC<TypeWriterProps> = ({ text, onComplete, animate = false }) => {
    const [ displayText, setDisplayText ] = useState<string>("")
    const [ currentIndex, setCurrentIndex ] = useState<number>(0)

    useEffect(() => {
        if(currentIndex < text.length) {
            const timeout: number = setTimeout(() => {
                setDisplayText(prev => prev + text[currentIndex])
                setCurrentIndex(prev => prev + 1)
            }, 100)

            return () => clearInterval(timeout)
        } else {
            onComplete()
        }
    }, [currentIndex, text, onComplete])

    return <>
        <div className={`font-mono ${animate ? 'typing-animation' : ''}`}>
            <span className="text-orange-400">user@portfolio</span>
            <span className="text-white">:</span>
            <span className="text-blue-400">&nbsp;~</span>
            <span className="text-white">$&nbsp;</span>
            { displayText }
        </div>
    </>
}

export default TypeWriter