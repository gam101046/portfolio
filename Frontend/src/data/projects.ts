

import Songthot from "../assets/logo copy.png";
import Songthot1 from "../assets/สมุดโน้ตไม่มีชื่อ (1)-2.jpg";

import pet1 from "../assets/pet/ภาพถ่ายหน้าจอ 2568-12-02 เวลา 01.06.44.png";
import pet2 from "../assets/pet/ภาพถ่ายหน้าจอ 2568-12-05 เวลา 19.55.36.png";
import pet3 from "../assets/pet/ภาพถ่ายหน้าจอ 2568-12-05 เวลา 19.55.46.png";
import pet4 from "../assets/pet/ภาพถ่ายหน้าจอ 2568-12-05 เวลา 19.55.53.png";
import pet5 from "../assets/pet/ภาพถ่ายหน้าจอ 2568-12-05 เวลา 19.58.17.png";
import pet6 from "../assets/pet/ภาพถ่ายหน้าจอ 2568-12-05 เวลา 19.58.46.png";


import sut1 from "../assets/sut/ภาพถ่ายหน้าจอ 2568-12-21 เวลา 21.50.20.png";
import sut2 from "../assets/sut/ภาพถ่ายหน้าจอ 2568-12-21 เวลา 21.50.35.png";
import sut3 from "../assets/sut/ภาพถ่ายหน้าจอ 2568-12-21 เวลา 21.50.46.png";
import sut4 from "../assets/sut/ภาพถ่ายหน้าจอ 2568-12-21 เวลา 21.52.30.png";

import cap1 from "../assets/Capstone/1.png";
import cap2 from "../assets/Capstone/2.png";
import cap3 from "../assets/Capstone/3.png";
import cap4 from "../assets/Capstone/4.png";
import cap5 from "../assets/Capstone/5.png";
import cap6 from "../assets/Capstone/6.png";
import cap7 from "../assets/Capstone/Pre-Project-หน้า-5.drawio.png";
import cap8 from "../assets/Capstone/ภาพถ่ายหน้าจอ 2568-12-21 เวลา 21.33.11.png";
import cap9 from "../assets/Capstone/ภาพถ่ายหน้าจอ 2568-12-21 เวลา 21.33.17.png";

import boiler1 from "../assets/boiler/ภาพถ่ายหน้าจอ 2568-12-21 เวลา 21.42.36.png";
import boiler2 from "../assets/boiler/ภาพถ่ายหน้าจอ 2568-12-21 เวลา 21.42.44.png";
import boiler3 from "../assets/boiler/ภาพถ่ายหน้าจอ 2568-12-21 เวลา 21.43.01.png";
import boiler4 from "../assets/boiler/ภาพถ่ายหน้าจอ 2568-12-21 เวลา 21.44.45.png";


import em1 from "../Em/ภาพถ่ายหน้าจอ 2568-12-22 เวลา 10.21.36.png";
import em2 from "../Em/ภาพถ่ายหน้าจอ 2568-12-22 เวลา 10.21.45.png";
import em3 from "../Em/ภาพถ่ายหน้าจอ 2568-12-22 เวลา 10.22.03.png";


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
    fullDescription: "พัฒนาแพลตฟอร์มอีคอมเมิร์ซแบบ Full-Stack เพื่อให้ผู้ใช้สามารถลงประกาศขายสินค้ามือสองและค้นหาสินค้าที่ต้องการได้อย่างง่ายดาย",
    tags: ["React", "Node.js", "SQLite", "Go"],
    image: [Songthot, sut1 , sut2 , sut3 , sut4],
    titlegallery: ["", "หน้าแรกของระบบ SongThorSUT","หน้าสำหรับซื้อสินค้าและแชทกับผผู้ขาย","หน้าแสดงรายละเอียดคำสั่งซื้อ","หน้าแชทสำหรับติดต่อผู้ขาย"],
    projecttype: "โปรเจคกลุ่ม",
    features: ["ระบบจัดการสินค้า", "ระบบรีวิวและให้คะแนน ","ระบบจัดการผู้ใช้" , "ระบบจัดการคำสั่งซื้อ" , "ระบบแชท"],
    github: "https://github.com/gam101046/SA-FULL-MAIN-FINAL.git",
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
    description: "ระบบดูแลสุขภาพสัตว์เลี้ยง",
    fullDescription:
    "ระบบดูแลสุขภาพสัตว์เลี้ยงโดยผู้ใช้สามารถจองคิวพี่เลี้ยงสัตว์หรือจองบริการต่างๆ ผ่านแอปพลิเคชัน รวมถึงการซื้อสินค้าและอาหารสัตว์เลี้ยงได้อย่างสะดวกสบาย",
    tags: ["React", "SQLite", "TypeScript", "Go" ,"Node.js"],
    image: [pet1 , pet2 , pet3 , pet4 , pet5 , pet6],
    titlegallery: ["หน้าแรกของระบบ" ,"หน้าเพิ่มสินค้า" ,"หน้าแก้ไขสินค้า" ,'หน้าเพิ่มโปรโมชั่น' ,'หน้าแรกสำหรับผู้ใช้ทั่วไป','มินิเกมส์เพื่อรับส่วนลด'],
    projecttype: "โปรเจคกลุ่ม",
    features: ["ระบบจัดการสินค้า","ระบบจัดการโปรโมชั่น"],
    github: "https://github.com/sut67/team05.git",
    demo: "#",
},

