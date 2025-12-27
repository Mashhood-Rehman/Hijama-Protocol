import AffiliateProgram from "./components/(homeComponents)/AffiliateProgram";
import AuthoritySection from "./components/(homeComponents)/AuthoritySection";
import EducationCommunity from "./components/(homeComponents)/EducationCommunity";
import FinalConversion from "./components/(homeComponents)/FinalConversion";
import Hero from "./components/(homeComponents)/Hero";
import ProductDeepDive from "./components/(homeComponents)/ProductDeepDive";
import ProductHighlights from "./components/(homeComponents)/ProductHighlights";
import StickyProductBar from "./components/(homeComponents)/StickyProductBar";
import StoreBundles from "./components/(homeComponents)/StoreBundles";
import Testimonials from "./components/(homeComponents)/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <StickyProductBar />
      <div className="max-w-7xl w-full text-center mx-auto bg-white text-black space-y-24 md:py-24 py-12  md:px-12 px-4">
        <AuthoritySection />
        <ProductHighlights />
        <ProductDeepDive />
        <StoreBundles />
        <EducationCommunity />
        <Testimonials />
        <AffiliateProgram />
        <FinalConversion />
      </div>
    </>
  )
}