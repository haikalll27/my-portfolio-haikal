// Bilingual UI copy. English is the default and the fallback: any key missing
// from `id` renders its English text rather than a blank.
//
// Project and experience copy lives with its data (portfolioData.js,
// experienceData.js) as inline { en, id } objects — it is used once each,
// whereas everything here is chrome reused across the app.

export const translations = {
  en: {
    meta: {
      title: "Muhamad Haikal Apriansyah — Full Stack Web Developer",
      description:
        "Full Stack Web Developer with over 3 years of experience building web applications, enterprise systems, CMS, LMS, device monitoring systems, and IoT-integrated solutions.",
    },

    nav: {
      home: "Home",
      about: "About",
      portfolio: "Portfolio",
      experience: "Experience",
      contact: "Contact",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      language: "Language",
    },

    welcome: {
      // Split into lines so each locale controls its own word grouping; the
      // AOS stagger is computed from a running index across both lines.
      lines: [
        { tone: "light", aos: "fade-right", words: ["Welcome", "To", "My"] },
        { tone: "accent", aos: "fade-up", words: ["Portfolio", "Website"] },
      ],
    },

    home: {
      badge: "Ready to Innovate",
      titleTop: "Full stack",
      titleBottom: "Developer",
      roles: ["Full Stack Developer", "Digital Technology Enthusiast"],
      description:
        "Full-Stack Web Development from interactive user interface to infrastructure, building modern web applications that are functional, responsive, and user-friendly.",
      ctaProjects: "Projects",
      ctaContact: "Contact",
      lottieAlt: "Coding animation",
    },

    about: {
      title: "About Me",
      subtitle: "Transforming ideas into digital experiences",
      greeting: "Hello, I'm",
      bio: "Full Stack Web Developer with over 3 years of experience building web applications, enterprise systems, Content Management Systems, Learning Management Systems, Device Monitoring Systems, and IoT-integrated solutions. I work primarily on the frontend with JavaScript, TypeScript, React.js, Vue.js, Next.js, and Tailwind CSS, backed by hands-on backend experience in PHP and Laravel. My day-to-day covers RESTful API and payment gateway integration, debugging, testing, deployment, and production troubleshooting across corporate, educational, government, retail, and enterprise environments.",
      downloadCV: "Download CV",
      viewProjects: "View Projects",
      profileAlt: "Profile photo of Muhamad Haikal Apriansyah",
      stats: {
        projectsLabel: "Total Projects",
        projectsDesc: "Innovative web solutions crafted",
        certificatesLabel: "Certificates",
        certificatesDesc: "Professional skills validated",
        experienceLabel: "Years of Experience",
        experienceDesc: "Across corporate and enterprise projects",
      },
    },

    portfolio: {
      title: "Portfolio Showcase",
      subtitle:
        "Explore my journey through projects, certifications, and technical expertise. Each section represents a milestone in my continuous learning path.",
      countProjects: "Projects",
      countCertificates: "Certificates",
      countTechStack: "Tech Stack",
      tabProjects: "Projects",
      tabCertificates: "Certificates",
      tabTechStack: "Tech Stack",
      showMore: "Show More",
      showLess: "Show Less",
      showing: "Showing {shown} of {total} projects",
      prev: "Prev",
      next: "Next",
    },

    card: {
      visitWebsite: "Visit Website",
      demoUnavailable: "Demo Not Available",
      internalSystem: "Internal System",
      details: "Details",
      detailsUnavailable: "Details Not Available",
    },

    project: {
      loading: "Loading Project...",
      notFoundTitle: "Project not found",
      notFoundBody: "This project does not exist or may have been removed.",
      back: "Back",
      breadcrumbProjects: "Projects",
      liveDemo: "Live Demo",
      github: "Github",
      technologiesUsed: "Technologies Used",
      noTechnologies: "No technologies added.",
      keyFeatures: "Key Features",
      noFeatures: "No features added.",
      totalTech: "Technologies",
      totalFeatures: "Key Features",
      internalNote: "Internal system — no public demo",
      screenshotAlt: "{title} project screenshot",
      privateTitle: "Source Code Private",
      privateBody: "The source code for this project is private.",
      privateConfirm: "Got it",
    },

    experience: {
      title: "Work Experience",
      subtitle: "Over 3 years building software across corporate, government, and enterprise environments",
      present: "Present",
      keyProjects: "Key projects",
      education: "Education",
      certifications: "Certifications",
      awards: "Awards",
    },

    contact: {
      title: "Contact Me",
      subtitle: "Got a question? Send me a message, and I'll get back to you soon.",
      getInTouch: "Get in Touch",
      getInTouchDesc: "Have something to discuss? Send me a message and let's talk.",
      namePlaceholder: "Your Name",
      emailPlaceholder: "Your Email",
      phonePlaceholder: "Your Phone Number",
      messagePlaceholder: "Your Message",
      send: "Send Message",
      sending: "Sending...",
      swalSendingTitle: "Sending Message...",
      swalSendingBody: "Please wait while we send your message",
      swalSuccessTitle: "Success!",
      swalSuccessBody: "Your message has been sent successfully!",
      swalErrorTitle: "Error!",
      swalErrorBody: "Something went wrong. Please try again later.",
      connectWithMe: "Connect With Me",
    },

    comments: {
      heading: "Comments",
      name: "Name",
      namePlaceholder: "Enter your name",
      message: "Message",
      messagePlaceholder: "Write your message here...",
      profilePhoto: "Profile Photo",
      optional: "(optional)",
      choosePhoto: "Choose Profile Photo",
      removePhoto: "Remove Photo",
      maxFileSize: "Max file size: 5MB",
      post: "Post Comment",
      posting: "Posting...",
      empty: "No comments yet.",
      failed: "Failed to post comment. Please try again later.",
      justNow: "Just now",
      minutesAgo: "{n}m ago",
      hoursAgo: "{n}h ago",
      daysAgo: "{n}d ago",
    },

    certificate: {
      view: "View Certificate",
      alt: "Certificate",
      fullView: "Certificate full view",
    },

    notFound: {
      title: "Page not found",
      body: "The page you are looking for does not exist or may have been moved.",
      backHome: "Back to Home",
    },

    footer: {
      rights: "All Rights Reserved.",
    },
  },

  id: {
    meta: {
      title: "Muhamad Haikal Apriansyah — Full Stack Web Developer",
      description:
        "Full Stack Web Developer dengan pengalaman lebih dari 3 tahun membangun aplikasi web, sistem enterprise, CMS, LMS, sistem monitoring perangkat, dan solusi terintegrasi IoT.",
    },

    nav: {
      home: "Beranda",
      about: "Tentang",
      portfolio: "Portofolio",
      experience: "Pengalaman",
      contact: "Kontak",
      openMenu: "Buka menu",
      closeMenu: "Tutup menu",
      language: "Bahasa",
    },

    welcome: {
      lines: [
        { tone: "light", aos: "fade-right", words: ["Selamat", "Datang", "di"] },
        { tone: "accent", aos: "fade-up", words: ["Website", "Portofolio", "Saya"] },
      ],
    },

    home: {
      badge: "Siap Berinovasi",
      titleTop: "Full stack",
      titleBottom: "Developer",
      roles: ["Full Stack Developer", "Penggiat Teknologi Digital"],
      description:
        "Pengembangan web full-stack, dari antarmuka interaktif hingga infrastruktur, membangun aplikasi web modern yang fungsional, responsif, dan nyaman digunakan.",
      ctaProjects: "Proyek",
      ctaContact: "Kontak",
      lottieAlt: "Animasi coding",
    },

    about: {
      title: "Tentang Saya",
      subtitle: "Mengubah ide menjadi pengalaman digital",
      greeting: "Halo, saya",
      bio: "Full Stack Web Developer dengan pengalaman lebih dari 3 tahun membangun aplikasi web, sistem enterprise, Content Management System, Learning Management System, Device Monitoring System, dan solusi terintegrasi IoT. Saya banyak bekerja di sisi frontend dengan JavaScript, TypeScript, React.js, Vue.js, Next.js, dan Tailwind CSS, didukung pengalaman langsung di backend dengan PHP dan Laravel. Keseharian saya mencakup integrasi RESTful API dan payment gateway, debugging, testing, deployment, serta penanganan masalah di lingkungan produksi untuk klien korporasi, pendidikan, pemerintahan, retail, dan enterprise.",
      downloadCV: "Unduh CV",
      viewProjects: "Lihat Proyek",
      profileAlt: "Foto profil Muhamad Haikal Apriansyah",
      stats: {
        projectsLabel: "Total Proyek",
        projectsDesc: "Solusi web yang telah dibangun",
        certificatesLabel: "Sertifikat",
        certificatesDesc: "Keahlian yang tervalidasi",
        experienceLabel: "Tahun Pengalaman",
        experienceDesc: "Di berbagai proyek korporasi dan enterprise",
      },
    },

    portfolio: {
      title: "Etalase Portofolio",
      subtitle:
        "Jelajahi perjalanan saya melalui proyek, sertifikasi, dan keahlian teknis. Setiap bagian adalah satu tonggak dalam proses belajar yang terus berjalan.",
      countProjects: "Proyek",
      countCertificates: "Sertifikat",
      countTechStack: "Tech Stack",
      tabProjects: "Proyek",
      tabCertificates: "Sertifikat",
      tabTechStack: "Tech Stack",
      showMore: "Lihat Lebih Banyak",
      showLess: "Lihat Lebih Sedikit",
      showing: "Menampilkan {shown} dari {total} proyek",
      prev: "Sebelumnya",
      next: "Berikutnya",
    },

    card: {
      visitWebsite: "Kunjungi Website",
      demoUnavailable: "Demo Tidak Tersedia",
      internalSystem: "Sistem Internal",
      details: "Detail",
      detailsUnavailable: "Detail Tidak Tersedia",
    },

    project: {
      loading: "Memuat Proyek...",
      notFoundTitle: "Proyek tidak ditemukan",
      notFoundBody: "Proyek ini tidak ada atau mungkin sudah dihapus.",
      back: "Kembali",
      breadcrumbProjects: "Proyek",
      liveDemo: "Live Demo",
      github: "Github",
      technologiesUsed: "Teknologi yang Digunakan",
      noTechnologies: "Belum ada teknologi yang ditambahkan.",
      keyFeatures: "Fitur Utama",
      noFeatures: "Belum ada fitur yang ditambahkan.",
      totalTech: "Teknologi",
      totalFeatures: "Fitur Utama",
      internalNote: "Sistem internal — tanpa demo publik",
      screenshotAlt: "Tangkapan layar proyek {title}",
      privateTitle: "Source Code Privat",
      privateBody: "Maaf, source code untuk proyek ini bersifat privat.",
      privateConfirm: "Mengerti",
    },

    experience: {
      title: "Pengalaman Kerja",
      subtitle: "Lebih dari 3 tahun membangun perangkat lunak untuk lingkungan korporasi, pemerintahan, dan enterprise",
      present: "Sekarang",
      keyProjects: "Proyek utama",
      education: "Pendidikan",
      certifications: "Sertifikasi",
      awards: "Penghargaan",
    },

    contact: {
      title: "Hubungi Saya",
      subtitle: "Punya pertanyaan? Kirim pesan, dan saya akan segera membalasnya.",
      getInTouch: "Mari Terhubung",
      getInTouchDesc: "Ada yang ingin didiskusikan? Kirim pesan dan mari bicara.",
      namePlaceholder: "Nama Anda",
      emailPlaceholder: "Email Anda",
      phonePlaceholder: "Nomor Telepon Anda",
      messagePlaceholder: "Pesan Anda",
      send: "Kirim Pesan",
      sending: "Mengirim...",
      swalSendingTitle: "Mengirim Pesan...",
      swalSendingBody: "Mohon tunggu, pesan Anda sedang dikirim",
      swalSuccessTitle: "Berhasil!",
      swalSuccessBody: "Pesan Anda berhasil dikirim!",
      swalErrorTitle: "Gagal!",
      swalErrorBody: "Terjadi kesalahan. Silakan coba lagi nanti.",
      connectWithMe: "Terhubung Dengan Saya",
    },

    comments: {
      heading: "Komentar",
      name: "Nama",
      namePlaceholder: "Masukkan nama Anda",
      message: "Pesan",
      messagePlaceholder: "Tulis pesan Anda di sini...",
      profilePhoto: "Foto Profil",
      optional: "(opsional)",
      choosePhoto: "Pilih Foto Profil",
      removePhoto: "Hapus Foto",
      maxFileSize: "Ukuran maksimal: 5MB",
      post: "Kirim Komentar",
      posting: "Mengirim...",
      empty: "Belum ada komentar.",
      failed: "Gagal mengirim komentar. Silakan coba lagi nanti.",
      justNow: "Baru saja",
      minutesAgo: "{n} mnt lalu",
      hoursAgo: "{n} jam lalu",
      daysAgo: "{n} hr lalu",
    },

    certificate: {
      view: "Lihat Sertifikat",
      alt: "Sertifikat",
      fullView: "Tampilan penuh sertifikat",
    },

    notFound: {
      title: "Halaman tidak ditemukan",
      body: "Halaman yang Anda cari tidak ada atau mungkin sudah dipindahkan.",
      backHome: "Kembali ke Beranda",
    },

    footer: {
      rights: "Seluruh Hak Cipta Dilindungi.",
    },
  },
};

// BCP-47 tags for Intl APIs (relative dates in comments, date ranges in experience).
export const LOCALES = { en: "en-US", id: "id-ID" };
