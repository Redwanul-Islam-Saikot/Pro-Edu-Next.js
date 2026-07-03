const companies = [
  { name: "Coursera", color: "#002979" },
  { name: "Udemy", color: "#EC5250" },
  { name: "FedEx", color: "#FF5A00" },
  { name: "Education UK", color: "#284890" },
  { name: "Elecom", color: "#014099" },
  { name: "Indeed", color: "#2164F3" },
];

export default function TrustedCompanies() {
  return (
    <section className="mx-auto w-full max-w-[1320px] py-20 px-4 sm:px-6">
      <h2 className="mb-12 text-center font-poppins text-3xl font-semibold leading-[42px] text-[#1D1D1D] sm:text-4xl sm:leading-[52px]">
        Trusted by over 800+ companies
      </h2>

      <div className="flex flex-wrap items-center justify-center gap-6">
        {companies.map((company) => (
          <span
            key={company.name}
            className="font-poppins text-xl font-bold whitespace-nowrap sm:text-2xl"
            style={{ color: company.color }}
          >
            {company.name}
          </span>
        ))}
      </div>
    </section>
  );
}
