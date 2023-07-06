import {
  DiHtml5,
  DiCss3,
  DiBootstrap,
  DiJavascript1,
  DiReact,
} from "react-icons/di";

import { SiTailwindcss, SiSass, SiMicrosoftsqlserver } from "react-icons/si";

const Technologies = () => {
  const technologies = [
    {
      name: "html",
      icon: <DiHtml5 />,
    },
    {
      name: "css",
      icon: <DiCss3 />,
    },
    {
      name: "sass",
      icon: <SiSass />,
    },
    {
      name: "tailwind",
      icon: <SiTailwindcss />,
    },
    {
      name: "boostrap",
      icon: <DiBootstrap />,
    },
    {
      name: "javascript",
      icon: <DiJavascript1 />,
    },
    {
      name: "react",
      icon: <DiReact />,
    },
    {
      name: "sql",
      icon: <SiMicrosoftsqlserver/>,
    },
  ];

  return (
    <section className="technologies">
      <h2 className="technologies__h2">Tecnologías</h2>
      <section className="technologies__container">
        {technologies.map((technologie) => (
          <section
            key={technologie.name}
            id={technologie.name}
            className="technologies__card"
          >
            {technologie.icon}
            <section className="technologies__card-text">
              <h3>{technologie.name}</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            </section>
          </section>
        ))}
      </section>
    </section>
  );
};

export default Technologies;
