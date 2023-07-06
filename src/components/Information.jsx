import { RiMailUnreadFill, RiMapPin2Fill, RiPhoneFill } from "react-icons/ri";

const Information = () => {
  return (
    <section className="information">
      <section className="information__card">
        <RiMailUnreadFill className="information__card-mail" />
        <section>
          <h3>Email</h3>
          <p>juacaramirezlo@gmail.com</p>
        </section>
      </section>

      <section className="information__card">
        <RiMapPin2Fill className="information__card-map" />
        <section>
          <h3>Localización</h3>
          <p>Medellín, Colombia</p>
        </section>
      </section>

      <section className="information__card">
        <RiPhoneFill className="information__card-phone" />
        <section>
          <h3>Teléfono</h3>
          <p>(+57) 000000000000</p>
        </section>
      </section>
    </section>
  );
};

export default Information;
