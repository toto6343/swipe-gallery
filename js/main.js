// Swiper 초기화
const swiper = new Swiper('.wrap', {
	direction: "horizontal",
	loop: true,
	pagination: {
		el: '.swiper-pagination',
		type: 'fraction'
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	spaceBetween: 0,
	slidesPerView: "auto",
	grabCursor: true,
	centeredSlides: true,
	speed: 1000,
	effect: "coverflow",
	coverflowEffect: {
		rotate: 50,
		stretch: -100,
		depth: 400,
		modifier: 1,
		slideShadows: false,
	},
	autoplay: {
		delay: 3000,
		disableOnInteraction: false
	}
});

// 자동재생 컨트롤
const btnStart = document.querySelector(".btnStart");
const btnStop = document.querySelector(".btnStop");

btnStart.addEventListener("click", () => {
	swiper.autoplay.start();
	btnStart.classList.add('active');
	btnStop.classList.remove('active');
});

btnStop.addEventListener("click", () => {
	swiper.autoplay.stop();
	btnStop.classList.add('active');
	btnStart.classList.remove('active');
});

// 뷰 모드 전환
const modeBtns = document.querySelectorAll('.mode-btn');

modeBtns.forEach(btn => {
	btn.addEventListener('click', () => {
		modeBtns.forEach(b => b.classList.remove('active'));
		btn.classList.add('active');
		
		const effect = btn.dataset.effect;
		
		// Swiper 효과 변경
		swiper.params.effect = effect;
		
		if (effect === 'coverflow') {
			swiper.params.coverflowEffect = {
				rotate: 50,
				stretch: -100,
				depth: 400,
				modifier: 1,
				slideShadows: false
			};
		} else if (effect === 'cards') {
			swiper.params.cardsEffect = {
				slideShadows: false
			};
		} else if (effect === 'flip') {
			swiper.params.flipEffect = {
				slideShadows: false
			};
		}
		
		swiper.update();
	});
});

// 프로그레스 바 업데이트
const progressFill = document.querySelector('.progress-bar-fill');
let autoplayTimeLeft = 3000;
let autoplayInterval;

function updateProgress() {
	if (swiper.autoplay.running) {
		autoplayTimeLeft -= 50;
		const progress = ((3000 - autoplayTimeLeft) / 3000) * 100;
		progressFill.style.width = progress + '%';
		
		if (autoplayTimeLeft <= 0) {
			autoplayTimeLeft = 3000;
		}
	}
}

swiper.on('autoplayStart', () => {
	autoplayInterval = setInterval(updateProgress, 50);
});

swiper.on('autoplayStop', () => {
	clearInterval(autoplayInterval);
	progressFill.style.width = '0%';
});

swiper.on('slideChange', () => {
	autoplayTimeLeft = 3000;
	progressFill.style.width = '0%';
});

// 키보드 컨트롤
document.addEventListener('keydown', (e) => {
	if (e.key === 'ArrowLeft') swiper.slidePrev();
	if (e.key === 'ArrowRight') swiper.slideNext();
	if (e.key === ' ') {
		e.preventDefault();
		if (swiper.autoplay.running) {
			swiper.autoplay.stop();
			btnStop.classList.add('active');
			btnStart.classList.remove('active');
		} else {
			swiper.autoplay.start();
			btnStart.classList.add('active');
			btnStop.classList.remove('active');
		}
	}
});
