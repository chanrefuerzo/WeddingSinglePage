import herotwo from "../../assets/herotwo.jpg";

type Props = {};

export default function HeroThird({}: Props) {
  return (
    <section
      id="hero"
      className="flex flex-col items-center justify-center bg-no-repeat bg-cover bg-center h-screen bg-fixed "
      style={{
        backgroundImage: `url(${herotwo})`,
        backgroundAttachment: "fixed",
      }}
    >
      <div className="mx-auto w-2/6  justify-center text-center items-center">
        <h1 className="text-5xl">ARE YOU ATTENDING?</h1>
        <h1 className="mt-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          ultrices malesuada ante quis pharetra. Nullam non bibendum dolor. Ut
          vel turpis accumsan, efficitur dolor fermentum, tincidunt metus. Etiam
          ut ultrices nibh. Etiam aliquam mauris non hendrerit faucibus. Proin
          pulvinar congue ex, vitae commodo. Phasellus condimentum, mi ut
          sodales gravida.
        </h1>
      </div>
    </section>
  );
}
