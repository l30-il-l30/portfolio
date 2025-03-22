import { TerminalIcon } from "lucide-react"
import Terminal from "@/components/Terminal"

export default function Home() {
  return <>
    <div className="min-h-screen bg-[#1a1a1a] p-8">
      <header className="max-w-4xl mx-auto mb-8 flex items-center gap-2">
        <TerminalIcon className="text-orange-500"/>
        <h1 className="text-2xl font-bold">CyberSec Portfolio</h1>
      </header>
      <Terminal />
    </div>
  </>
}
