document.querySelectorAll('.ripple').forEach(button => {
    button.addEventListener('click', function (e) {
        const circle = document.createElement('span');
        const diameter = Math.max(button.clientWidth, button.clientHeight);
        const radius = diameter / 2;

        circle.style.width = circle.style.height = `${diameter}px`;
        circle.style.left = `${e.clientX - button.offsetLeft - radius}px`;
        circle.style.top = `${e.clientY - button.offsetTop - radius}px`;
        circle.classList.add('ripple-effect');

        button.appendChild(circle);

        setTimeout(() => {
            circle.remove();
        }, 600);
    });
});
