import React from 'react';

function Experience() {
  return (
    <section className="rounded-[2.5rem] border border-[#4a121d] bg-[#28090f] p-7 shadow-xl">
      <h2 className="text-xl font-bold mb-4 text-[#ff6b81]">Досвід та проєкти</h2>
      <ul className="space-y-4 text-sm text-gray-300 list-disc list-inside">
        <li>
          <strong className="text-white">Розробка консольних застосунків (C# / Python):</strong>
          <span className="block mt-1 pl-5 text-gray-400">Розробка перших навчальних проєктів для розуміння основ програмування та логіки роботи коду.</span>
        </li>
        <li>
          <strong className="text-white">Дослідження основ кібербезпеки:</strong>
          <span className="block mt-1 pl-5 text-gray-400">Ознайомлення з базовими правилами захисту інформації, принципами роботи мереж та безпекою під час користування інтернетом.</span>
        </li>
        <li>
          <strong className="text-white">Frontend-розробка (Web):</strong>
          <span className="block mt-1 pl-5 text-gray-400">Створення базової структури сайтів на HTML5 та вивчення основ роботи з компонентами.</span>
        </li>
      </ul>
    </section>
  );
}

export default Experience;