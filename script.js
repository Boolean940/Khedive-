/* ===============================
1. Mobile Menu Toggle
=============================== */
const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
navLinks.classList.toggle('active');
const icon = menuToggle.querySelector('i');
icon.classList.toggle('fa-bars');
icon.classList.toggle('fa-times');
});

document.querySelectorAll('.nav-links a').forEach(link => {
link.addEventListener('click', () => {
navLinks.classList.remove('active');
const icon = menuToggle.querySelector('i');
icon.classList.remove('fa-times');
icon.classList.add('fa-bars');
});
});

/* ===============================
2. Navbar Scroll Effect
=============================== */
window.addEventListener('scroll', () => {
document.querySelector('.nav-container')
.classList.toggle('scrolled', window.scrollY > 50);
});

/* ===============================
3. Scroll Reveal Effect
=============================== */
const revealElements = document.querySelectorAll('.reveal');

const scrollReveal = () => {
revealElements.forEach(el => {
if (el.getBoundingClientRect().top < window.innerHeight - 150) {
el.classList.add('active');
}
});
};

window.addEventListener('scroll', scrollReveal);
scrollReveal();


const counters = document.querySelectorAll('.counter');
let started = false;
const DURATION = 2000;

const startCounters = () => {
counters.forEach(counter => {
const target = +counter.dataset.target;
let startTime = null;

const update = (timestamp) => {
if (!startTime) startTime = timestamp;
const progress = Math.min((timestamp - startTime) / DURATION, 1);
const value = Math.floor(progress * target);

counter.textContent = value.toLocaleString('ar-EG');

if (progress < 1) {
requestAnimationFrame(update);
} else {
counter.textContent =
target.toLocaleString('ar-EG') +
(target === 100 ? '%' : '+');
}
};

requestAnimationFrame(update);
});
};

window.addEventListener('scroll', () => {
const stats = document.getElementById('stats');
if (stats.getBoundingClientRect().top < window.innerHeight - 150 && !started) {
startCounters();
started = true;
}
});

const openVideo = document.getElementById("openVideo");
const overlay = document.getElementById("videoOverlay");
const closeVideo = document.getElementById("closeVideo");
const eduVideo = document.getElementById("eduVideo");

openVideo.addEventListener("click",()=>{
overlay.classList.add("active");
eduVideo.play();
});

closeVideo.addEventListener("click",()=>{
overlay.classList.remove("active");
eduVideo.pause();
eduVideo.currentTime=0;
});