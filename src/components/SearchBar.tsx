import { Search } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate } from '@tanstack/react-router';

export default function SearchBar() {
    const [shouldShowSearch, setShouldShowSearch] = useState(false);
    const [searchValue, setSearchValue] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const debounceTimer = setTimeout(() => {
            if (searchValue.trim() && searchValue.trim().length > 0) {
                navigate({ to: '/search', search: { movie: searchValue } });
            }
        }, 500);

        return () => {
            clearTimeout(debounceTimer);
        };
    }, [searchValue, navigate]);

    const handleSearchQueryChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const query = event.target.value;
        setSearchValue(query);
    };

    const handleBlur = () => {
 // Small delay allows clicking on search results before hiding
+        setTimeout(() => setShouldShowSearch(false), 150);    };

    const handleSearchClick = () => {
        setShouldShowSearch(true);
    };



    return (
        <div className="flex items-center">
            {shouldShowSearch ? (
                <div className="flex items-center bg-black/80 border border-white/20 rounded-sm px-3 py-2 sm:w-full md:min-w-[280px] backdrop-blur-sm">
                    <Search
                        size={20}
                        className="text-white/70 mr-3 flex-shrink-0"
                    />
                    <input
                        className="bg-transparent text-white placeholder:text-white/60 text-sm focus:outline-none flex-1 font-normal"
                        type="text"
                        placeholder="Titles, people, genres"
                        aria-label="Search"
                        value={searchValue}
                        onChange={handleSearchQueryChange}
                        onBlur={handleBlur}
                        autoFocus
                    />
                </div>
            ) : (
                <button
                    onClick={handleSearchClick}
                    className="p-2 hover:bg-white/10 rounded-sm transition-colors duration-200"
                    aria-label="Search"
                >
                    <Search size={24} className="text-white" />
                </button>
            )}
        </div>
    );
}
