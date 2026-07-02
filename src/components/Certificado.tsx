//Interface
interface CertificadoProps {
  name: string;
  status: string;
  link: string;
}

const Certificado = ({ name, link, status }: CertificadoProps) => {
  return (
    <li>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Abrir certificado: ${name}`}
        className="text-[#CBD5E1] hover:text-[#38BDF8] hover:underline transition-colors duration-200"
      >
        {name}
        <span className="text-violet-400 ml-2">({status})</span>
      </a>
    </li>
  );
};

export default Certificado;
