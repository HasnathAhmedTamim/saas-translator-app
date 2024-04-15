import { authOptions } from "@/auth";
import PricingCards from "@/components/PricingCards";
import { getServerSession } from "next-auth";

async function Register() {
    const session = await getServerSession(authOptions)
    return (
        <div className="isolate h-full overflow-hidden bg-gray-900 pb-40">
            <div className="mx-auto max-w-7xl px-6 pb-12 pt-16 text-white text-center lg:px-8">
                <div className="mx-auto max-w-4xl">
                    <p className=" mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
                        Lets handle your membership {session?.user?.name?.split(' ')?.[0]}!
                    </p>
                </div>
                <div className="relative">
                    <svg
                        viewBox="0 0 1208 1024"
                        className="absolute -pp-10 left-1/2 -z-10 h-[64rem] -translate-x-1/2"
                        mask="url(#radial-gradient)"
                    >
                        <defs>
                            <radialGradient id="radial-gradient">
                                <stop offset="0" stopColor="#7775D6" />
                                <stop offset="1" stopColor="#E935C1" />
                            </radialGradient>
                        </defs>
                        <ellipse cx="604" cy="512" fill="url(#radial-gradient)" rx="604" ry="512" />
                    </svg>

                </div>
            </div>
            <PricingCards redirect={false}></PricingCards>
        </div>
    )
}

export default Register;