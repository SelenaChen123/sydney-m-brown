import HeaderPhoto from "../components/headerPhoto";
import Navbar from "../components/navbar";

import headshotPhoto from "../resources/headshot.jpeg";

function Experience() {
  return (
    <div>
      <Navbar />
      <HeaderPhoto photo={headshotPhoto} altText="Headshot of Sydney" />
      <h1>Experience</h1>
      <p>This is the Experience page.</p>
    </div>
  );
}

export default Experience;
