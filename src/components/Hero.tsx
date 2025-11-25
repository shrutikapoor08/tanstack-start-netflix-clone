import heroBg from "../assets/hero-background.jpg";
import Header from "./Header";

const Hero = () => {
    return (
        <div className="relative min-h-[75vh] flex flex-col overflow-hidden w-full bg-linear-to-br from-black via-gray-900 to-black">
            {/* Background Image */}
            <img
                src={heroBg}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Dark Overlay */}
            <div aria-hidden="true" className="absolute inset-0 bg-linear-to-b from-black/85 via-black/50 to-black pointer-events-none" />

            <Header />

            {/* Hero Content */}
            <div className="relative z-10 flex-1 flex items-center justify-center px-4 pb-20">
                <div className="text-center max-w-4xl">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 text-white drop-shadow-lg">
                        Unlimited movies, TV shows, and more
                    </h1>

                    <p className="text-xl md:text-2xl font-normal mb-6 text-white drop-shadow-md">
                        Starts at $7.99. Cancel anytime.
                    </p>

                    <p className="text-lg md:text-xl mb-5 text-white drop-shadow-md">
                        Ready to watch? Enter your email to create or restart your membership.
                    </p>

                    {/* Email Input and Button */}
                    <div className="flex flex-col sm:flex-row gap-3 justify-center items-stretch max-w-2xl mx-auto">
                        <input
                            type="email"
                            placeholder="Email address"
                            className="flex-1 bg-black/50 border border-gray-400 rounded px-4 py-3.5 text-white placeholder-gray-400 text-base focus:outline-none focus:border-white transition-colors backdrop-blur-sm"
                        />
                        <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3.5 rounded text-xl font-semibold whitespace-nowrap transition-colors flex items-center justify-center gap-2">
                            Get Started
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
