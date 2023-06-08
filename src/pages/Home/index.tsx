import { motion } from "framer-motion";
import backgroundLogo from "../../assets/background.jpg";
import gettingmarried from "../../assets/gettingmarried.png";

import "@fontsource/pacifico";
type Props = {};

export default function Home({}: Props) {
  return (
    <section
      id="home"
      className="flex flex-col items-center justify-center bg-no-repeat bg-cover h-screen bg-top bg-fixed  "
      style={{
        backgroundImage: `url(${backgroundLogo})`,
        backgroundAttachment: "fixed",
      }}
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.2, duration: 1.5 }}
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div className="font-pacifico text-white text-[35px] text-center font-thin mb-5">
          <h1 className="">You're Invited</h1>
        </div>
        <div className="">
          <img
            src={gettingmarried}
            alt="getting-married"
            className="h-[100px] "
          />
        </div>
        <div>
          <h2 className="text-center  text-white text-[15px] mt-8 font-sans">
            - J A N U A R Y / 2 8 T H / 2 0 2 5 -
          </h2>
        </div>
      </motion.div>
    </section>
  );
}
