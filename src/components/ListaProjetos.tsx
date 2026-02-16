//Components
import Projeto from "./Projeto";

const ListaProjetos = () => {
  return (
    <section className="bg-slate-800 p-7 rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.4)] mb-8 transition-transform duration-300 ease-in-out">
      <h2 className="text-[#38BDF8] mb-4 text-3xl font-bold">Projetos</h2>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(17.5rem,1fr))] gap-6 mt-6">
        <Projeto
          title="AirBnb"
          description="Interface moderna usando o AirBnb como exemplo."
          linkView="https://airbnb-wheat-five.vercel.app"
          linkCode="https://github.com/Felipe-de-Lima-Passarelli/AirBnb"
        />
        <Projeto
          title="Weather App"
          description="Interface moderna de um site que verifica o clima."
          linkView="https://weather-app-one-virid-81.vercel.app"
          linkCode="https://github.com/Felipe-de-Lima-Passarelli/weatherApp"
        />
        <Projeto
          title="JopenkoApp"
          description="Interface moderna do jogo famoso pedra, papel, tesoura."
          linkView="https://jokenpo-app-three.vercel.app"
          linkCode="https://github.com/Felipe-de-Lima-Passarelli/JokenpoApp"
        />
        <Projeto
          title="SliderCar Animation"
          description="Interface moderna de uma vitrine de carros luxuosos."
          linkView="https://slider-car-animation.vercel.app"
          linkCode="https://github.com/Felipe-de-Lima-Passarelli/SliderCar-Animation"
        />
        <Projeto
<<<<<<< HEAD
          title="Travel Slider Experience"
          description="Interface moderna de um carrosel de imagens animadas."
          linkView="https://carrossel-image-animation.vercel.app"
          linkCode="https://github.com/Felipe-de-Lima-Passarelli/Carrossel_Image_Animation"
        />
        <Projeto
=======
>>>>>>> 5e7d0727a11c88828c9cf635134b23cf9d3ea616
          title="Cafe LandingPage"
          description="Interface moderna de uma landing page focada em cafeteria."
          linkView="https://cafeteria-lyart-seven.vercel.app"
          linkCode="https://github.com/Felipe-de-Lima-Passarelli/Cafeteria"
        />
        <Projeto
          title="Spotify App"
          description="Clone do site do Spotify, com NextJS."
          linkView="https://spotify-app-tau-lemon.vercel.app"
          linkCode="https://github.com/Felipe-de-Lima-Passarelli/SpotifyApp"
        />
        <Projeto
          title="Todo List"
          description="Interface moderna de um Todo List."
          linkView="https://todo-list-seven-silk-67.vercel.app"
          linkCode="https://github.com/Felipe-de-Lima-Passarelli/TodoList"
        />
        <Projeto
          title="Fruit Slider"
          description="Projeto desenvolvido com Next.js/Tailwind CSS e animações puras com CSS."
          linkView="https://landing-page-animation-beta.vercel.app"
          linkCode="https://github.com/Felipe-de-Lima-Passarelli/LandingPage_Animation"
        />
        <Projeto
          title="Sneakers Store"
          description="Criação de uma página de e-commerce aplicando o conceito de mobile first."
          linkView="https://storage-item-page.vercel.app"
          linkCode="https://github.com/Felipe-de-Lima-Passarelli/StorageItemPage"
        />
        <Projeto
          title="Countries Explorer"
          description="Aplicação com a listagem de países com Next.js e TypeScript."
          linkView="https://country-app-taupe-one.vercel.app"
          linkCode="https://github.com/Felipe-de-Lima-Passarelli/CountryApp"
        />
        <Projeto
          title="Digitalbank LadingPage"
          description="Criação de uma interface moderna para um banco fictício chamado Digitalbank."
          linkView="https://digitalbank-landing-page-mu.vercel.app"
          linkCode="https://github.com/Felipe-de-Lima-Passarelli/Digitalbank-LandingPage"
        />
        <Projeto
          title="Login App"
          description="Interface moderna de um site que simula um site de cadastro/login utilizando o localStorage."
          linkView="https://user-login-red.vercel.app"
          linkCode="https://github.com/Felipe-de-Lima-Passarelli/userLogin"
        />
        <Projeto
          title="ExtensionList App"
          description="Interface moderna de um site que lista extensões ativas e inativas."
          linkView="https://extension-list-app.vercel.app"
          linkCode="https://github.com/Felipe-de-Lima-Passarelli/ExtensionList-App"
        />
        <Projeto
          title="Pokedex"
          description="Interface moderna de uma Pokedex interativa feita com NextJS."
          linkView="https://pokedex-app-nine-tau.vercel.app"
          linkCode="https://github.com/Felipe-de-Lima-Passarelli/PokedexApp"
        />
        <Projeto
          title="Rick and Morty Characters"
          description="Interface moderna com paginação que lista todos personagens da série Rick and Morty."
          linkView="https://felipe-de-lima-passarelli.github.io/Rick_and_Morty/"
          linkCode="https://github.com/Felipe-de-Lima-Passarelli/Rick_and_Morty"
        />
        <Projeto
          title="Yu-Gi-Oh Cards"
          description="Interface moderna com paginação de raças que lista todas cartas do gamecard Yu-Gi-Oh."
          linkView="https://felipe-de-lima-passarelli.github.io/YuGiOh/"
          linkCode="https://github.com/Felipe-de-Lima-Passarelli/YuGiOh"
        />
        <Projeto
          title="Lista de Filmes"
          description="Interface moderna com lista de filmes de acordo com o gênero."
          linkView="https://felipe-de-lima-passarelli.github.io/Filmes/"
          linkCode="https://github.com/Felipe-de-Lima-Passarelli/Filmes"
        />
        <Projeto
          title="Modelo Anna Bella"
          description="Interface simples de uma modelo fictícia."
          linkView="https://felipe-de-lima-passarelli.github.io/Anna_bella/"
          linkCode="https://github.com/Felipe-de-Lima-Passarelli/Anna_bella"
        />
        <Projeto
          title="Finans"
          description="Interface moderna usando o Finans como exemplo."
          linkView="https://felipe-de-lima-passarelli.github.io/Finans/"
          linkCode="https://github.com/Felipe-de-Lima-Passarelli/Finans"
        />
        <Projeto
          title="Medium"
          description="Interface moderna usando o Medium como exemplo."
          linkView="https://felipe-de-lima-passarelli.github.io/Medium/"
          linkCode="https://github.com/Felipe-de-Lima-Passarelli/Medium"
        />
        <Projeto
          title="Museu Nacional"
          description="Interface moderna de um site demonstrando o museu do Brasil."
          linkView="https://felipe-de-lima-passarelli.github.io/Museu_Nacional/"
          linkCode="https://github.com/Felipe-de-Lima-Passarelli/Museu_Nacional"
        />
        <Projeto
          title="Nova Era Digital"
          description="Interface moderna de um exemplar de um site de empresa."
          linkView="https://felipe-de-lima-passarelli.github.io/Nova_Era_Digital/"
          linkCode="https://github.com/Felipe-de-Lima-Passarelli/Nova_Era_Digital"
        />
        <Projeto
          title="Zoom"
          description="Interface moderna usando o Zoom como exemplo."
          linkView="https://felipe-de-lima-passarelli.github.io/Zoom/"
          linkCode="https://github.com/Felipe-de-Lima-Passarelli/Zoom"
        />
      </div>
    </section>
  );
};

export default ListaProjetos;
