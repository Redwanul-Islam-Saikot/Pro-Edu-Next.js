import Image from "next/image";

const stats = [
  { value: "3.2K+", label: "Online Course" },
  { value: "600+", label: "Expert member" },
  { value: "1k+", label: "Rating & Review" },
];

export default function ExploreInstitute() {
  return (
    <section className="mx-auto grid w-full max-w-330 overflow-hidden rounded-xl bg-[#F4FAFD] grid-cols-1 md:grid-cols-2">
      <div className="relative w-full h-80 md:h-auto">
        <Image
          src="/institude.png"
          alt="Student with laptop"
          fill
          className="object-cover"
        />
      </div>

      <div className="flex flex-col justify-center px-6 py-10 sm:px-10 sm:py-14 md:px-16">
        <h2 className="font-poppins font-semibold text-3xl leading-tight text-[#1D1D1D] sm:text-4xl md:text-[45px] md:leading-15">
          Explore The elearning Institute
        </h2>

        <p className="font-poppins font-normal text-base leading-7 text-[#777777] mt-6 sm:text-lg sm:leading-8">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don&apos;t look even slightly
          believable. If you are going to use a passage of Lorem Ipsum, you need
          to be sure.
        </p>

        <p className="font-poppins font-normal text-base leading-7 text-[#777777] mt-4 sm:text-lg sm:leading-8">
          Anything embarrassing hidden in the middle of text. All the Lorem
          Ipsum generators on the Internet tend to repeat predefined.
        </p>

        <div className="mt-8 flex flex-wrap gap-6">
          {stats.map((stat) => (
            <div key={stat.label} className="min-w-[140px] flex flex-col">
              <span className="font-poppins font-semibold text-3xl leading-tight text-[#1D1D1D] sm:text-[45px] sm:leading-[60px]">
                {stat.value}
              </span>
              <span className="font-poppins font-medium text-base leading-6 text-[#777777] sm:text-[20px] sm:leading-[30px]">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        <button className="mt-8 inline-flex w-fit rounded-md bg-[#289BDE] px-6 py-3 text-base font-semibold text-white transition hover:bg-blue-600 sm:px-8 sm:text-[20px]">
          Read More
        </button>
      </div>
    </section>
  );
}
