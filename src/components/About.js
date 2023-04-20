import { image } from "../data/user";

function About() {
  return (
    <div>
      <h1>About Me</h1>
      <img src={image} alt="Kirui Tito" />
      <p>Hi, my name is Kirui Titoand I'm a web developer.</p>
    </div>
  );
}

export default About;
