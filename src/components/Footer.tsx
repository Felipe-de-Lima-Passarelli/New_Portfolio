const Footer = () => {
  return (
    <footer className="text-white text-center py-6 bg-[#477AF5] rounded-t-[40px] w-full">
      <p>
        © {new Date().getFullYear()} • Projeto desenvolvido por
        <a href="https://github.com/Felipe-de-Lima-Passarelli" target="_blank">
          <span className="font-semibold ml-1">Felipe de Lima Passarelli</span>
        </a>
      </p>
    </footer>
  );
};

export default Footer;
