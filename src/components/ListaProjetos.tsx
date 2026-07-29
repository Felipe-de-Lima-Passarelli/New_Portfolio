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
          title="Login App"
          description="Aplicação de cadastro e login utilizando localStorage, praticando manipulação de dados, validação e persistência no navegador."
          image="UserLogin"
          linkView="https://user-login-red.vercel.app"
          linkCode="https://github.com/Felipe-de-Lima-Passarelli/userLogin"
        />
        <Projeto
          title="Multi Step Form"
          description="Aplicação de formulário multi-etapas desenvolvida com Next.js e TypeScript, permitindo seleção de planos, add-ons e cálculo dinâmico da assinatura em uma interface moderna e responsiva."
          image="Multistepform"
          linkView="https://multi-step-form-psi-coral.vercel.app"
          linkCode="https://github.com/Felipe-de-Lima-Passarelli/Multi_step_form"
        />
        <Projeto
          title="Currency Converter"
          description="Aplicação para conversão de moedas em tempo real, utilizando Next.js, TypeScript e a API Frankfurter para consultar cotações atualizadas de forma rápida e responsiva."
          image="Currency"
          linkView="https://currency-converter-five-gamma-40.vercel.app"
          linkCode="https://github.com/Felipe-de-Lima-Passarelli/Currency_Converter"
        />
        <Projeto
          title="Countries Explorer"
          description="Aplicação para explorar países, utilizando Next.js e TypeScript para exibir informações de forma organizada e responsiva."
          image="Countries"
          linkView="https://country-app-taupe-one.vercel.app"
          linkCode="https://github.com/Felipe-de-Lima-Passarelli/CountryApp"
        />
        <Projeto
          title="Job Listings Filter"
          description="Página de vagas com filtros dinâmicos por tecnologias, simulando uma experiência real de busca e seleção de oportunidades."
          image="JobListingsFilter"
          linkView="https://job-listings-filter-teal.vercel.app"
          linkCode="https://github.com/Felipe-de-Lima-Passarelli/JobListingsFilter"
        />
        <Projeto
          title="Extension List App"
          description="Aplicação que lista extensões ativas e inativas, com foco em componentização, estados visuais e organização de dados."
          image="ExtensionsList"
          linkView="https://extension-list-app.vercel.app"
          linkCode="https://github.com/Felipe-de-Lima-Passarelli/ExtensionList-App"
        />
        <Projeto
          title="Dots App"
          description="Aplicação interativa com criação de pontos na tela, utilizando React, TypeScript e TailwindCSS para praticar controle de estados, eventos de clique, renderização dinâmica e lógica de desfazer/refazer."
          image="Dots"
          linkView="https://dots-page.vercel.app"
          linkCode="https://github.com/Felipe-de-Lima-Passarelli/Dots_Page"
        />
        <Projeto
          title="PokéAPI"
          description="Aplicação que consome a PokéAPI utilizando React, Next.js e TypeScript para praticar requisições assíncronas, paginação, tipagem de dados, gerenciamento de estado e renderização dinâmica de informações dos Pokémon."
          image="PokeAPI"
          linkView="https://poke-api-silk-sigma.vercel.app"
          linkCode="https://github.com/Felipe-de-Lima-Passarelli/PokeAPI"
        />
        <Projeto
          title="Airbnb Clone"
          description="Recriação visual inspirada no Airbnb, praticando responsividade, componentização e construção de interfaces modernas."
          image="AirbnbPage"
          linkView="https://airbnb-wheat-five.vercel.app"
          linkCode="https://github.com/Felipe-de-Lima-Passarelli/AirBnb"
        />
        <Projeto
          title="Weather App"
          description="Aplicação de clima com busca por cidade, consumo de API e exibição organizada das condições meteorológicas."
          image="Weather"
          linkView="https://weather-app-one-virid-81.vercel.app"
          linkCode="https://github.com/Felipe-de-Lima-Passarelli/weatherApp"
        />
        <Projeto
          title="Fruit Slider Animation"
          description="Landing page animada desenvolvida com Next.js, TailwindCSS e animações em CSS para criar uma experiência visual dinâmica."
          image="FruitAnimation"
          linkView="https://landing-page-animation-beta.vercel.app"
          linkCode="https://github.com/Felipe-de-Lima-Passarelli/LandingPage_Animation"
        />
      </div>
    </section>
  );
};

export default ListaProjetos;
