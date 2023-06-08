import { motion } from "framer-motion";
import chan from "../../assets/chan.jpg";
import glesly from "../../assets/glesly.jpg";

type Props = {};

export default function Us({}: Props) {
  return (
    <section id="us" className=" bg-gray-100 pb-20">
      <div className=" items-center grid grid-cols-4 gap-20 mx-auto w-3/6 pt-28 ">
        <div className="col-span-2">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            className="max-w-md max-h-[80%] border-[15px] border-white  transition-transform duration-300 transform hover:scale-110"
          >
            {" "}
            <img src={chan} alt="groom" />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="mt-20 text-center">
              <h2 className="text-5xl">Chan</h2>
            </div>

            <div className="text-center">
              {" "}
              <h1 className="font-pacifico ">- pretty Boii -</h1>
            </div>
            <div className="mt-10 text-center text-gray-500">
              {" "}
              Introducing an irresistible gentleman who captivates with his
              striking looks and undeniable charm. With a magnetic presence and
              a smile that radiates warmth, he effortlessly commands attention
              wherever he goes. Beyond his handsome exterior, he possesses a
              genuine and compassionate heart, always ready to lend a helping
              hand and brighten someone's day. Passionate about embracing new
              experiences and connecting with others, he seeks to create
              meaningful connections that transcend superficiality{" "}
            </div>
          </motion.div>
        </div>
        <div className="col-span-2">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}
            className="max-w-md max-h-[80%] border-[15px] border-white transition-transform duration-300 transform hover:scale-110"
          >
            {" "}
            <img src={glesly} alt="groom" />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="mt-20 text-center">
              {" "}
              <h1 className="text-5xl">Glesly</h1>
            </div>
            <div className="text-center">
              {" "}
              <h1 className="font-pacifico ">- George -</h1>
            </div>
            <div className="mt-10 text-center text-gray-500">
              {" "}
              an exquisite and enchanting maid who embodies true beauty in every
              sense. With grace that flows effortlessly in her every movement,
              she captivates hearts with her radiant smile and mesmerizing eyes.
              Her inner beauty shines through, as she possesses a kind and
              nurturing spirit that brings comfort and joy to those around her.
              A true embodiment of elegance, she adorns herself with poise and
              sophistication, leaving a trail of awe wherever she walks.{" "}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
