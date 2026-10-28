import React from 'react';

function Header() {
  return (
    <header className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-950 px-8 py-12 shadow-2xl border border-slate-800 md:px-14">
      <div className="relative grid items-center gap-8 md:grid-cols-[1fr_360px]">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Cybersecurity / Web Development
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-white md:text-6xl">
            Мартинюк Софія
          </h1>
          <p className="mt-4 text-slate-400">Студентка / Спеціаліст з кібербезпеки та веброзробки</p>
          
          <div className="mt-6 flex flex-wrap gap-4 text-sm font-medium">
            <a 
              href="mailto:sofiia.martyniuk.kb.2025@lpnu.ua" 
              className="text-cyan-400 hover:underline"
            >
              ✉️ sofiia.martyniuk.kb.2025@lpnu.ua
            </a>
            <a 
              href="https://github.com/sofiiamkb2025/sofiia.martyniuk_VPlab2" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-cyan-400 hover:underline"
            >
              💻 GitHub
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;