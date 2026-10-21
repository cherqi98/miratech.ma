/* -------------------------------------------------
   Translations (every data-i18n key on every page)
   ------------------------------------------------- */
const translations = {
  en: {
    skip_link: "Skip to content",
    nav_home: "Home",
    nav_about: "About",
    nav_services: "Services",
    nav_why_us: "Why Us",
    nav_contact: "Contact",

    hero_eyebrow: "AI Integration · Morocco",
    hero_title: "Secure AI Integration for Your Business Software",
    hero_desc: "Transform your applications with enterprise-grade AI assistants. Our experienced specialists ensure safe, compliant, and powerful AI implementation tailored to your needs.",
    hero_btn: "Start Your AI Journey",
    hero_chip_1: "Security-first",
    hero_chip_2: "GDPR-compliant",
    hero_chip_3: "French & English",

    services_kicker: "What we do",
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

    why_kicker: "Why MiraTech",
    why_us_title: "Why Choose MiraTech for AI Integration?",
    why_1_title: "Security-First Approach",
    why_1_desc: "We prioritize data protection and implement AI with enterprise-grade security protocols, ensuring your sensitive information stays protected.",
    why_2_title: "Experienced Specialists",
    why_2_desc: "Our team has deep expertise in AI technologies, software architecture, and secure integration practices across multiple industries.",
    why_3_title: "Proven Implementation",
    why_3_desc: "We follow industry best practices and proven methodologies to deliver AI solutions that work reliably in production environments.",
    why_4_title: "Full-Stack Integration",
    why_4_desc: "From frontend chatbots to backend AI processing, we handle every aspect of AI integration in your software ecosystem.",

    faq_title: "Frequently Asked Questions About AI Integration",
    faq_q1: "How do I integrate AI into my website in Morocco?",
    faq_a1: "Integration is done through secure APIs or custom models. MiraTech helps you choose the solution best suited to your local infrastructure.",
    faq_q2: "How much does an AI assistant for a business cost?",
    faq_a2: "The cost depends on complexity. We offer tailored solutions ranging from a simple chatbot to the full integration of secure LLMs.",

    cta_title: "Ready to Integrate AI Into Your Software?",
    cta_desc: "Let's discuss how AI can transform your business. Our specialists will assess your needs and design a secure implementation plan.",
    cta_btn: "Schedule a Free Consultation",

    contact_kicker: "Get in touch",
    contact_title: "Contact Our AI Integration Specialists",
    contact_email_label: "Send an Email",
    contact_whatsapp_label: "Chat on WhatsApp",
    contact_phone_label: "Call Us",
    contact_footer_text: "Get a free consultation on integrating AI assistants into your software. We respond within 24 hours.",

    footer_tagline: "Software Consulting · AI Integration Specialists in Morocco",
    footer_nav_title: "Explore",
    footer_rights: "MiraTech Software Consulting. All rights reserved.",

    about_meta_title: "About Us | AI Integration Experts | MiraTech",
    about_eyebrow: "About us",
    about_title: "About MiraTech AI Integration",
    about_intro: "MiraTech Software Consulting specializes in secure AI integration for enterprise software. We help companies harness the power of artificial intelligence while maintaining the highest standards of data security, privacy, and compliance.",
    mission_title: "Our Mission",
    mission_desc: "To empower businesses with safe, effective AI solutions that drive innovation without compromising security. We bridge the gap between cutting-edge AI technology and enterprise-grade implementation.",
    expertise_title: "Why AI Integration Requires Expertise",
    expertise_intro: "Integrating AI into existing software isn't just about connecting APIs. It requires deep understanding of:",
    exp_1_t: "Security Architecture:",
    exp_1_d: "Protecting sensitive data while leveraging AI capabilities",
    exp_2_t: "Compliance Standards:",
    exp_2_d: "Ensuring GDPR, HIPAA, and industry-specific regulations are met",
    exp_3_t: "System Integration:",
    exp_3_d: "Seamlessly connecting AI with your existing infrastructure",
    exp_4_t: "Performance Optimization:",
    exp_4_d: "Balancing AI power with system efficiency and cost",
    exp_5_t: "Risk Management:",
    exp_5_d: "Identifying and mitigating AI-specific security vulnerabilities",
    industries_title: "Industries We Serve",
    industries_desc: "Our AI integration expertise spans multiple sectors including healthcare, finance, e-commerce, SaaS, education, and professional services. Each implementation is customized to meet industry-specific compliance and security requirements.",
    about_cta_title: "Ready to Discuss Your AI Integration Project?",
    about_cta_desc: "Let's talk about how we can safely integrate AI into your software. Contact us for a free consultation.",
    about_cta_btn: "Get in Touch"
  },
  fr: {
    skip_link: "Aller au contenu",
    nav_home: "Accueil",
    nav_about: "À Propos",
    nav_services: "Services",
    nav_why_us: "Pourquoi nous",
    nav_contact: "Contact",

    hero_eyebrow: "Intégration IA · Maroc",
    hero_title: "Intégration d'IA Sécurisée pour vos Logiciels d'Entreprise",
    hero_desc: "Transformez vos applications avec des assistants IA de classe entreprise. Nos spécialistes expérimentés garantissent une implémentation IA sûre, conforme et puissante, adaptée à vos besoins.",
    hero_btn: "Démarrez votre Projet IA",
    hero_chip_1: "Sécurité d'abord",
    hero_chip_2: "Conforme au RGPD",
    hero_chip_3: "Français & Anglais",

    services_kicker: "Ce que nous faisons",
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

    why_kicker: "Pourquoi MiraTech",
    why_us_title: "Pourquoi choisir MiraTech pour l'intégration de l'IA ?",
    why_1_title: "Approche axée sur la sécurité",
    why_1_desc: "Nous donnons la priorité à la protection des données et implémentons l'IA avec des protocoles de sécurité de classe entreprise, garantissant la protection de vos informations sensibles.",
    why_2_title: "Spécialistes expérimentés",
    why_2_desc: "Notre équipe possède une expertise approfondie des technologies d'IA, de l'architecture logicielle et des pratiques d'intégration sécurisées dans plusieurs secteurs.",
    why_3_title: "Implémentation éprouvée",
    why_3_desc: "Nous suivons les meilleures pratiques de l'industrie et des méthodologies éprouvées pour fournir des solutions d'IA qui fonctionnent de manière fiable en production.",
    why_4_title: "Intégration Full-Stack",
    why_4_desc: "Des chatbots frontend au traitement de l'IA backend, nous gérons tous les aspects de l'intégration de l'IA dans votre écosystème logiciel.",

    faq_title: "Questions fréquentes sur l'intégration d'IA",
    faq_q1: "Comment intégrer l'IA dans mon site web au Maroc ?",
    faq_a1: "L'intégration se fait via des API sécurisées ou des modèles personnalisés. MiraTech vous accompagne dans le choix de la solution la plus adaptée à votre infrastructure locale.",
    faq_q2: "Quel est le coût d'un assistant IA pour entreprise ?",
    faq_a2: "Le coût dépend de la complexité. Nous proposons des solutions sur mesure allant du simple chatbot à l'intégration complète de LLM sécurisés.",

    cta_title: "Prêt à intégrer l'IA dans vos logiciels ?",
    cta_desc: "Discutons de la manière dont l'IA peut transformer votre entreprise. Nos spécialistes évalueront vos besoins et concevront un plan d'implémentation sécurisé.",
    cta_btn: "Prendre rendez-vous gratuitement",

    contact_kicker: "Contactez-nous",
    contact_title: "Contactez nos spécialistes en intégration d'IA",
    contact_email_label: "Envoyer un e-mail",
    contact_whatsapp_label: "Discuter sur WhatsApp",
    contact_phone_label: "Appelez-nous",
    contact_footer_text: "Bénéficiez d'une consultation gratuite pour l'intégration d'assistants IA dans vos logiciels. Nous répondons sous 24 heures.",

    footer_tagline: "Conseil logiciel · Spécialistes en intégration d'IA au Maroc",
    footer_nav_title: "Explorer",
    footer_rights: "MiraTech Software Consulting. Tous droits réservés.",

    about_meta_title: "À Propos | Experts en Intégration IA | MiraTech",
    about_eyebrow: "À propos",
    about_title: "À Propos de MiraTech IA",
    about_intro: "MiraTech Software Consulting se spécialise dans l'intégration sécurisée de l'IA pour les logiciels d'entreprise. Nous aidons les entreprises à exploiter la puissance de l'IA tout en respectant les normes les plus strictes de sécurité et de confidentialité.",
    mission_title: "Notre Mission",
    mission_desc: "Permettre aux entreprises de bénéficier de solutions d'IA sûres et efficaces qui stimulent l'innovation sans compromettre la sécurité. Nous faisons le lien entre les technologies d'IA de pointe et une implémentation de niveau entreprise.",
    expertise_title: "Pourquoi l'intégration de l'IA nécessite une expertise",
    expertise_intro: "L'intégration de l'IA ne se limite pas à connecter des API. Elle nécessite une compréhension approfondie de :",
    exp_1_t: "Architecture de Sécurité :",
    exp_1_d: "Protéger les données sensibles tout en exploitant l'IA",
    exp_2_t: "Normes de Conformité :",
    exp_2_d: "Garantir le respect du RGPD, de HIPAA et des réglementations sectorielles",
    exp_3_t: "Intégration Système :",
    exp_3_d: "Connecter l'IA de manière fluide à votre infrastructure existante",
    exp_4_t: "Optimisation des Performances :",
    exp_4_d: "Équilibrer la puissance de l'IA, l'efficacité système et les coûts",
    exp_5_t: "Gestion des Risques :",
    exp_5_d: "Identifier et atténuer les vulnérabilités spécifiques à l'IA",
    industries_title: "Secteurs d'Activité",
    industries_desc: "Notre expertise s'étend à plusieurs secteurs : santé, finance, e-commerce, SaaS, éducation et services professionnels au Maroc. Chaque implémentation est adaptée aux exigences de conformité et de sécurité de votre secteur.",
    about_cta_title: "Prêt à discuter de votre projet d'intégration d'IA ?",
    about_cta_desc: "Parlons de la manière dont nous pouvons intégrer l'IA en toute sécurité dans vos logiciels. Contactez-nous pour une consultation gratuite.",
    about_cta_btn: "Contactez-nous"
  }
};

