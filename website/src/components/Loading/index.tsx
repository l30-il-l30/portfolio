"use client"

import React, { useEffect, useState } from "react"

const Loading = () : React.JSX.Element => {
    const [ dots, setDots ] = useState<string>('')

    useEffect(() => {
        const interval = setInterval(() => {
            setDots(prev => prev.length >= 3 ? '' : prev + '.')
        }, 500)
        return () => clearInterval(interval)
    }, [])

    return <>
        <div className="text-orange-500">
            loading system{dots}
        </div>
    </>
}

export default Loading