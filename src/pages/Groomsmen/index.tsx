import image1 from "../../assets/image1.jpg";

type Props = {};

export default function Groomsmen({}: Props) {
  return (
    <section id="groomsmen" className=" bg-gray-100 ">
      <div className="text-center w-3/6 mx-auto mt-20 pb-20">
        <div className="mt-10">GROOMSMEN</div>
        <div className="mt-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          ultrices malesuada ante quis pharetra. Nullam notn bibendum dolor. Ut
          vel turpis accumsan, efficitur dolor fermentum, tincidunt metus. Etiam
          ut ultrices nibh. Etiam aliquam mauris non hendrerit faucibus. Proin
          pulvinar congue ex, vitae
        </div>
        <div className="mt-10 flex gap-14">
          <div className="border-[15px] bg-white border-white">
            <img src={image1} alt="" />
            <h1 className="mt-5 text-xl">Best Man</h1>
            <h1 className="text-gray-500">Dodong</h1>
          </div>
          <div className="border-[15px] bg-white border-white">
            <img src={image1} alt="" />
            <h1 className="mt-5 text-xl">Drafts Man</h1>
            <h1 className="text-gray-500">Dodong</h1>
          </div>
          <div className="border-[15px] bg-white border-white">
            <img src={image1} alt="" />
            <h1 className="mt-5 text-xl">Bounce Man</h1>
            <h1 className="text-gray-500">Dodong</h1>
          </div>
        </div>
        <div className="mt-10 flex gap-14">
          <div className="border-[15px] bg-white border-white">
            <img src={image1} alt="" />
            <h1 className="mt-5 text-xl">Super Man</h1>
            <h1 className="text-gray-500">Dodong</h1>
          </div>
          <div className="border-[15px] bg-white border-white">
            <img src={image1} alt="" />
            <h1 className="mt-5 text-xl">Bat Man</h1>
            <h1 className="text-gray-500">Dodong</h1>
          </div>
          <div className="border-[15px] bg-white border-white">
            <img src={image1} alt="" />
            <h1 className="mt-5 text-xl">Family Man</h1>
            <h1 className="text-gray-500">Dodong</h1>
          </div>
        </div>
        <div className="mt-10 flex gap-14">
          <div className="border-[15px] bg-white border-white">
            <img src={image1} alt="" />
            <h1 className="mt-5 text-xl">Power Man</h1>
            <h1 className="text-gray-500">Dodong</h1>
          </div>
          <div className="border-[15px] bg-white border-white">
            <img src={image1} alt="" />
            <h1 className="mt-5 text-xl">Budol Man</h1>
            <h1 className="text-gray-500">Dodong</h1>
          </div>
          <div className="border-[15px] bg-white border-white">
            <img src={image1} alt="" />
            <h1 className="mt-5 text-xl">Nice Man</h1>
            <h1 className="text-gray-500">Dodong</h1>
          </div>
        </div>
      </div>
    </section>
  );
}
