import "./headerPhoto.css";

function HeaderPhoto({ photo, altText }) {
  return (
    <>
      <img src={photo} alt={altText} id="header-photo"></img>
    </>
  );
}

export default HeaderPhoto;
