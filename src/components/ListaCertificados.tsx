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
          name="Desenvolvimento Web Completo - Udemy"
          status="Concluído"
          link="https://www.udemy.com/certificate/UC-099df401-9add-4cc2-8fc4-359e89c872d7/"
        />
        <Certificado
          name="Domine Frontend - 10 projetos - HTML, CSS, Javacript, TypeScript,React, Tailwind e Next - Udemy"
          status="Concluído"
          link="https://www.udemy.com/certificate/UC-345bbcb6-507c-4be8-a1bf-00ee6a4f9cdc/"
        />
        <Certificado
          name="React do Zero a Maestria (c/ hooks, router, API, Projetos) - Udemy"
          status="Concluído"
          link="https://www.udemy.com/certificate/UC-08d79a42-f96d-42f0-adf2-5e103411e79c/"
        />
        <Certificado
          name="Domine o Next.js, do básico ao avançado, com um curso prático que foca em projetos reais c/ Prisma, Tailwind e Next Auth - Udemy"
          status="Concluído"
          link="https://www.udemy.com/certificate/UC-dad89f0e-61ce-4c65-8642-be0bf541f8f3/"
        />
        <Certificado
          name="NextJS do zero ao avançado na prática 2025 - Udemy"
          status="Concluído"
          link="https://www.udemy.com/certificate/UC-43e860b3-ce9a-4209-ac6b-050a6a9a926f/"
        />
        <Certificado
          name="Curso de React JS 19 e Next.js 15 (atualizado para 2025) - Udemy"
          status="Concluído"
          link="https://www.udemy.com/certificate/UC-4cf19edb-47cc-4992-b56f-b4b08591cd9d/"
        />
        <Certificado
          name="Criando APIs modernas com NestJS, Prisma ORM e PostgreSQL - Udemy"
          status="Concluído"
          link="https://www.udemy.com/certificate/UC-c3497ad0-7a1c-433a-8379-a446909611c5/"
        />
        <Certificado
          name="Universia - Fundamentos de IA Generativa"
          status="Concluído"
          link="https://drive.google.com/file/d/1GR_DV2yGzOfS8gI6-l9mqj5lpQPouCs6/view"
        />
        <Certificado
          name="Jornada Full Stack"
          status="Concluído"
          link="https://drive.google.com/file/d/1C7zf48fAUgu159mb4m9pOftu7Cun-t9_/view"
        />
        <Certificado
          name="Python - Santander Open Academy"
          status="Concluído"
          link="https://drive.google.com/file/d/1U0TRymruolmi-yckM7uJDena2SEuRby-/view"
        />
        <Certificado
          name="Prompting Responsável: Maximizar a IA no seu negócio"
          status="Concluído"
          link="https://drive.google.com/file/d/1aWPMS-TgSy3k4XcrWk2TrehjsYocAVLo/view"
        />
        <Certificado
          name="Santander 2025 - Ciência de Dados com Python"
          status="Concluído"
          link="https://drive.google.com/file/d/1kYho3YFZ-uKnZEBB8Gi3oK5Q2WkN_0Us/view"
        />
        <Certificado
          name="Power BI"
          status="Concluído"
          link="https://drive.google.com/file/d/10i4YeFSg-whqEr6F_t0snHfv2q3sy2qh/view"
        />
        <Certificado
          name="Desenvolvimento Flet - Udemy (Dalton Peixoto)"
          status="Concluído"
          link="https://www.udemy.com/certificate/UC-fdfba14f-d8b6-4d49-9e67-92e10919eb13/"
        />
        <Certificado
          name="Formação Completa Inteligência Artificial e Machine Learning - Udemy"
          status="Concluído"
          link="https://www.udemy.com/certificate/UC-127c9bf2-ef41-4ece-ac8e-123d425ec8a5/"
        />
        <Certificado
          name="Intensivão de Power BI"
          status="Concluído"
          link="https://drive.google.com/file/d/1poQpPSXDRML_tc4i4_HYaT0A4JJt1125/view"
        />
        <Certificado
          name="Fundamentos de React - LinkedIn"
          status="Concluído"
          link="https://www.linkedin.com/learning/certificates/6e59f09872b2c0d143bd8a47b43d68795a404066c2c721d55dbb4dbf19890bf4"
        />
        <Certificado
          name="Google: Inteligência Artificial e Produtividade"
          status="Concluído"
          link="https://drive.google.com/file/d/1Fgfn3RpJmyz1PFODlfdWXg47M21SGbIO/view"
        />
      </ul>
    </section>
  );
};

export default ListaCertificados;
