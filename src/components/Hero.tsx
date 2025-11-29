import heroBg from "../assets/hero-background.jpg";
import Header from "./Header";
import EmailSignup from "./EmailSignup";

const Hero = () => {
    return (
        <div className="relative min-h-[75vh] flex flex-col overflow-hidden w-full bg-linear-to-br from-black via-gray-900 to-black">
            <img
                src={heroBg}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 w-full h-full object-cover"
            />

            <div aria-hidden="true" className="absolute inset-0 bg-linear-to-b from-black/85 via-black/50 to-black pointer-events-none" />

            <Header />

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

                    <EmailSignup />
                </div>
            </div>
        </div>
    );
};

export default Hero;
