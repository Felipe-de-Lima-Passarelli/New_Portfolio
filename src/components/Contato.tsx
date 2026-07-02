const Contato = () => {
  return (
    <section className="bg-slate-800 p-7 rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.4)] mb-8 transition-transform duration-300 ease-in-out">
      <h2 className="text-[#38BDF8] mb-4 text-3xl font-bold">Contato</h2>
      <p className="text-base mb-4 text-[#CBD5E1]">
        Estou em busca da minha primeira oportunidade como Desenvolvedor
        Front-End, especialmente em posições de estágio, júnior ou projetos onde
        eu possa evoluir e contribuir com dedicação.
      </p>
      <p className="text-base mb-4 text-[#CBD5E1]">
        Entre em contato pelos canais abaixo:
      </p>
      <ul className="list-disc text-[#CBD5E1] pl-6 space-y-2">
        <li>
          Email:
          <a
            href="mailto:malamdorox@gmail.com"
            className="ml-1 font-medium text-[#38BDF8] hover:underline"
          >
            malamdorox@gmail.com
          </a>
        </li>
        <li>
          GitHub:
          <a
            href="https://github.com/Felipe-de-Lima-Passarelli"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1 font-medium text-[#38BDF8] hover:underline"
          >
            Meu perfil no GitHub
          </a>
        </li>
        <li>
          LinkedIn:
          <a
            href="https://www.linkedin.com/in/felipe-de-lima-passarelli-6099362a0/"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1 font-medium text-[#38BDF8] hover:underline"
          >
            Meu perfil no LinkedIn
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Contato;
