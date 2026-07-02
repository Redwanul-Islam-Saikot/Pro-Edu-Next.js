export default function ReadyToJoin() {
  return (
    <section className="max-w-[1320px] mx-auto bg-[#289BDE] rounded-md px-8 md:px-16 py-12 flex flex-col md:flex-row items-center justify-between gap-8">
      {/* Left content */}
      <div className="max-w-[528px]">
        <h2 className="font-poppins font-semibold text-[45px] leading-[60px] text-white">
          Ready to join?
        </h2>
        <p className="font-poppins font-normal text-[16px] leading-[30px] text-[#F4F4F4] mt-2">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
      </div>

      {/* Register button */}
      <button className="bg-white text-[#289BDE] font-poppins font-semibold text-[20px] px-8 py-4 rounded-md whitespace-nowrap">
        Register Now
      </button>
    </section>
  );
}
