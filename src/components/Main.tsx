//Components
import SobreMim from "./SobreMim";
import Habilidades from "./Habilidades";
import ListaCertificados from "./ListaCertificados";
import ListaProjetos from "./ListaProjetos";
import Contato from "./Contato";

const Main = () => {
  return (
    <main className="p-8 max-w-6xl mx-auto">
      <SobreMim />
      <Habilidades />
      <ListaCertificados />
      <ListaProjetos />
      <Contato />
    </main>
  );
};

export default Main;
