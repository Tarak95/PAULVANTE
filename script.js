// Simple Scroll Animation
window.addEventListener('scroll', () => {
    const stats = document.querySelectorAll('.stat-item');
    stats.forEach(stat => {
        const speed = 200;
        const rect = stat.getBoundingClientRect();
        if(rect.top < window.innerHeight) {
            stat.style.opacity = "1";
            stat.style.transform = "translateY(0)";
        }
    });
});

// Initial style for animation
document.querySelectorAll('.stat-item').forEach(item => {
    item.style.opacity = "0";
    item.style.transform = "translateY(30px)";
    item.style.transition = "all 0.8s ease-out";
});

document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const faqItem = button.parentElement;
        const answer = faqItem.querySelector('.faq-answer');
        
        // Toggle Active Class
        const isOpen = answer.style.maxHeight !== '0px' && answer.style.maxHeight !== '';
        
        // Close all others (Optional)
        document.querySelectorAll('.faq-answer').forEach(el => el.style.maxHeight = '0px');
        
        // Open current
        if (!isOpen) {
            answer.style.maxHeight = answer.scrollHeight + 'px';
        } else {
            answer.style.maxHeight = '0px';
        }
    });
});

const videoWrapper = document.getElementById('videoWrapper');
const myVideo = document.getElementById('myVideo');

videoWrapper.addEventListener('click', function() {
    if (myVideo.paused) {
        myVideo.play();
        videoWrapper.classList.add('playing');
    } else {
        myVideo.pause();
        videoWrapper.classList.remove('playing');
    }
});
