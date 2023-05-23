export default function LandingCoursesCard({ courses }) {
  return (
    <>
      <div className="w-[400px] h-80 text-white bg-d-primary/20 rounded-[20px] p-4 ">
        <div className="w-full h-4/5 rounded-xl">
          <img
            src={courses.bannerImage}
            alt={courses.skill}
            className="w-full h-full object-cover rounded-xl opacity-75"
          />
        </div>
        <div className="w-full mt-4 text-2xl text-center">{courses.skill}</div>
      </div>
    </>
  );
}
