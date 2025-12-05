

import Songthot from "../assets/logo copy.png";
import Songthot1 from "../assets/สมุดโน้ตไม่มีชื่อ (1)-2.jpg";

import pet1 from "../assets/pet/ภาพถ่ายหน้าจอ 2568-12-02 เวลา 01.06.44.png";
import pet2 from "../assets/pet/ภาพถ่ายหน้าจอ 2568-12-05 เวลา 19.55.36.png";
import pet3 from "../assets/pet/ภาพถ่ายหน้าจอ 2568-12-05 เวลา 19.55.46.png";
import pet4 from "../assets/pet/ภาพถ่ายหน้าจอ 2568-12-05 เวลา 19.55.53.png";
import pet5 from "../assets/pet/ภาพถ่ายหน้าจอ 2568-12-05 เวลา 19.58.17.png";
import pet6 from "../assets/pet/ภาพถ่ายหน้าจอ 2568-12-05 เวลา 19.58.46.png";

export interface Project {
    id: number;
    title: string;
    description: string;
    fullDescription: string;
    tags: string[];
    image: string[];
    titlegallery: string[];
    projecttype?: string;
    features: string[];
    github?: string;
    demo?: string;
}

export const projects: Project[] = [
{
    id: 1,
    title: "SongThorSUT",
    description: "ระบบสำหรับซื้อ-ขายสินค้ามือสองภายในมหาวิทยาลัย",
    fullDescription: "พัฒนาแพลตฟอร์มอีคอมเมิร์ซแบบ Full-Stack โดยใช้ MERN Stack (MongoDB, Express.js, React.js, Node.js) เพื่อให้ผู้ใช้สามารถลงประกาศขายสินค้ามือสองและค้นหาสินค้าที่ต้องการได้อย่างง่ายดาย",
    tags: ["React", "Node.js", "SQLite", "Go"],
    image: [Songthot, Songthot1],
    titlegallery: ["หน้าแรกของระบบ SongThorSUT", "หน้าแกลเลอรี่ของระบบ SongThorSUT"],
    projecttype: "โปรเจคกลุ่ม",
    features: ["ระบบจัดการสินค้า", "ระบบรีวิวและให้คะแนน ","ระบบจัดการผู้ใช้" , "ระบบจัดการคำสั่งซื้อ" , "ระบบแชท"],
    github: "#",
    demo: "#",
},

{
    id: 2,
    title: "Smart Farm",
    description: "โปรเจคฟาร์มอัจฉริยะควบคุมด้วย IoT ",
    fullDescription:
    "ระบบฟาร์มอัจฉริยะที่ใช้เทคโนโลยี IoT ในการตรวจสอบและควบคุมสภาพแวดล้อมของฟาร์ม เช่น อุณหภูมิ ความชื้น และแสงสว่าง เพื่อเพิ่มประสิทธิภาพในการปลูกพืชและลดการใช้ทรัพยากร โดยใช้ Raspberry Pi เป็นserverกลางในการประมวลผลข้อมูลจากเซ็นเซอร์ต่างๆ และส่งคำสั่งไปยังอุปกรณ์ควบคุมต่างๆ ผ่าน MQTT Protocol",
    tags: ["Node-RED ", "MQTT", "ESP32", "Raspberry Pi"],
    image: [Songthot1],
    titlegallery: ["โครงสร้าง Smart Farm"],
    projecttype: "โปรเจคกลุ่ม",
    features: ["แสดงผลข้อมูลแบบเรียลไทม์", "ควบคุมอุปกรณ์ระยะไกล", "แจ้งเตือนผ่านแอปพลิเคชันไลน์"],
    github: "#",
    demo: "#",
},

{
    id: 3,
    title: "Pet Care System",
    description: "ระบบดูแลสุขภาพสัตว์เลี้ยงด้วย",
    fullDescription:
    "",
    tags: ["React", "SQLite", "TypeScript", "Go" ,"Node.js"],
    image: [pet1 , pet2 , pet3 , pet4 , pet5 , pet6],
    titlegallery: ["หน้าแรกของระบบ" ,"หน้าเพิ่มสินค้า" ,"หน้าแก้ไขสินค้า" ,'หน้าเพิ่มโปรโมชั่น' ,'หน้าแรกสำหรับผู้ใช้ทั่วไป','มินิเกมส์เพื่อรับส่วนลด'],
    projecttype: "โปรเจคกลุ่ม",
    features: ["แสดงผลข้อมูลแบบเรียลไทม์", "ควบคุมอุปกรณ์ระยะไกล", "แจ้งเตือนผ่านแอปพลิเคชันไลน์"],
    github: "#",
    demo: "#",
},

{
    id: 4,
    title: "Thryveth",
    description: "ระบบติดตามการกินอาหารในแต่ละวันและให้คำแนะนำด้านโภชนาการ",
    fullDescription:
    "",
    tags: ["React", "SQLite", "TypeScript", "Go" ,"Node.js"],
    image: [Songthot1],
    titlegallery: ["หน้าแรกของระบบ"],
    projecttype: "โปรเจคกลุ่ม",
    features: ["แสดงผลข้อมูลแบบเรียลไทม์", "ควบคุมอุปกรณ์ระยะไกล", "แจ้งเตือนผ่านแอปพลิเคชันไลน์"],
    github: "#",
    demo: "#",
},

{
    id: 5,
    title: "Boiler Master",
    description: "ระบบลดการเกิดlossในการเผาไหม้เชื้อเพลิงในboiler",
    fullDescription:
    "",
    tags: ["React", "SQLite", "TypeScript", "Go" ,"Node.js"],
    image: [Songthot1],
    titlegallery: ["โครงสร้าง Smart Farm"],
    projecttype: "โปรเจคกลุ่ม",
    features: ["แสดงผลข้อมูลแบบเรียลไทม์", "ควบคุมอุปกรณ์ระยะไกล", "แจ้งเตือนผ่านแอปพลิเคชันไลน์"],
    github: "#",
    demo: "#",
},

];
