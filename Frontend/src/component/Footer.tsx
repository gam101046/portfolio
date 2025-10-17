export const Footer = () => (
<footer className="border-t border-gray-200 mt-20">
    <div className="max-w-6xl mx-auto px-6 py-12">
    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
        <h3 className="text-2xl font-bold mb-2">มาทำงานด้วยกันไหมครับ?</h3>
        <p className="text-gray-600">ติดต่อผมได้ทุกเวลาสำหรับโอกาสฝึกงาน</p>
        </div>
        <a
        href="mailto:your.email@example.com"
        className="px-8 py-3 bg-black text-white font-medium rounded-full hover:bg-gray-800 transition-colors"
        >
        ติดต่อเลย
        </a>
    </div>
    <div className="text-center mt-12 text-sm text-gray-500">
        © 2025 Portfolio. Built with React & TypeScript
    </div>
    </div>
</footer>
);
