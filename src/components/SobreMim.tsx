//Next
import Image from "next/image";

const SobreMim = () => {
  return (
    <section className="bg-slate-800 p-7 rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.4)] mb-8 transition-transform duration-300 ease-in-out">
      <h2 className="text-[#38BDF8] mb-4 text-3xl font-bold">Sobre Mim</h2>
      <div className="flex items-start gap-5 flex-wrap">
        <div className="flex-1">
          <p className="text-base mb-4 text-[#CBD5E1]">
            Sou Desenvolvedor Front-End com foco na construção de interfaces
            modernas, acessíveis e bem estruturadas, priorizando organização de
            código, usabilidade e boas práticas.
          </p>
          <p className="text-base mb-4 text-[#CBD5E1]">
            Atuo principalmente com React e Next.js, desenvolvendo aplicações
            front-end que consomem APIs externas, utilizam componentização
            eficiente e possuem preocupação real com manutenção e performance.
          </p>
          <p className="text-base mb-4 text-[#CBD5E1]">
            Tenho background em automação e dados com Python, o que fortaleceu
            minha lógica e visão analítica, sendo hoje um conhecimento de apoio
            ao desenvolvimento front-end.
          </p>
        </div>
        <div className="shrink-0">
          <Image
            src="/img/foto.png"
            alt="Felipe de Lima Passarelli"
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
