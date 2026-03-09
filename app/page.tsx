import Hero from "./components/ui/Hero";
import WhyChooseUs from "./components/ui/WhyChooseus";
import Vision from "./components/ui/Vision";
import Offering from "./components/ui/Offering";
import Cta from "./components/ui/Cta";
import Instagram from "./components/ui/Instagram";
import Brands from "./components/ui/Brands";

export default function Home() {
    return (
        <>
            <Hero />
            <WhyChooseUs />
            <Offering />
            <Vision />
            <Brands />
            <Cta />
            <Instagram />
        </>
    );
}
