import HeaderPhoto from "../components/headerPhoto";
import Navbar from "../components/navbar";

import headshotPhoto from "../resources/headshot.jpeg";

function Home() {
  return (
    <div>
      <Navbar />
      <HeaderPhoto photo={headshotPhoto} altText="Headshot of Sydney" />
      <h1>Hi, I'm Sydney!</h1>
      <p>This is the Home page.</p>
    </div>
  );
}

export default Home;
