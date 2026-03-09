# Core Design System: "Editorial Warmth"
Do not invent colors. Strictly map the UI to this warm, high-end aesthetic using Tailwind classes:

1. **Surfaces & Backgrounds (Airy & Light):**
   - App Background: `bg-[#FAF7F2]` or `bg-stone-50` (Warm cream)
   - Project Cards: `bg-white/80 backdrop-blur-md` (Do NOT use solid dark brown for card backgrounds).
   - Card Borders: `border border-stone-200`

2. **Typography (Rich & Crisp):**
   - Headings (Serif is allowed but must be elegant): `text-stone-900` (Deep espresso brown/black).
   - Body Copy (Must be Sans-Serif for readability): `text-stone-600`.
   - Never put white text on a solid brown background for large UI blocks; it creates too much visual weight.

3. **Depth & Accents:**
   - Primary Buttons/Badges: `bg-stone-900 text-[#FAF7F2] hover:bg-stone-800`
   - Shadow System: `shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300` (Use subtle, feathered shadows, never harsh drops).