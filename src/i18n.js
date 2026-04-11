import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  es: {
    translation: {
      nav: { work: "Proyectos", about: "Sobre mí", contact: "Contacto" },
      hero: {
        eyebrow: "Portfolio · 2026",
        title1: "Diseño y construyo",
        title2: "productos digitales",
        title3: "que conectan.",
        description:
          "Soy un desarrollador mobile enfocado en crear interfaces elegantes, performantes y bien pensadas. Combino arquitectura sólida con atención al detalle para construir productos que realmente se sienten.",
      },
      work: {
        title: "Trabajos seleccionados",
        count: "{{count}} proyectos",
      },
      about: {
        title: "Sobre mí",
        p1: "Senior Mobile Developer.\nExperto en tecnologías móviles, desde aplicaciones nativas hasta soluciones multiplataforma, con enfoque en arquitectura, escalabilidad y rendimiento.\nCuento con sólida experiencia construyendo aplicaciones robustas y mantenibles, aplicando buenas prácticas y principios de ingeniería para asegurar calidad y evolución continua del producto.",
        p2: "Me enfoco en crear experiencias fluidas combinando diseño, movimiento y código, cuidando cada detalle de la interacción y la experiencia del usuario.",
      },
      contact: {
        eyebrow: "Contacto",
        title: "¿Trabajamos juntos?",
      },
      theme: { light: "Light", dark: "Dark" },
      projects: {
        peigo: {
          title: "PEIGO",
          role: "Ingeniero de Software",
          description:
            "Empresa de software dedicada al desarrollo, mantenimiento y comercialización de aplicaciones y soluciones tecnológicas.",
          href: "https://apps.apple.com/us/app/peigo-tu-dinero-en-una-app/id1629453879",
          logo: "https://cdn.prod.website-files.com/62f68c34e221ecef42d03299/686fe6bb70a05969da0e8797_peigo_logo.svg",
        },
        izipay: {
          title: "IZIPAY",
          role: "Ingeniero de Aplicaciones Mid",
          description:
            "Solución de pagos en Perú que permite a negocios y emprendedores aceptar tarjetas de crédito/débito (Visa, Mastercard, Amex, Diners) y billeteras digitales.",
          href: "https://apps.apple.com/pe/app/izipay/id1573072162",
          logo: "https://www.izipay.pe/_next/image/?url=https%3A%2F%2Fcdnwebb.izipay.pe%2Frsrc%2F_next%2Fstatic%2Fmedia%2FLogo.d654b6dd.png&w=384&q=75",
        },
        consubanco: {
          title: "CONSUBANCO",
          role: "Ingeniero de Software",
          description:
            "Empresa de software dedicada al desarrollo, mantenimiento y comercialización de aplicaciones y soluciones tecnológicas.",
          href: "https://apps.apple.com/us/app/consubanco/id1671054815",
          logo: "https://www.consubanco.com/content/dam/consubanco/static-assets/logos/logo.png",
        },
        bci: {
          title: "BCI CHILE",
          role: "Ingeniero de Software",
          description:
            "Empresa de software dedicada al desarrollo, mantenimiento y comercialización de aplicaciones y soluciones tecnológicas.",
          href: "https://apps.apple.com/us/app/bci/id1207892426",
          logo: "https://cdn3.bci.cl/uploads/e682d72b-13b1-49a3-93ce-20f6252e1d17/original/logo_bci_negro.svg",
        },
        encora: {
          title: "ENCORA",
          role: "Desarrollador Fullstack",
          description:
            "Empresa de software dedicada al desarrollo, mantenimiento y comercialización de aplicaciones y soluciones tecnológicas.",
          href: "https://apps.apple.com/pe/app/interbank-app/id378649517",
          logo: "https://www.encora.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fyon5rraf34cy%2F79kzG7hI6Aps6cv6Aocb6H%2F76c56d2335d20935cfecab9696697801%2Fencora_logo_green.svg&w=384&q=75",
        },
        mindshore: {
          title: "MINDSHORE",
          role: "Ingeniero de Software",
          description:
            "Empresa de software dedicada al desarrollo, mantenimiento y comercialización de aplicaciones y soluciones tecnológicas.",
          href: "",
          logo: "https://mindshore.io/principal.svg",
        },
        thinkup: {
          title: "THINKUP",
          role: "Ingeniero de Software",
          description:
            "Empresa de software dedicada al desarrollo, mantenimiento y comercialización de aplicaciones y soluciones tecnológicas.",
          href: "https://apps.apple.com/us/app/oca/id1450506124",
          logo: "https://thinkupsoft.com/images/logo.svg",
        },
        tata: {
          title: "TATA CONSULTING",
          role: "Ingeniero de Software",
          description:
            "Empresa de software dedicada al desarrollo, mantenimiento y comercialización de aplicaciones y soluciones tecnológicas.",
          href: "https://apps.apple.com/pe/app/clinica-internacional/id1052808886",
          logo: "https://www.tcs.com/content/dam/global-tcs/en/images/home/tcs-logo-1.svg",
        },
        coderio: {
          title: "CODER IO",
          role: "Desarrollador de Software",
          description:
            "Empresa de software dedicada al desarrollo, mantenimiento y comercialización de aplicaciones y soluciones tecnológicas.",
          href: "https://apps.apple.com/uy/app/patagonia-m%C3%B3vil/id1178757002",
          logo: "https://798b987e.delivery.rocketcdn.me/wp-content/uploads/2024/05/coderio-logo-color-800x150-1.png",
        },
        tribal: {
          title: "TRIBAL WORLD WIDE",
          role: "Ingeniero de Software",
          description:
            "Empresa de software dedicada al desarrollo, mantenimiento y comercialización de aplicaciones y soluciones tecnológicas.",
          href: "https://apps.apple.com/ar/app/bi-en-l%C3%ADnea/id510761055",
          logo: "https://tribalworldwide.gt/wp-content/uploads/2022/06/tribal-es-logo2022.svg",
        },
        tismart: {
          title: "TISMART",
          role: "Desarrollador de Software",
          description:
            "Empresa de software dedicada al desarrollo, mantenimiento y comercialización de aplicaciones y soluciones tecnológicas.",
          href: "https://apps.apple.com/pe/app/banco-ripley-per%C3%BA/id1425352352",
          logo: "https://scontent.flim33-1.fna.fbcdn.net/v/t39.30808-6/253236736_4623721687680149_4439580083592166992_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=1d70fc&_nc_ohc=XHiNU3cGr20Q7kNvwEv0Err&_nc_oc=Adq8GRpbq-j1NDnGyLvY_bmFa-6N3Zzg882XpZ_YAih199OPEgr77DE6Lfi0Aw0PTnc&_nc_zt=23&_nc_ht=scontent.flim33-1.fna&_nc_gid=wyQ9h2uebgF9m6PXFiCmUQ&_nc_ss=7a3a8&oh=00_Af2iht-Votx4tpMlFMiexIP1rOuULq1pSY2xd-Pn3fvPKA&oe=69DE7922",
        },
      },
    },
  },
  en: {
    translation: {
      nav: { work: "Work", about: "About", contact: "Contact" },
      hero: {
        eyebrow: "Portfolio · 2026",
        title1: "I design and build",
        title2: "digital products",
        title3: "that connect.",
        description:
          "I'm a mobile developer focused on creating elegant, high-performing, and well-designed interfaces. I combine robust architecture with attention to detail to build products that truly feel like home.",
      },
      work: {
        title: "Selected work",
        count: "{{count}} projects",
      },
      about: {
        title: "About",
        p1: "Senior Mobile Developer.\nExpert in mobile technologies, from native applications to cross-platform solutions, with a focus on architecture, scalability, and performance.\nI have solid experience building robust and maintainable applications, applying best practices and engineering principles to ensure quality and continuous product evolution.",
        p2: "I focus on creating seamless experiences by combining design, motion, and code, paying attention to every detail of user interaction and experience.",
      },
      contact: {
        eyebrow: "Contact",
        title: "Let's work together?",
      },
      theme: { light: "Light", dark: "Dark" },
      projects: {
        peigo: {
          title: "PEIGO",
          role: "Software Engineer",
          description:
            "A software company dedicated to the development, maintenance, and commercialization of technological applications and solutions.",
          href: "https://apps.apple.com/us/app/peigo-tu-dinero-en-una-app/id1629453879",
          logo: "https://cdn.prod.website-files.com/62f68c34e221ecef42d03299/686fe6bb70a05969da0e8797_peigo_logo.svg",
        },
        izipay: {
          title: "IZIPAY",
          role: "Mid Application Engineer",
          description:
            "A payment solution in Peru that allows businesses and entrepreneurs to accept credit/debit cards (Visa, Mastercard, Amex, Diners) and digital wallets.",
          href: "https://apps.apple.com/pe/app/izipay/id1573072162",
          logo: "https://www.izipay.pe/_next/image/?url=https%3A%2F%2Fcdnwebb.izipay.pe%2Frsrc%2F_next%2Fstatic%2Fmedia%2FLogo.d654b6dd.png&w=384&q=75",
        },
        consubanco: {
          title: "CONSUBANCO",
          role: "Software Engineer",
          description:
            "A software company dedicated to the development, maintenance, and commercialization of technological applications and solutions.",
          href: "https://apps.apple.com/us/app/consubanco/id1671054815",
          logo: "https://www.consubanco.com/content/dam/consubanco/static-assets/logos/logo.png",
        },
        bci: {
          title: "BCI CHILE",
          role: "Software Engineer",
          description:
            "A software company dedicated to the development, maintenance, and commercialization of technological applications and solutions.",
          href: "https://apps.apple.com/us/app/bci/id1207892426",
          logo: "https://cdn3.bci.cl/uploads/e682d72b-13b1-49a3-93ce-20f6252e1d17/original/logo_bci_negro.svg",
        },
        encora: {
          title: "ENCORA",
          role: "Fullstack Developer",
          description:
            "A software company dedicated to the development, maintenance, and commercialization of technological applications and solutions.",
          href: "https://apps.apple.com/pe/app/interbank-app/id378649517",
          logo: "https://www.encora.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fyon5rraf34cy%2F79kzG7hI6Aps6cv6Aocb6H%2F76c56d2335d20935cfecab9696697801%2Fencora_logo_green.svg&w=384&q=75",
        },
        mindshore: {
          title: "MINDSHORE",
          role: "Software Engineer",
          description:
            "A software company dedicated to the development, maintenance, and commercialization of technological applications and solutions.",
          href: "",
          logo: "https://mindshore.io/principal.svg",
        },
        thinkup: {
          title: "THINKUP",
          role: "Software Engineer",
          description:
            "A software company dedicated to the development, maintenance, and commercialization of technological applications and solutions.",
          href: "https://apps.apple.com/us/app/oca/id1450506124",
          logo: "https://thinkupsoft.com/images/logo.svg",
        },
        tata: {
          title: "TATA CONSULTING",
          role: "Software Engineer",
          description:
            "A software company dedicated to the development, maintenance, and commercialization of technological applications and solutions.",
          href: "https://apps.apple.com/pe/app/clinica-internacional/id1052808886",
          logo: "https://www.tcs.com/content/dam/global-tcs/en/images/home/tcs-logo-1.svg",
        },
        coderio: {
          title: "CODER IO",
          role: "Software Developer",
          description:
            "A software company dedicated to the development, maintenance, and commercialization of technological applications and solutions.",
          href: "https://apps.apple.com/uy/app/patagonia-m%C3%B3vil/id1178757002",
          logo: "https://798b987e.delivery.rocketcdn.me/wp-content/uploads/2024/05/coderio-logo-color-800x150-1.png",
        },
        tribal: {
          title: "TRIBAL WORLD WIDE",
          role: "Software Engineer",
          description:
            "A software company dedicated to the development, maintenance, and commercialization of technological applications and solutions.",
          href: "https://apps.apple.com/ar/app/bi-en-l%C3%ADnea/id510761055",
          logo: "https://tribalworldwide.gt/wp-content/uploads/2022/06/tribal-es-logo2022.svg",
        },
        tismart: {
          title: "TISMART",
          role: "Software Developer",
          description:
            "A software company dedicated to the development, maintenance, and commercialization of technological applications and solutions.",
          href: "https://apps.apple.com/pe/app/banco-ripley-per%C3%BA/id1425352352",
          logo: "https://scontent.flim33-1.fna.fbcdn.net/v/t39.30808-6/253236736_4623721687680149_4439580083592166992_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=1d70fc&_nc_ohc=XHiNU3cGr20Q7kNvwEv0Err&_nc_oc=Adq8GRpbq-j1NDnGyLvY_bmFa-6N3Zzg882XpZ_YAih199OPEgr77DE6Lfi0Aw0PTnc&_nc_zt=23&_nc_ht=scontent.flim33-1.fna&_nc_gid=wyQ9h2uebgF9m6PXFiCmUQ&_nc_ss=7a3a8&oh=00_Af2iht-Votx4tpMlFMiexIP1rOuULq1pSY2xd-Pn3fvPKA&oe=69DE7922",
        },
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "es",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;
