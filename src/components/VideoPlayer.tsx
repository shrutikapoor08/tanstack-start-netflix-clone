import { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Video } from '../api/trailers';

type VideoPlayerProps = {
    trailer: Video | null;
    error: string | null;
    onBack: () => void;
};

export default function VideoPlayer({ trailer, error, onBack }: VideoPlayerProps) {
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onBack();
            }
        };

        document.addEventListener('keydown', handleEscape);
        return () => {
            document.removeEventListener('keydown', handleEscape);
        };
    }, [onBack]);

    return (
        <div className="min-h-screen bg-black">
            <div className="fixed top-0 left-0 right-0 z-50 p-4 bg-gradient-to-b from-black/80 to-transparent">
                <button
                    onClick={onBack}
                    className="flex items-center gap-2 px-4 py-2 bg-black/50 hover:bg-black/70 text-white rounded-md transition-colors"
                    aria-label="Go back"
                >
                    <ArrowLeft size={20} />
                    <span>Back</span>
                </button>
            </div>

            <div className="flex items-center justify-center min-h-screen p-4 pt-20">
                {error && (
                    <div className="text-center">
                        <div className="text-white/60 text-xl mb-4">{error}</div>
                        <button
                            onClick={onBack}
                            className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-md transition-colors"
                        >
                            Return Home
                        </button>
                    </div>
                )}

                {!error && trailer && (
                    <div className="w-full max-w-7xl">
                        <div className="aspect-video w-full">
                            <iframe
                                width="100%"
                                height="100%"
                                src={`https://www.youtube.com/embed/${trailer.key}?autoplay=1&rel=0`}
                                title={trailer.name}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="rounded-lg shadow-2xl"
                            />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
