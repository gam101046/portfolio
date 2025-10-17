
import { FaGithub ,FaFacebook} from "react-icons/fa";

const Header = () => (
<header className="border-b border-gray-200">
    <div className="max-w-6xl mx-auto px-6 py-8 flex justify-between items-center">
    <div>
        <h1 className="text-3xl font-bold mb-2">Natthawut Samruamjit</h1>
        <p className="text-gray-600">Full Stack Developer | Student</p>
    </div>
    <div className="flex gap-4">
        <a href="https://github.com/gam101046?tab=repositories"><FaGithub className="w-8 h-8 hover:opacity-70" /></a>
        <a href="https://www.facebook.com/natthawut.samruamjit/"><FaFacebook className="w-8 h-8 hover:opacity-70" /></a>
    </div>
    </div>
</header>
);

export default Header;
