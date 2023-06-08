import { useState, useEffect } from "react";
import herotwo from "../../assets/herotwo.jpg";

type Props = {};

export default function HeroFourth({}: Props) {
  const [countdown, setCountdown] = useState({
    weeks: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2025-01-28"); // Set your target date here
    const timer = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      const weeks = Math.floor(difference / (1000 * 60 * 60 * 24 * 7));
      const days = Math.floor((difference / (1000 * 60 * 60 * 24)) % 7);
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / (1000 * 60)) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setCountdown({ weeks, days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

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
        <h1 className="font-pacifico text-white text-[35px]">Don't Miss It!</h1>
        <h1 className="flex mt-10 gap-10 justify-center">
          <div>{countdown.weeks} weeks</div>
          <div>{countdown.days} days</div>
          <div>{countdown.hours} hours</div>
          <div>{countdown.minutes} minutes</div>
          <div>{countdown.seconds} seconds</div>
        </h1>
      </div>
    </section>
  );
}
