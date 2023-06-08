import secondbackground from "../../assets/secondbackground.jpg";

type Props = {};

export default function Herogroom({}: Props) {
  return (
    <section
      id="hero"
      className="flex flex-col items-center justify-center bg-no-repeat bg-cover bg-center h-screen bg-fixed "
      style={{
        backgroundImage: `url(${secondbackground})`,
        backgroundAttachment: "fixed",
      }}
    ></section>
  );
}
