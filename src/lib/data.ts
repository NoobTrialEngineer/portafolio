import { i, title } from "framer-motion/client";


export const personalInfo = {
  name: "Martín Medina",
  location: "Quito, Ecuador",
  email: "andres.martin1726@gmail.com",
  github: "https://github.com/NoobTrialEngineer",
  linkedin: "https://www.linkedin.com/in/noobtrialengineer/",
};

export const workExperience = [
  {
    company: "Varios",
    location: "Remoto",
    position: "Freelance",
    period: "2025 - Presente",
    achievements: [
      "Construcción de aplicaciones web y móviles utilizando tecnologías como React, Angular, SpringBoot.",
      "Desarrollo de distintos sistemas como puntos de venta con facturación electrónica.",
    ],
  },
  {
    company: "COSEDE",
    location: "Quito, Ecuador",
    position: "Pasante de Desarrollo",
    period: "Julio 2023 - Enero 2024",
    achievements: [
      "Desarrollo de un sistema de gestión de equipos para la institución.",
      "MIgración de distintos sistemas a contenedores Docker.",
      "Mantenimiento de servidores de pruebas.",
    ],
  }
];

export const education = [
  {
    institution: "Universidad de las Fuerzas Armadas ESPE",
    location: "Sangolquí, Ecuador",
    degree: "Ingeniería en Software",
    period: "Mayo 2020 - Marzo 2025",
  },
];
export const skills = {
  programmingLanguages: [
    { language: "Java", icon: "/java.png" },
    {
      language: "TypeScript",
      icon: "/ts.png",
    },
    {
      language: "JavaScript",
      icon: "/js.png",
    },
    { language: "C++", icon: "/cplus.png" },
    { language: "C#", icon: "/csharp.png" },
    { language: "Dart", icon: "/dart.png" },
  ],
  frontendDevelopment: [
    { language: "Angularjs", icon: "/angular.png" },
    { language: "Reactjs", icon: "/react.png" },
    { language: "Astro", icon: "/astro.png" },
    { language: "Flutter", icon: "/flutter.png" },
    { language: "Tailwind CSS", icon: "/tailwind.png" },
  ],
  backendDevelopment: [
    { language: "SpringBoot", icon: "/springboot.png" },
    { language: "Nestjs", icon: "/nest.png" },
    { language: ".NET", icon: "/net.png" },
    { language: "Nodejs", icon: "/node.png" },
  ],
  databaseAndStorage: [
    { language: "PostgreSQL", icon: "/posgre.png" },
    { language: "MySQL", icon: "/mysql.png" },
    { language: "OracleDB", icon: "/oracle.png" },
    { language: "SQL Server", icon: "/sqlserver.png" },
    { language: "MongoDB", icon: "/mongodb.png" },
    { language: "FIrebase", icon: "/firebase.png" },
  ],
  cloudAndDevOps: [{ language: "Google Cloud", icon: "/google.png" }, { language: "Digital Ocean", icon: "/do.png" }],
  toolsAndServices: [
    { language: "Docker", icon: "/docker.png" },
    { language: "Sonarqube", icon: "/sq.png" },
    { language: "Jira", icon: "/jira.png" },
    { language: "Github", icon: "/github.png" },
    { language: "Jenkins", icon: "/jenkins.png" },
    { language: "Bizagi", icon: "/bizagi.png" },
  ],
};

export const projects = [
  {
    title: "Sistema de Inventario y Facturacion Electrónica",
    github: "",
    description: [
      "Desarrollo de un sistema de inventario y facturación electrónica para una agropecuaria.",
      "Implementación de facturacción electrónica utilizando veronica-open-api (modificada).",
      "Construida con Angular, SpringBoot y PostgreSQL.",
      "Integración de un sistema de gestión de usuarios con roles y permisos con oauth y JWT.",
      "Incluye funcionalidades de gestión de productos, clientes, proveedores, ventas, cierre de caja y reportes.",
    ],
  },
  {
    title: "Powerfit",
    github: "",
    description: [
      "Proyecto propio enfocado en la salud y bienestar fisico a base de recompensas.",
      "Se basa en un sistema de recompenzas dadas por empresas para sus empleados al cumplir metas de salud.",
      "Se esta realizando utilizando NestJS, PosgreSQL, FIrebase y Flutter.",
      "Incluye funcionalidades de gestión de usuarios, metas, recompensas y un sistema de notificaciones.",
    ],
  },
  {
    title: "Landing Page tipo portafolio",
    github: "https://github.com/NoobTrialEngineer/portafolio",
    isMinor: true,
    description: [
      "Portafolio creado con la plantilla de Rishikesh S., el cual incluye un diseño responsivo y animaciones. Construido con Astro, Tailwind CSS y React. Desplegado con Vercel.",
    ],
  },
  {
    title: "Parkaching",
    github: "https://github.com/NoobTrialEngineer/parkcaching",
    description: [
      "ParkCaching es una aplicación móvil de Flutter que combina los principios del geocaching con la realidad aumentada (RA) para mejorar la experiencia de explorar parques y espacios públicos. Los usuarios pueden descubrir objetos virtuales ocultos escaneando códigos QR ubicados en diferentes ubicaciones y visualizar modelos 3D en RA.",
    ],
    isMinor: true,
    },
    {
      title: "Administración hospitales con websockets",
      github: "https://github.com/NoobTrialEngineer/hospitales",
      isMinor: true,
      description: [
        "Sistema de administración de hospitales utilizando websockets para la comunicación en tiempo real entre el servidor y los clientes. Construido con ReactJS, Java y MySQL.",
      ]
    }
];

