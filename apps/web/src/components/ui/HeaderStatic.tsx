"use client";
import { motion } from "framer-motion";
import React from "react";
import { FlickeringGrid } from "./flickering-grid";
import { colors } from "@/lib/design-tokens";

interface HeaderStaticProps {
    title: string | React.ReactNode;
    animate?: boolean;
}

/**
 * Header component with optional animation
 * Set animate={true} to enable entrance animation for above-the-fold headers
 * Leave animate={false} (default) for below-the-fold headers
 */
export function HeaderStatic({ title, animate = false }: HeaderStaticProps) {
    const TitleComponent = animate ? motion.h4 : "h4";

    const animationProps = animate
        ? {
            initial: { opacity: 0.3, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: {
                duration: 0.35,
                ease: [0.22, 1, 0.36, 1], // Custom easing for smoother feel
            },
            style: { willChange: 'opacity, transform' },
        }
        : {};

    return (
        <div className="px-[30px] py-10 h-[160px] relative overflow-hidden border-b border w-full">
            <TitleComponent
                {...animationProps}
                className="font-medium inset-0 flex items-center justify-center text-3xl lg:text-5xl tracking-tight absolute z-30 text-center text-balance"
            >
                {title}
            </TitleComponent>
            <div
                style={{
                    background:
                        `radial-gradient(circle at center, ${colors.background.primary} 30%, transparent 100%)`,
                }}
                className="h-full w-[100%] right-0 top-0 z-20 absolute"
            />
            <div className="absolute right-0 w-[100%] h-full top-0 z-10 opacity-50">
                <FlickeringGrid
                    className="absolute -z-0 top-0 right-0"
                    squareSize={3}
                    gridGap={6}
                    color={colors.brand.purple.grid}
                    maxOpacity={1}
                    flickerChance={0.1}
                    height={200}
                    width={2000}
                />
            </div>
        </div>
    );
}
