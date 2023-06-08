import herotwo from "../../assets/herotwo.jpg";

type Props = {};

export default function HeroSecond({}: Props) {
  return (
    <section
      id="hero"
      className="flex flex-col items-center justify-center bg-no-repeat bg-cover bg-center h-screen bg-fixed "
      style={{
        backgroundImage: `url(${herotwo})`,
        backgroundAttachment: "fixed",
      }}
    ></section>
  );
}
