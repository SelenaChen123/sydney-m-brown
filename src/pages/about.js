import HeaderPhoto from "../components/headerPhoto";
import Navbar from "../components/navbar";

import headshotPhoto from "../resources/headshot.jpeg";

function About() {
  return (
    <div>
      <Navbar />
      <HeaderPhoto photo={headshotPhoto} altText="Headshot of Sydney" />
      <h1>About</h1>
      <p>This is the About page.</p>
    </div>
  );
}

export default About;
