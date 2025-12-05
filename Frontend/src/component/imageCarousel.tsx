// src/component/ImageCarousel.tsx
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ImageItem {
    url: string;
    title?: string;
}

interface Props {
    images: ImageItem[]; // ถ้าแค่ string ก็แปลงเป็น {url, title?}
    initialIndex?: number;
    className?: string;
}

const ImageCarousel: React.FC<Props> = ({ images, initialIndex = 0, className = "" }) => {
const [currentIndex, setCurrentIndex] = useState(initialIndex);

if (!images || images.length === 0) {
    return null;
}

const prev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((i) => (i - 1 + images.length) % images.length);
};

const next = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((i) => (i + 1) % images.length);
};

const goTo = (index: number) => {
    setCurrentIndex(index);
};

return (
    <div className={`w-full ${className}`}>
    <div className="relative rounded-lg overflow-hidden">
        <img
        src={images[currentIndex].url}
        alt={images[currentIndex].title ?? `Slide ${currentIndex + 1}`}
        className="w-full h-72 md:h-95 object-cover transition-opacity duration-300"
        />

        {/* overlay title */}
        {images[currentIndex].title && (
        <div className="absolute left-4  bottom-3 bg-black/50 text-white px-3 py-1 rounded-md text-sm">
            {images[currentIndex].title}
        </div>
        )}

        {/* prev / next */}
        {images.length > 1 && (
        <>
            <button
            onClick={prev}
            aria-label="Previous"
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow"
            >
            <ChevronLeft className="w-5 h-5" />
            </button>
            <button
            onClick={next}
            aria-label="Next"
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow"
            >
            <ChevronRight className="w-5 h-5" />
            </button>

            {/* dots */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, idx) => (
                <button
                key={idx}
                onClick={(e) => { e.stopPropagation(); goTo(idx); }}
                className={`w-2 h-2 rounded-full ${idx === currentIndex ? "bg-white" : "bg-white/50"}`}
                aria-label={`Go to ${idx + 1}`}
                />
            ))}
            </div>
        </>
        )}
    </div>

    {/* thumbnails */}
    {images.length > 1 && (
        <div className="mt-3 flex gap-3 overflow-x-auto">
        {images.map((img, idx) => (
            <button
            key={idx}
            onClick={() => goTo(idx)}
            className={`flex-shrink-0 rounded-md overflow-hidden border-2 ${
                idx === currentIndex ? "border-black" : "border-transparent"
            }`}
            >
            <img src={img.url} alt={img.title ?? `thumb ${idx + 1}`} className="w-24 h-14 object-cover" />
            </button>
        ))}
        </div>
    )}
    </div>
);
};

export default ImageCarousel;