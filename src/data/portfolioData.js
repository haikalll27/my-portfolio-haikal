const createProject = (project) => ({
  ...project,
  TechStack:
    project.TechStack ||
    project.Description.split("|")
      .map((item) => item.trim())
      .filter(Boolean),
  Features: project.Features || [],
});

export const portfolioProjects = [
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

export const syncPortfolioStorage = () => {
  if (typeof window === "undefined") {
    return;
  }

  localStorage.setItem("projects", JSON.stringify(portfolioProjects));
  localStorage.setItem("certificates", JSON.stringify(portfolioCertificates));
  localStorage.setItem("techStacks", JSON.stringify(portfolioTechStacks));
};
