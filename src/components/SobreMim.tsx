//Next
import Image from "next/image";

const SobreMim = () => {
  return (
    <section className="bg-slate-800 p-7 rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.4)] mb-8 transition-transform duration-300 ease-in-out">
      <h2 className="text-[#38BDF8] mb-4 text-3xl font-bold">Sobre Mim</h2>
      <div className="flex items-start gap-5 flex-wrap">
        <div className="flex-1">
          <p className="text-base mb-4 text-[#CBD5E1]">
            Sou desenvolvedor Front-End em evolução, com foco na construção de
            interfaces modernas, acessíveis, responsivas e bem estruturadas.
            Busco transformar ideias em experiências digitais organizadas,
            funcionais e agradáveis para o usuário.
          </p>
          <p className="text-base mb-4 text-[#CBD5E1]">
            Atualmente estudo e desenvolvo projetos utilizando React, Next.js,
            TypeScript e TailwindCSS, aplicando conceitos como componentização,
            consumo de APIs, organização de código, responsividade e boas
            práticas de desenvolvimento.
          </p>
          <p className="text-base mb-4 text-[#CBD5E1]">
            Também tenho conhecimentos em automação e análise de dados com
            Python, o que contribuiu para fortalecer minha lógica de
            programação, resolução de problemas e visão analítica durante o
            desenvolvimento de aplicações.
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
