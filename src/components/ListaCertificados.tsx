import Certificado from "./Certificado";

const ListaCertificados = () => {
  return (
    <section className="bg-slate-800 p-7 rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.4)] mb-8 transition-transform duration-300 ease-in-out">
      <h2 className="text-[#38BDF8] mb-4 text-3xl font-bold">Certificados</h2>
      <p className="text-base mb-4 text-[#CBD5E1]">
        Abaixo estão alguns dos meus certificados relevantes para o
        desenvolvimento Front-End e Full Stack:
      </p>
      <ul className="list-disc">
        <Certificado
          name="Curso de React JS 19 e Next.js 15 (Atualizado para 2025) - Udemy"
          status="Concluído"
          link="https://www.udemy.com/certificate/UC-4cf19edb-47cc-4992-b56f-b4b08591cd9d/"
        />
        <Certificado
          name="Next.js do Zero ao Avançado na Prática 2025 - Udemy"
          status="Concluído"
          link="https://www.udemy.com/certificate/UC-43e860b3-ce9a-4209-ac6b-050a6a9a926f/"
        />
        <Certificado
          name="Domine o Next.js: Projetos Reais com Prisma, Tailwind e NextAuth - Udemy"
          status="Concluído"
          link="https://www.udemy.com/certificate/UC-dad89f0e-61ce-4c65-8642-be0bf541f8f3/"
        />
        <Certificado
          name="React do Zero à Maestria (Hooks, Router, API e Projetos) - Udemy"
          status="Concluído"
          link="https://www.udemy.com/certificate/UC-08d79a42-f96d-42f0-adf2-5e103411e79c/"
        />
        <Certificado
          name="Domine Front-End: HTML, CSS, JavaScript, TypeScript, React, Tailwind e Next.js - Udemy"
          status="Concluído"
          link="https://www.udemy.com/certificate/UC-345bbcb6-507c-4be8-a1bf-00ee6a4f9cdc/"
        />
        <Certificado
          name="Criando APIs Modernas com NestJS, Prisma ORM e PostgreSQL - Udemy"
          status="Concluído"
          link="https://www.udemy.com/certificate/UC-c3497ad0-7a1c-433a-8379-a446909611c5/"
        />
        <Certificado
          name="Desenvolvimento Web Completo - Udemy"
          status="Concluído"
          link="https://www.udemy.com/certificate/UC-099df401-9add-4cc2-8fc4-359e89c872d7/"
        />
        <Certificado
          name="Fundamentos de React - LinkedIn Learning"
          status="Concluído"
          link="https://www.linkedin.com/learning/certificates/6e59f09872b2c0d143bd8a47b43d68795a404066c2c721d55dbb4dbf19890bf4"
        />
      </ul>
    </section>
  );
};

export default ListaCertificados;
