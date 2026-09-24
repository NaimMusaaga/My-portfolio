// تأثيرات الـ 3D المشتركة: ظهور العناصر عند السكرول + ميلان الكروت مع الماوس

// ظهور العناصر عند السكرول
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in');
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.15 });
document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));

// الميلان مع الماوس (بس على الأجهزة يلي فيها ماوس)
const canTilt = window.matchMedia('(hover: hover) and (pointer: fine)').matches &&
                !window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (canTilt) {
    document.querySelectorAll('[data-tilt]').forEach((card) => {
        const max = Number(card.dataset.tiltMax) || 10;

        card.addEventListener('mousemove', (e) => {
            const r = card.getBoundingClientRect();
            const x = (e.clientX - r.left) / r.width;
            const y = (e.clientY - r.top) / r.height;
            card.style.transform =
                `rotateY(${(x - 0.5) * max * 2}deg) rotateX(${(0.5 - y) * max * 2}deg)`;
            card.style.setProperty('--mx', `${x * 100}%`);
            card.style.setProperty('--my', `${y * 100}%`);
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
        });
    });
}
