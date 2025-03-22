"use client"

import React, { useEffect, useState } from "react"
import { useInView } from 'react-intersection-observer'
import Loading from "@/components/Loading"
import TypeWriter from "@/components/TypeWriter"
import Neofetch from "@/components/Neofetch"
import Categories from "@/components/Categories"
import Ssh from "@/components/Ssh"
import WhoAmI from "@/Whoami"

const Terminal : React.FC<{}> = () => {
    const [ isLoading, setIsLoading ] = useState<boolean>(true)
    const [ isTypingNeofetch, setIsTypingNeofetch ] = useState<boolean>(false)
    const [ isTypingWhoami, setIsTypingWhoami ] = useState<boolean>(false)
    const [ isTypingLs, setIsTypingLs ] = useState<boolean>(false)
    const [ isTypingSsh, setIsTypingSsh ] = useState<boolean>(false)
    const [showNeofetch, setShowNeofetch] = useState<boolean>(false)
    const [ showWhoami, setShowWhoami ] = useState<boolean>(false)
    const [ showLs, setShowLs ] = useState<boolean>(false)
    const [ showCategories, setShowCategories ] = useState<boolean>(false)
    const [ showSsh, setShowSsh ] = useState<boolean>(false)

    const [ neofetchRef, neofetchInView ] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    })

    const [ whoamiRef, whoamiInView ] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    })

    const [ categoriesRef, categoriesInView ] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    })

    const [ sshRef, sshInView ] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    })

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 2000)
    }, [])

    useEffect(() => {
        if (neofetchInView && !isTypingNeofetch && !isLoading) {
            setIsTypingNeofetch(true)
        }
    }, [neofetchInView, isTypingNeofetch, isLoading])

    useEffect(() => {
        if (whoamiInView && !isTypingWhoami && showNeofetch) {
            setIsTypingWhoami(true)
        }
    }, [whoamiInView, isTypingWhoami, showNeofetch])

    useEffect(() => {
        if(categoriesInView && !isTypingLs && showWhoami) {
            setIsTypingLs(true)
        }
    }, [categoriesInView, isTypingLs, showWhoami])

    useEffect(() => {
        if(sshInView && !isTypingSsh && showCategories) {
            setIsTypingSsh(true)
        }
    }, [sshInView, isTypingSsh, showCategories])

    const handleNeofetchComplete = () => {
        setTimeout(() => {
            setShowNeofetch(true)
        }, 500)
    }

    const handleWhoamiComplete = () => {
        setTimeout(() => {
            setShowWhoami(true)
        }, 500)
    }

    const handleLsComplete = () => {
        setTimeout(() => {
            setShowLs(true)
        }, 500)
    }

    const handleCategoriesComplete = () => {
        setTimeout(() => {
            setShowCategories(true)
        }, 500)
    }

    const handleSshComplete = () => {
        setTimeout(() => {
            setShowSsh(true)
        }, 500)
    }

    return <>
        <div className="terminal-window max-w-4xl w-full mx-auto">
            <div className="terminal-header">
                <div className="window-button bg-red-500"></div>
                <div className="window-button bg-yellow-500"></div>
                <div className="window-button bg-green-500"></div>
                <div className="flex-1 text-center text-sm text-orange-400">portfolio.sh</div>
            </div>
            <div className="terminal-content">
                <div className="p-4 md:p-6 space-y-18">
                    {isLoading ? (
                        <Loading />
                    ) : (
                        <>
                            <p>
                                Linux portfolioOS 2.10.0-25-amd64 #1 SMP Custom Build x86_64
                                <br/><br/>
                                The programs included in this portfolio are open-source;
                                you can find the source code in the GitHub repository.
                                <br/>
                                This portfolio comes with ABSOLUTELY NO WARRANTY,
                                but you are free to explore!
                                <br/><br/>
                                Last login: Sat Mar 15 14:45:12 2025 from 192.168.*.*
                            </p>
                            <div ref={neofetchRef} className="min-h-[200px]">
                                {isTypingNeofetch && (
                                    <>
                                        <TypeWriter
                                            text=" neofetch"
                                            onComplete={handleNeofetchComplete}
                                        />
                                        {showNeofetch && <Neofetch/>}
                                    </>
                                )}
                            </div>

                            <div ref={whoamiRef} className="min-h-[200px]">
                                {isTypingWhoami && (
                                    <>
                                        <TypeWriter
                                            text=" whoami --verbose"
                                            onComplete={handleWhoamiComplete}
                                        />
                                        {showWhoami && <WhoAmI />}
                                    </>
                                )}
                            </div>

                            <div ref={categoriesRef} className="min-h-[200px]">
                                { isTypingLs && (
                                    <>
                                        <TypeWriter
                                            text="ls"
                                            onComplete={handleLsComplete}
                                        />
                                        { showLs && <Categories onComplete={handleCategoriesComplete} /> }
                                    </>
                                ) }
                            </div>

                            <div ref={sshRef} className="min-h-[200px]">
                                { isTypingSsh && (
                                    <>
                                        <TypeWriter
                                            text="ssh leoventura06@outlook.it"
                                            onComplete={handleSshComplete}
                                        />
                                        { showSsh && <Ssh /> }
                                    </>
                                ) }
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    </>
}

export default Terminal