{
    id: 4,
    title: "Thryveth",
    description: "ระบบติดตามการกินอาหารในแต่ละวันและให้คำแนะนำด้านโภชนาการ",
    fullDescription:
    "ระบบติดตามการกินอาหารในแต่ละวันและให้คำแนะนำด้านโภชนาการโดยใช้เทคโนโลยี AI ในการวิเคราะห์ข้อมูลโภชนาการจากภาพถ่ายอาหารที่ผู้ใช้ถ่ายและบันทึกลงในระบบ รวมถึงการสร้างรายงานสุขภาพและคำแนะนำในการปรับปรุงพฤติกรรมการกินอาหารให้เหมาะสมกับสุขภาพของแต่ละบุคคล",
    tags: ["React", "SQLite", "TypeScript", "Go" ,"Node.js","Python","Hugging Face","Kaggle","FastAPI"],
    image: [cap1 , cap2 , cap3 , cap4 , cap5 , cap6 , cap7 , cap8 , cap9],
    titlegallery: ["หน้าแรกของระบบ","หน้าแสดงข้อมูลการกินอาหาร","หน้าเพิ่มข้อมูลการกินอาหาร","หน้าแสดงตราวจสอบค่าโภชนาการด้วยAI","แสดงค่าโภชนาการ","หน้ารีพอร์ตโมเดลเมื่อทำนายผิด","ER-Diagram","User-Diagram","Admin-Diagram"],
    projecttype: "โปรเจคกลุ่ม",
    features: ["AI วิเคราะห์โภชนาการจากภาพถ่ายอาหาร","ระบบติดตามการกินอาหาร","ระบบรีพอร์ตโมเดล AI" ,"ระบบแอดมิน"],
    github: "https://github.com/Khaichiaro/Capstone-Project.git",
    demo: "#",
},

{
    id: 5,
    title: "Boiler Master",
    description: "ระบบลดการเกิดlossในการเผาไหม้เชื้อเพลิงในboiler",
    fullDescription:
    "Prototype ระบบช่วยลดการเกิดloss ในการเผาไหม้เชื้อเพลิงในboiler โดยใช้การทำนายจากโมเดล LSTM เพื่อปรับค่าการทำงานของboilerแบบเรียลไทม์ ช่วยเพิ่มประสิทธิภาพในการเผาไหม้และลดการสูญเสียพลังงาน",
    tags: ["React", "TypeScript", "Python", "Hugging Face" ,"FastAPI"],
    image: [boiler1 , boiler2 , boiler3 , boiler4],
    titlegallery: ["หน้าแสดงข้อมูลจากsensorในbiolerและผลการทำนายเปรวไฟของโมเดล","กราฟแสดงผลการทำนายของโมเดล","การแจ้งเตือนของAIเมื่อเกิดlossและให้คำแนะนำในการปรับ","Diagram ของระบบ"],
    projecttype: "โปรเจคกลุ่ม",
    features: ["แสดงผลข้อมูลแบบเรียลไทม์", "AI ทำนายการเกิด loss", "AI จำแนกประเภทของเปรวไฟ","AI ให้คำแนะนำในการปรับค่าการทำงานของboiler"],
    github: "https://github.com/poonchub/boiler-sensei.git",
    demo: "#",
},
{
    id: 6,
    title: "Embedded system",
    description: "เว็บรายงานการทำ lab วิชา Embedded system ",
    fullDescription:
    "เว็บรายงานการทำ lab วิชา Embedded system ที่มีเนื้อหาเกี่ยวกับ Raspberry Pi และการใช้งาน GPIO การใช้งาน PLC และอีกมากมาย",
    tags: ["Raspberry Pi", "PLC", "NodeRed", "Blynk" ,"ThingsBoard","MQTT",'HMI',"Modbus"],
    image: [em1 , em2 , em3],
    titlegallery: [],
    projecttype: "โปรเจคgเดี่ยว",
    features: [],
    github: "https://sites.google.com/view/natthawutembedded/raspberry-pi?authuser=0",
    demo: "#",
},

];
