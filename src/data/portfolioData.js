// Client projects: public sites with a screenshot and a live URL.
const createProject = (project) => ({
  ...project,
  Kind: "client",
  TechStack:
    project.TechStack ||
    project.Description.split("|")
      .map((item) => item.trim())
      .filter(Boolean),
  Features: project.Features || [],
});

// Enterprise projects: internal systems with no public URL and no screenshot.
// They render as icon + gradient cards until an image is supplied — drop a file
// in /public and set Img to its path to switch a card over to the image layout.
//
// Client names are masked by industry per the site owner's decision; the real
// names are on the CV. Icon is a string key (not a component) so the data module
// stays serializable and free of React imports.
const createEnterpriseProject = (project) => ({
  Img: null,
  Link: null,
  Github: "Private",
  Features: [],
  ...project,
  Kind: "enterprise",
  // Same pipe-delimited Description convention as client projects, so the
  // detail page's tech badges and counter populate identically.
  TechStack:
    project.TechStack ||
    project.Description.split("|")
      .map((item) => item.trim())
      .filter(Boolean),
});

export const portfolioProjects = [
  createEnterpriseProject({
    id: 101,
    Icon: "cms",
    Title: "Frontend Developer",
    Name: "CMS — National Bank",
    Company: "PT Sentuh Digital Teknologi",
    Period: "2026 — Present",
    Description: "React.js | TypeScript | Tailwind CSS | REST API",
    Summary:
      "Content Management System for centralised management of digital content across the bank's channels.",
    Features: [
      "Centralised content management for multiple channels",
      "Role-based access for content editors and approvers",
      "Scheduled publishing and content lifecycle handling",
      "REST API integration with backend services",
    ],
  }),
  createEnterpriseProject({
    id: 102,
    Icon: "lms",
    Title: "Frontend Developer",
    Name: "Learning Management System — University",
    Company: "PT Sentuh Digital Teknologi",
    Period: "2026 — Present",
    Description: "React.js | TypeScript | Tailwind CSS | REST API",
    Summary:
      "LMS supporting academic activities, learning materials, and classroom management for a university.",
    Features: [
      "Course and classroom management",
      "Learning material upload and distribution",
      "Academic activity tracking for students and lecturers",
      "Responsive interface for desktop and mobile use",
    ],
  }),
  createEnterpriseProject({
    id: 103,
    Icon: "cloud",
    Title: "Frontend Developer",
    Name: "Cloud Platform — Salin Cloud",
    Company: "PT Sentuh Digital Teknologi",
    Period: "2026 — Present",
    Description: "React.js | TypeScript | Tailwind CSS | REST API",
    Summary:
      "Frontend for a cloud-based platform, covering the enterprise dashboard and service management screens.",
    Features: [
      "Cloud service management dashboard",
      "API-driven data views with loading and error states",
      "Reusable component library for consistent UI",
    ],
  }),
  createEnterpriseProject({
    id: 104,
    Icon: "monitor",
    Title: "Frontend Developer",
    Name: "Device Monitoring System — Enterprise",
    Company: "PT Sentuh Digital Teknologi",
    Period: "2026 — Present",
    Description: "React.js | TypeScript | Tailwind CSS | IoT Integration",
    Summary:
      "System for monitoring device status, condition, and activity across an enterprise device fleet.",
    Features: [
      "Real-time device status and condition monitoring",
      "Activity history and device detail views",
      "IoT device integration for monitoring and control",
      "Alerting for offline or abnormal device states",
    ],
  }),
  createEnterpriseProject({
    id: 105,
    Icon: "meeting",
    Title: "Frontend Developer",
    Name: "Smart Meeting Room — Mining Company",
    Company: "PT Sentuh Digital Teknologi",
    Period: "2026 — Present",
    Description: "React.js | TypeScript | Tailwind CSS | IoT Integration",
    Summary:
      "Integrated meeting room and device management solution for a state-owned mining company.",
    Features: [
      "Meeting room booking and schedule display",
      "Integrated control of in-room devices via IoT",
      "Room availability status in real time",
    ],
  }),
  createEnterpriseProject({
    id: 106,
    Icon: "mdm",
    Title: "Frontend Developer",
    Name: "Mobile Device Management — Pharmaceutical Retail",
    Company: "PT Sentuh Digital Teknologi",
    Period: "2025",
    Description: "React.js | JavaScript | Tailwind CSS | REST API",
    Summary:
      "MDM platform for managing and monitoring a distributed fleet of company mobile devices.",
    Features: [
      "Device enrolment and inventory management",
      "Remote device policy and configuration management",
      "Device status monitoring across retail outlets",
    ],
  }),
  createEnterpriseProject({
    id: 107,
    Icon: "monitor",
    Title: "Frontend Developer",
    Name: "Device Monitoring System — Islamic Bank",
    Company: "PT Sentuh Digital Teknologi",
    Period: "2025",
    Description: "React.js | JavaScript | Tailwind CSS | IoT Integration",
    Summary:
      "Device monitoring solution covering branch device status and operational condition reporting.",
    Features: [
      "Branch-level device status dashboard",
      "Condition and uptime reporting",
      "IoT integration with supporting services",
    ],
  }),
  createEnterpriseProject({
    id: 108,
    Icon: "cms",
    Title: "Frontend Developer",
    Name: "CMS Digital Poster — National News Agency",
    Company: "PT Sentuh Digital Teknologi",
    Period: "2025 — Present",
    Description: "React.js | JavaScript | Tailwind CSS | REST API",
    Summary:
      "CMS driving digital poster content for a national news agency's display network.",
    Features: [
      "Digital poster content scheduling and publishing",
      "Media asset management",
      "Content distribution to display endpoints",
    ],
  }),
  createEnterpriseProject({
    id: 109,
    Icon: "attendance",
    Title: "Frontend Developer",
    Name: "IoT Attendance System",
    Company: "PT Sentuh Digital Teknologi",
    Period: "2025",
    Description: "React.js | JavaScript | Tailwind CSS | IoT Integration",
    Summary:
      "Attendance system integrated with IoT devices for automated presence recording.",
    Features: [
      "Automated attendance capture from IoT devices",
      "Attendance recap and reporting views",
      "Device-to-application data synchronisation",
    ],
  }),
  createEnterpriseProject({
    id: 110,
    Icon: "attendance",
    Title: "Frontend Developer",
    Name: "Attendance System — State Bank (Junio Smart)",
    Company: "PT Sentuh Digital Teknologi",
    Period: "2025",
    Description: "React.js | JavaScript | Tailwind CSS | Third-Party API",
    Summary:
      "School attendance system integrated with a state bank's Junio Smart savings programme.",
    Features: [
      "Attendance recording integrated with the bank's programme",
      "Third-party API integration",
      "Reporting for school and programme administrators",
    ],
  }),
  createEnterpriseProject({
    id: 111,
    Icon: "visitor",
    Title: "Frontend Developer",
    Name: "Visitor Tracker",
    Company: "PT Sentuh Digital Teknologi",
    Period: "2025",
    Description: "React.js | JavaScript | Tailwind CSS | REST API",
    Summary:
      "Visitor management application for recording and tracking guest visits at corporate sites.",
    Features: [
      "Visitor check-in and check-out recording",
      "Visit history and searchable visitor log",
      "Host notification on visitor arrival",
    ],
  }),
  createEnterpriseProject({
    id: 112,
    Icon: "cms",
    Title: "Frontend Developer",
    Name: "CMS Dashboard Photobooth",
    Company: "PT Buiten Technology",
    Period: "2024 — 2025",
    Description: "Vue.js | JavaScript | Tailwind CSS | REST API",
    Summary:
      "CMS dashboard for managing photobooth content, devices, and operational data.",
    Features: [
      "Photobooth content and template management",
      "Device and location data management",
      "Operational monitoring dashboard",
    ],
  }),
  createEnterpriseProject({
    id: 113,
    Icon: "crypto",
    Title: "Frontend Developer",
    Name: "Cryptocurrency Platform UI",
    Company: "PT Buiten Technology",
    Period: "2024 — 2025",
    Description: "Vue.js | JavaScript | Tailwind CSS | REST API",
    Summary:
      "Interface for a cryptocurrency platform, built from UI designs into responsive components.",
    Features: [
      "Market and asset listing views",
      "Responsive layouts across breakpoints",
      "API integration for live market data",
    ],
  }),
  createEnterpriseProject({
    id: 114,
    Icon: "dashboard",
    Title: "Frontend Developer",
    Name: "Car Wash Management Dashboard",
    Company: "PT Buiten Technology",
    Period: "2024 — 2025",
    Description: "Vue.js | JavaScript | Tailwind CSS | REST API",
    Summary:
      "Management dashboard supporting car wash business monitoring and daily operations.",
    Features: [
      "Transaction and service record management",
      "Operational monitoring for outlet activity",
      "Business reporting views",
    ],
  }),
  createProject({
    id: 1,
    Img: "/portofolio-hd.png",
    Title: "Fullstack Web Developer",
    Name: "Homedevs",
    Description: "HTML | CSS | JS | Bootstrap | Laravel (PHP) | MySQL",
    Link: "https://homedevs.id",
  }),
  createProject({
    id: 2,
    Img: "/portofolio-fan.png",
    Title: "Fullstack Web Developer",
    Name: "Faust Aegis Network",
    Description: "HTML | CSS | JS | Bootstrap | Laravel (PHP) | MySQL",
    Link: "https://homedevs.id/fan",
  }),
  createProject({
    id: 3,
    Img: "/portofolio-silancar.png",
    Title: "Backtend Web Developer",
    Name: "Silancar Nakertranskonut",
    Description: "Laravel (PHP) | MySQL",
    Link: "https://silancar-nakertranskonut.id",
  }),
  createProject({
    id: 4,
    Img: "/portofolio-icas.png",
    Title: "Backtend Web Developer",
    Name: "INTERNATIONAL CONFERENCE ON APPLIED SCIENCE 2024",
    Description: "Laravel (PHP) | MySQL",
    Link: "https://icassvipb.com",
  }),
  createProject({
    id: 5,
    Img: "/portofolio-labella.png",
    Title: "Frontend Web Developer",
    Name: "Labella Online Strore",
    Description: "HTML | CSS | JS | Bootstrap | Laravel (PHP)",
    Link: "https://www.labellaonlinestore.com",
  }),
  createProject({
    id: 6,
    Img: "/portofolio-gri-beef.png",
    Title: "Frontend Web Developer",
    Name: "Giri Beef Nusantara",
    Description: "HTML | CSS | JS | Bootstrap | Laravel (PHP)",
    Link: "https://giribeefnusantara.id",
  }),
  createProject({
    id: 7,
    Img: "/portofolio-sneakers.png",
    Title: "Frontend Web Developer",
    Name: "Naira Sneakers",
    Description: "HTML | CSS | JS | Bootstrap | Laravel (PHP)",
    Link: "#",
  }),
  createProject({
    id: 8,
    Img: "/portofolio-dipinus.png",
    Title: "Backtend Web Developer",
    Name: "Dipinus",
    Description: "Laravel (PHP) | MySQL",
    Link: "https://app.dipinus.codepower.site",
  }),
  createProject({
    id: 9,
    Img: "/portofolio-ptksn.png",
    Title: "Frontend Web Developer",
    Name: "PT KSN",
    Description: "HTML | CSS | JS | Bootstrap | Laravel (PHP)",
    Link: "#",
  }),
  createProject({
    id: 10,
    Img: "/portofolio-njy.png",
    Title: "Fullstack Web Developer",
    Name: "Nata Jaya Electro",
    Description: "HTML | CSS | JS | Bootstrap | Laravel (PHP) | MySQL",
    Link: "https://www.natajayaelektro.com",
  }),
  createProject({
    id: 11,
    Img: "/portofolio-bpskljawa.png",
    Title: "Fullstack Web Developer",
    Name: "BPSKL Jawa",
    Description: "HTML | CSS | JS | Bootstrap | Laravel (PHP) | MySQL",
    Link: "https://bpskljawa.codepower.site",
  }),
  createProject({
    id: 12,
    Img: "/portofolio-destinasi.png",
    Title: "Fullstack Web Developer",
    Name: "Wisata Alam",
    Description: "HTML | CSS | JS | Bootstrap | Laravel (PHP) | MySQL",
    Link: "#",
  }),
  createProject({
    id: 13,
    Img: "/portofolio-bakul.png",
    Title: "Frontend Web Developer",
    Name: "Beasiswa Kuliah (Bakul)",
    Description: "HTML | CSS | JS | Bootstrap | Laravel (PHP)",
    Link: "#",
  }),
];

export const portfolioCertificates = [
  {
    id: 1,
    Img: "/sertifikas-dicoding-haikal-1.png",
  },
  {
    id: 2,
    Img: "/sertifikas-dicoding-haikal-2.png",
  },
];

export const portfolioTechStacks = [
  { icon: "/html.svg", language: "HTML" },
  { icon: "/css.svg", language: "CSS" },
  { icon: "/javascript.svg", language: "JavaScript" },
  { icon: "/tailwind.svg", language: "Tailwind CSS" },
  { icon: "/bootstrap.svg", language: "Bootstrap" },
  { icon: "/php.svg", language: "PHP" },
  { icon: "/laravel.svg", language: "Laravel" },
  { icon: "/reactjs.svg", language: "ReactJS" },
  { icon: "/vuejs.svg", language: "Vue Js" },
  { icon: "/nextjs.svg", language: "Next Js" },
  { icon: "/MUI.svg", language: "Material UI" },
  { icon: "/git.svg", language: "Git" },
];

export const getProjectById = (id) =>
  portfolioProjects.find((project) => String(project.id) === String(id));
