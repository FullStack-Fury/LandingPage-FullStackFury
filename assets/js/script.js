const translations = {
    en: {
        home: "Home",
        about: "About us",
        subscriptions: "Subscriptions",
        contact: "Contact",
        account: "My Account",
        heroHeading: "The ultimate solution for demanding jewelers.",
        heroDescription: "Transform your business with GemZ, the specialized software for process and inventory management for workshops and jewelry stores.",
        moreInfo: "More Information",
        aboutHeading: "About Us",
        aboutDescription: "GemZ is a software solution created by FullStackFury that transforms process and inventory management in the jewelry industry. Designed for both workshops and jewelry stores, it offers complete control at every stage of production, from the acquisition of materials to the delivery of the final product.",
        contactUs: "Contact Us",
        teamHeading: "Our Development Team",
        pricingHeading: "Prices",
        pricingSubheading: "Subscription Plans",
        pricingDescription: "Choose the right plan for your type of business and take advantage of the benefits offered by GemZ.",
        jewelryWorkshopHeading: "Jewelry Workshop Owner Subscription",
        jewelryWorkshopSubheading: "Control and improve your production",
        jewelryWorkshopPrice: "$29",
        jewelryWorkshopDuration: "/month",
        jewelryWorkshopBtn: "Start your free trial",
        noCardJewelryWorkshop: "No credit card required",
        jewelryWorkshopFeature1: "Stage-by-Stage Production Tracking",
        jewelryWorkshopFeature2: "Production Performance Report",
        jewelryWorkshopFeature3: "Quality Control",
        jewelryWorkshopFeature4: "Resource Optimization",
        jewelryWorkshopFeature5: "Production Efficiency",
        jewelryWorkshopFeature6: "Scalability",

        jewelryStoreHeading: "Jewelry Store Owner Subscription",
        jewelryStoreSubheading: "Optimize the management of your jewelry store",
        jewelryStorePrice: "$49",
        jewelryStoreDuration: "/month",
        jewelryStoreBtn: "Start your free trial",
        noCardJewelryStore: "No credit card required",
        jewelryStoreFeature1: "Custom Order Management",
        jewelryStoreFeature2: "Final Product Quality Record",
        jewelryStoreFeature3: "Inventory Optimization",
        jewelryStoreFeature4: "Automatic Alerts",
        jewelryStoreFeature5: "Seamless Integration",
        jewelryStoreFeature6: "Sales Analysis",

        testimonialsHeading: "Customer Testimonials",
        testimonialsSubheading: "Our testimonials",
        testimonialsDescription: "A few words from our collaborators!",

        contactHeading: "Contact Us",
        contactDescription: "If you need more information, please do not hesitate to contact us. 😊",
        callUs: "CALL US",
        emailUs: "EMAIL US",
        addressUs: "OUR ADDRESS",
        leaveMessage: "Leave a message here",
        sendMessageBtn: "Send Message",

        footerCompany: "Company",
        footerResources: "Resources",
        footerSupport: "Support",
        footerSocial: "Social Networks",
    },
    es: {
        home: "Inicio",
        about: "Sobre nosotros",
        subscriptions: "Suscripciones",
        contact: "Contacto",
        account: "Mi Cuenta",
        heroHeading: "La solución definitiva para joyeros exigentes.",
        heroDescription: "Transforma tu negocio con GemZ, el software especializado para la gestión de procesos e inventarios para talleres y joyerías.",
        moreInfo: "Más Información",
        aboutHeading: "Sobre Nosotros",
        aboutDescription: "GemZ es una solución de software creada por FullStackFury que transforma la gestión de procesos e inventarios en la industria de la joyería. Diseñado tanto para talleres como para joyerías, ofrece un control completo en cada etapa de la producción, desde la adquisición de materiales hasta la entrega del producto final.",
        contactUs: "Contáctanos",
        teamHeading: "Nuestro Equipo de Desarrollo",
        pricingHeading: "Precios",
        pricingSubheading: "Planes de Suscripción",
        pricingDescription: "Elige el plan adecuado para tu tipo de negocio y aprovecha los beneficios que ofrece GemZ.",
        jewelryWorkshopHeading: "Suscripción para Dueño de Taller de Joyería",
        jewelryWorkshopSubheading: "Controla y mejora tu producción",
        jewelryWorkshopPrice: "$29",
        jewelryWorkshopDuration: "/mes",
        jewelryWorkshopBtn: "Inicia tu prueba gratuita",
        noCardJewelryWorkshop: "No se requiere tarjeta de crédito",
        jewelryWorkshopFeature1: "Seguimiento de Producción por Etapas",
        jewelryWorkshopFeature2: "Informe de Rendimiento de Producción",
        jewelryWorkshopFeature3: "Control de Calidad",
        jewelryWorkshopFeature4: "Optimización de Recursos",
        jewelryWorkshopFeature5: "Eficiencia de Producción",
        jewelryWorkshopFeature6: "Escalabilidad",

        jewelryStoreHeading: "Suscripción para Dueño de Joyería",
        jewelryStoreSubheading: "Optimiza la gestión de tu joyería",
        jewelryStorePrice: "$49",
        jewelryStoreDuration: "/mes",
        jewelryStoreBtn: "Inicia tu prueba gratuita",
        noCardJewelryStore: "No se requiere tarjeta de crédito",
        jewelryStoreFeature1: "Gestión de Pedidos Personalizados",
        jewelryStoreFeature2: "Registro de Calidad del Producto Final",
        jewelryStoreFeature3: "Optimización de Inventario",
        jewelryStoreFeature4: "Alertas Automáticas",
        jewelryStoreFeature5: "Integración sin Interrupciones",
        jewelryStoreFeature6: "Análisis de Ventas",

        testimonialsHeading: "Testimonios de Clientes",
        testimonialsSubheading: "Nuestros testimonios",
        testimonialsDescription: "¡Algunas palabras de nuestros colaboradores!",

        contactHeading: "Contáctanos",
        contactDescription: "Si necesitas más información, no dudes en contactarnos. 😊",
        callUs: "LLÁMANOS",
        emailUs: "ENVÍANOS UN CORREO",
        addressUs: "NUESTRA DIRECCIÓN",
        leaveMessage: "Deja un mensaje aquí",
        sendMessageBtn: "Enviar Mensaje",

        footerCompany: "Empresa",
        footerResources: "Recursos",
        footerSupport: "Soporte",
        footerSocial: "Redes Sociales",
    }
};

