
import { FaGithub ,FaFacebook, FaSun, FaMoon } from "react-icons/fa";
import { useDarkMode } from "../hooks/useDarkMode";

const Header = () => {
    const { isDark, toggle } = useDarkMode();

    return (
<header className="sticky top-0 z-50 border-b border-slate-200 dark:border-white/10 bg-white/70 dark:bg-slate-950/60 backdrop-blur-md transition-colors duration-500">
    <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col md:flex-row justify-between items-center gap-4">
    <div className="text-center md:text-left">
        <h1 className="text-2xl md:text-3xl font-bold mb-1 bg-gradient-to-r from-indigo-500 to-cyan-500 dark:from-indigo-400 dark:to-cyan-400 bg-clip-text text-transparent">Natthawut Samruamjit</h1>
        <p className="text-slate-600 dark:text-slate-400 font-medium tracking-wide">Full Stack Developer | Student</p>
    </div>
    <div className="flex gap-5 items-center">
        <button 
            onClick={toggle}
            className="p-2 rounded-full text-slate-500 hover:text-indigo-500 dark:text-slate-400 dark:hover:text-amber-400 bg-slate-100 dark:bg-slate-800 transition-all duration-300"
            aria-label="Toggle Theme"
        >
            {isDark ? <FaSun className="w-5 h-5" /> : <FaMoon className="w-5 h-5" />}
        </button>
        <a href="https://github.com/gam101046?tab=repositories" className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:scale-110 transition-all duration-300"><FaGithub className="w-7 h-7" /></a>
        <a href="https://www.facebook.com/natthawut.samruamjit/" className="text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-500 hover:scale-110 transition-all duration-300"><FaFacebook className="w-7 h-7" /></a>
    </div>
    </div>
</header>
)};

export default Header;
