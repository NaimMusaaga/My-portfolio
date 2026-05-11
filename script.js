// البحث عن العناصر
const toggleButton = document.getElementById('theme-btn');
const body = document.body;

// 1. التحقق من الوضع المحفوظ عند التحميل
const savedTheme = localStorage.getItem('theme');

// إذا كان هناك وضع محفوظ، طبقه. وإلا، الوضع الافتراضي هو 'dark' ليتناسب مع تصميمك
if (savedTheme) {
    body.setAttribute('data-theme', savedTheme);
    updateButtonText(savedTheme);
} else {
    // اجعل الوضع الافتراضي داكن (Dark) لأنه التصميم الأساسي
    body.setAttribute('data-theme', 'dark');
    updateButtonText('dark');
}

// 2. عند الضغط على الزر
toggleButton.addEventListener('click', () => {
    const currentTheme = body.getAttribute('data-theme');
    
    if (currentTheme === 'dark') {
        body.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        updateButtonText('light');
    } else {
        body.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        updateButtonText('dark');
    }
});

// دالة لتغيير أيقونة الزر
function updateButtonText(theme) {
    if (theme === 'dark') {
        toggleButton.innerHTML = '☀️ Light Mode';
    } else {
        toggleButton.innerHTML = '🌙 Dark Mode';
    }
}