import image1 from "../../assets/image1.jpg";

type Props = {};

export default function Groomsmen({}: Props) {
  return (
    <section id="groomsmen" className=" bg-gray-100 ">
      <div className="text-center w-3/6 mx-auto mt-20 pb-20">
        <div className="mt-10 text-5xl">GROOMSMEN</div>
        <div className="mt-10 text-gray-500 font-arvo">
          These fine gentlemen have been meticulously chosen to stand by the
          groom's side, ensuring that he doesn't run away before saying "I do."
          With their unmatched ability to keep the groom in line and their
          expert skills in celebrating, they are the secret weapons to making
          this wedding day unforgettable. So raise your glasses and let's toast
          to the groomsmen, the unsung heroes who keep the party going and make
          sure the groom arrives on time, hopefully without any embarrassing
          stories to share later!
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
