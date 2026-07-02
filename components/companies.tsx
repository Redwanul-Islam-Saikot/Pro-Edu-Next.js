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
    <section className="max-w-[1320px] mx-auto py-20 px-8">
      {/* Heading */}
      <h2 className="text-center font-poppins font-semibold text-[45px] leading-[60px] text-[#1D1D1D] mb-12">
        Trusted by over 800+ companies
      </h2>

      {/* Logos row */}
      <div className="flex flex-wrap items-center justify-between gap-8">
        {companies.map((company) => (
          <span
            key={company.name}
            className="font-poppins font-bold text-[24px] whitespace-nowrap"
            style={{ color: company.color }}
          >
            {company.name}
          </span>
        ))}
      </div>
    </section>
  );
}
