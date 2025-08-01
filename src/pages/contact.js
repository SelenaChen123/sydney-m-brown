import HeaderPhoto from "../components/headerPhoto";
import Navbar from "../components/navbar";

import headshotPhoto from "../resources/headshot.jpeg";

function Contact() {
  return (
    <div>
      <Navbar />
      <HeaderPhoto photo={headshotPhoto} altText="Headshot of Sydney" />
      <h1>Contact</h1>
      <p>This is the Contact page.</p>
    </div>
  );
}

export default Contact;
