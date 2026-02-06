const Contato = () => {
  return (
    <section className="bg-slate-800 p-7 rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.4)] mb-8 transition-transform duration-300 ease-in-out">
      <h2 className="text-[#38BDF8] mb-4 text-3xl font-bold">Contato</h2>
      <p className="text-base mb-4 text-[#CBD5E1]">
        Estou à disposição para oportunidades de estágio ou colaboração em
        projetos. Entre em contato:
      </p>
      <ul className="list-disc">
        <li>
          Email:
          <a href="mailto:malamdorox@gmail.com" className="ml-1">
            malamdorox@gmail.com
          </a>
        </li>
        <li>
          GitHub:
          <a
            href="https://github.com/Felipe-de-Lima-Passarelli"
            target="_blank"
            className="ml-1"
          >
            Meu perfil do GitHub
          </a>
        </li>
        <li>
          LinkedIn:
          <a
            href="https://www.linkedin.com/in/felipe-de-lima-passarelli-6099362a0/"
            target="_blank"
            className="ml-1"
          >
            Meu perfil do LinkedIn
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Contato;
