import { Link } from "@tanstack/react-router";

const Header = () => {
    return ( <header className="relative z-20 py-5 px-6 md:px-12">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    {/* Logo */}
                    <div className="shrink-0">
                        <Link to="/" className="flex items-center">
                            <h1 className="text-3xl lg:text-5xl font-black text-red-600 tracking-tight">
                                REACTFLIX
                            </h1>
                        </Link>
                    </div>

                    {/* Right Side Controls */}
                    <div className="flex items-center gap-4">
                        {/* Language Selector */}
                        <select className="bg-black/40 text-white border border-gray-400 rounded px-3 py-1.5 text-sm cursor-pointer hover:border-white transition-colors">
                            <option value="en">English</option>
                            <option value="es">Español</option>
                        </select>

                        {/* Sign In Button */}
                        <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-1.5 rounded text-sm font-semibold transition-colors">
                            Sign In
                        </button>
                    </div>
                </div>
            </header>)
}

export default Header;
