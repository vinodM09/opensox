"use client";
import { motion } from "framer-motion";
import { TargetIcon, CheckIcon, TerminalIcon } from "./icons";
import Image from "next/image";
import Link from "next/link";
import { useInViewAnimation } from "@/hooks/useInViewAnimation";
import { HeaderStatic } from "@/components/ui/HeaderStatic";
import { CustomButtonStatic } from "@/components/ui/CustomButtonStatic";
import { ActiveTag } from "@/components/ui/ActiveTag";
import { LazyPaymentFlow } from "@/components/payment/LazyPaymentFlow";
import { freePlanCard, premiumPlanCard, testimonials } from "./data";

interface PremiumTestimonialCardProps {
    username?: string;
    showPremium?: boolean;
}

const PremiumTestimonialCard = ({
    username = "Username",
    showPremium = true,
}: PremiumTestimonialCardProps) => {
    return (
        <div className="flex flex-col gap-2">
            <p className="text-xl">{username}</p>
            {showPremium && (
                <div className="bg-gradient-to-b from-brand-purple-light via-brand-purple to-brand-purple-dark bg-clip-text text-transparent">
                    <p>Opensox Pro</p>
                </div>
            )}
        </div>
    );
};

interface WhySubItem {
    content: string;
}

interface AnimatedWhySectionProps {
    whySub: WhySubItem[];
}

export function AnimatedWhySection({ whySub }: AnimatedWhySectionProps) {
    const [containerRef, inView] = useInViewAnimation({ threshold: 0.2 });

    return (
        <div ref={containerRef} className="h-full relative">
            <div className="py-8 border-b border-border">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{
                        duration: 0.4,
                        ease: "easeOut",
                    }}
                    className="text-center text-3xl tracking-tight font-medium"
                    style={{ willChange: 'opacity, transform' }}
                >
                    Why should you subscribe to Opensox Pro now?
                </motion.h2>
            </div>
            <div className="w-full border-b border-border">
                <div className="w-full max-w-2xl mx-auto border-b lg:border-b-0 lg:border-x border-border p-6 font-medium space-y-2">
                    {whySub.map((sub, index) => (
                        <motion.p
                            initial={{ opacity: 0, y: 15 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{
                                duration: 0.35,
                                ease: "easeOut",
                                delay: inView ? index * 0.06 : 0,
                            }}
                            key={index}
                            className="flex items-center gap-4"
                            style={{ willChange: 'opacity, transform' }}
                        >
                            <TargetIcon className="size-5 flex-shrink-0 text-brand-purple-light" />
                            {sub.content}
                        </motion.p>
                    ))}
                </div>
            </div>
        </div>
    );
}

interface PricingCardsSectionProps {
    planIdOk: boolean;
    premiumPlanId?: string;
}

export const PricingCardsSection = ({
    planIdOk,
    premiumPlanId,
}: PricingCardsSectionProps) => {
    return (
        <div className="relative border-b border-border lg:pb-10">
            <div className="flex flex-col gap-5 lg:gap-10 py-4 bg-[#151515]/20 backdrop-blur-xl h-full relative w-full overflow-hidden px-4 lg:px-10">
                {/* Background image - concentrated glow */}
                <div className="absolute inset-0 -top-72">
                    <Image
                        src="/assets/layer1.svg"
                        alt="background"
                        fill
                        priority={false}
                        loading="lazy"
                        className="w-full h-full -z-10 opacity-90"
                    />
                </div>

                <div className="mx-auto w-full max-w-[1100px] flex flex-col lg:flex-row items-stretch justify-center gap-6">
                    <FreePlanCard />
                    <ProPlanCard planIdOk={planIdOk} premiumPlanId={premiumPlanId} />
                </div>
            </div>
        </div>
    );
};

