'use client'
import React, { useEffect, useRef } from 'react'
import { gsap } from '@/lib/gsap-init'

const skills = [
  { label: 'Figma', value: 95, color: 'var(--gold)' },
  { label: 'FigJam', value: 90, color: 'var(--gold)' },
  { label: 'Visual Design', value: 90, color: 'var(--gold)' },
  { label: 'Prototyping', value: 85, color: 'var(--gold)' },
  
  { label: 'Claude', value: 90, color: 'var(--teal)' },
  { label: 'Google AI Studio', value: 85, color: 'var(--teal)' },
  { label: 'Prompt Engineering', value: 88, color: 'var(--teal)' },
  { label: 'Ollama', value: 70, color: 'var(--teal)' },
  
  { label: 'HTML/CSS/JS', value: 75, color: 'var(--orange)' },
  { label: 'GSAP', value: 65, color: 'var(--orange)' },
  { label: 'Three.js', value: 55, color: 'var(--orange)' },
  { label: 'Next.js', value: 60, color: 'var(--orange)' },
]

export default function SkillsSection() {
  const containerRef = useRef<HTMLElement>(null)
  const barsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    if (!containerRef.current) return
    
    barsRef.current.forEach((bar) => {
      if (!bar) return
      const targetWidth = bar.getAttribute('data-width')
      
      gsap.fromTo(bar, 
        { width: '0%' },
        {
          width: `${targetWidth}%`,
          duration: 1.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: bar,
            start: 'top 85%'
          }
        }
      )
    })
  }, [])

  return (
    <section ref={containerRef} className="bg-[var(--offwhite)] py-32 layout-padding">
      <svg width="0" height="0" className="absolute">
        <defs>
          <filter id="brush-texture">
            <feTurbulence type="fractalNoise" baseFrequency="0.065" numOctaves="3" />
            <feDisplacementMap in="SourceGraphic" scale="4" />
          </filter>
        </defs>
      </svg>

      <div className="max-w-[1000px] mx-auto">
        <p className="font-courier-prime text-[12px] text-[#0D0D0D] uppercase tracking-widest mb-4 text-center">
          TOOLS & SKILLS
        </p>
        <h2 className="font-bebas-neue text-[56px] text-[#0D0D0D] text-center mb-24">
          WHAT I WORK WITH
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-8">
          {skills.map((skill, i) => (
            <div key={i} className="flex items-center gap-4">
              <span className="font-courier-prime text-[13px] text-[#0D0D0D] w-[140px] shrink-0 text-right">
                {skill.label}
              </span>
              <div className="flex-1 h-[12px] bg-black/5">
                <div 
                  ref={el => { barsRef.current[i] = el }}
                  data-width={skill.value}
                  className="h-full origin-left"
                  style={{ 
                    backgroundColor: skill.color,
                    filter: 'url(#brush-texture)'
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
