//Components
import Projeto from "./Projeto";

const ListaProjetos = () => {
  return (
    <section className="bg-slate-800 p-7 rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.4)] mb-8 transition-transform duration-300 ease-in-out">
      <h2 className="text-[#38BDF8] mb-4 text-3xl font-bold">Projetos</h2>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(17.5rem,1fr))] gap-6 mt-6">
        <Projeto
          title="Weather App"
          description="Interface moderna de um site que verifica o clima."
          image="Weather"
          linkView="https://weather-app-one-virid-81.vercel.app"
          linkCode="https://github.com/Felipe-de-Lima-Passarelli/weatherApp"
        />
        <Projeto
          title="JopenkoApp"
          description="Interface moderna do jogo famoso pedra, papel, tesoura."
          image="Jokenpo"
          linkView="https://jokenpo-app-three.vercel.app"
          linkCode="https://github.com/Felipe-de-Lima-Passarelli/JokenpoApp"
        />
        <Projeto
          title="Busfil GitHub"
          description="Aplicação que permite buscar usuários do GitHub e visualizar suas principais informações, além dos repositórios mais recentemente atualizados."
          image="Busfil"
          linkView="https://busfil-git-hub.vercel.app"
          linkCode="https://github.com/Felipe-de-Lima-Passarelli/Busfil_GitHub"
        />
        <Projeto
          title="Translate Code"
          description="Interface moderna de um tradutor estilo Google Translate"
          image="TranslateCode"
          linkView="https://translate-code.vercel.app"
          linkCode="https://github.com/Felipe-de-Lima-Passarelli/TranslateCode"
        />
        <Projeto
          title="SliderCar Animation"
          description="Interface moderna de uma vitrine de carros luxuosos."
          image="SlideCar"
          linkView="https://slider-car-animation.vercel.app"
          linkCode="https://github.com/Felipe-de-Lima-Passarelli/SliderCar-Animation"
        />
        <Projeto
          title="Real Estate"
          description="Interface moderna de uma landing page da empresa fictícia Real Estate e seus serviços."
          image="RealState"
          linkView="https://real-estate-self-seven.vercel.app"
          linkCode="https://github.com/Felipe-de-Lima-Passarelli/Real_Estate"
        />
        <Projeto
          title="AirBnb"
          description="Interface moderna usando o AirBnb como exemplo."
          image="AirbnbPage"
          linkView="https://airbnb-wheat-five.vercel.app"
          linkCode="https://github.com/Felipe-de-Lima-Passarelli/AirBnb"
        />
        <Projeto
          title="Agency.ia - GreatStacks"
          description="Interface moderna de uma landing page da empresa fictícia Agency.ia e seus serviços."
          image="Agency"
          linkView="https://agency-ia-mocha.vercel.app"
          linkCode="https://github.com/Felipe-de-Lima-Passarelli/Agency_ia"
        />
        <Projeto
          title="League Characters"
          description="Interface moderna de uma página para pesquisar os personagens do jogo League of Legends."
          image="Agency"
          linkView="https://league-characters.vercel.app"
          linkCode="https://github.com/Felipe-de-Lima-Passarelli/League_Characters"
        />
        <Projeto
          title="Microsoft 365"
          description="Réplica do site da Microsoft 365."
          image="Microsoft"
          linkView="https://microsoft-clone-tan-zeta.vercel.app"
          linkCode="https://github.com/Felipe-de-Lima-Passarelli/Microsoft-Clone"
        />
        <Projeto
          title="Shoes Website"
          description="Interface moderna de uma landing page de tênis."
          image="ShoesWebsite"
          linkView="https://shoes-website-nu.vercel.app"
          linkCode="https://github.com/Felipe-de-Lima-Passarelli/Shoes_Website"
        />
        <Projeto
          title="Buscador de Receita"
          description="Interface moderna de um buscador de receitas com auxílio de API externa."
          image="Buscador_Receita"
          linkView="https://buscador-de-receitas-fawn.vercel.app"
          linkCode="https://github.com/Felipe-de-Lima-Passarelli/Buscador_de_Receitas"
        />
        <Projeto
          title="Travel Slider Experience"
          description="Interface moderna de um carrosel de imagens animadas."
          image="Carrosell"
          linkView="https://carrossel-image-animation.vercel.app"
          linkCode="https://github.com/Felipe-de-Lima-Passarelli/Carrossel_Image_Animation"
        />
        <Projeto
          title="Cafe LandingPage"
          description="Interface moderna de uma landing page focada em cafeteria."
          image="Cafe"
          linkView="https://cafeteria-lyart-seven.vercel.app"
          linkCode="https://github.com/Felipe-de-Lima-Passarelli/Cafeteria"
        />
        <Projeto
          title="DevClub Store"
          description="Interface moderna de uma landing page focada em produtos de tecnologia."
          image="DevClubStore"
          linkView="https://devclub-store-hazel.vercel.app"
          linkCode="https://github.com/Felipe-de-Lima-Passarelli/devclub_store"
        />
        <Projeto
          title="Playstation Product Landing Page"
          description="Interface moderna de uma landing page dos produtos Sony."
          image="Playstation"
          linkView="https://playstation-product.vercel.app"
          linkCode="https://github.com/Felipe-de-Lima-Passarelli/Playstation_Product"
        />
        <Projeto
          title="Coffee Landing Page"
          description="Landing Page moderno de uma cafeteria."
          image="Coffee"
          linkView="https://coffee-landing-page-self.vercel.app"
          linkCode="https://github.com/Felipe-de-Lima-Passarelli/Coffee_Landing_Page"
        />
        <Projeto
          title="Spotify App"
          description="Clone do site do Spotify, com NextJS."
          image="Spotify"
          linkView="https://spotify-app-tau-lemon.vercel.app"
          linkCode="https://github.com/Felipe-de-Lima-Passarelli/SpotifyApp"
        />
        <Projeto
          title="Todo List"
          description="Interface moderna de um Todo List."
          image="TodoList"
          linkView="https://todo-list-seven-silk-67.vercel.app"
          linkCode="https://github.com/Felipe-de-Lima-Passarelli/TodoList"
        />
        <Projeto
          title="Fruit Slider"
          description="Projeto desenvolvido com Next.js/Tailwind CSS e animações puras com CSS."
          image="FruitAnimation"
          linkView="https://landing-page-animation-beta.vercel.app"
          linkCode="https://github.com/Felipe-de-Lima-Passarelli/LandingPage_Animation"
        />
        <Projeto
          title="Sneakers Store"
          description="Criação de uma página de e-commerce aplicando o conceito de mobile first."
          image="StorageItem"
          linkView="https://storage-item-page.vercel.app"
          linkCode="https://github.com/Felipe-de-Lima-Passarelli/StorageItemPage"
        />
        <Projeto
          title="Countries Explorer"
          description="Aplicação com a listagem de países com Next.js e TypeScript."
          image="Countries"
          linkView="https://country-app-taupe-one.vercel.app"
          linkCode="https://github.com/Felipe-de-Lima-Passarelli/CountryApp"
        />
        <Projeto
          title="Digitalbank LadingPage"
          description="Criação de uma interface moderna para um banco fictício chamado Digitalbank."
          image="DigitalBank"
          linkView="https://digitalbank-landing-page-mu.vercel.app"
          linkCode="https://github.com/Felipe-de-Lima-Passarelli/Digitalbank-LandingPage"
        />
        <Projeto
          title="Login App"
          description="Interface moderna de um site que simula um site de cadastro/login utilizando o localStorage."
          image="UserLogin"
          linkView="https://user-login-red.vercel.app"
          linkCode="https://github.com/Felipe-de-Lima-Passarelli/userLogin"
        />
        <Projeto
          title="ExtensionList App"
          description="Interface moderna de um site que lista extensões ativas e inativas."
          image="ExtensionsList"
          linkView="https://extension-list-app.vercel.app"
          linkCode="https://github.com/Felipe-de-Lima-Passarelli/ExtensionList-App"
        />
        <Projeto
          title="Pokedex"
          description="Interface moderna de uma Pokedex interativa feita com NextJS."
          image="Pokedex"
          linkView="https://pokedex-app-nine-tau.vercel.app"
          linkCode="https://github.com/Felipe-de-Lima-Passarelli/PokedexApp"
        />
        <Projeto
          title="Rick and Morty Characters"
          description="Interface moderna com paginação que lista todos personagens da série Rick and Morty."
          image="RickAndMorty"
          linkView="https://felipe-de-lima-passarelli.github.io/Rick_and_Morty/"
          linkCode="https://github.com/Felipe-de-Lima-Passarelli/Rick_and_Morty"
        />
        <Projeto
          title="Yu-Gi-Oh Cards"
          description="Interface moderna com paginação de raças que lista todas cartas do gamecard Yu-Gi-Oh."
          image="YuGiOh"
          linkView="https://felipe-de-lima-passarelli.github.io/YuGiOh/"
          linkCode="https://github.com/Felipe-de-Lima-Passarelli/YuGiOh"
        />
      </div>
    </section>
  );
};

export default ListaProjetos;
