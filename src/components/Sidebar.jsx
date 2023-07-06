import Information from "./Information";
import SocialNetworks from "./SocialNetworks";

const Sidebar = () => {
  return (
    <section className="sidebar">
    <img src="https://i.imgur.com/2w1QrhC.jpg" alt="imagen" className="sidebar__img" />
      <h2 className="sidebar__title">Información</h2>
      <SocialNetworks/>
      <Information/>
      <a href="" className="sidebar__a">Dowload CV</a>
    </section>
  );
};

export default Sidebar;
