type SectionHeaderProps = {
  heading: string;
  paragraph?: string;
  headingColor?: string;
  paragraphColor?: string;
};

export default function SectionHeader({
  heading,
  paragraph = "",
  headingColor = "text-[#1a3a2e]",
  paragraphColor = "text-gray-600",
}: SectionHeaderProps) {
  return (
    <div className="text-center mb-16">
      <h2 className={`text-3xl md:text-4xl font-semibold mb-4 ${headingColor}`}>
        {heading}
      </h2>

      {paragraph && (
        <p className={`text-lg mb-8 ${paragraphColor}`}>
          {paragraph}
        </p>
      )}
    </div>
  );
}
