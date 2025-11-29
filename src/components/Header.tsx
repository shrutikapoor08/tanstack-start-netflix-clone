import SearchBar from "./SearchBar";
import { Logo } from "./Logo";

const Header = () => {
    return ( <header className="relative z-20 py-5 px-6 md:px-12">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <Logo />
                    <div className="flex items-center gap-4">
                        <SearchBar />
                    </div>
                </div>
            </header>)
}

export default Header;
