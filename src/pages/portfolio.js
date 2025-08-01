import HeaderPhoto from "../components/headerPhoto";
import Navbar from "../components/navbar";

import headshotPhoto from "../resources/headshot.jpeg";

function Portfolio() {
  return (
    <div>
      <Navbar />
      <HeaderPhoto photo={headshotPhoto} altText="Headshot of Sydney" />
      <h1>Portfolio</h1>
      <p>This is the Portfolio page.</p>
    </div>
  );
}

export default Portfolio;
