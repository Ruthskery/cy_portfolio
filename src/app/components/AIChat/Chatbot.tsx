'use client'

import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { UserRound } from 'lucide-react'
import { askMe } from '@/app/api/askMe'

import omen from '../../../../public/ai/omen.jpg'

interface Message {
  role: 'user' | 'assistant'
  content: string
}

const FacebookMessage2010: React.FC = () => {
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content:
        "Welcome! My name is Omen I'm Cyril's AI Assistant.\nAsk me anything about my background, skills, or projects.",
    },
  ])
  const [typing, setTyping] = useState(false)

  const bottomRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, typing])

  async function sendPrompt() {
    if (!input.trim() || typing) return

    const userMessage = input
    setMessages((prev) => [...prev, { role: 'user', content: userMessage }])
    setInput('')
    setTyping(true)

    try {
      const reply = await askMe(userMessage)
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: reply },
      ])
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: 'Sorry, something went wrong.',
        },
      ])
    } finally {
      setTyping(false)
    }
  }

  return (
    <>
      {/* CHAT LAUNCHER */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-4 right-2 sm:right-4 bg-[#3b5998] text-white px-3 sm:px-4 py-2 text-xs sm:text-sm font-bold 
          border border-gray-400 shadow-md flex items-center gap-2 w-auto sm:w-80 justify-start"
        >
          <UserRound className="w-4 h-4" />
          <span className="w-2 h-2 bg-green-500 rounded-full border border-white" />
          <span className="hidden sm:inline">Chat</span>
        </button>
      )}

      {/* CHAT WINDOW */}
      {open && (
        <div className="fixed bottom-0 right-0 left-0 sm:left-auto sm:right-4 sm:w-80 w-full border border-gray-400 bg-white text-sm shadow-md max-h-[80vh] sm:max-h-none">
          {/* HEADER */}
          <div className="flex items-center justify-between bg-[#3b5998] text-white px-2 py-1">
            <div className="flex items-center gap-2">
              <Image
                src={omen}
                alt="Profile"
                width={32}
                height={32}
                className="rounded-sm"
              />
              <span className="font-bold text-xs">Omen</span>
            </div>

            <button
              onClick={() => setOpen(false)}
              className="text-xs font-bold"
            >
              ✕
            </button>
          </div>

          {/* MESSAGES */}
          <div className="h-48 sm:h-56 overflow-y-auto px-2 py-2 space-y-2">
            {messages.map((m, idx) => (
              <div
                key={idx}
                className={`flex ${
                  m.role === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                <div
                  className={`max-w-[75%] px-2 py-1 rounded text-[13px] leading-snug whitespace-pre-line
                  ${
                    m.role === 'user'
                      ? 'bg-[#dfe3ee] text-black'
                      : 'bg-[#f2f2f2] text-black'
                  }`}
                >
                  {m.content}
                </div>
              </div>
            ))}

            {/* TYPING INDICATOR */}
            {typing && (
              <div className="flex justify-start">
                <div className="bg-[#f2f2f2] px-2 py-1 rounded text-[13px] italic text-gray-600">
                  Omen is typing...
                </div>
              </div>
            )}

            <div ref={bottomRef} />
          </div>

          {/* INPUT */}
          <div className="border-t border-gray-300 px-2 py-2">
            <input
              type="text"
              value={input}
              disabled={typing}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault()
                  sendPrompt()
                }
              }}
              placeholder={typing ? 'Omen is typing...' : 'Type a message...'}
              className="w-full text-sm outline-none disabled:opacity-50"
            />
          </div>
        </div>
      )}
    </>
  )
}

export default FacebookMessage2010
