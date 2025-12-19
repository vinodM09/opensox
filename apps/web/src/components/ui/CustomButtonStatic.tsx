import { cn } from "@/lib/utils";
import Link from "next/link";
import { colors } from "@/lib/design-tokens";

interface CustomButtonStaticProps {
    children: React.ReactNode;
    className?: string;
    href: string;
}

/**
 * server-compatible button for non-interactive cases
 */
export function CustomButtonStatic({
    children,
    className,
    href,
}: CustomButtonStaticProps) {
    return (
        <Link
            href={href}
            className={cn(
                "flex gap-2 items-center justify-center px-5 py-3 rounded-[16px] relative",
                "border-x border-t-2 border-brand-purple",
                "hover:opacity-90 transition-opacity duration-100",
                "text-white font-medium",
                className
            )}
            style={{
                background: `linear-gradient(to bottom, ${colors.brand.purple.button.gradient.from}, ${colors.brand.purple.button.gradient.to})`,
                boxShadow: `0px -2px 0px 0px ${colors.brand.purple.button.shadow} inset`,
            }}
        >
            {children}
        </Link>
    );
}
