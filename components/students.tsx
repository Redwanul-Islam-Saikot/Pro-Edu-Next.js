import Image from "next/image";

const students = [
  {
    name: "Awlad Hossain",
    role: "UIUX Designer",
    image: "/student1.png",
  },
  {
    name: "Jannatul Islam",
    role: "Motion Design",
    image: "/student2.png",
  },
  {
    name: "Imran Hossain",
    role: "Graphic Designer",
    image: "/student3.png",
  },
  {
    name: "Nishi Akter",
    role: "Web Developer",
    image: "/student4.png",
  },
];

export default function SuccessfulStudents() {
  return (
    <section className="mx-auto w-full max-w-[1320px] py-20 px-4 sm:px-6">
      <div className="mb-12 max-w-3xl">
        <h2 className="font-poppins font-semibold text-3xl leading-[42px] text-[#1D1D1D] sm:text-4xl sm:leading-[52px]">
          Meet Our Successfull Students
        </h2>
        <p className="mt-4 text-base leading-7 text-[#777777] sm:text-lg sm:leading-8">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {students.map((student) => (
          <div
            key={student.name}
            className="overflow-hidden rounded-xl border border-[#E8E8E8] bg-white shadow-sm"
          >
            <div className="relative h-[260px] sm:h-[300px] w-full">
              <Image
                src={student.image}
                alt={student.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-5">
              <h3 className="font-poppins text-xl font-semibold text-[#4A4A4A]">
                {student.name}
              </h3>
              <p className="mt-2 text-base leading-6 text-[#777777]">
                {student.role}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <button className="rounded-md bg-[#289BDE] px-8 py-3 text-base font-semibold text-white transition hover:bg-blue-600 sm:px-10 sm:text-lg">
          View All
        </button>
      </div>
    </section>
  );
}
