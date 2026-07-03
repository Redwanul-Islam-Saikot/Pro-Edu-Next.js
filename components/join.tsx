export default function ReadyToJoin() {
  return (
    <section className="mx-auto mt-16 w-full max-w-[1320px] rounded-xl bg-[#289BDE] px-6 py-10 sm:px-8 sm:py-12 md:flex md:items-center md:justify-between md:gap-8">
      <div className="max-w-full md:max-w-[560px]">
        <h2 className="font-poppins font-semibold text-3xl leading-[42px] text-white sm:text-4xl md:text-[45px] md:leading-[60px]">
          Ready to join?
        </h2>
        <p className="mt-3 text-base leading-7 text-[#F4F4F4] sm:text-lg sm:leading-8">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
      </div>

      <button className="inline-flex rounded-md bg-white px-6 py-4 text-base font-semibold text-[#289BDE] transition hover:bg-slate-100 sm:px-8 sm:text-lg">
        Register Now
      </button>
    </section>
  );
}
