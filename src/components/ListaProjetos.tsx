//Components
import Projeto from "./Projeto";

const ListaProjetos = () => {
  return (
    <section className="bg-slate-800 p-7 rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.4)] mb-8 transition-transform duration-300 ease-in-out">
      <h2 className="text-[#38BDF8] mb-4 text-3xl font-bold">Projetos</h2>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(17.5rem,1fr))] gap-6 mt-6">
        <Projeto
          title="Busfil GitHub"
          description="Aplicação para buscar usuários do GitHub, visualizar informações do perfil e listar repositórios atualizados recentemente."
          image="Busfil"
          linkView="https://busfil-git-hub.vercel.app"
          linkCode="https://github.com/Felipe-de-Lima-Passarelli/Busfil_GitHub"
        />
        <Projeto
          title="Job Listings Filter"
          description="Página de vagas com filtros dinâmicos por tecnologias, simulando uma experiência real de busca e seleção de oportunidades."
          image="JobListingsFilter"
          linkView="https://job-listings-filter-teal.vercel.app"
          linkCode="https://github.com/Felipe-de-Lima-Passarelli/JobListingsFilter"
        />
        <Projeto
          title="Countries Explorer"
          description="Aplicação para explorar países, utilizando Next.js e TypeScript para exibir informações de forma organizada e responsiva."
          image="Countries"
          linkView="https://country-app-taupe-one.vercel.app"
          linkCode="https://github.com/Felipe-de-Lima-Passarelli/CountryApp"
        />
        <Projeto
          title="Currency Converter"
          description="Aplicação para conversão de moedas em tempo real, utilizando Next.js, TypeScript e a API Frankfurter para consultar cotações atualizadas de forma rápida e responsiva."
          image="Currency"
          linkView="https://currency-converter-five-gamma-40.vercel.app"
          linkCode="https://github.com/Felipe-de-Lima-Passarelli/Currency_Converter"
        />
        <Projeto
          title="Buscador de Receitas"
          description="Aplicação de receitas com consumo de API externa, busca por pratos e exibição organizada de informações culinárias."
          image="Buscador_Receita"
          linkView="https://buscador-de-receitas-fawn.vercel.app"
          linkCode="https://github.com/Felipe-de-Lima-Passarelli/Buscador_de_Receitas"
        />
        <Projeto
          title="Weather App"
          description="Aplicação de clima com busca por cidade, consumo de API e exibição organizada das condições meteorológicas."
          image="Weather"
          linkView="https://weather-app-one-virid-81.vercel.app"
          linkCode="https://github.com/Felipe-de-Lima-Passarelli/weatherApp"
        />
        <Projeto
          title="Login App"
          description="Aplicação de cadastro e login utilizando localStorage, praticando manipulação de dados, validação e persistência no navegador."
          image="UserLogin"
          linkView="https://user-login-red.vercel.app"
          linkCode="https://github.com/Felipe-de-Lima-Passarelli/userLogin"
        />
        <Projeto
          title="Extension List App"
          description="Aplicação que lista extensões ativas e inativas, com foco em componentização, estados visuais e organização de dados."
          image="ExtensionsList"
          linkView="https://extension-list-app.vercel.app"
          linkCode="https://github.com/Felipe-de-Lima-Passarelli/ExtensionList-App"
        />
        <Projeto
          title="Todo List App"
          description="Aplicação de lista de tarefas com foco em manipulação de estado, interação do usuário e organização de atividades."
          image="TodoList"
          linkView="https://todo-list-seven-silk-67.vercel.app"
          linkCode="https://github.com/Felipe-de-Lima-Passarelli/TodoList"
        />
        <Projeto
          title="League Characters Explorer"
          description="Página de busca de personagens de League of Legends, com pesquisa dinâmica e exibição organizada das informações."
          image="League"
          linkView="https://league-characters.vercel.app"
          linkCode="https://github.com/Felipe-de-Lima-Passarelli/League_Characters"
        />
        <Projeto
          title="Rick and Morty Characters"
          description="Aplicação com paginação para listar personagens de Rick and Morty, praticando consumo de dados e renderização dinâmica."
          image="RickAndMorty"
          linkView="https://felipe-de-lima-passarelli.github.io/Rick_and_Morty/"
          linkCode="https://github.com/Felipe-de-Lima-Passarelli/Rick_and_Morty"
        />
        <Projeto
          title="Yu-Gi-Oh Cards"
          description="Aplicação com paginação e filtros por raça para listar cartas de Yu-Gi-Oh, praticando organização e exibição de dados."
          image="YuGiOh"
          linkView="https://felipe-de-lima-passarelli.github.io/YuGiOh/"
          linkCode="https://github.com/Felipe-de-Lima-Passarelli/YuGiOh"
        />
        <Projeto
          title="Pokédex App"
          description="Pokédex interativa desenvolvida com Next.js, exibindo personagens de forma organizada em uma interface responsiva."
          image="Pokedex"
          linkView="https://pokedex-app-nine-tau.vercel.app"
          linkCode="https://github.com/Felipe-de-Lima-Passarelli/PokedexApp"
        />
        <Projeto
          title="Real Estate Landing Page"
          description="Landing page para uma empresa imobiliária fictícia, destacando serviços, imóveis e uma apresentação visual profissional."
          image="RealState"
          linkView="https://real-estate-self-seven.vercel.app"
          linkCode="https://github.com/Felipe-de-Lima-Passarelli/Real_Estate"
        />
        <Projeto
          title="Digital Bank Landing Page"
          description="Landing page para um banco digital fictício, com foco em layout moderno, apresentação de serviços e design responsivo."
          image="DigitalBank"
          linkView="https://digitalbank-landing-page-mu.vercel.app"
          linkCode="https://github.com/Felipe-de-Lima-Passarelli/Digitalbank-LandingPage"
        />
        <Projeto
          title="Agency.ia Landing Page"
          description="Landing page para uma agência fictícia de IA, com foco em apresentação de serviços, layout moderno e comunicação visual."
          image="Agency"
          linkView="https://agency-ia-mocha.vercel.app"
          linkCode="https://github.com/Felipe-de-Lima-Passarelli/Agency_ia"
        />
        <Projeto
          title="Airbnb Clone"
          description="Recriação visual inspirada no Airbnb, praticando responsividade, componentização e construção de interfaces modernas."
          image="AirbnbPage"
          linkView="https://airbnb-wheat-five.vercel.app"
          linkCode="https://github.com/Felipe-de-Lima-Passarelli/AirBnb"
        />
        <Projeto
          title="Microsoft 365 Clone"
          description="Recriação da interface do Microsoft 365, praticando fidelidade visual, responsividade e estruturação de seções."
          image="Microsoft"
          linkView="https://microsoft-clone-tan-zeta.vercel.app"
          linkCode="https://github.com/Felipe-de-Lima-Passarelli/Microsoft-Clone"
        />
        <Projeto
          title="Spotify Clone"
          description="Clone visual do Spotify desenvolvido com Next.js, praticando componentização, organização de layout e interface responsiva."
          image="Spotify"
          linkView="https://spotify-app-tau-lemon.vercel.app"
          linkCode="https://github.com/Felipe-de-Lima-Passarelli/SpotifyApp"
        />
        <Projeto
          title="Sneakers Store"
          description="Página de e-commerce desenvolvida com abordagem mobile first, focada em apresentação de produto e experiência responsiva."
          image="StorageItem"
          linkView="https://storage-item-page.vercel.app"
          linkCode="https://github.com/Felipe-de-Lima-Passarelli/StorageItemPage"
        />
        <Projeto
          title="DevClub Store"
          description="Landing page de produtos de tecnologia, praticando organização de seções, destaque visual e construção responsiva."
          image="DevClubStore"
          linkView="https://devclub-store-hazel.vercel.app"
          linkCode="https://github.com/Felipe-de-Lima-Passarelli/devclub_store"
        />
        <Projeto
          title="PlayStation Product Page"
          description="Página de produto inspirada na marca PlayStation, com foco em apresentação visual, responsividade e destaque de produto."
          image="Playstation"
          linkView="https://playstation-product.vercel.app"
          linkCode="https://github.com/Felipe-de-Lima-Passarelli/Playstation_Product"
        />
        <Projeto
          title="Sneakers Landing Page"
          description="Landing page de tênis com foco em apresentação de produto, layout responsivo e identidade visual moderna."
          image="ShoesWebsite"
          linkView="https://shoes-website-nu.vercel.app"
          linkCode="https://github.com/Felipe-de-Lima-Passarelli/Shoes_Website"
        />
        <Projeto
          title="Fruit Slider Animation"
          description="Landing page animada desenvolvida com Next.js, TailwindCSS e animações em CSS para criar uma experiência visual dinâmica."
          image="FruitAnimation"
          linkView="https://landing-page-animation-beta.vercel.app"
          linkCode="https://github.com/Felipe-de-Lima-Passarelli/LandingPage_Animation"
        />
        <Projeto
          title="Luxury Car Slider"
          description="Vitrine animada de carros premium, explorando transições, composição visual e efeitos com foco em experiência interativa."
          image="SlideCar"
          linkView="https://slider-car-animation.vercel.app"
          linkCode="https://github.com/Felipe-de-Lima-Passarelli/SliderCar-Animation"
        />
        <Projeto
          title="Travel Image Slider"
          description="Carrossel animado de imagens de viagem, explorando transições visuais, composição de layout e interação com o usuário."
          image="Carrosell"
          linkView="https://carrossel-image-animation.vercel.app"
          linkCode="https://github.com/Felipe-de-Lima-Passarelli/Carrossel_Image_Animation"
        />
        <Projeto
          title="Jokenpo App"
          description="Jogo de pedra, papel e tesoura com interação dinâmica, lógica de escolhas e feedback visual para o usuário."
          image="Jokenpo"
          linkView="https://jokenpo-app-three.vercel.app"
          linkCode="https://github.com/Felipe-de-Lima-Passarelli/JokenpoApp"
        />
        <Projeto
          title="Translate Code"
          description="Interface de tradução inspirada no Google Translate, com foco em layout responsivo, organização visual e experiência de uso."
          image="TranslateCode"
          linkView="https://translate-code.vercel.app"
          linkCode="https://github.com/Felipe-de-Lima-Passarelli/TranslateCode"
        />
        <Projeto
          title="Coffee Landing Page"
          description="Landing page moderna para cafeteria, explorando composição visual, seções comerciais e design responsivo."
          image="Coffee"
          linkView="https://coffee-landing-page-self.vercel.app"
          linkCode="https://github.com/Felipe-de-Lima-Passarelli/Coffee_Landing_Page"
        />
        <Projeto
          title="Café Landing Page"
          description="Landing page para cafeteria, com foco em apresentação de marca, produtos e uma experiência visual acolhedora."
          image="Cafe"
          linkView="https://cafeteria-lyart-seven.vercel.app"
          linkCode="https://github.com/Felipe-de-Lima-Passarelli/Cafeteria"
        />
      </div>
    </section>
  );
};

export default ListaProjetos;
