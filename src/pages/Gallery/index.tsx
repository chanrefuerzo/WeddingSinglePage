import image1 from "../../assets/image1.jpg";
import image2 from "../../assets/image2.jpg";
import image3 from "../../assets/image3.jpg";
import image4 from "../../assets/image4.jpg";
import image5 from "../../assets/image5.jpg";
import image6 from "../../assets/image6.jpg";
import image7 from "../../assets/image7.jpg";
import image8 from "../../assets/image8.jpg";
import image9 from "../../assets/image9.jpg";

type Props = {};

export default function index({}: Props) {
  return (
    <section id="gallery" className="pb-20">
      <div className="mx-auto w-3/6 flex justify-center items-center mt-32">
        <div className="text-center">
          <h1 className="text-5xl">Our Gallery</h1>
          <h1 className="mt-10 text-gray-500">
            Ladies and gentlemen, welcome to this beautiful Prenup gallery,
            where love and art intertwine. As we step into this exhibition, we
            witness the culmination of two souls capturing their unique love
            story in every frame. Each photograph tells a tale of romance,
            passion, and the promise of a lifetime together, reminding us that
            true love is a work of art. Enjoy the gallery and may it inspire you
            to cherish your own love story with the same beauty and joy.
          </h1>
        </div>
      </div>
      <div className="flex mx-auto w-4/6 justify-center gap-16 mt-20">
        <div className="border-[15px] bg-white border-white relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
          <img
            className="h-[350px] max-w-xs transition duration-300 ease-in-out hover:scale-125"
            src={image1}
            alt="image1"
          />
        </div>
        <div className="border-[15px] bg-white border-white relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
          <img
            className="h-[350px] max-w-xs transition duration-300 ease-in-out hover:scale-125"
            src={image2}
            alt="image2"
          />
        </div>
        <div className="border-[15px] bg-white border-white relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
          <img
            className="h-[350px] max-w-xs transition duration-300 ease-in-out hover:scale-125"
            src={image3}
            alt="image3"
          />
        </div>
      </div>
      <div className="flex mx-auto w-4/6 justify-center gap-16 mt-10">
        <div className="border-[15px] bg-white border-white relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
          <img
            className="h-[350px] max-w-xs transition duration-300 ease-in-out hover:scale-125"
            src={image4}
            alt="image4"
          />
        </div>
        <div className="border-[15px] bg-white border-white relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
          <img
            className="h-[350px] max-w-xs transition duration-300 ease-in-out hover:scale-125"
            src={image5}
            alt="image5"
          />
        </div>
        <div className="border-[15px] bg-white border-white relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
          <img
            className="h-[350px] max-w-xs transition duration-300 ease-in-out hover:scale-125"
            src={image6}
            alt="image6"
          />
        </div>
      </div>
      <div className="flex mx-auto w-4/6 justify-center gap-16 mt-10">
        <div className="border-[15px] bg-white border-white relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
          <img
            className="h-[350px] max-w-xs transition duration-300 ease-in-out hover:scale-125"
            src={image7}
            alt="image7"
          />
        </div>
        <div className="border-[15px] bg-white border-white relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
          <img
            className="h-[350px] max-w-xs transition duration-300 ease-in-out hover:scale-125"
            src={image8}
            alt="image8"
          />
        </div>
        <div className="border-[15px] bg-white border-white relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
          <img
            className="h-[350px] max-w-xs transition duration-300 ease-in-out hover:scale-125"
            src={image9}
            alt="image9"
          />
        </div>
      </div>
    </section>
  );
}
