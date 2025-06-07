import react from "react";
import "../index.css";
import { Link } from "react-router-dom";

const AboutusPara = () => {
  return (
    <>
      <div className="sm:flex items-center max-w-screen-xl">
        <div className="sm:w-1/2 p-10">
          <div className="image object-center text-center ">
            <img
              src="https://t3.ftcdn.net/jpg/07/93/41/12/240_F_793411235_kRVG6X47u2Cggbr2OV2PZgnGdjPgFfe0.jpg"
              className="h-screen"
            />
          </div>
        </div>
        <div className="sm:w-1/2 p-5">
          <div className="text">
            <span className="text-gray-500 border-b-2 border-indigo-600 uppercase">
              About us
            </span>
            <h2 className="my-4 font-bold text-3xl  sm:text-4xl ">
              About <span className="text-indigo-600">Our Service</span>
            </h2>
            <p className="text-gray-700">
              HomeBite is an attempt to provide a service that connects people
              with best of their neighborhoods across various cities. We strive
              to enable local businesses to meet consumer's needs of ease and
              convenience, and, in turn, generate new ways for people to earn,
              work, and live. By providing our services to local commerce, we're
              trying to fulfill our mission to grow and empower local economies.
            </p>
            <div className="my-5">
              <Link
                to="/provider"
                className="hover:bg-indigo-500 hover:text-white-500 font-medium px-4 py-2 rounded-md bg-blue-500 text-white transition duration-300 ease-in-out"
              >
                Order Now
              </Link>
            </div>
          </div>
        </div>
      </div>

      <section className="text-gray-700 body-font">
        <div className="flex justify-center mt-10 text-4xl font-regular">
          Why Us?
        </div>
        <div className="container px-5 py-12 mx-auto">
          <div className="flex flex-wrap text-center justify-center">
            <div className="p-4 md:w-1/4 sm:w-1/2">
              <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
                <div className="flex justify-center">
                  <img
                    src="https://image3.jdomni.in/banner/13062021/58/97/7C/E53960D1295621EFCB5B13F335_1623567851299.png?output-format=webp"
                    className="w-32 mb-3"
                  />
                </div>
                <h2 className="title-font font-regular text-2xl text-gray-900">
                  Latest Milling Machinery
                </h2>
              </div>
            </div>

            <div className="p-4 md:w-1/4 sm:w-1/2">
              <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
                <div className="flex justify-center">
                  <img
                    src="https://image2.jdomni.in/banner/13062021/3E/57/E8/1D6E23DD7E12571705CAC761E7_1623567977295.png?output-format=webp"
                    className="w-32 mb-3"
                  />
                </div>
                <h2 className="title-font font-regular text-2xl text-gray-900">
                  Reasonable Rates
                </h2>
              </div>
            </div>

            <div className="p-4 md:w-1/4 sm:w-1/2">
              <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
                <div className="flex justify-center">
                  <img
                    src="https://image3.jdomni.in/banner/13062021/16/7E/7E/5A9920439E52EF309F27B43EEB_1623568010437.png?output-format=webp"
                    className="w-32 mb-3"
                  />
                </div>
                <h2 className="title-font font-regular text-2xl text-gray-900">
                  Time Efficiency
                </h2>
              </div>
            </div>

            <div className="p-4 md:w-1/4 sm:w-1/2">
              <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
                <div className="flex justify-center">
                  <img
                    src="https://image3.jdomni.in/banner/13062021/EB/99/EE/8B46027500E987A5142ECC1CE1_1623567959360.png?output-format=webp"
                    className="w-32 mb-3"
                  />
                </div>
                <h2 className="title-font font-regular text-2xl text-gray-900">
                  Expertise in Industry
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="lg:px-96 md:px-20">
        <div className="text-center font-bold text-gray-600">
          "Inception of idea and motive of our project :"
        </div>
        <p className="p-4 text-gray-600 text-md sm:text-left md:text-left text-center font-sans">
          During our time in college, we noticed a rather peculiar conundrum,
          i.e., lack of ease in dining, whether its breakfast, lunch, or dinner.
          A lot of times, our appetite and convenience were compromised with
          sparse number of messes we attend, or sometimes, sheer lack of
          awareness of different food peddlers. So, we thought of creating a
          website to showcase different messes, peddlers, and caterers in the
          locale along with a system to reserve a dine, and to apply for monthly
          subscription to a food provider.
        </p>
        <p className="text-center text-md text-gray-600 px-4 font_sans py-3">
          To provide convenience for students in searching through various food
          providers, messes, caterers, we came up with an idea to create a
          website to address these issues. This is our topic of the mini-project
          under the syllabus in fifth semester. Gratitude towards respective
          guide (if necessary).
        </p>
        <div className="text-center font-bold text-gray-600">
          "How it works :"
        </div>
        <p className="text-center text-md px-4 font-sans text-gray-600  pt-2 pb-3">
          Search for daily requirements. How it works: you type in an address;
          we tell you the tiffin providers that are available in that locale as
          well as showing you droves of pickup restaurants near you. Want to be
          more specific? Search by cuisine, tiffin provider's name or menu item.
          We'll filter your results accordingly..
        </p>
      </div>

      <div className="bg-blue-500 text-white px-4 py-6 rounded-md text-center mt-20">
        <h2 className="text-2xl font-medium mb-4">Help us improve!</h2>
        <p className="mb-4">
          We value your feedback. Please take a moment to fill out our survey
          and let us know how we can better serve you.
        </p>
        <Link
          to="/contact"
          className="bg-white text-blue-500 font-medium px-4 py-2 rounded-md hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out"
        >
          Take the survey
        </Link>
      </div>
    </>
  );
};
export default AboutusPara;
