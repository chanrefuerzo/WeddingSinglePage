import image1 from "../../assets/image1.jpg";
import separator from "../../assets/separator.png";
import { motion } from "framer-motion";

type Props = {};

export default function Story({}: Props) {
  return (
    <section id="story" className="  bg-gray-100 flex justify-center  pb-20">
      <div className="flex items-center mx-auto w-3/6">
        <div className=" text-center mt-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.5 }}
            transition={{ duration: 1 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <h1 className="text-5xl">Our Story</h1>
            <h1 className="mt-8  text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              ultrices malesuada ante quis pharetra. Nullam notn bibendum dolor.
              Ut vel turpis accumsan, efficitur dolor fermentum, tincidunt
              metus. Etiam ut ultrices nibh. Etiam aliquam mauris non hendrerit
              faucibus. Proin pulvinar congue ex, vitae
            </h1>
          </motion.div>

          <div className="mt-28 grid grid-cols-9 gap-4  justify-between">
            <div className="col-span-3 text-left">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.5 }}
                transition={{ delay: 0.2, duration: 1 }}
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <img
                  className="h-auto border-[15px] border-white "
                  src={image1}
                  alt="image1"
                />
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.5 }}
                transition={{ delay: 0.2, duration: 1 }}
                variants={{
                  hidden: { opacity: 0, x: 50 },
                  visible: { opacity: 1, x: 0 },
                }}
                className="mt-24"
              >
                <h1 className="text-3xl">Our First Met</h1>
                <h1 className="mt-5  text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer ultrices malesuada ante quis pharetra. Nullam notn
                  bibendum dolor. Ut vel turpis accumsan, efficitur dolor
                  fermentum, tincidunt metus. Etiam ut ultrices nibh. Etiam
                  aliquam mauris non hendrerit faucibus. Proin pulvinar congue
                  ex, vitae commodo. Phasellus condimentum, mi ut sodales
                  gravida.
                </h1>
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.5 }}
                transition={{ delay: 0.2, duration: 1 }}
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <img
                  className="h-auto mt-24 border-[15px] border-white"
                  src={image1}
                  alt="image1"
                />
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.5 }}
                transition={{ delay: 0.2, duration: 1 }}
                variants={{
                  hidden: { opacity: 0, x: 50 },
                  visible: { opacity: 1, x: 0 },
                }}
                className="mt-24"
              >
                <h1 className="text-3xl">Our First Met</h1>
                <h1 className="mt-5  text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer ultrices malesuada ante quis pharetra. Nullam notn
                  bibendum dolor. Ut vel turpis accumsan, efficitur dolor
                  fermentum, tincidunt metus. Etiam ut ultrices nibh. Etiam
                  aliquam mauris non hendrerit faucibus. Proin pulvinar congue
                  ex, vitae commodo. Phasellus condimentum, mi ut sodales
                  gravida.
                </h1>
              </motion.div>
            </div>
            <div className="col-span-3">
              <img className="h-auto" src={separator} alt="image1" />
            </div>
            <div className="col-span-3 text-left mt-24">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.5 }}
                transition={{ delay: 0.2, duration: 1 }}
                variants={{
                  hidden: { opacity: 0, x: 50 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <h1 className="text-3xl">Our First Met</h1>
                <h1 className="mt-5  text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer ultrices malesuada ante quis pharetra. Nullam notn
                  bibendum dolor. Ut vel turpis accumsan, efficitur dolor
                  fermentum, tincidunt metus. Etiam ut ultrices nibh. Etiam
                  aliquam mauris non hendrerit faucibus. Proin pulvinar congue
                  ex, vitae commodo. Phasellus condimentum, mi ut sodales
                  gravida.
                </h1>
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.5 }}
                transition={{ delay: 0.2, duration: 1 }}
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <img
                  className="h-auto mt-24 border-[15px] border-white"
                  src={image1}
                  alt="image1"
                />
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.5 }}
                transition={{ delay: 0.2, duration: 1 }}
                variants={{
                  hidden: { opacity: 0, x: 50 },
                  visible: { opacity: 1, x: 0 },
                }}
                className="mt-24"
              >
                <h1 className="text-3xl">Our First Met</h1>
                <h1 className="mt-5  text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer ultrices malesuada ante quis pharetra. Nullam notn
                  bibendum dolor. Ut vel turpis accumsan, efficitur dolor
                  fermentum, tincidunt metus. Etiam ut ultrices nibh. Etiam
                  aliquam mauris non hendrerit faucibus. Proin pulvinar congue
                  ex, vitae commodo. Phasellus condimentum, mi ut sodales
                  gravida.
                </h1>
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.5 }}
                transition={{ delay: 0.2, duration: 1 }}
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <img
                  className="h-auto mt-24 border-[15px] border-white "
                  src={image1}
                  alt="image1"
                />
              </motion.div>
            </div>
          </div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.5 }}
            transition={{ delay: 0.2, duration: 1 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <h1 className="text-2xl mt-28">
              AND TODAY... WE ARE GETTING MARRIED
            </h1>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
