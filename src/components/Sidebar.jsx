import Information from "./Information";
import SocialNetworks from "./SocialNetworks";
import person from "../assets/img/person.png"

const Sidebar = () => {
  return (
    <section className="sidebar">
    <img src={person} alt="person" className="sidebar__img" />
      <h2 className="sidebar__title">Información</h2>
      <SocialNetworks/>
      <Information/>
      <a href="" className="sidebar__a">Dowload CV</a>
    </section>
  );
};

export default Sidebar;
