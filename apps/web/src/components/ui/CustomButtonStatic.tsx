import { cn } from "@/lib/utils";
import Link from "next/link";

interface CustomButtonStaticProps {
    children: React.ReactNode;
    className?: string;
    href: string;
}

/**
 * Server-compatible button for non-interactive cases
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
                "bg-gradient-to-b from-[#5728f4] to-[#5100FF]",
                "[box-shadow:0px_-2px_0px_0px_#2c04b1_inset]",
                "hover:opacity-90 transition-opacity duration-100",
                "text-white font-medium",
                className
            )}
        >
            {children}
        </Link>
    );
}
