interface FilterProps {
    tags: string[];
    selected: string;
    onSelect: (value: string) => void;
}
const Filter: React.FC<FilterProps> = ({ tags, selected, onSelect }) => (
<section className="max-w-6xl mx-auto px-6 py-8 border-t border-gray-200">
    <div className="flex flex-wrap gap-3">
    <button
        onClick={() => onSelect("all")}
        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
        selected === "all"
            ? "bg-black text-white"
            : "bg-gray-100 text-black hover:bg-gray-200"
        }`}
    >
        ทั้งหมด
    </button>
    {tags.map((tag) => (
        <button
        key={tag}
        onClick={() => onSelect(tag)}
        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            selected === tag
            ? "bg-black text-white"
            : "bg-gray-100 text-black hover:bg-gray-200"
        }`}
        >
        {tag}
        </button>
    ))}
    </div>
</section>
);

export default Filter;