const LANG_KEY = 'preferredLang';

function readSavedLang() {
  try { return localStorage.getItem(LANG_KEY); } catch (e) { return null; }
}

function changeLang(lang) {
  const dict = translations[lang];
  if (!dict) return;

  try { localStorage.setItem(LANG_KEY, lang); } catch (e) { /* storage blocked */ }
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const text = dict[el.getAttribute('data-i18n')];
    if (text) el.textContent = text;
  });

  document.querySelectorAll('.lang-btn').forEach(btn => {
    const isActive = btn.dataset.lang === lang;
    btn.classList.toggle('active', isActive);
    btn.setAttribute('aria-pressed', isActive);
  });
}

/* -------------------------------------------------
   Page setup
   ------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
  // Language: buttons + restore the visitor's saved choice.
  // Without a saved choice the page keeps its original (indexed) content.
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => changeLang(btn.dataset.lang));
  });
  const savedLang = readSavedLang();
  if (translations[savedLang]) changeLang(savedLang);

  // Footer year
  document.querySelectorAll('.year').forEach(el => {
    el.textContent = new Date().getFullYear();
  });

  // Mobile menu
  const toggle  = document.querySelector('.nav-toggle');
  const navList = document.querySelector('.nav-list');

  if (toggle && navList) {
    const setMenu = open => {
      navList.classList.toggle('open', open);
      toggle.setAttribute('aria-expanded', open);
    };

    toggle.addEventListener('click', () => setMenu(!navList.classList.contains('open')));

    // Close when a link is clicked
    navList.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => setMenu(false));
    });

    // Close when clicking outside or pressing Escape
    document.addEventListener('click', e => {
      if (!toggle.contains(e.target) && !navList.contains(e.target)) setMenu(false);
    });
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') setMenu(false);
    });
  }

  // Reveal-on-scroll (content stays visible if IntersectionObserver is missing)
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -40px 0px' });

    const revealEls = document.querySelectorAll('.reveal');
    revealEls.forEach(el => observer.observe(el));
    document.documentElement.classList.add('js');

    // Safety net: never leave content hidden if the observer doesn't fire
    window.addEventListener('load', () => {
      setTimeout(() => revealEls.forEach(el => el.classList.add('is-visible')), 3000);
    });
  }
});
