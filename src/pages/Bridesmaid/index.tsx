import image1 from "../../assets/image1.jpg";

type Props = {};

export default function BridesMaid({}: Props) {
  return (
    <section id="">
      <div className="text-center w-3/6 mx-auto mt-20 pb-20">
        <div className="mt-10 text-5xl">BridesMaid</div>
        <div className="mt-10 text-gray-500 font-arvo ">
          These fabulous bridesmaids who have graciously agreed to be the
          bride's partners in crime! They've been with her through thick and
          thin, from the questionable fashion choices to the unforgettable
          adventures. Today, we celebrate not only the union of the happy couple
          but also the amazing squad of women who have mastered the art of
          balancing beauty, laughter, and occasional chaos. Let's raise our
          glasses and toast to these remarkable ladies who will continue to be
          the bride's partners in mischief and lifelong friends.
        </div>
        <div className="mt-10 flex gap-14">
          <div className="border-[15px] bg-white border-white">
            <img src={image1} alt="" />
            <h1 className="mt-5 text-xl">Best Man</h1>
            <h1 className="text-gray-500">Dodong</h1>
          </div>
          <div className="border-[15px] bg-white border-white">
            <img src={image1} alt="" />
            <h1 className="mt-5 text-xl">Best Man</h1>
            <h1 className="text-gray-500">Dodong</h1>
          </div>
          <div className="border-[15px] bg-white border-white">
            <img src={image1} alt="" />
            <h1 className="mt-5 text-xl">Best Man</h1>
            <h1 className="text-gray-500">Dodong</h1>
          </div>
        </div>
        <div className="mt-10 flex gap-14">
          <div className="border-[15px] bg-white border-white">
            <img src={image1} alt="" />
            <h1 className="mt-5 text-xl">Best Man</h1>
            <h1 className="text-gray-500">Dodong</h1>
          </div>
          <div className="border-[15px] bg-white border-white">
            <img src={image1} alt="" />
            <h1 className="mt-5 text-xl">Best Man</h1>
            <h1 className="text-gray-500">Dodong</h1>
          </div>
          <div className="border-[15px] bg-white border-white">
            <img src={image1} alt="" />
            <h1 className="mt-5 text-xl">Best Man</h1>
            <h1 className="text-gray-500">Dodong</h1>
          </div>
        </div>
        <div className="mt-10 flex gap-14">
          <div className="border-[15px] bg-white border-white">
            <img src={image1} alt="" />
            <h1 className="mt-5 text-xl">Best Man</h1>
            <h1 className="text-gray-500">Dodong</h1>
          </div>
          <div className="border-[15px] bg-white border-white">
            <img src={image1} alt="" />
            <h1 className="mt-5 text-xl">Best Man</h1>
            <h1 className="text-gray-500">Dodong</h1>
          </div>
          <div className="border-[15px] bg-white border-white">
            <img src={image1} alt="" />
            <h1 className="mt-5 text-xl">Best Man</h1>
            <h1 className="text-gray-500">Dodong</h1>
          </div>
        </div>
      </div>
    </section>
  );
}
