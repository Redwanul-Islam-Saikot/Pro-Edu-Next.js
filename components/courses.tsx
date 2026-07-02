import Image from "next/image";
import React from "react";

const courses = [
  {
    title: "Fundamental Of UI/UX Design",
    description:
      "Some quick example text to build on the card title and make up the bulk of the card.",
    price: "20$",
    image: "/courses1.png",
  },
  {
    title: "Javascript Basic to advanced",
    description:
      "Some quick example text to build on the card title and make up the bulk of the card.",
    price: "20$",
    image: "/courses4.png",
  },
  {
    title: "Fullstack Web Development",
    description:
      "Some quick example text to build on the card title and make up the bulk of the card.",
    price: "20$",
    image: "/courses2.png",
  },
  {
    title: "Digital Marketing",
    description:
      "Some quick example text to build on the card title and make up the bulk of the card.",
    price: "20$",
    image: "/courses5.png",
  },
  {
    title: "Photography Basic Rules",
    description:
      "Some quick example text to build on the card title and make up the bulk of the card.",
    price: "20$",
    image: "/courses3.png",
  },
  {
    title: "Motion Graphics",
    description:
      "Some quick example text to build on the card title and make up the bulk of the card.",
    price: "20$",
    image: "/courses6.png",
  },
];

export default function PopularCourses() {
  return (
    <div className="flex flex-col items-center p-4 space-y-4">
      <div className="text-center text-4xl font-bold">
        Discover Our Popular Courses
      </div>
      <div className="text-center text-gray-500 text-lg max-w-2xl">
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout.
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl">
        {courses.map((course) => (
          <div
            key={course.title}
            className="flex items-center space-x-4 border border-gray-200 rounded-md p-4"
          >
            <div className="relative w-[200px] h-[200px] flex-shrink-0 rounded-md overflow-hidden">
              <Image
                src={course.image}
                alt={course.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col space-y-1">
              <div className="text-2xl font-semibold text-gray-700">
                {course.title}
              </div>
              <div className="text-gray-500">{course.description}</div>
              <div className="text-blue-500 font-semibold">
                Price : {course.price}
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="bg-blue-500 text-white font-semibold rounded-md px-8 py-3">
        See More Courses
      </button>
    </div>
  );
}
