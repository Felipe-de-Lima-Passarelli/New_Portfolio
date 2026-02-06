//Interface
interface certificadoProps {
  name: string;
  status: string;
  link: string;
}

const Certificado = ({ name, link, status }: certificadoProps) => {
  return (
    <li>
      <a href={link} target="_blank">
        {name}
        <span className="text-violet-400 ml-2">({status})</span>
      </a>
    </li>
  );
};

export default Certificado;
