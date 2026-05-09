import { motion } from 'framer-motion';

interface FilterProps {
    tags: string[];
    selected: string;
    onSelect: (value: string) => void;
}
const Filter: React.FC<FilterProps> = ({ tags, selected, onSelect }) => (
<section className="max-w-6xl mx-auto px-6 py-12 border-t border-slate-200 dark:border-white/10 mt-12 relative z-10 transition-colors duration-500">
    <div className="flex flex-col items-center mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-slate-100 mb-2">ผลงานและกิจกรรมที่ผ่านมา</h1>
        <div className="w-16 h-1 bg-indigo-500 rounded-full"></div>
    </div>
    
    <div className="flex flex-wrap justify-center gap-3">
    <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => onSelect("all")}
        className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
        selected === "all"
            ? "bg-gradient-to-r from-indigo-500 to-cyan-500 text-white shadow-lg shadow-indigo-500/25"
            : "bg-white dark:bg-white/5 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-white/10 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-white/5 shadow-sm dark:shadow-none"
        }`}
    >
        ทั้งหมด
    </motion.button>
    {tags.map((tag) => (
        <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        key={tag}
        onClick={() => onSelect(tag)}
        className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
            selected === tag
            ? "bg-gradient-to-r from-indigo-500 to-cyan-500 text-white shadow-lg shadow-indigo-500/25"
            : "bg-white dark:bg-white/5 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-white/10 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-white/5 shadow-sm dark:shadow-none"
        }`}
        >
        {tag}
        </motion.button>
    ))}
    </div>
</section>
);

export default Filter;
