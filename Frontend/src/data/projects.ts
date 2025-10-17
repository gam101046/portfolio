

import Songthot from "../assets/logo copy.png";


export interface Project {
    id: number;
    title: string;
    description: string;
    fullDescription: string;
    tags: string[];
    image: string;
    projecttype?: string;
    gallery: string[];
    titlegallery?: string[];
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
    image: Songthot,
    projecttype: "โปรเจคกลุ่ม",
    features: ["ระบบจัดการสินค้า", "ระบบรีวิวและให้คะแนน ","ระบบจัดการผู้ใช้" , "ระบบจัดการคำสั่งซื้อ" , "ระบบแชท"],
    gallery: [Songthot],
    titlegallery: ['Logo'],
    github: "#",
    demo: "#",
},
];
