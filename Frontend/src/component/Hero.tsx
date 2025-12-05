import Profile from '../assets/ดีไซน์ที่ยังไม่ได้ตั้งชื่อ.png'

const Hero = () => (
<section className="max-w-6xl mx-auto px-4 md:px-6 py-8 md:py-8">
    <div className="flex flex-col md:flex-row  gap-6">

    {/* Left (Text) */}
    <div className="flex-1 order-2 md:order-2">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 leading-tight">
        สวัสดีครับ! ผม Natthawut Samruamjit
        </h2>
        <h3>
            นักศึกษามหาวิทยาลัยเทคโนโลยีสุรนารี <br/>
            สำนักวิชาวิศวกรรมศาสตร์ สาขาวิศวกรรมคอมพิวเตอร์ ปี 4 <br/>
            เกรดเฉลี่ยสะสม 3.38 <br/>
            email: <a href="mailto:natthawut.samruamjit01@gmail.com" className="text-back-600 underline">
            natthawut.samruamjit01@gmail.com
            </a> <br/>
            phone: 091-016-4350

        </h3>

        <p className="text-base md:text-lg text-gray-600 leading-relaxed py-4">
        กำลังมองหาโอกาสฝึกงานเพื่อพัฒนาทักษะและเรียนรู้จากผู้เชี่ยวชาญในวงการ
        มีประสบการณ์ในการพัฒนาโปรเจกต์ด้วยเทคโนโลยีที่ทันสมัย ทั้งด้านเว็บแอปพลิเคชันและงานระบบหลังบ้าน
        สนใจด้าน (AI), (IoT) และ Web Development เป็นพิเศษ
        พร้อมเรียนรู้และพัฒนาตนเองอย่างต่อเนื่องเพื่อนำความรู้ไปประยุกต์ใช้แก้ปัญหาในสถานการณ์จริง
        </p>
    </div>

    {/* Right (Image) */}
    <div className="order-1 md:order-1">
        <img
        src={Profile}
        alt="Profile"
        className="w-40 sm:w-48 md:w-56 lg:w-64 h-auto object-cover rounded-lg shadow-lg"
        loading="lazy"
        />
    </div>

    </div>
</section>
);

export default Hero;
