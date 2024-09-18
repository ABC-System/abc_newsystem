// フェードインアニメーションのための関数
function fadeInOnScroll() {
    const fadeInElements = document.querySelectorAll('#schedule-section, #news-section');
    fadeInElements.forEach(element => {
        const position = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (position < screenPosition) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// スクロールイベントリスナーを追加
window.addEventListener('scroll', fadeInOnScroll);
