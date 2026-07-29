//Next
import Image from "next/image";

const SobreMim = () => {
  return (
    <section className="bg-slate-800 p-7 rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.4)] mb-8 transition-transform duration-300 ease-in-out">
      <h2 className="text-[#38BDF8] mb-4 text-3xl font-bold">Sobre Mim</h2>
      <div className="flex items-start gap-5 flex-wrap">
        <div className="flex-1">
          <p className="text-base mb-4 text-[#CBD5E1]">
            Sou Desenvolvedor Front-End em formação, apaixonado por tecnologia e
            pela criação de interfaces modernas, responsivas e acessíveis. Meu
            objetivo é desenvolver aplicações que aliem boa experiência do
            usuário, organização de código e desempenho.
          </p>
          <p className="text-base mb-4 text-[#CBD5E1]">
            Atualmente desenvolvo projetos utilizando <strong>React</strong>,
            <strong> Next.js</strong>, <strong>TypeScript</strong> e
            <strong> Tailwind CSS</strong>, aplicando conceitos como
            componentização, consumo de APIs, gerenciamento de estado,
            responsividade e boas práticas de desenvolvimento.
          </p>
          <p className="text-base mb-4 text-[#CBD5E1]">
            Também venho expandindo meus conhecimentos em desenvolvimento Full
            Stack com <strong>Node.js</strong>, <strong>Express</strong>,
            <strong> NestJS</strong>, <strong>Prisma ORM</strong> e
            <strong> PostgreSQL</strong>, buscando compreender todo o ciclo de
            construção de aplicações web.
          </p>
          <p className="text-base text-[#CBD5E1]">
            Estou em busca da minha primeira oportunidade como Desenvolvedor
            Front-End, onde possa continuar evoluindo, contribuir com projetos
            reais e crescer profissionalmente em equipe.
          </p>
        </div>
        <div className="shrink-0">
          <Image
            src="/img/Foto.png"
            alt="Foto de Felipe de Lima Passarelli"
            width={1000}
            height={1000}
            className="w-40 h-40 rounded-full border-4 border-sky-400 object-cover shadow-[0_6px_12px_rgba(0,0,0,0.4)]"
          />
        </div>
      </div>
    </section>
  );
};

export default SobreMim;
