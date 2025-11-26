import Image from "next/image";

const videos = [
  { title: "Dr. Tina Peers – Spike Proteins", thumbnail: "/v1.jpg" },
  { title: "Dr. Jess Armine – Aug NAC", thumbnail: "/v2.jpg" },
  { title: "Prof. Ricardo Delgado – Lab Analysis", thumbnail: "/v3.jpg" },
  { title: "Dr. Peter McCullough – Evidence", thumbnail: "/v4.jpg" },
];

const labMetrics = [
  { label: "Spike Protein Denaturation", value: "99%" },
  { label: "Blood Clot Dissolution", value: "68%" },
  { label: "Protection Factor vs NAC", value: "40x" },
  { label: "Vitamin C Oxidation Protection", value: "7x" },
];

const endorsements = [
  { label: "Medical Doctors", value: "12+" },
  { label: "Peer-Reviewed Studies", value: "3" },
  { label: "Patients Served", value: "5,000+" },
];

export default function AuthoritySection() {
  return (
    <section>
      <div>

        {/* Section Title */}
        <h2 className="text-4xl font-semibold mb-6 text-[#C7A86C]">
          Scientific Authority & Clinical Trust
        </h2>

        {/* Video Carousel (Static Thumbnails) */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {videos.map((v) => (
            <div
              key={v.title}
              className="bg-white p-3 rounded-md border border-[#1f3e35]"
            >
              <Image
                src={v.thumbnail}
                alt={v.title}
                width={300}
                height={180}
                className="rounded-md object-cover"
              />
              <p className="mt-3 text-sm opacity-80">{v.title}</p>
            </div>
          ))}
        </div>

        {/* Lab Results */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {labMetrics.map((m) => (
            <div
              key={m.label}
              className="bg-gray-100 border border-[#1f3e35] rounded-md p-5"
            >
              <h3 className="text-3xl font-semibold text-[#00FF66]">{m.value}</h3>
              <p className="text-xs mt-2 opacity-80">{m.label}</p>
            </div>
          ))}
        </div>

        {/* Clinical Endorsements */}
        <div className="grid grid-cols-3 gap-6 mt-16">
          {endorsements.map((e) => (
            <div key={e.label} className="text-center">
              <h3 className="text-3xl font-semibold text-[#C7A86C]">
                {e.value}
              </h3>
              <p className="text-xs opacity-80 mt-2">{e.label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
