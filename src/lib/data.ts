

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
];

export const awards = [
  {
    name: "IEEE YESIST12 Hackathon",
    issuer: "IEEE",
    date: "Sep 2022",
    type: "International",
    position: "Second Place",
  },
  {
    name: "Prodigi Cognizant Hackathon",
    issuer: "Cognizant",
    date: "Feb 2023",
    type: "National",
    position: "Second Runner-up",
  },
  {
    name: "Cisco Thingqbator Hackathon",
    issuer: "Cisco",
    date: "Jan 2023",
    type: "National",
    position: "First Runner-up",
  },
  {
    name: "Innovators Day",
    issuer: "Sri Manakula Vinayagar Engineering College, Pondicherry",
    date: "Sep 2022",
    type: "National",
    position: "First Prize",
  },
  {
    name: "KG Hackfest'22",
    issuer: "KGiSL Institute of Technology, Coimbatore",
    date: "Sep 2022",
    type: "National",
    position: "Second Prize",
  },
  {
    name: "Innohacks'22",
    issuer: "Innogeeks, KIET Group of Institutions, New Delhi",
    date: "May 2022",
    type: "National",
    position: "Second Runner-up",
  },
  {
    name: "Hack @ SKCET",
    issuer: "Hackclub SKCET, SKCET, Coimbatore",
    date: "Feb 2022",
    type: "National",
    position: "Most Impactful Hack",
  },
];
