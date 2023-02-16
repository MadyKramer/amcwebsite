import bannerPicture from "../assets/manonabench.jpg";

const Banner = () => {
  return (
    <section className="banner">
      <img
        src={bannerPicture}
        alt="homme sur un banc"
        className="banner__img"
      ></img>

      <h1 className="banner__quote">
        À m'asseoir sur un banc 5 minutes avec toi...{" "}
      </h1>
    </section>
  );
};
export default Banner;
