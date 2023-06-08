import line from "../../assets/line.png";
import Map from "./Map";
import { motion } from "framer-motion";

type Props = {};

export default function index({}: Props) {
  const mapCenter = {
    lat: 7.0858701,
    lng: 125.6184482,
  };
  return (
    <section id="where" className="pb-20">
      <div className="mx-auto w-2/6 flex justify-center items-center mt-32">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.5 }}
          transition={{ duration: 1 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          className="text-center"
        >
          <h1 className="text-5xl">
            WHERE <span className="text-red-500">&</span> WHERE
          </h1>
          <h1 className="mt-10 text-gray-500">
            We invite you to join us on a joyous journey as we unite in
            matrimony. Nestled amidst the breathtaking landscapes of nature, our
            wedding destination promises an unforgettable experience filled with
            love, laughter, and cherished memories.
          </h1>
        </motion.div>
      </div>
      <div className=" mx-auto w-12/12">
        <div className="  flex justify-center mt-20 w-8/12 mx-auto">
          <img src={line} alt="line" />
        </div>
        <div className="flex items-center justify-center gap-32 ">
          <div>
            <h1>AUGUST / 19TH / 2015</h1>
          </div>
          <div>
            <h1>|</h1>
          </div>
          <div>
            <h1>FIVE THIRTY IN THE EVENING</h1>
          </div>
          <div>
            <h1>|</h1>
          </div>
          <div>
            <h1>ST. FOXEGAN CHURCH</h1>
          </div>
        </div>
        <div className="  flex justify-center w-8/12 mx-auto">
          <img src={line} alt="line" />
        </div>
        <div className="grid grid-cols-4 mx-auto w-4/6 mt-10 gap-10">
          <div className="col-span-2">
            <div>
              <h1 className="text-xl">CEREMONY</h1>
              <h1 className="text-gray-500 font-sans mt-3">
                The ceremony will take place at the Sacred Heart of Jesus,
                situated in the Poblacion District of Davao City, specifically
                in Bo. Obrero, Davao del Sur. The ceremony is scheduled for 3pm
                in the afternoon and will be officiated by Father Bong Gonzaga.
              </h1>
            </div>
            <div className="mt-10">
              <h1 className="text-xl">RECEPTION</h1>
              <h1 className="text-gray-500 font-sans mt-3">
                The reception is going to be hosted at the elegant Acacia Hotel,
                specifically in Ballroom 3, located at J.P. Laurel Avenue in
                Agdao, Davao City, within the beautiful province of Davao del
                Sur. The festivities are scheduled to commence at 5pm, providing
                a delightful atmosphere for guests to celebrate and enjoy the
                evening's festivities.
              </h1>
            </div>
            <div className="mt-10">
              <h1 className="text-xl">ACCOMODATION</h1>
              <h1 className="text-gray-500 font-sans mt-3">
                The reception is set to take place at the prestigious Acacia
                Hotel, an exquisite venue reserved exclusively for the groomsmen
                and bridesmaids. It will be a memorable evening held the night
                before the ceremony, serving as the perfect opportunity for
                capturing enchanting moments and creating a same-day edit video
                presentation. This special gathering will add an extra touch of
                charm to the wedding festivities, allowing everyone to relish in
                the joyous atmosphere and create lasting memories
              </h1>
            </div>
          </div>
          <div className="col-span-2">
            <Map center={mapCenter} zoom={100} />
          </div>
        </div>
      </div>
    </section>
  );
}
