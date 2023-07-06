import { RiGithubFill, RiLinkedinBoxFill } from "react-icons/ri";

const SocialNetworks = () => {
  const SocialNetworks = [
    {
      name: "github",
      icon: <RiGithubFill />,
    },
    {
      name: "linkedin",
      icon: <RiLinkedinBoxFill />,
    },
  ];

  return (
    <section className="socialnetworks">
      {SocialNetworks.map((network) => (
        <a href="#" id= {network.name} className="socialnetworks__link" key={network.name}>
          {network.icon}
        </a>
      ))}
    </section>
  );
};

export default SocialNetworks;
