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
    <div className="flex flex-col items-center px-4 py-12 sm:px-6 lg:px-8">
      <div className="text-center text-3xl font-bold sm:text-4xl">
        Discover Our Popular Courses
      </div>
      <div className="text-center text-gray-500 text-base max-w-2xl mt-3 sm:text-lg">
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout.
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 w-full max-w-5xl">
        {courses.map((course) => (
          <div
            key={course.title}
            className="flex flex-col gap-4 rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md md:flex-row md:items-center"
          >
            <div className="relative w-full overflow-hidden rounded-xl bg-slate-100 h-[240px] md:w-[200px] md:h-[200px]">
              <Image
                src={course.image}
                alt={course.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-1 flex-col justify-between gap-3">
              <div>
                <h3 className="text-2xl font-semibold text-gray-700">
                  {course.title}
                </h3>
                <p className="mt-2 text-gray-500">{course.description}</p>
              </div>
              <div className="text-blue-500 font-semibold">
                Price : {course.price}
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="mt-8 rounded-md bg-blue-500 px-8 py-3 text-base font-semibold text-white transition hover:bg-blue-600 sm:text-lg">
        See More Courses
      </button>
    </div>
  );
}
