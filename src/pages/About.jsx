import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function About() {
  const [course, setCourse] = useState(null);
  const { category, id } = useParams();
  useEffect(() => {
    const data = require('../lib/data/CoursesData.json');
    const categoryCourses = data.courses[category];
    const foundCourse = categoryCourses.find(c => c.id === id);
    setCourse(foundCourse);
  }, [category, id]);

  if (!course) return <div>Loading...</div>;
  return (
    <div className='w-screen h-screen flex justify-center items-center text-d-text font-bold'>
      <h1>{course.title}</h1>
      <p>{course.description}</p>
    </div>
  );
}
