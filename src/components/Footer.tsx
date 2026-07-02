const Footer = () => {
  return (
    <footer className="text-white text-center py-6 px-4 bg-[#477AF5] rounded-t-[40px] w-full">
      <p className="text-sm sm:text-base">
        © {new Date().getFullYear()} • Portfólio desenvolvido por
        <a
          href="https://github.com/Felipe-de-Lima-Passarelli"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Acessar GitHub de Felipe de Lima Passarelli"
          className="font-semibold hover:underline"
        >
          Felipe de Lima Passarelli
        </a>
      </p>
    </footer>
  );
};

export default Footer;
