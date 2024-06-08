import { useState } from "react";
import { Card } from "../../ExperienceCard";
import styles from "./styles.module.css";
import type { Experience } from "../../../types/Experience";

const experiences: Experience[] = [
  {
    title: "Desenvolvedor de software",
    business: "Frexco Comercio e Distribuição de Alimentos SA",
    time: "1 ANO E 10 MESES ",
    id: 1,
    description: (
      <>
        <h4>FRONT END</h4>
        <p>
          Desenvolvimento de novas features tanto para a loja como para os
          sistemas operacionais da empresa. Algumas das tecnologias utilizadas
          são: ReactJS, Typescript, Styled-components, Redux.
        </p>
        <h4>BACK END</h4>
        <p>
          Desenvolvimento de novas features utilizando a arquitetura de
          micro-serviços. Algumas das tecnologias utilizadas são: NestJS,
          Typescript, MongoDB, Postgres, Knex.
        </p>
          Suporte técnico no atendimento de clientes usuários dos sistemas.
          Participar do planejamento de novas features
      </>
    ),
  },
  {
    title: "Estagiário em redes ",
    business: "InforLink Banda Larga",
    time: "1 ANO",
    id: 2,
    description:<div style={{ maxWidth: '22rem' }}>
      Auxiliar os profissionais da empresa na instalação de novas linhas de internet, configuração de roteadores e no atendimento de clientes no escritório.
    </div>
  },
];

export function Experiences() {
  const [openedDetails, setOpenedDetails] = useState(0);

  return (
    <section className={styles.section}>
      <h2 tabIndex={0} className={styles.title}>Experiências</h2>
      <div className={styles.experience_grid}>
        {experiences.map((experience) => (
          <Card
            key={experience.id}
            id={experience.id}
            currentId={openedDetails}
            setOpenedDetails={setOpenedDetails}
            experience={experience}
          />
        ))}
      </div>
    </section>
  );
}
