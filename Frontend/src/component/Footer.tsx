export const Footer = () => (
<footer className="border-t border-slate-200 dark:border-white/10 mt-20 relative z-10 bg-slate-50 dark:bg-slate-950 transition-colors duration-500">
    <div className="max-w-6xl mx-auto px-6 py-16">
    <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
        <h3 className="text-2xl md:text-3xl font-bold mb-3 text-slate-900 dark:text-slate-100">มาทำงานด้วยกันไหมครับ?</h3>
        <p className="text-slate-600 dark:text-slate-400 text-lg">ติดต่อผมได้ทุกเวลาสำหรับโอกาสฝึกงาน</p>
        </div>
        <a
        href="mailto:natthawut.samruamjit01@gmail.com"
        className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-cyan-500 text-white font-medium rounded-full shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-105 transition-all duration-300"
        >
        ติดต่อเลย
        </a>
    </div>
    <div className="text-center mt-16 pt-8 border-t border-slate-200 dark:border-white/5 text-sm text-slate-500">
        © 2025 Portfolio. Built with React & TypeScript
    </div>
    </div>
</footer>
);
