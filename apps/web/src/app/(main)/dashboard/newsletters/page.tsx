"use client";

import "@/styles/newsletter.css";

import { useEffect, useState } from "react";
import Link from "next/link";
import { CalendarIcon, ClockIcon, SparklesIcon, LockClosedIcon } from "@heroicons/react/24/outline";
import { Skeleton } from "@/components/ui/skeleton";
import { useSubscription } from "@/hooks/useSubscription";
import { useRouter } from "next/navigation";
import PrimaryButton from "@/components/ui/custom-button";

interface Newsletter {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  readTime: string;
}

function NewsletterSkeleton() {
  return (
    <div className="p-4 sm:p-6 bg-[#121214] border border-[#1a1a1d] rounded-lg max-w-4xl mx-auto">
      <Skeleton className="h-7 w-3/4 mb-3 bg-zinc-800" />
      <div className="flex items-center gap-4 mb-3">
        <Skeleton className="h-4 w-32 bg-zinc-800" />
        <Skeleton className="h-4 w-24 bg-zinc-800" />
      </div>
      <Skeleton className="h-4 w-full mb-2 bg-zinc-800" />
      <Skeleton className="h-4 w-5/6 bg-zinc-800" />
    </div>
  );
}

function PremiumUpgradePrompt() {
  const router = useRouter();

  return (
    <div className="w-full h-full flex items-center justify-center px-4">
      <div className="max-w-xl w-full bg-[#121214] border border-[#1a1a1d] rounded-2xl p-8 text-center">
        <div className="flex justify-center mb-4">
          <div className="p-3 bg-gradient-to-br from-[#a472ea]/20 to-[#7150e7]/20 rounded-full">
            <LockClosedIcon className="size-10 text-[#a472ea]" />
          </div>
        </div>
        
        <h1 className="text-2xl font-bold text-ox-white mb-2">
          OX Newsletter
        </h1>
        
        <p className="text-xs text-zinc-400 mb-6 leading-relaxed">
          Stay ahead in the open source world. Get curated insights on jobs, funding news, trending projects, upcoming trends, and expert tips.
        </p>

        <PrimaryButton 
          onClick={() => router.push("/pricing")}
          classname="w-full px-6"
        >
          <SparklesIcon className="size-4" />
          Unlock Premium
        </PrimaryButton>
      </div>
    </div>
  );
}

export default function NewslettersPage() {
  const [newsletters, setNewsletters] = useState<Newsletter[]>([]);
  const [loading, setLoading] = useState(true);
  const { isPaidUser, isLoading: subscriptionLoading } = useSubscription();
  
  useEffect(() => {
    if (!isPaidUser || subscriptionLoading) return;
    
    fetch("/api/newsletters")
      .then((res) => res.json())
      .then((data) => {
        setNewsletters(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [isPaidUser, subscriptionLoading]);

  if (subscriptionLoading) {
    return (
      <div className="w-full h-full overflow-auto">
        <div className="w-full px-4 sm:px-6 lg:px-8 py-4 sm:py-5">
          <Skeleton className="h-8 w-48 mb-6 bg-zinc-800" />
          <NewsletterSkeleton />
          <NewsletterSkeleton />
        </div>
      </div>
    );
  }

  if (!isPaidUser) {
    return <PremiumUpgradePrompt />;
  }

  return (
    <div className="w-full h-full overflow-auto">
      <div className="w-full px-4 sm:px-6 lg:px-8 py-4 sm:py-5">
        <div className="mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-ox-white mb-2">
            Newsletters
          </h1>
          <p className="text-sm sm:text-base text-zinc-400">
            Stay updated with our latest news and insights
          </p>
        </div>

        <div className="space-y-4 sm:space-y-6 max-w-4xl mx-auto">
          {loading ? (
            <>
              <NewsletterSkeleton />
              <NewsletterSkeleton />
              <NewsletterSkeleton />
            </>
          ) : newsletters.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-zinc-400">No newsletters available yet.</p>
            </div>
          ) : (
            newsletters.map((newsletter) => (
              <Link
                key={newsletter.slug}
                href={`/dashboard/newsletters/${newsletter.slug}`}
                className="block"
              >
                <article className="p-4 sm:p-6 bg-[#121214] border border-[#1a1a1d] rounded-lg hover:border-ox-purple transition-colors">
                  <h2 className="text-lg sm:text-xl font-semibold text-ox-white mb-2 hover:text-ox-purple transition-colors break-words">
                    {newsletter.title}
                  </h2>
                  <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm text-zinc-400 mb-3">
                    <span className="flex items-center gap-1">
                      <CalendarIcon className="size-4 shrink-0" />
                      <span className="whitespace-nowrap">
                        {new Date(newsletter.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </span>
                    </span>
                    <span className="flex items-center gap-1">
                      <ClockIcon className="size-4 shrink-0" />
                      <span className="whitespace-nowrap">{newsletter.readTime}</span>
                    </span>
                  </div>
                  <p className="text-sm sm:text-base text-zinc-300 line-clamp-2 break-words">
                    {newsletter.excerpt}
                  </p>
                </article>
              </Link>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
