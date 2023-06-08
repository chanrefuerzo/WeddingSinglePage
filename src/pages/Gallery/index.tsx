import image1 from "../../assets/image1.jpg";

type Props = {};

export default function index({}: Props) {
  return (
    <section id="gallery" className="pb-20">
      <div className="mx-auto w-3/6 flex justify-center items-center mt-32">
        <div className="text-center">
          <h1 className="text-5xl">Our Gallery</h1>
          <h1 className="mt-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            ultrices malesuada ante quis pharetra. Nullam notn bibendum dolor.
            Ut vel turpis accumsan, efficitur dolor fermentum, tincidunt metus.
            Etiam ut ultrices nibh. Etiam aliquam mauris non hendrerit faucibus.
            Proin pulvinar congue ex, vitae
          </h1>
        </div>
      </div>
      <div className="flex mx-auto w-4/6 justify-center gap-16 mt-20">
        <div className="border-[15px] bg-white border-white">
          <img className="h-[350px]  " src={image1} alt="image1" />
        </div>
        <div className="border-[15px] bg-white border-white">
          <img className="h-[350px]  " src={image1} alt="image1" />
        </div>
        <div className="border-[15px] bg-white border-white">
          <img className="h-[350px]  " src={image1} alt="image1" />
        </div>
      </div>
      <div className="flex mx-auto w-4/6 justify-center gap-16 mt-10">
        <div className="border-[15px] bg-white border-white">
          <img className="h-[350px]  " src={image1} alt="image1" />
        </div>
        <div className="border-[15px] bg-white border-white">
          <img className="h-[350px]  " src={image1} alt="image1" />
        </div>
        <div className="border-[15px] bg-white border-white">
          <img className="h-[350px]  " src={image1} alt="image1" />
        </div>
      </div>
      <div className="flex mx-auto w-4/6 justify-center gap-16 mt-10">
        <div className="border-[15px] bg-white border-white">
          <img className="h-[350px]  " src={image1} alt="image1" />
        </div>
        <div className="border-[15px] bg-white border-white">
          <img className="h-[350px]  " src={image1} alt="image1" />
        </div>
        <div className="border-[15px] bg-white border-white">
          <img className="h-[350px]  " src={image1} alt="image1" />
        </div>
      </div>
    </section>
  );
}
