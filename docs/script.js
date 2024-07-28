document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll(".maintext, .time-period");
    const scrollDownArrow = document.querySelector(".scroll-down");

    const onScroll = () => {
        const scrollPosition = window.pageYOffset + window.innerHeight;
        elements.forEach(element => {
            if (element.getBoundingClientRect().top + window.pageYOffset < scrollPosition) {
                element.classList.add("show");
            }
        });
    };  

    window.addEventListener("scroll", onScroll);
    onScroll(); // ページが読み込まれたときに初期状態をチェック

    const title = document.querySelector('header.header');
    title.style.opacity = 1;

    setTimeout(() => {
    scrollDownArrow.style.opacity = 1;
    }, 3000);
});

window.onload = function() {
    const load_logo = document.getElementById('loading');
    load_logo.classList.add('loaded');
}