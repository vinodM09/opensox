"use client";
import dynamic from "next/dynamic";
import { useState } from "react";
import PrimaryButton from "@/components/ui/custom-button";

const PaymentFlow = dynamic(() => import("./PaymentFlow"), {
    ssr: false,
    loading: () => (
        <div className="w-full">
            <PrimaryButton classname="w-full max-w-[500px] mx-auto font-semibold opacity-50">
                Loading...
            </PrimaryButton>
        </div>
    ),
});

interface LazyPaymentFlowProps {
    planId: string;
    planName?: string;
    description?: string;
    buttonText?: string;
    buttonClassName?: string;
    callbackUrl?: string;
    buttonLocation?: string;
}

export function LazyPaymentFlow({
    planId,
    planName = "Opensox Pro",
    description = "Annual Subscription",
    buttonText = "Invest",
    buttonClassName,
    callbackUrl,
    buttonLocation,
}: LazyPaymentFlowProps) {
    const [isReady, setIsReady] = useState(false);

    // Show static button until user clicks
    if (!isReady) {
        return (
            <div className="w-full">
                <PrimaryButton
                    classname={buttonClassName || "w-full max-w-[500px] mx-auto font-semibold"}
                    onClick={() => setIsReady(true)}
                >
                    {buttonText}
                </PrimaryButton>
            </div>
        );
    }

    // Load and render actual PaymentFlow
    return (
        <PaymentFlow
            planId={planId}
            planName={planName}
            description={description}
            buttonText={buttonText}
            buttonClassName={buttonClassName}
            callbackUrl={callbackUrl}
            buttonLocation={buttonLocation}
        />
    );
}
