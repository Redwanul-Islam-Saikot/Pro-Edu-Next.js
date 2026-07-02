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
    <section className="max-w-[1320px] mx-auto py-20 px-8">
      {/* Heading */}
      <div className="max-w-[556px] mb-12">
        <h2 className="font-poppins font-semibold text-[45px] leading-[60px] text-[#1D1D1D]">
          Meet Our Successfull Students
        </h2>
        <p className="font-poppins font-normal text-[16px] leading-[30px] text-[#777777] mt-4">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
      </div>

      {/* Student Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {students.map((student) => (
          <div
            key={student.name}
            className="border border-[#E8E8E8] rounded-md overflow-hidden"
          >
            <div className="relative w-full h-[300px]">
              <Image
                src={student.image}
                alt={student.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-5">
              <h3 className="font-poppins font-semibold text-[20px] leading-[30px] text-[#4A4A4A]">
                {student.name}
              </h3>
              <p className="font-poppins font-normal text-[16px] leading-[24px] text-[#777777]">
                {student.role}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="flex justify-center mt-12">
        <button className="bg-[#289BDE] text-white font-poppins font-semibold text-[20px] px-8 py-3 rounded-md">
          View All
        </button>
      </div>
    </section>
  );
}
