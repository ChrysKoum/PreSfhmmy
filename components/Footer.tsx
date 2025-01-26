// Footer.jsx
import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const Footer = () => {
  return (
    <>
      {/* Grid Background Outside Footer */}
      <div className="absolute left-0 bottom-0 w-full z-0">
        <img
          src="/footer-grid.svg"
          alt="Grid Background"
          className="w-full h-full object-cover opacity-50"
        />
      </div>
      <footer
        className="relative w-full pt-20 pb-10 mb-[100px] md:mb-5 z-10"
        id="contact"
      >
        {/* Main Content */}
        <div className="flex flex-col items-center">
          <h1 className="font-pixeloidMono heading lg:max-w-[45vw] text-center">
            Are You Ready to
            <span className="text-purple"> #ReachNewTechHeights</span>?
          </h1>
          <p className="text-white-200 md:mt-10 my-5 text-center max-w-lg">
            Join us at PreΣΦΗΜΜΥ 9 and let&apos;s tackle real-world challenges
            with innovative solutions!
          </p>

          <a href="#participants">
            <MagicButton
              title="Call for Participants"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>

        {/* Footer Bottom */}
        <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
          <p className="md:text-base text-sm md:font-normal font-light">
            Made With 💚 from team ECESCON 16
          </p>

          <div className="flex items-center md:gap-3 gap-6">
            {socialMedia.map((info) => (
              <a
                href={info.link}
                key={info.id}
                target="_blank"
                rel="noreferrer"
                className="transition-transform transform hover:scale-110"
              >
                <div className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300">
                  <img src={info.img} alt={info.name} width={20} height={20} />
                </div>
              </a>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
