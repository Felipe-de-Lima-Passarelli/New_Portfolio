const Habilidades = () => {
  return (
    <section className="bg-slate-800 p-7 rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.4)] mb-8 transition-transform duration-300 ease-in-out">
      <h2 className="text-[#38BDF8] mb-4 text-3xl font-bold">Habilidades</h2>

      <p className="text-base mb-6 text-[#CBD5E1]">
        Meu foco é o desenvolvimento Front-End com React, Next.js, TypeScript e
        Tailwind CSS, criando interfaces modernas, responsivas e bem
        estruturadas. Também estou ampliando meus conhecimentos em
        desenvolvimento Full Stack com Node.js, Express, Prisma e PostgreSQL.
      </p>

      <p className="text-base mb-4 text-[#CBD5E1] font-semibold">Front-End</p>

      <ul className="list-disc mb-8 text-[#CBD5E1] pl-6 space-y-2">
        <li>HTML5 semântico e acessibilidade</li>
        <li>CSS3, Flexbox, Grid e Responsividade</li>
        <li>JavaScript (ES6+) e TypeScript</li>
        <li>React (Hooks, Context API e componentização)</li>
        <li>Next.js</li>
        <li>Tailwind CSS</li>
        <li>Consumo de APIs REST</li>
      </ul>

      <p className="text-base mb-4 text-[#CBD5E1] font-semibold">Back-End</p>

      <ul className="list-disc mb-8 text-[#CBD5E1] pl-6 space-y-2">
        <li>Node.js</li>
        <li>Express</li>
        <li>NestJS</li>
        <li>Prisma ORM</li>
        <li>PostgreSQL</li>
        <li>Integração entre Front-End, APIs e banco de dados</li>
      </ul>

      <p className="text-base mb-4 text-[#CBD5E1] font-semibold">
        Ferramentas e Boas Práticas
      </p>

      <ul className="list-disc text-[#CBD5E1] pl-6 space-y-2">
        <li>Git e GitHub</li>
        <li>Clean Code</li>
        <li>Componentes reutilizáveis</li>
        <li>Organização de código e estrutura de projetos</li>
        <li>Responsividade e experiência do usuário (UX)</li>
      </ul>
    </section>
  );
};

export default Habilidades;
