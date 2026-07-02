import Image from "next/image";

const stats = [
  { value: "3.2K+", label: "Online Course" },
  { value: "600+", label: "Expert member" },
  { value: "1k+", label: "Rating & Review" },
];

export default function ExploreInstitute() {
  return (
    <section className="max-w-[1320px] mx-auto rounded-md overflow-hidden grid grid-cols-1 md:grid-cols-2 bg-[#F4FAFD]">
      {/* Left image */}
      <div className="relative w-full h-[500px] md:h-auto">
        <Image
          src="/institude.png"
          alt="Student with laptop"
          fill
          className="object-cover"
        />
      </div>

      {/* Right content */}
      <div className="flex flex-col justify-center px-8 py-16 md:px-16">
        <h2 className="font-poppins font-semibold text-[45px] leading-[60px] text-[#1D1D1D]">
          Explore The elearning Institute
        </h2>

        <p className="font-poppins font-normal text-[16px] leading-[30px] text-[#777777] mt-6">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don&apos;t look even slightly
          believable. If you are going to use a passage of Lorem Ipsum, you need
          to be sure.
        </p>

        <p className="font-poppins font-normal text-[16px] leading-[30px] text-[#777777] mt-4">
          Anything embarrassing hidden in the middle of text. All the Lorem
          Ipsum generators on the Internet tend to repeat predefined.
        </p>

        {/* Stats */}
        <div className="flex items-center gap-12 mt-8">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col">
              <span className="font-poppins font-semibold text-[45px] leading-[60px] text-[#1D1D1D]">
                {stat.value}
              </span>
              <span className="font-poppins font-medium text-[20px] leading-[30px] text-[#777777]">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <button className="mt-8 w-fit bg-[#289BDE] text-white font-poppins font-semibold text-[20px] px-8 py-3 rounded-md">
          Read More
        </button>
      </div>
    </section>
  );
}
