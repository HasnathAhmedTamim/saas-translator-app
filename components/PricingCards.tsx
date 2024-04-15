// Import CheckIcon from lucide-react
import { CheckIcon } from "lucide-react";
import Link from "next/link";
import CheckoutButton from "./CheckoutButton";

// Define tiers array
const tiers = [
    {
        name: 'Starter',
        id: 'started_ID',
        href: '#',
        pricingMonthly: null,
        description: 'Get chatting right away with anyone , anywhere !',
        features: [
            '20 Message chat Limit in chats',
            '2 participant limit in chat',
            '3 chat Rooms',
            '20 Message chat Limit in chats',
            '2 participant limit in chat',
            '3 chat Rooms',
        ],
    },
    {
        name: 'Pro',
        id: 'si_OcsLNQYbMVzV',
        href: '#',
        pricingMonthly: '$5.99',
        description: 'Unlock full potential pro!',
        features: [
            'Unlimited',
            'Unlimited participant limit in chat',
            'Unlimited chat Rooms',
            'Unlimited',
            'Unlimited participant limit in chat',
            'Unlimited chat Rooms',
        ],
    },
]

// PricingCards component
function PricingCards({ redirect }: { redirect: boolean }) {
    return (
        <div>
            <div className="mx-auto  grid max-w-md grid-cols-1 gap-8 lg:max-w-4xl lg:grid-cols-2">
                {tiers.map((tier) => (
                    <div key={tier.id} className="flex flex-col justify-between rounded-3xl bg-white p-8 shadow-xl ring-1 ring-gray-900/100 sm:p-10">
                        <div>
                            <h3 id={tier.id + tier.name} className="text-base font-semibold leading-7 text-indigo-600">
                                {tier.name}
                            </h3>
                            <div className="mt-4 flex items-baseline gap-x-2">
                                {
                                    tier.pricingMonthly ? (
                                        <><span className="text-5xl font-bold tracking-tight text-gray-900">
                                            {tier.pricingMonthly}
                                        </span>
                                            <span className="text-base font-bold tracking-tight text-gray-900">/Month</span>
                                        </>
                                    ) : (
                                        <span className="text-5xl font-bold tracking-tight text-gray-900">Free</span>
                                    )
                                }
                            </div>
                            <p className="mt-6 text-base leading-7 text-gray-600">
                                {tier.description}
                            </p>
                            <ul role="list" className="mt-10 space-y-4 text-sm leading-6 text-gray-600">
                                {
                                    tier?.features.map((feature, index) => (
                                        <li key={index} className="flex gap-x-3 items-center">
                                            {/* CheckIcon to indicate feature presence */}
                                            <CheckIcon className="h-6 w-5 flex-none text-indigo-600" aria-hidden='true' />
                                            {/* Feature text */}
                                            <span>{feature}</span>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>

                        {
                            redirect ? (
                                <Link href='/register' className="mt-8 rounded-md bg-indigo-600 px-3.5 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 cursor-pointer">Get Started Today</Link>
                            ) : (
                                tier.id && <CheckoutButton ></CheckoutButton>
                            )
                        }

                    </div>
                ))}
            </div>
        </div>
    )
}

export default PricingCards;
