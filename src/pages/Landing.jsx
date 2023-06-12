import Spline from '@splinetool/react-spline';
import './Landing.css';
import bg from '../lib/assets/landing-bg.jpg';
import { Fade } from 'react-reveal';
import CourseData from '../lib/data/LandingData.json'
import LandingCoursesSlider from '../components/sliders/LandingCoursesSlider';

export default function Landing() {
  const courseSkill = CourseData.coursesInfo;
  return (
    <>
      <nav className="w-full h-20 absolute z-20 flex items-center justify-around mt-2">
        <a
          href="/home"
          className="text-d-accent text-3xl font-bold prompt md w-36 text-center">
          LIBELLUS
        </a>
        <div className="flex gap-6 text-lg text-white">
          <button>Our Courses</button>
          <button>Features</button>
          <button>Resources</button>
          <button >About Us</button>
        </div>
        <div className="text-white border-2 border-white px-2 py-2 rounded-full flex w-36 justify-center gap-2">
          <div>Start Now</div>
          <img
            width="24"
            height="24"
            src="https://img.icons8.com/material/24/FFFFFF/right--v1.png"
            alt="right--v1"
          />
        </div>
      </nav>
      <div className="">
        <img
          src={bg}
          alt=""
          className="fixed w-full opacity-50 z-0"
        />
        <div className="h-screen w-full">
          <div className='relative top-32 gap-4 flex flex-col'>
            <h1 className="text-d-text font-bold text-7xl z-10 w-full grad-overlay text-center">
              Become an Academic Weapon. Now.
            </h1>
            <h1 className="text-gray-300 w-full text-center text-xl">
              Learn from the best, to be the best.
            </h1>
          </div>
          

          <div className=" absolute top-72 text-white flex justify-center w-full gap-4">
            <div className="bg-d-accent rounded-full px-6 py-3 text-xl">Discover more</div>
          </div>

          {/* <div className="w-full h-full absolute top-52 z-0">
          <Spline scene="https://prod.spline.design/ILZErXm5hwv69x87/scene.splinecode" />
          </div> */}
        </div>
        <Fade
          bottom
          cascade>
          <div className="w-full h-fit flex justify-center mt-40 z-20 absolute gap-16 font-bold opacity-20">
            <div className="flex flex-col items-center gap-2 ">
              <div className="text-white text-5xl">20+</div>
              <div className="text-gray-300 text-xl font-semibold">Languages</div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="text-white text-5xl">500.000+</div>
              <div className="text-gray-300 text-xl font-semibold">Over Achievers</div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="text-white text-5xl">3000+</div>
              <div className="text-gray-300 text-xl font-semibold">Courses</div>
            </div>
          </div>
        </Fade>
        <Fade bottom>
          <div className=" w-full mt-80 px-20 absolute">
            <div className="glass w-full h-[450px] rounded-[100px] flex items-center">
              <div className="mx-20 text-white ">
                <div className="text-2xl xl mb-4">Our Courses</div>
                <div className="text-7xl font-bold flex flex-col space-y-2 grad-overlay-down">
                  <div>Every.</div>
                  <div>Single.</div>
                  <div>One.</div>
                </div>
              </div>
              <div className='mr-20 w-fit h-fit overflow-hidden rounded-xl'>
                  <LandingCoursesSlider courses={courseSkill}/>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </>
  );
}
