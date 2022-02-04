type Image = {
  src: string;
  alt: string;
};

export default function ImgWorksForestiaLogo() {
  const image: Image = {
    src: "/images/forestiaLogo.png",
    alt: "Forestia_Logo",
  };

  return <img src={image.src} alt={image.alt} />;
}