// Función para cambiar el idioma
function changeLanguage(lang) {
    const homeLink = document.getElementById("home-link");
    if (homeLink) homeLink.innerText = translations[lang].home;
    
    const aboutLink = document.getElementById("about-link");
    if (aboutLink) aboutLink.innerText = translations[lang].about;

    const subscriptionsLink = document.getElementById("subscriptions-link");
    if (subscriptionsLink) subscriptionsLink.innerText = translations[lang].subscriptions;

    const contactLink = document.getElementById("contact-link");
    if (contactLink) contactLink.innerText = translations[lang].contact;

    const accountLink = document.getElementById("account-link");
    if (accountLink) accountLink.innerText = translations[lang].account;

    const heroHeading = document.getElementById("hero-heading");
    if (heroHeading) heroHeading.innerText = translations[lang].heroHeading;

    const heroDescription = document.getElementById("hero-description");
    if (heroDescription) heroDescription.innerText = translations[lang].heroDescription;

    const moreInfoBtn = document.getElementById("more-info-btn");
    if (moreInfoBtn) moreInfoBtn.innerText = translations[lang].moreInfo;

    const aboutHeading = document.getElementById("about-heading");
    if (aboutHeading) aboutHeading.innerText = translations[lang].aboutHeading;

    const aboutDescription = document.getElementById("about-description");
    if (aboutDescription) aboutDescription.innerText = translations[lang].aboutDescription;

    const contactUsBtn = document.getElementById("contact-us-btn");
    if (contactUsBtn) contactUsBtn.innerText = translations[lang].contactUs;

    const teamHeading = document.getElementById("team-heading");
    if (teamHeading) teamHeading.innerText = translations[lang].teamHeading;

    const pricingHeading = document.getElementById("pricing-heading");
    if (pricingHeading) pricingHeading.innerText = translations[lang].pricingHeading;

    const pricingSubheading = document.getElementById("pricing-subheading");
    if (pricingSubheading) pricingSubheading.innerText = translations[lang].pricingSubheading;

    const pricingDescription = document.getElementById("pricing-description");
    if (pricingDescription) pricingDescription.innerText = translations[lang].pricingDescription;

    // Cambiar el contenido de la sección de precios (detalles de las suscripciones)
    const jewelryWorkshopHeading = document.getElementById("jewelry-workshop-heading");
    if (jewelryWorkshopHeading) jewelryWorkshopHeading.innerText = translations[lang].jewelryWorkshopHeading;

    const jewelryWorkshopSubheading = document.getElementById("jewelry-workshop-subheading");
    if (jewelryWorkshopSubheading) jewelryWorkshopSubheading.innerText = translations[lang].jewelryWorkshopSubheading;

    const jewelryWorkshopPrice = document.getElementById("jewelry-workshop-price");
    if (jewelryWorkshopPrice) jewelryWorkshopPrice.innerText = translations[lang].jewelryWorkshopPrice;

    const jewelryWorkshopDuration = document.getElementById("jewelry-workshop-duration");
    if (jewelryWorkshopDuration) jewelryWorkshopDuration.innerText = translations[lang].jewelryWorkshopDuration;

    const jewelryWorkshopBtn = document.getElementById("jewelry-workshop-btn");
    if (jewelryWorkshopBtn) jewelryWorkshopBtn.innerText = translations[lang].jewelryWorkshopBtn;

    const noCardJewelryWorkshop = document.getElementById("no-card-jewelry-workshop");
    if (noCardJewelryWorkshop) noCardJewelryWorkshop.innerText = translations[lang].noCardJewelryWorkshop;

    const jewelryWorkshopFeature1 = document.getElementById("jewelry-workshop-feature1");
    if (jewelryWorkshopFeature1) jewelryWorkshopFeature1.innerText = translations[lang].jewelryWorkshopFeature1;

    const jewelryWorkshopFeature2 = document.getElementById("jewelry-workshop-feature2");
    if (jewelryWorkshopFeature2) jewelryWorkshopFeature2.innerText = translations[lang].jewelryWorkshopFeature2;

    const jewelryWorkshopFeature3 = document.getElementById("jewelry-workshop-feature3");
    if (jewelryWorkshopFeature3) jewelryWorkshopFeature3.innerText = translations[lang].jewelryWorkshopFeature3;

    const jewelryWorkshopFeature4 = document.getElementById("jewelry-workshop-feature4");
    if (jewelryWorkshopFeature4) jewelryWorkshopFeature4.innerText = translations[lang].jewelryWorkshopFeature4;

    const jewelryWorkshopFeature5 = document.getElementById("jewelry-workshop-feature5");
    if (jewelryWorkshopFeature5) jewelryWorkshopFeature5.innerText = translations[lang].jewelryWorkshopFeature5;

    const jewelryWorkshopFeature6 = document.getElementById("jewelry-workshop-feature6");
    if (jewelryWorkshopFeature6) jewelryWorkshopFeature6.innerText = translations[lang].jewelryWorkshopFeature6;

    const jewelryStoreHeading = document.getElementById("jewelry-store-heading");
    if (jewelryStoreHeading) jewelryStoreHeading.innerText = translations[lang].jewelryStoreHeading;

    const jewelryStoreSubheading = document.getElementById("jewelry-store-subheading");
    if (jewelryStoreSubheading) jewelryStoreSubheading.innerText = translations[lang].jewelryStoreSubheading;

    const jewelryStorePrice = document.getElementById("jewelry-store-price");
    if (jewelryStorePrice) jewelryStorePrice.innerText = translations[lang].jewelryStorePrice;

    const jewelryStoreDuration = document.getElementById("jewelry-store-duration");
    if (jewelryStoreDuration) jewelryStoreDuration.innerText = translations[lang].jewelryStoreDuration;

    const jewelryStoreBtn = document.getElementById("jewelry-store-btn");
    if (jewelryStoreBtn) jewelryStoreBtn.innerText = translations[lang].jewelryStoreBtn;

    const noCardJewelryStore = document.getElementById("no-card-jewelry-store");
    if (noCardJewelryStore) noCardJewelryStore.innerText = translations[lang].noCardJewelryStore;

    const jewelryStoreFeature1 = document.getElementById("jewelry-store-feature1");
    if (jewelryStoreFeature1) jewelryStoreFeature1.innerText = translations[lang].jewelryStoreFeature1;

    const jewelryStoreFeature2 = document.getElementById("jewelry-store-feature2");
    if (jewelryStoreFeature2) jewelryStoreFeature2.innerText = translations[lang].jewelryStoreFeature2;

    const jewelryStoreFeature3 = document.getElementById("jewelry-store-feature3");
    if (jewelryStoreFeature3) jewelryStoreFeature3.innerText = translations[lang].jewelryStoreFeature3;

    const jewelryStoreFeature4 = document.getElementById("jewelry-store-feature4");
    if (jewelryStoreFeature4) jewelryStoreFeature4.innerText = translations[lang].jewelryStoreFeature4;

    const jewelryStoreFeature5 = document.getElementById("jewelry-store-feature5");
    if (jewelryStoreFeature5) jewelryStoreFeature5.innerText = translations[lang].jewelryStoreFeature5;

    const jewelryStoreFeature6 = document.getElementById("jewelry-store-feature6");
    if (jewelryStoreFeature6) jewelryStoreFeature6.innerText = translations[lang].jewelryStoreFeature6;

    // Testimonios
    const testimonialsHeading = document.getElementById("testimonials-heading");
    if (testimonialsHeading) testimonialsHeading.innerText = translations[lang].testimonialsHeading;

    const testimonialsSubheading = document.getElementById("testimonials-subheading");
    if (testimonialsSubheading) testimonialsSubheading.innerText = translations[lang].testimonialsSubheading;

    const testimonialsDescription = document.getElementById("testimonials-description");
    if (testimonialsDescription) testimonialsDescription.innerText = translations[lang].testimonialsDescription;

    // Contacto
    const contactHeading = document.getElementById("contact-heading");
    if (contactHeading) contactHeading.innerText = translations[lang].contactHeading;

    const contactDescription = document.getElementById("contact-description");
    if (contactDescription) contactDescription.innerText = translations[lang].contactDescription;

    const callUs = document.getElementById("call-us");
    if (callUs) callUs.innerText = translations[lang].callUs;

    const emailUs = document.getElementById("email-us");
    if (emailUs) emailUs.innerText = translations[lang].emailUs;

    const addressUs = document.getElementById("address-us");
    if (addressUs) addressUs.innerText = translations[lang].addressUs;

    const leaveMessage = document.getElementById("leave-message");
    if (leaveMessage) leaveMessage.innerText = translations[lang].leaveMessage;

    const sendMessageBtn = document.getElementById("send-message-btn");
    if (sendMessageBtn) sendMessageBtn.innerText = translations[lang].sendMessageBtn;

    // Footer
    const footerCompany = document.getElementById("footer-company");
    if (footerCompany) footerCompany.innerText = translations[lang].footerCompany;

    const footerResources = document.getElementById("footer-resources");
    if (footerResources) footerResources.innerText = translations[lang].footerResources;

    const footerSupport = document.getElementById("footer-support");
    if (footerSupport) footerSupport.innerText = translations[lang].footerSupport;

    const footerSocial = document.getElementById("footer-social");
    if (footerSocial) footerSocial.innerText = translations[lang].footerSocial;
}

// Eventos de los botones de idioma
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("btn-en").addEventListener("click", function () {
        changeLanguage('en');
    });

    document.getElementById("btn-es").addEventListener("click", function () {
        changeLanguage('es');
    });
});
