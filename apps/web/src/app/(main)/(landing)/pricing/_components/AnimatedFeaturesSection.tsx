"use client";
import { motion } from "framer-motion";
import { CornerDownRightIcon } from "./icons";
import { ActiveTag } from "@/components/ui/ActiveTag";
import { Feature } from "./types";
import { useInViewAnimation } from "@/hooks/useInViewAnimation";

interface AnimatedFeaturesSectionProps {
    features: Feature[];
}

export function AnimatedFeaturesSection({
    features,
}: AnimatedFeaturesSectionProps) {
    const [containerRef, inView] = useInViewAnimation({ threshold: 0.1 });

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
                    What is Opensox 2.0?
                </motion.h2>
            </div>

            <div className="w-full h-full flex flex-col gap-6 border-b border-border">
                <ul className="flex flex-col lg:flex-row divide-y lg:divide-y-0 lg:divide-x divide-border h-full">
                    {features.map((feature, index) => (
                        <motion.li
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{
                                duration: 0.4,
                                ease: "easeOut",
                                delay: inView ? index * 0.08 : 0,
                            }}
                            key={feature.id}
                            className="w-full p-6 flex-1"
                            style={{ willChange: 'opacity, transform' }}
                        >
                            <div className="flex flex-col gap-4 w-full h-full">
                                <div className="flex gap-4 items-center">
                                    <span className="text-6xl font-mono font-semibold text-transparent bg-clip-text bg-gradient-to-b from-brand-purple-light to-brand-purple-dark">
                                        {index + 1}
                                    </span>
                                    <div className="flex items-center gap-2">
                                        <h3 className="text-2xl font-medium">{feature.title}</h3>
                                        {feature.title === "OX Newsletter" && (
                                            <ActiveTag text="completed" />
                                        )}
                                    </div>
                                </div>

                                {Array.isArray(feature.description) ? (
                                    <div className="font-medium">
                                        {feature.description.map((sentence, sentenceIndex) => (
                                            <p key={sentenceIndex} className="mb-2">
                                                {sentence}
                                            </p>
                                        ))}
                                    </div>
                                ) : (
                                    <p className="font-medium">{feature.description}</p>
                                )}

                                <ul className="flex flex-col gap-3 pb-8">
                                    {feature.features.map((f, i) => (
                                        <li
                                            key={i}
                                            className="text-sm flex items-center gap-4"
                                        >
                                            <CornerDownRightIcon className="size-4 flex-shrink-0 text-brand-purple-light" />
                                            {f}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
