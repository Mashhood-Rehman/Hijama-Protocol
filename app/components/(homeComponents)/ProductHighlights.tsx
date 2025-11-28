import Link from "next/link";
import SectionHeader from "../(common)/SectionHeader";

const productHighlights = [
  {
    name: "RÜH-ARMOR™",
    desc:
      "A multi-pillar detox system combining heavy metal binding, NAD support, immunity boosting and antioxidant synergy.",
    href: "/ruh-armor",
  },
  {
    name: "NUR-ARMOR™",
    desc:
      "Neurological support with advanced antioxidant delivery, cardiovascular stability and Dr. Delgado’s endorsed protocol.",
    href: "/nur-armor",
  },
  {
    name: "Augmented NAC™",
    desc:
      "Quantum-enhanced NAC providing 8x–40x better spike protein denaturation and oxidative defense.",
    href: "/augmented-nac",
  },
];

export default function ProductHighlights() {
  return (
    <section >
      <div>
        <SectionHeader heading="Product Highlights" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {productHighlights.map((p) => (
            <div
              key={p.name}
              className="p-6 rounded-lg  text-gray-600 border border-(--slate) bg-gray-100"
            >
              <h3 className="text-2xl font-semibold mb-3">{p.name}</h3>
              <p className="text-sm opacity-80 leading-relaxed">{p.desc}</p>

              <Link
                href={p.href}
                className="mt-4 inline-block text-(--gold) hover:underline text-sm"
              >
                Learn More →
              </Link>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
