type Props = {};

export default function Navbar({}: Props) {
  const flexBetween = "flex ";

  return (
    <nav className="bg-white  top-0 w-full z-10">
      <div className={`${flexBetween} mx-auto `}>
        <div
          className={`${flexBetween}  gap-10 text-black  px-3 py-10 rounded-md text-sm font-medium font-sans  mx-auto`}
        >
          <a href="#" className=" hover:text-red-400">
            HOME
          </a>
          <a href="#" className=" hover:text-red-400">
            STORY
          </a>
          <a href="#" className=" hover:text-red-400">
            WHERE & WHEN
          </a>
          <a href="#" className=" hover:text-red-400">
            GALLERY
          </a>
          <a href="#" className=" hover:text-red-400">
            EVENTS
          </a>
          <a href="#" className=" hover:text-red-400">
            GROOMSMEN
          </a>
          <a href="#" className=" hover:text-red-400">
            BRIDESMAID
          </a>
          <a href="#" className=" hover:text-red-400">
            RSVP
          </a>
        </div>
      </div>
    </nav>
  );
}