export const FreePlanCard = () => {
    return (
        <div className="py-2">
            <div className="border-border w-full mx-auto flex h-full">
                <div className="border-dashed border-border w-full lg:w-max mx-auto relative h-full">
                    <div className="w-full h-full lg:w-[500px] relative overflow-hidden mx-auto py-10 pb-14 flex flex-col rounded-3xl isolate before:absolute before:inset-0 before:rounded-3xl before:p-[1.5px] before:bg-border-gradient before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:content-['']">
                        <Image
                            src="/assets/card_bg.svg"
                            alt=""
                            fill
                            className="object-cover object-bottom w-full h-full absolute -z-10"
                        />
                        <div className="w-full border-dashed border-border px-6 lg:px-10 pb-4">
                            <div className="w-12 h-12 relative">
                                <Image
                                    src="/assets/logo_var2.svg"
                                    alt="Opensox logo"
                                    fill
                                    priority
                                    fetchPriority="high"
                                    className="object-cover size-full"
                                />
                            </div>
                        </div>

                        <div className="w-full border-dashed border-border px-6 lg:px-10 py-4">
                            <h2 className="text-6xl lg:text-[90px] lg:leading-[82px] tracking-tight font-semibold">
                                Free
                            </h2>
                        </div>

                        <div className="w-full border-dashed border-border px-6 lg:px-10 py-4">
                            <CustomButtonStatic href="/dashboard/home" className="w-full">
                                <TerminalIcon />
                                Get Started
                            </CustomButtonStatic>
                        </div>

                        <div className="w-full border-dashed border-border px-6 lg:px-10 py-4 flex flex-col gap-4 flex-1">
                            <h2 className="text-lg lg:text-xl tracking-tight text-left font-bold">
                                What you get immediately:
                            </h2>
                            <div className="space-y-3 [&>p]:flex [&>p]:items-center [&>p]:gap-2 [&>p]:font-medium">
                                {freePlanCard.whatYouGetImmediately.map((item, index) => (
                                    <p key={index}>
                                        <CheckIcon className="w-5 flex-shrink-0" strokeWidth={4} />{" "}
                                        {item}
                                    </p>
                                ))}
                            </div>
                        </div>

                        <div className="w-full border-dashed border-border px-6 lg:px-10 py-4 flex flex-col gap-4 h-[244px]">
                            <h2 className="text-lg lg:text-xl tracking-tight text-left font-bold">
                                What you get after the launch:
                            </h2>
                            <div className="space-y-3 [&>p]:flex [&>p]:items-center [&>p]:gap-2 [&>p]:font-medium">
                                {freePlanCard.whatYouGetAfterLaunch.map((item, index) => (
                                    <p key={index}>
                                        <CheckIcon className="w-5 flex-shrink-0" strokeWidth={4} />{" "}
                                        {item}
                                    </p>
                                ))}
                            </div>
                        </div>
                        <div className="bg-white mix-blend-plus-lighter absolute h-[100px] w-full blur-[50px] right-0 -bottom-20"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

interface ProPlanCardProps {
    planIdOk: boolean;
    premiumPlanId?: string;
}

export const ProPlanCard = ({ planIdOk, premiumPlanId }: ProPlanCardProps) => {
    const callbackUrl = "/pricing#pro-price-card";

    return (
        <div className="py-2">
            <div className="border-border w-full mx-auto flex h-full">
                <div className="border-dashed border-border w-full lg:w-max mx-auto relative h-full">
                    <div className="w-full h-full lg:w-[500px] relative overflow-hidden mx-auto py-10 pb-14 flex flex-col rounded-3xl isolate before:absolute before:inset-0 before:rounded-3xl before:p-[1.5px] before:bg-border-gradient before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:content-['']">
                        <Image
                            src="/assets/card_bg.svg"
                            alt=""
                            fill
                            className="object-cover object-bottom w-full h-full absolute -z-10"
                        />
                        <div className="w-full border-dashed border-border px-6 lg:px-10 pb-4">
                            <div className="w-12 h-12 relative">
                                <Image
                                    src="/assets/logo_var2.svg"
                                    alt="Opensox logo"
                                    fill
                                    priority
                                    fetchPriority="high"
                                    className="object-cover size-full"
                                />
                            </div>
                        </div>

                        <div
                            id="pro-price-card"
                            className="w-full border-dashed border-border px-6 lg:px-10 py-4"
                        >
                            <div className="flex items-center gap-4 flex-wrap">
                                <h2 className="text-6xl lg:text-[90px] lg:leading-[82px] tracking-tight font-semibold">
                                    $49{" "}
                                    <span className="text-3xl lg:text-4xl text-white-400 line-through decoration-2">
                                        $69
                                    </span>{" "}
                                    <span className="text-4xl">/ year</span>
                                </h2>
                            </div>
                            <div className="flex items-center gap-3 mt-3 flex-wrap">
                                <p className="text-lg text-white-400">(~ ₹4,410 INR)</p>
                                <span className="px-3 py-1 bg-green-500/20 border border-green-500/50 rounded-full text-green-400 text-sm font-medium">
                                    Discounted till 10 December
                                </span>
                            </div>
                        </div>

                        <div className="w-full border-dashed border-border px-6 lg:px-10 py-4">
                            {/* Lazy-loaded payment flow */}
                            <LazyPaymentFlow
                                planId={premiumPlanId ?? ""}
                                planName="Opensox Pro"
                                description="Annual Subscription"
                                buttonText={planIdOk ? "Invest" : "Unavailable"}
                                buttonClassName={`w-full max-w-[500px] mx-auto font-semibold ${planIdOk ? "" : "opacity-60 cursor-not-allowed"
                                    }`}
                                callbackUrl={callbackUrl}
                            />

                            <div className="flex justify-center mt-3">
                                <Link
                                    href="/pitch"
                                    className="text-sm text-text-tertiary hover:text-brand-purple-light transition-colors lowercase"
                                >
                                    still not sure? read my pitch to you.
                                </Link>
                            </div>
                        </div>

                        <div className="w-full border-dashed border-border px-6 lg:px-10 py-4 flex flex-col gap-4 flex-1">
                            <h2 className="text-lg lg:text-xl tracking-tight text-left font-bold">
                                What you get immediately:
                            </h2>
                            <div className="space-y-3 [&>p]:flex [&>p]:items-center [&>p]:gap-2 [&>p]:font-medium">
                                {premiumPlanCard.whatYouGetImmediately.map((item, index) => (
                                    <p key={index}>
                                        <CheckIcon className="w-5 flex-shrink-0" strokeWidth={4} />{" "}
                                        {item}
                                    </p>
                                ))}
                            </div>
                        </div>

                        <div className="w-full border-dashed border-border px-6 lg:px-10 py-4 flex flex-col gap-4">
                            <h2 className="text-lg lg:text-xl tracking-tight text-left font-bold">
                                What you get after the launch:
                            </h2>
                            <div className="space-y-3 [&>p]:flex [&>p]:items-center [&>p]:gap-2 [&>p]:font-medium">
                                {premiumPlanCard.whatYouGetAfterLaunch.map((item, index) => (
                                    <p key={index} className="flex items-center gap-2">
                                        <CheckIcon className="w-5 flex-shrink-0" strokeWidth={4} />{" "}
                                        <span>{item}</span>
                                        {item === "Pro newsletter" && <ActiveTag text="done" />}
                                    </p>
                                ))}
                            </div>
                        </div>
                        <div className="bg-white mix-blend-plus-lighter absolute h-[100px] w-full blur-[50px] right-0 -bottom-20"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Testimonials Section
export const TestimonialsSection = () => {
    const groupedTestimonials = {
        1: testimonials.filter((t) => t.column === 1),
        2: testimonials.filter((t) => t.column === 2),
        3: testimonials.filter((t) => t.column === 3),
    };

    return (
        <div className="text-white" id="testimonials">
            <HeaderStatic title="What our Pro customers say about us" />
            <div className="border-b border-border w-full min-h-[80dvh] grid grid-cols-1 lg:grid-cols-7">
                <div className="lg:col-span-2 flex flex-col font-medium divide-y divide-border">
                    {groupedTestimonials[1].map((testimonial) => (
                        <div
                            key={testimonial.id}
                            className="p-6 lg:p-10 flex flex-col gap-6"
                        >
                            <PremiumTestimonialCard username={testimonial.username} />
                            <div className="text-pretty">
                                {testimonial.content}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="h-full border-y lg:border-x lg:border-y-0 border-border p-6 lg:p-10 mx-auto flex flex-col gap-6 flex-shrink-0 lg:col-span-3 font-medium">
                    {groupedTestimonials[2].map((testimonial) => (
                        <div key={testimonial.id} className="flex flex-col gap-6">
                            <PremiumTestimonialCard username={testimonial.username} />
                            <div>
                                {testimonial.content}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="lg:col-span-2 flex flex-col font-medium divide-y divide-border">
                    {groupedTestimonials[3].map((testimonial) => (
                        <div
                            key={testimonial.id}
                            className="p-6 lg:p-10 flex flex-col gap-6"
                        >
                            <PremiumTestimonialCard username={testimonial.username} />
                            <div className="text-pretty">
                                {testimonial.content}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
