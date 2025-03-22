"use client"

import React, { useRef, useState } from "react"

const Ssh : React.FC<{}> = () => {
    const [ email, setEmail ] = useState<string>("")
    const [ message, setMessage ] = useState<string>("")
    const [ submitted, setSubmitted ] = useState<boolean>(false)
    const [ error, setError ] = useState<string>("")
    const [ remaining, setReamaning ] = useState<number>(2)
    const [ resetAt, setResetAt ] = useState<string | null>(null)
    const formRef = useRef<HTMLFormElement>(null)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setError('')



        setSubmitted(true)
    }

    return <>
        <div className="mt-4 space-y-4">
            <div className={`${error ? 'text-red-400' : 'text-orange-400'}`}>
                { error ? (
                    <p>{error}</p>
                ) : (
                    remaining === 0 ? (
                        <p>Daily limit reached. Try again {resetAt ? new Date(resetAt).toLocaleString() : 'tomorrow'}.</p>
                    ) : (
                        <p>{remaining} message{remaining === 1 ? '' : 's'} remaining today.</p>
                    )
                )}
            </div>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <div className="text-orange-400 mb-2">email:</div>
                    <input
                        type="email"
                        name="user_email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-[#2a2a2a] border border-orange-500/20 rounded px-3 py-2 text-orange-400 focus:outline-none focus:border-orange-500/40"
                        placeholder="Enter your email"
                        required
                    />
                </div>

                <div>
                    <div className="text-orange-400 mb-2">execute:</div>
                    <textarea
                        name="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full h-32 bg-[#2a2a2a] border border-orange-500/20 rounded px-3 py-2 text-orange-400 focus:outline-none focus:border-orange-500/40"
                        placeholder="Enter your message"
                        required
                        minLength={10}
                        maxLength={10000}
                    />
                </div>

                <button
                    type="submit"
                    className="bg-orange-500/10 text-orange-400 px-4 py-2 rounded hover:bg-orange-500/20 transition-colors"
                >
                    Send Message
                </button>
            </form>
        </div>
    </>
}

export default Ssh