import React, { useState } from 'react';
import { Calendar, Trophy, MapPin } from 'lucide-react';
import image1 from "../assets/IMG_5034.png"
import image2 from "../assets/image2.png"
import image3 from "../assets/image.png"
import image4 from "../assets/image4.png"
import image5 from "../assets/image5.png"

interface Activity {
    id: number;
    title: string;
    type: 'competition' | 'event';
    date: string;
    location: string;
    description: string;
    image: string;
    achievement?: string;
}

const ActivityHistory: React.FC = () => {
const [activities] = useState<Activity[]>([
    {
    id: 1,
    title: 'กิจกรรมวิ่งเกียร์ครั้งที่ 10',
    type: 'event',
    date: '25 พฤษภาคม  2567',
    location: 'มหาวิทยาลัยเทคโนโลยีสุรนารี',
    description: 'กิจกรรมสร้อยน้องคล้องเกียร์พี่ครั้งที่ 10 ',
    image: image1,
    },
    {
    id: 2,
    title: 'AI Prompt Master',
    type: 'competition',
    date: '15 กันยายน 2568',
    location: 'มหาวิทยาลัยเทคโนโลยีสุรนารี',
    description: 'การแข่งขันสร้าง Prompt สำหรับ Generative AI เพื่อสร้างสรรค์ผลงานใหม่ๆ',
    image: image2,
    achievement: 'รองชนะเลิศอันดับ 2'
    },
    {
    id: 3,
    title: 'Cloud Hero #7',
    type: 'event',
    date: '8-22 มีนาคม 2568',
    location: 'มหาวิทยาลัยเทคโนโลยีสุรนารี',
    description: 'เวิร์กชอปและการแข่งขันด้าน Cloud Computing สำหรับนักศึกษา',
    image: image3,
    },
    {
    id: 4,
    title: 'Workshop: AI&LLM',
    type: 'event',
    date: '20 กรกฎาคม 2568',
    location: 'มหาวิทยาลัยเทคโนโลยีสุรนารี',
    description: 'เวิร์กชอปเชิงปฏิบัติการเกี่ยวกับปัญญาประดิษฐ์และโมเดลภาษาขนาดใหญ่ และการใช้งาน n8n',
    image: image4
    },
    {
    id: 5,
    title: 'Gen AI Hackathon By Mitr Phol',
    type: 'competition',
    date: '2-3 ตุลาคม 2568',
    location: "กรุงเทพมหานคร",
    description: 'การแข่งขัน Hackathon เพื่อพัฒนาโซลูชันที่ขับเคลื่อนด้วยปัญญาประดิษฐ์สำหรับอุตสาหกรรมน้ำตาล',
    image: image5,
    achievement: 'ผ่านเข้ารอบ 6 ทีมสุดท้าย '
    },
]);

return (
    <div className="max-w-6xl mx-auto px-6 py-10 border-t border-gray-200 mt-1">
    <h1 className="text-3xl font-bold text-gray-800 mb-8">ประวัติการเข้าร่วมกิจกรรม</h1>
    
    <div className="space-y-6 grid grid-cols-1 md:grid-cols-2  gap-8">
        {activities.map((activity) => (
        <div 
            key={activity.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
        >
            <div className="md:flex">
            <div className="md:w-1/3">
                <img 
                src={activity.image} 
                alt={activity.title}
                className="w-full h-48 md:h-full object-cover"
                />
            </div>
            
            <div className="p-6 md:w-2/3">
                <div className="flex items-start justify-between mb-3">
                <div>
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">
                    {activity.title}
                    </h2>
                    {activity.achievement && (
                    <div className="inline-flex items-center gap-1 bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium mb-2">
                        <Trophy className="w-4 h-4" />
                        {activity.achievement}
                    </div>
                    )}
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    activity.type === 'competition'
                    ? 'bg-blue-100 text-blue-800'
                    : 'bg-green-100 text-green-800'
                }`}>
                    {activity.type === 'competition' ? 'การแข่งขัน' : 'กิจกรรม'}
                </span>
                </div>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                {activity.description}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-3 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{activity.date}</span>
                </div>
                <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>{activity.location}</span>
                </div>
                </div>
            </div>
            </div>
        </div>
        ))}
    </div>
    </div>

);
};

export default ActivityHistory;