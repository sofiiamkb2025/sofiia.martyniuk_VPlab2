import React from 'react';

export default function Header() {
  return (
    <header className="relative overflow-hidden bg-gradient-to-r from-[#52101d] via-[#75162a] to-[#420d18] border border-[#6b1627] rounded-3xl p-8 shadow-2xl text-white flex flex-col md:flex-row items-center justify-between gap-6">
      
      {/* Ліва частина: текст */}
      <div className="flex-1 text-center md:text-left z-10">
        <div className="text-xs uppercase tracking-widest text-[#fca5a5] font-semibold mb-3">
          CYBERSECURITY / WEB DEVELOPMENT
        </div>
        <h1 className="text-4xl font-bold mb-2 text-white">Мартинюк Софія</h1>
        <p className="text-gray-200 text-sm sm:text-base">
          Студентка / Спеціаліст з кібербезпеки та веброзробки
        </p>
        
        {/* Контакти */}
        <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm text-gray-200 mt-6">
          <span className="flex items-center gap-2 bg-[#2d0810] px-3 py-1.5 rounded-full border border-[#591321] text-gray-200">
            ✉️ sofiia.martyniuk.kb.2025@lpnu.ua
          </span>
          <span className="flex items-center gap-2 bg-[#2d0810] px-3 py-1.5 rounded-full border border-[#591321] text-gray-200">
            🔗 GitHub
          </span>
        </div>
      </div>

      {/* Права частина: справжній, симетричний і красивий неоновий метелик */}
      <div className="flex-shrink-0 z-10 flex items-center justify-center">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 16 16" 
          fill="#ff6b81" 
          className="w-32 h-32 md:w-40 md:h-40 drop-shadow-[0_0_18px_rgba(255,107,129,0.9)] animate-pulse"
        >
          <path d="M3.468 1.948C5.303 3.325 7.276 6.118 8 7.616c.725-1.498 2.698-4.29 4.532-5.668C13.855.955 16 .186 16 2.632c0 .489-.28 4.105-.444 4.692-.572 2.04-2.653 2.561-4.504 2.246 3.236.551 4.06 2.375 2.281 4.2-3.376 3.464-4.852-.87-5.23-1.98-.07-.204-.103-.3-.103-.218 0-.081-.033.014-.102.218-.379 1.11-1.855 5.444-5.231 1.98-1.778-1.825-.955-3.65 2.28-4.2-1.85.315-3.932-.205-4.503-2.246C.28 6.737 0 3.12 0 2.632 0 .186 2.145.955 3.468 1.948"/>
        </svg>
      </div>

    </header>
  );
}