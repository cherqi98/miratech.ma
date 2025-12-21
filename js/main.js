document.addEventListener('DOMContentLoaded', () => {
  const toggle   = document.querySelector('.nav-toggle');
  const navList  = document.querySelector('.nav-list');

  if (!toggle || !navList) return;

  toggle.addEventListener('click', () => {
    const isOpen = navList.classList.toggle('open');

    // 1. Change button text
    toggle.textContent = isOpen ? 'Close' : 'Menu';
    toggle.setAttribute('aria-expanded', isOpen);

    // 2. Add/remove .menu-open on <body>
    document.body.classList.toggle('menu-open', isOpen);
  });

  // Close when a link is clicked
  document.querySelectorAll('.nav-list a').forEach(link => {
    link.addEventListener('click', () => {
      navList.classList.remove('open');
      toggle.textContent = 'Menu';
      toggle.setAttribute('aria-expanded', false);
      document.body.classList.remove('menu-open');
    });
  });

  // Close when clicking outside
  document.addEventListener('click', e => {
    if (!toggle.contains(e.target) && !navList.contains(e.target)) {
      navList.classList.remove('open');
      toggle.textContent = 'Menu';
      document.body.classList.remove('menu-open');
    }
  });
});

document.querySelectorAll('a[href*="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    const href = this.getAttribute('href');

    // Only handle same-page # links
    if (href.includes('#') && !href.startsWith('http')) {
      const targetId = href.split('#')[1];
      const target = document.getElementById(targetId);

      if (target) {
        e.preventDefault();

        // 1. Close mobile menu instantly
        const navList = document.querySelector('.nav-list');
        const toggle = document.querySelector('.nav-toggle');
        if (navList && toggle) {
          navList.classList.remove('open');
          toggle.textContent = 'Menu';
          document.body.classList.remove('menu-open');
        }

        // 2. Wait for menu to close (350ms matches CSS transition)
        setTimeout(() => {
          const headerHeight = 80; // adjust if your header is taller
          const offsetTop = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;

          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
        }, 380); // 350ms + 30ms buffer
      }
    }
  });
});

