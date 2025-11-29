const EmailSignup = () => {
    return (
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
    );
};

export default EmailSignup;
