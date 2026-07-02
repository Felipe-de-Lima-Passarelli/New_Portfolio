const Header = () => {
  return (
    <header className="bg-linear-to-br from-[#6366f1] to-[#3b82f6] text-white text-center py-12 px-6 rounded-bl-[40px] rounded-br-[40px] shadow-[0_6px_12px_rgba(0,0,0,0.3)]">
      <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
        Felipe de Lima Passarelli
      </h1>
      <p className="text-base sm:text-lg mt-4 max-w-3xl mx-auto text-[#E0F2FE] leading-relaxed">
        Desenvolvedor Front-End em evolução, com foco em React, Next.js,
        TypeScript e TailwindCSS. Construo projetos próprios para praticar
        componentização, consumo de APIs, responsividade, acessibilidade e boas
        práticas de código.
      </p>
    </header>
  );
};

export default Header;
