const links = [
    'http://uhshb.com/#/pages/client/index/index?agent_id=841ac7',
    'https://app.getlee.co/r/895f80f784',
    'https://www.solianase.top/#/pages/register?id=22HY2o',
    // Add more links here...
];

let currentIndex = 0;

const nextBtn = document.getElementById('next-btn');
const continueBtn = document.getElementById('continue-btn');

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % links.length;
    alert(`Next link: ${links[currentIndex]}`);
});

continueBtn.addEventListener('click', () => {
    window.open(links[currentIndex], '_blank');
});

document.getElementById('whatsapp-link').href = 'https://chat.whatsapp.com/GEJ9ZGVeuxLHcKFqZkfL6F';
