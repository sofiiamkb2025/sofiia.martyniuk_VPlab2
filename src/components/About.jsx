import React from 'react';

function About() {
  return (
    <section className="relative overflow-hidden rounded-[2.5rem] border border-[#4a121d] bg-[#28090f] p-7 shadow-xl">
      <h2 className="text-xl font-bold mb-3 text-[#ff6b81]">Про мене</h2>
      <p className="text-gray-300 leading-relaxed text-sm md:text-base">
        Вивчаю основи веброзробки та кібербезпеки. Хочу навчитися створювати зручні сайти, розбиратися в програмуванні й отримати практичний досвід у цій сфері.
      </p>
    </section>
  );
}

export default About;