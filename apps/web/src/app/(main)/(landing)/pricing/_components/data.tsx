import { Feature } from "./types";

export const opensoxFeatures: Feature[] = [
    {
        id: 1,
        title: "Opensox Advanced search tool",
        description:
            "One and only tool in the market that let you find open source with blizzing speed and scary accuracy. It will have:",
        features: [
            "Faster and accurate search of projects",
            "Higher accuracy (so that you exactly land on your dream open source project)",
            "Advanced filters like, GSOC, YC, funding, hire contributors, trending, niche (like AI, Core ML, Web3, MERN), bounties, and many more.",
        ],
    },
    {
        id: 2,
        title: "OX Newsletter",
        description:
            "A newsletter that keeps you ahead in open source world. It will cover:",
        features: [
            "Jobs/internships in opensource projects/companies",
            "Funding news",
            "What's trending in open source ecosystem",
            "Upcoming trends",
            "Tips to ace in open source",
            "What's happening in open source companies?",
        ],
    },
    {
        id: 3,
        title: "30 days Opensox challenge sheet",
        description: [
            "A comprehensive sheet of 30+ modules along with detailed videos to give you a clear path to start rocking in open source.",
            "It will contain videos, resouces and hand made docs.",
            <>
                In each of the 30 steps, you will learn, then apply, If stuck,
                we & apos; ll help and then we& apos;ll do an accountability check.{" "}
                <a
                    href="https://www.youtube.com/playlist?list=PLiWTvT-J4wHhDh-Mngogynfusor-694G-"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline text-[#a472ea]"
                >
                    Check here.
                </a>
            </>,
        ],
        features: [],
    },
];

export const whySub = [
    {
        content:
            "Currently, Opensox 2.0 is in progress (70% done) so till the launch, we are offering Pro plan at a discounted price - $49 for the whole year",
    },
    {
        content:
            "This offer is only available for the first 1000 (64 slots booked) users",
    },
    {
        content:
            "After the launch, this $49 offer be removed and Opensox Pro will be around ~ $120 for whole year ($10/mo.)",
    },
    {
        content: "The price of the dollar is constantly increasing.",
    },
];

export const freePlanCard = {
    whatYouGetImmediately: [
        "Free filters to search projects (tech stack, competition, activity, etc)",
        "Access to the general community",
    ],
    whatYouGetAfterLaunch: [
        "Everything mentioned above",
        "30 days opensox challenge sheet",
    ],
};

export const premiumPlanCard = {
    whatYouGetImmediately: [
        "Everything in free plan +",
        "1:1 session on finding remote jobs and internships in open-source companies.",
        "Quick doubts resolution.",
        "Personalized guidance for GSoC, LFX, Outreachy, etc",
        "Access to Pro Slack where you can ask anything anytime.",
        "Support to enhance skills for open source",
        "GSOC proposal, resume reviews, etc.",
        "Upcoming Pro features",
    ],
    whatYouGetAfterLaunch: [
        "Everything mentioned above",
        "Advanced tool with Pro filters to find open source projects",
        "Pro newsletter",
        "30 days opensox challenge sheet",
        "Upcoming Pro features.",
    ],
};

export const testimonials = [
    {
        id: 1,
        username: "Tarun Parmar",
        content:
            "Getting the Opensox Pro Subscription has been such a game-changer for me. I really like the personal touch in the way the team guides you-it feels like someone is genuinely there to help you navigate. It gave me the initial push I needed and made it so much easier to cut through all the chaos and focus on the right and simple steps. The best part is, it helps you start your open source journey quickly and I know I can reach out to the team anytime. Honestly, it's been an awesome experience so far!",
        column: 1,
    },
    {
        id: 2,
        username: "Daksh Yadav",
        content:
            "My experience with your guidance and opensox has been great. Your tips have really helped in doing my tasks quicker and better. And I would definitely recommend others to opt for opensox Pro.",
        column: 1,
    },
    {
        id: 3,
        username: "Rishabh R Pathak",
        content: (
            <div className="space-y-3 text-pretty" >
                <p>
                    Okay so there are a few things I genuinely value about OpenSox Pro,
                    and I& apos;ll focus on the core points because everything else is
                    just a natural extension of these.
                </p>
                < ul className="list-disc space-y-3 pl-6" >
                    <li>
                        First, the pricing.To me, it & apos;s more than fair for the kind
                        of value on the table.In fact, I see it as something that can
                        yield long - term returns if you & apos;re serious about putting in
                        the work.
                    </li>
                    <li>
                        The onboarding call was one of the best parts.Spending 30 +
                        minutes just to understand where I stand, whether I & apos; m
                        starting out or already experienced and aligning the guidance with
                        my goals.That level of personalization is rare and it set the
                        tone right from the start.
                    </li>
                    <li>
                        Another thing l & apos;ve appreciated is the transparency.No
                        sugarcoating, no vague talk, you share real experiences, honest
                        opinions and advice that actually holds weight.That alone builds
                        credibility and trust.
                    </li>
                    <li>
                        And yeah, the support also goes beyond the program itself.Getting
                        advice on personal doubts and extra tips outside the set
                        curriculum(of course, sometimes, not always lol!).
                    </li>
                    <li>
                        The regular check - ins are also a huge plus.They help track
                        progress, keep me accountable, and ensure l & apos;m moving in the
                        right direction.
                    </li>
                    <li>
                        Overall, I & apos;d absolutely recommend OpenSox Pro to anyone
                        serious about open source.The personalized guidance is exactly
                        what most of us hope for, since everyone is at a different stage
                        of their journey.
                    </li>
                    <li>
                        A personal opinion btw:) My only hope is that the same quality
                        continues even as more people join and judging from what l & apos; ve
                        seen so far, I & apos;m confident it will.
                    </li>
                </ul>
            </div>
        ),
        column: 2,
    },
    {
        id: 4,
        username: "Mahadev Keshari",
        content: "This is really awesome 👍🏼",
        column: 3,
    },
    {
        id: 5,
        username: "Satya Narayan",
        content:
            "Yes I would totally recommend it for anyone who is serious about getting into open source. We have discussed very insightful key methods that are very helpful for a beginner who has no prior experience to start contributing. You as an experienced open source developer and contributor have shared your learnings which come from experience to us which not only makes us understand the complexity of large codebases but gives us a kickstart over other candidates. Your personal guidance is precious and invaluable for us",
        column: 3,
    },
];
