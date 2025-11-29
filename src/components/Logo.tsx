import { Link } from "@tanstack/react-router";

export function Logo() {
    return (
        <div className="shrink-0">
            <Link to="/" className="flex items-center">
                <h1 className="text-3xl lg:text-5xl font-black text-red-600 tracking-tight">
                    REACTFLIX
                </h1>
            </Link>
        </div>
    );
}
