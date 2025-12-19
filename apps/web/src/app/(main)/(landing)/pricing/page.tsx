import { HeaderStatic } from "@/components/ui/HeaderStatic";
import Footer from "@/components/landing-sections/footer";
import { HashScrollHandler } from "@/components/utils/HashScrollHandler";
import { AnimatedFeaturesSection } from "./_components/AnimatedFeaturesSection";
import {
  AnimatedWhySection,
  PricingCardsSection,
} from "./_components/components";
import { opensoxFeatures, whySub } from "./_components/data";
import dynamic from "next/dynamic";

// Lazy-load testimonials section (far below-the-fold)
const TestimonialsSection = dynamic(
  () => import("./_components/components").then(mod => ({ default: mod.TestimonialsSection })),
  {
    ssr: true,
    loading: () => <div className="min-h-[80vh] border-b border-[#252525]" />
  }
);

export default function PricingPage() {
  const premiumPlanId = process.env.NEXT_PUBLIC_YEARLY_PREMIUM_PLAN_ID;
  const planIdOk =
    typeof premiumPlanId === "string" && premiumPlanId.length > 0;

  return (
    <>
      <link
        rel="preload"
        href="/__nextjs_font/geist-latin.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <HashScrollHandler />

      <main className="w-full overflow-hidden flex flex-col items-center justify-center relative">
        <HeaderStatic title="We are working on Opensox 2.0" animate={true} />

        <div className="flex flex-col bg-[#151515]/20 backdrop-blur-xl relative w-full">
          <AnimatedFeaturesSection features={opensoxFeatures} />
          <AnimatedWhySection whySub={whySub} />
          <PricingCardsSection
            planIdOk={planIdOk}
            premiumPlanId={premiumPlanId}
          />
          <TestimonialsSection />
        </div>
      </main>
      <Footer />
    </>
  );
}
