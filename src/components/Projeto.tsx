//Interface
interface projetoProps {
  title: string;
  description: string;
  linkView: string;
  linkCode: string;
}

const Projeto = ({ title, description, linkView, linkCode }: projetoProps) => {
  return (
    <div className="bg-linear-to-br from-slate-800 to-slate-900 border border-slate-700 p-6 rounded-xl text-center flex flex-col transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-[0_8px_20px_rgba(56,189,248,0.4)]">
      <h3 className="text-xl mb-3">{title}</h3>
      <p className="text-slate-400 mb-5">{description}</p>
      <div className="flex gap-3 mt-auto">
        <a
          href={linkView}
          target="_blank"
          className="flex-1 bg-sky-400 text-slate-900 font-semibold py-2 px-4 rounded-md text-center transition-all duration-300 ease-in-out hover:bg-sky-500 hover:scale-105"
        >
          Ver Projeto
        </a>
        <a
          href={linkCode}
          target="_blank"
          className="flex-1 font-semibold py-2 px-4 rounded-md text-center transition-all duration-300 ease-in-out bg-transparent border-2 border-sky-400 text-sky-400 hover:bg-sky-400 hover:text-slate-900 hover:scale-105"
        >
          Ver Código
        </a>
      </div>
    </div>
  );
};

export default Projeto;
