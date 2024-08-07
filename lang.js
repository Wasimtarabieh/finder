const translations = {
    ar: {
        home: 'الرئيسية',
        courses: 'الدورات القادمة',
        profile: 'الملف الشخصي',
        notifications: 'الإشعارات',
        title: 'البحث عن دورة',
        hero-text: 'اكتشف مجموعة واسعة من الدورات المصممة لتلبية احتياجاتك وأهدافك. احصل على توصيات مخصصة وابدأ التعلم اليوم!',
        login: 'تسجيل الدخول',
        signup: 'إنشاء حساب',
        find-course: 'ابحث عن الدورة المثالية لك',
        upcoming-courses: 'الدورات القادمة',
        interest-form: 'مهتم بدورة؟',
        name: 'الاسم:',
        phone: 'الهاتف:',
        email: 'البريد الإلكتروني:',
        city: 'المدينة:',
        course: 'الدورة:',
        submit: 'إرسال',
        footer: 'البحث عن دورة. جميع الحقوق محفوظة.'
    },
    he: {
        home: 'בית',
        courses: 'קורסים קרובים',
        profile: 'פרופיל',
        notifications: 'התראות',
        title: 'חיפוש קורס',
        hero-text: 'גלה מגוון רחב של קורסים המותאמים לצרכים ולמטרות שלך. קבל המלצות מותאמות אישית והתחל ללמוד היום!',
        login: 'התחברות',
        signup: 'הרשמה',
        find-course: 'מצא את הקורס המתאים עבורך',
        upcoming-courses: 'קורסים קרובים',
        interest-form: 'מעוניין בקורס?',
        name: 'שם:',
        phone: 'טלפון:',
        email: 'דוא"ל:',
        city: 'עיר:',
        course: 'קורס:',
        submit: 'שלח',
        footer: 'חיפוש קורס. כל הזכויות שמורות.'
    },
    en: {
        home: 'Home',
        courses: 'Upcoming Courses',
        profile: 'Profile',
        notifications: 'Notifications',
        title: 'Course Finder',
        hero-text: 'Discover a wide range of courses tailored to your needs and goals. Get personalized recommendations and start learning today!',
        login: 'Login',
        signup: 'Sign Up',
        find-course: 'Find the Perfect Course for You',
        upcoming-courses: 'Upcoming Courses',
        interest-form: 'Interested in a Course?',
        name: 'Name:',
        phone: 'Phone:',
        email: 'Email:',
        city: 'City:',
        course: 'Course:',
        submit: 'Submit',
        footer: 'Course Finder. All rights reserved.'
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const languageSelect = document.getElementById('language-select');

    languageSelect.addEventListener('change', (e) => {
        const selectedLang = e.target.value;
        translatePage(selectedLang);
    });

    const translatePage = (lang) => {
        document.querySelectorAll('[data-lang]').forEach(element => {
            const key = element.getAttribute('data-lang');
            if (translations[lang] && translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });
        // حفظ اللغة المحددة في التخزين المحلي
        localStorage.setItem('selectedLanguage', lang);
    };

    // تعيين اللغة الافتراضية إلى اللغة المحفوظة أو العربية إذا لم تكن محفوظة
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'ar';
    languageSelect.value = savedLanguage;
    translatePage(savedLanguage);
});
