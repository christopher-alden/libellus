export default function ContentCard({ courses }) {
    return (
      <div className="text-d-text bg-d-secondary w-80 h-64 rounded-md border-d-accent border-2 flex-col shadow-md mx-auto">
        <div className="w-full bg-d-accent px-4 py-2 rounded-t-md  text-md font-medium">
          {courses.difficulty}
        </div>
        <div className="p-4">
          <div className=" text-lg font-bold mb-2 line">{courses.title}</div>
          <div className="text-sm text-gray-300">{courses.description}</div>
        </div>
        <div className="absolute text-d-text text-sm font-bold p-4 bottom-0">
          {courses.lessons}<span className="font-light"> Lessons</span>
        </div>
      </div>
    );
  }
  