const translations = {
    en: {
        navHome: "Home",
        navAbout: "About",
        navServices: "Services",
        navWhyUs: "Why Us",
        navContact: "Contact",
        heroTitle: "Secure AI Integration for Your Business Software",
        heroBtn: "Start Your AI Journey",
        servicesTitle: "Our AI Integration Services",
        hero_title: "Secure AI Integration for Your Business Software",
        hero_desc: "Transform your applications with enterprise-grade AI assistants. Our experienced specialists ensure safe, compliant, and powerful AI implementation tailored to your needs.",
        hero_btn: "Start Your AI Journey",
        services_main_title: "Our AI Integration Services",
        service_1_title: "AI Assistant Integration",
        service_1_desc: "Seamlessly embed intelligent AI assistants into your existing software. We implement ChatGPT, Claude, and custom LLM solutions with enterprise security.",
        service_2_title: "Secure AI Implementation",
        service_2_desc: "Safety-first approach with data privacy, compliance monitoring, and secure API integration. GDPR and industry-standard compliant solutions.",
        service_3_title: "Custom AI Development",
        service_3_desc: "Build bespoke AI features for your software. From natural language processing to intelligent automation and predictive analytics.",
        service_4_title: "AI Strategy Consulting",
        service_4_desc: "Expert guidance on AI adoption. We assess your needs, design AI architecture, and create implementation roadmaps for maximum ROI.",
        service_5_title: "Machine Learning Integration",
        service_5_desc: "Integrate ML models for data analysis, pattern recognition, and automated decision-making. From proof-of-concept to production deployment.",
        service_6_title: "AI Training & Support",
        service_6_desc: "Comprehensive training for your team on AI tools and best practices. Ongoing support to optimize and scale your AI solutions.",
        why_us_title: "Why Choose MiraTech for AI Integration?",
        why_1_title: "🛡️ Security-First Approach",
        why_1_desc: "We prioritize data protection and implement AI with enterprise-grade security protocols, ensuring your sensitive information stays protected.",
        why_2_title: "👨‍💻 Experienced Specialists",
        why_2_desc: "Our team has deep expertise in AI technologies, software architecture, and secure integration practices across multiple industries.",
        why_3_title: "⚡ Proven Implementation",
        why_3_desc: "We follow industry best practices and proven methodologies to deliver AI solutions that work reliably in production environments.",
        why_4_title: "🔧 Full-Stack Integration",
        why_4_desc: "From frontend chatbots to backend AI processing, we handle every aspect of AI integration in your software ecosystem.",
        cta_title: "Ready to Integrate AI Into Your Software?",
        cta_desc: "Let's discuss how AI can transform your business. Our specialists will assess your needs and design a secure implementation plan.",
        cta_btn: "Schedule a Free Consultation",
        contact_title: "Contact Our AI Integration Specialists",
        contact_email: "Email",
        contact_phone: "Phone",
        contact_footer_text: "Get a free consultation on integrating AI assistants into your software. We respond within 24 hours.",
        footer_rights: "© 2025 MiraTech Software Consulting. All rights reserved. | AI Integration Specialists",
        nav_home: "Home",
        nav_about: "About",
        nav_services: "Services",
        nav_contact: "Contact",
        about_title: "About MiraTech AI Integration",
        about_intro: "MiraTech Software Consulting specializes in secure AI integration for enterprise software. We help companies harness the power of artificial intelligence while maintaining the highest standards of data security, privacy, and compliance.",
        mission_title: "Our Mission",
        mission_desc: "To empower businesses with safe, effective AI solutions that drive innovation without compromising security.",
        expertise_title: "Why AI Integration Requires Expertise",
        expertise_intro: "Integrating AI into existing software isn't just about connecting APIs. It requires deep understanding of:",
        exp_1: "Security Architecture: Protecting sensitive data while leveraging AI capabilities",
        exp_2: "Compliance Standards: Ensuring GDPR and industry-specific regulations are met",
        exp_3: "System Integration: Seamlessly connecting AI with your existing infrastructure",
        exp_4: "Performance Optimization: Balancing AI power with system efficiency",
        exp_5: "Risk Management: Identifying and mitigating AI-specific security vulnerabilities",
        industries_title: "Industries We Serve",
        industries_desc: "Our AI integration expertise spans multiple sectors including healthcare, finance, e-commerce, SaaS, and professional services.",
        about_cta_title: "Ready to Discuss Your AI Integration Project?",
        about_cta_desc: "Let's talk about how we can safely integrate AI into your software. Contact us for a free consultation.",
        about_cta_btn: "Get in Touch",
        contact_whatsapp: "WhatsApp (Direct Chat)",
        contact_footer_text: "Get a free consultation. We typically respond on WhatsApp within 1 hour."
    },
    fr: {
        navHome: "Accueil",
        navAbout: "À Propos",
        navServices: "Services",
        navWhyUs: "Pourquoi nous choisir",
        navContact: "Contact",
        heroTitle: "Intégration d'IA Sécurisée pour vos Logiciels",
        heroBtn: "Démarrez votre projet IA",
        servicesTitle: "Nos Services d'Intégration d'IA",
        hero_title: "Intégration d'IA Sécurisée pour vos Logiciels d'Entreprise",
        hero_desc: "Transformez vos applications avec des assistants IA de classe entreprise. Nos spécialistes expérimentés garantissent une implémentation IA sûre, conforme et puissante, adaptée à vos besoins.",
        hero_btn: "Démarrez votre Projet IA",
        services_main_title: "Nos Services d'Intégration d'IA",
        service_1_title: "Intégration d'Assistant IA",
        service_1_desc: "Intégrez harmonieusement des assistants IA intelligents dans vos logiciels existants. Nous déployons ChatGPT, Claude et des solutions LLM personnalisées avec une sécurité d'entreprise.",
        service_2_title: "Implémentation IA Sécurisée",
        service_2_desc: "Approche axée sur la sécurité avec confidentialité des données et intégration d'API sécurisées. Solutions conformes au RGPD et aux normes industrielles.",
        service_3_title: "Développement IA sur Mesure",
        service_3_desc: "Créez des fonctionnalités d'IA sur mesure. Du traitement du langage naturel à l'automatisation intelligente et l'analyse prédictive.",
        service_4_title: "Conseil en Stratégie IA",
        service_4_desc: "Accompagnement expert pour l'adoption de l'IA. Nous évaluons vos besoins et créons des feuilles de route pour un ROI maximal.",
        service_5_title: "Intégration de Machine Learning",
        service_5_desc: "Intégrez des modèles ML pour l'analyse de données et la prise de décision automatisée. Du prototype au déploiement en production.",
        service_6_title: "Formation et Support IA",
        service_6_desc: "Formation complète de vos équipes aux outils IA. Support continu pour optimiser et faire évoluer vos solutions d'intelligence artificielle.",
        why_us_title: "Pourquoi choisir MiraTech pour l'intégration de l'IA ?",
        why_1_title: "🛡️ Approche axée sur la sécurité",
        why_1_desc: "Nous donnons la priorité à la protection des données et implémentons l'IA avec des protocoles de sécurité de classe entreprise, garantissant la protection de vos informations sensibles.",
        why_2_title: "👨‍💻 Spécialistes expérimentés",
        why_2_desc: "Notre équipe possède une expertise approfondie des technologies d'IA, de l'architecture logicielle et des pratiques d'intégration sécurisées dans plusieurs secteurs.",
        why_3_title: "⚡ Implémentation éprouvée",
        why_3_desc: "Nous suivons les meilleures pratiques de l'industrie et des méthodologies éprouvées pour fournir des solutions d'IA qui fonctionnent de manière fiable en production.",
        why_4_title: "🔧 Intégration Full-Stack",
        why_4_desc: "Des chatbots frontend au traitement de l'IA backend, nous gérons tous les aspects de l'intégration de l'IA dans votre écosystème logiciel.",
        cta_title: "Prêt à intégrer l'IA dans vos logiciels ?",
        cta_desc: "Discutons de la manière dont l'IA peut transformer votre entreprise. Nos spécialistes évalueront vos besoins et concevront un plan d'implémentation sécurisé.",
        cta_btn: "Prendre rendez-vous gratuitement",
        contact_title: "Contactez nos spécialistes en intégration d'IA",
        contact_email: "E-mail",
        contact_phone: "Téléphone",
        contact_footer_text: "Bénéficiez d'une consultation gratuite pour l'intégration d'assistants IA dans vos logiciels. Nous répondons sous 24 heures.",
        footer_rights: "© 2025 MiraTech Software Consulting. Tous droits réservés. | Spécialistes en intégration d'IA",
        nav_home: "Accueil",
        nav_about: "À Propos",
        nav_services: "Services",
        nav_contact: "Contact",
        about_title: "À Propos de MiraTech IA",
        about_intro: "MiraTech Software Consulting se spécialise dans l'intégration sécurisée de l'IA pour les logiciels d'entreprise. Nous aidons les entreprises à exploiter la puissance de l'IA tout en respectant les normes les plus strictes de sécurité et de confidentialité.",
        mission_title: "Notre Mission",
        mission_desc: "Permettre aux entreprises de bénéficier de solutions d'IA sûres et efficaces qui stimulent l'innovation sans compromettre la sécurité.",
        expertise_title: "Pourquoi l'intégration de l'IA nécessite une expertise",
        expertise_intro: "L'intégration de l'IA ne se limite pas à connecter des API. Elle nécessite une compréhension approfondie de :",
        exp_1: "Architecture de Sécurité : Protéger les données sensibles tout en exploitant l'IA",
        exp_2: "Normes de Conformité : Garantir le respect du RGPD et des réglementations sectorielles",
        exp_3: "Intégration Système : Connecter l'IA de manière fluide à votre infrastructure",
        exp_4: "Optimisation des Performances : Équilibrer puissance de l'IA et efficacité système",
        exp_5: "Gestion des Risques : Identifier et atténuer les vulnérabilités spécifiques à l'IA",
        industries_title: "Secteurs d'Activité",
        industries_desc: "Notre expertise s'étend à plusieurs secteurs : santé, finance, e-commerce, SaaS et services professionnels au Maroc.",
        about_cta_title: "Prêt à discuter de votre projet d'intégration d'IA ?",
        about_cta_desc: "Parlons de la manière dont nous pouvons intégrer l'IA en toute sécurité dans vos logiciels. Contactez-nous pour une consultation gratuite.",
        about_cta_btn: "Contactez-nous",
        contact_whatsapp: "WhatsApp (Contact Direct)",
        contact_footer_text: "Bénéficiez d'une consultation gratuite. Nous répondons généralement sur WhatsApp en moins d'une heure."
    }
};

function changeLang(lang) {

  localStorage.setItem('preferredLang', lang);
    document.documentElement.lang = lang;

    // Find all translatable elements
    const elements = document.querySelectorAll('[data-i18n]');
    
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });

    
    // Update Menu
    document.getElementById('nav-home').textContent = translations[lang].navHome;
    document.getElementById('nav-about').textContent = translations[lang].navAbout;
    document.getElementById('nav-services').textContent = translations[lang].navServices;
    document.getElementById('nav-why-us').textContent = translations[lang].navWhyUs;
    document.getElementById('nav-contact').textContent = translations[lang].navContact;

    // Update Hero & Services
    document.querySelector('.hero h2').textContent = translations[lang].heroTitle;
    document.querySelector('.hero .btn').textContent = translations[lang].heroBtn;
    document.querySelector('#services h3').textContent = translations[lang].servicesTitle;

    document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('preferredLang') || 'en';
    changeLang(savedLang);
});
}