import AuthoritySection from "./components/(homeComponents)/AuthoritySection";
import Hero from "./components/(homeComponents)/Hero";
import ProductHighlights from "./components/(homeComponents)/ProductHighlights";
import StickyProductBar from "./components/(homeComponents)/StickyProductBar";

export default function Home() {
  return (
    <>
      <Hero />
      <StickyProductBar />
      <div className="max-w-7xl w-full text-center mx-auto bg-white text-black space-y-24 py-24 px-5">
        <AuthoritySection />
        <ProductHighlights />
      </div>
    </>
  )
}