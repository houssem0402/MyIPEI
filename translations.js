const translations = {
    fr: {
        "dashboard": "Tableau de board",
        "courses": "Cours",
        "schedule": "Emploi du temps",
        "messages": "Messages",
        "analytics": "Analytique",
        "settings": "Paramètres",
        "logout": "Déconnexion",
        "search_placeholder": "Rechercher des cours, des documents...",
        "hello_user": "Bonjour, Houssem! 👋",
        "welcome_msg": "Continuez comme ça. Vous avez réalisé 70% de vos objectifs hebdomadaires.",
        "courses_progress": "Cours en cours",
        "completed": "Terminé",
        "hours_spent": "Heures passées",
        "continue_learning": "Continuer à apprendre",
        "view_all": "Voir tout",
        "upcoming_schedule": "Calendrier à venir",
        "see_calendar": "Voir le calendrier",
        "math_exam": "Examen de mi-session de mathématiques",
        "physics_study": "Groupe d'étude de physique",
        "all_courses": "Tous les cours",
        "in_progress": "En cours",
        "start": "Commencer",
        "continue": "Continuer",
        "my_schedule": "Mon emploi du temps",
        "performance_analytics": "Analyse des performances",
        "weekly_activity": "Activité hebdomadaire",
        "subject_mastery": "Maîtrise du sujet",
        "language": "Langue",
        "select_language": "Changer de langue",
        "theme": "Thème",
        "dark_mode": "Mode sombre",
        "save_settings": "Enregistrer",
        "settings_saved": "Paramètres enregistrés!",
        "contact_support": "Contacter le support",
        "role_student": "Étudiant"
    },
    ar: {
        "dashboard": "لوحة القيادة",
        "courses": "الدورات",
        "schedule": "الجدول الزمني",
        "messages": "الرسائل",
        "analytics": "التحليلات",
        "settings": "الإعدادات",
        "logout": "تسجيل الخروج",
        "search_placeholder": "البحث عن الدورات والمواد...",
        "hello_user": "مرحباً، حسام! 👋",
        "welcome_msg": "واصل العمل الجيد. لقد أكملت 70% من أهدافك الأسبوعية.",
        "courses_progress": "دورات قيد التقدم",
        "completed": "مكتمل",
        "hours_spent": "ساعات قضيته",
        "continue_learning": "مواصلة التعلم",
        "view_all": "عرض الكل",
        "upcoming_schedule": "الجدول القادم",
        "see_calendar": "انظر التقويم",
        "math_exam": "امتحان الرياضيات النصفي",
        "physics_study": "مجموعة دراسة الفيزياء",
        "all_courses": "جميع الدورات",
        "in_progress": "قيد التقدم",
        "start": "بدء",
        "continue": "استمر",
        "my_schedule": "جدولي",
        "performance_analytics": "تحليلات الأداء",
        "weekly_activity": "النشاط الأسبوعي",
        "subject_mastery": "إتقان الموضوع",
        "language": "اللغة",
        "select_language": "اختر اللغة",
        "theme": "الموضوع",
        "dark_mode": "الوضع الداكن",
        "save_settings": "حفظ الإعدادات",
        "settings_saved": "تم حفظ الإعدادات!",
        "contact_support": "اتصل بالدعم",
        "role_student": "طالب"
    }
};

function applyTranslations(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            if (element.tagName === 'INPUT' && element.getAttribute('placeholder')) {
                element.placeholder = translations[lang][key];
            } else {
                element.innerText = translations[lang][key];
            }
        }
    });

    // Handle RTL
    if (lang === 'ar') {
        document.documentElement.setAttribute('dir', 'rtl');
        document.documentElement.lang = 'ar';
    } else {
        document.documentElement.setAttribute('dir', 'ltr');
        document.documentElement.lang = lang;
    }

    localStorage.setItem('myipei-lang', lang);
}

// Initial load
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('myipei-lang') || 'fr';
    applyTranslations(savedLang);
});
