import React from 'react';

function Skills() {
  return (
    <>
      <section className="rounded-[2.5rem] border border-slate-800 bg-slate-900 p-7 shadow-xl">
        <h2 className="text-xl font-bold mb-3 text-cyan-300">Навички</h2>
        <ul className="space-y-2 text-sm text-slate-300 list-disc list-inside">
          <li>Мови розмітки та стилів: HTML5</li>
          <li>Мови програмування: Python, C#</li>
          <li>Системи контролю версій: Git, GitHub</li>
        </ul>
      </section>

      <section className="rounded-[2.5rem] border border-slate-800 bg-slate-900 p-7 shadow-xl">
        <h2 className="text-xl font-bold mb-3 text-cyan-300">Володіння мовами</h2>
        <ul className="space-y-2 text-sm text-slate-300 list-disc list-inside">
          <li>Українська — рідна</li>
          <li>Англійська — Intermediate (B1)</li>
        </ul>
      </section>
    </>
  );
}

export default Skills;