$(document).ready(function () {
	var Scrollbar = window.Scrollbar;

	$('.burger').click(function () {
		$('.mob-menu').addClass('mob-menu--open');
		$('html').addClass('hiden');
	});

	$('.close-menu').click(function () {
		$('.mob-menu').removeClass('mob-menu--open');
		$('html').removeClass('hiden');
	});

	$('.tabs-row__tab').click(function () {
		$('.tabs-row__tab').removeClass('tabs-row__tab--active');
		$(this).addClass('tabs-row__tab--active');
		$('.tabs-row__content').hide();
		var tabId = $('#' + $(this).attr('rel'));
		$(tabId).show();
	});

	$('.show-flack__close').click(function () {
		$(this).closest('.show-flack').slideUp();
		$('.sidebar-page').addClass('sidebar-page--no-offset');
	});

	// $(window).scroll(function () {
	// 	var heightHeader = $('.page-header').height(),
	// 		heightBreadCrumbs = $('.breadcrumbs').height(),
	// 		heightOffset = heightHeader + heightBreadCrumbs;
	// 	if ($(this).scrollTop() > heightOffset) {
	// 		$('.fixed-header').slideDown();
	// 	} else if ($(this).scrollTop() < heightOffset) {
	// 		$('.fixed-header').slideUp();
	// 	}
	// });

	var heightHeader = $('.page-header').height(),
		heightBreadCrumbs = $('.breadcrumbs').height(),
		heightOffset = heightHeader + heightBreadCrumbs,
		oldScrollY = heightOffset,
		div = $('.fixed-header');

	window.onscroll = function () {
		var scrolled = window.pageYOffset || document.documentElement.scrollTop;
		var dY = scrolled - oldScrollY;

		if (dY > 0) {
			div.slideDown();
		} else {
			div.slideUp();
		}

		oldScrollY = scrolled;
	}

	//календарь
	$.datepicker.regional['ru'] = {
		closeText: 'Готово',
		prevText: 'Пред',
		nextText: 'След',
		currentText: 'Сегодня',
		monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
			'Июль', 'Август', 'Сентябрь', 'Окбябрь', 'Ноябрь', 'Декабрь'
		],
		monthNamesShort: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
		dayNames: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
		dayNamesShort: ['Вос', 'Пон', 'Вто', 'Сре', 'Чет', 'Пят', 'Суб'],
		dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
		weekHeader: 'Нед',
		dateFormat: 'dd.mm',
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: ''
	};

	$.datepicker.setDefaults($.datepicker.regional["ru"]);

	$(".date-field__calendar").datepicker({
		showOtherMonths: true,
		range: 'period', // режим - выбор периода
		onSelect: function (dateText, inst, extensionRange) {
			// extensionRange - объект расширения
			$('.date-field__field').val(extensionRange.startDateText + ' - ' + extensionRange.endDateText);
		}
	});
	$('.date-field__calendar').datepicker('setDate', ['+4d', '+8d']);

	$('.date-field__wrap').click(function () {
		$(this).closest('.date-field').find('.date-field__drop-down').slideDown();
	});

	$(document).mouseup(function (e) { // событие клика по веб-документу
		var dateOpen = $(".date-field"); // тут указываем ID элемента
		if (!dateOpen.is(e.target) // если клик был не по нашему блоку
			&&
			dateOpen.has(e.target).length === 0) { // и не по его дочерним элементам
			dateOpen.find('.date-field__drop-down').slideUp();
		}
	});

	$('.search-icon').click(function () {
		$('.search-drop').slideDown();
		$('html').addClass('hiden-two');
		$('.gray-bg-page').show();
	});
	$('.search-drop__close').click(function () {
		$('.search-drop').slideUp();
		$('html').removeClass('hiden-two');
		$('.gray-bg-page').hide();
	});

	//Модалка
	// в отделтный фаил
	$('.show_popup').click(function () {
		var popup_id = $('#' + $(this).attr('rel'));
		$(popup_id).show();
		$(popup_id).find('.my-modal').addClass('modal-open');
		$('html').addClass('hiden');
		return false;
	});
	$('.close-popup').click(function () {
		$(this).closest('.my-modal').removeClass('modal-open');
		$(this).closest('.modal-container').hide();
		$('html').removeClass('hiden');
	});

	$(document).mouseup(function (e) {
		// событие клика по веб-документу
		var modalOpen = $('.modal-open'); // тут указываем ID элемента
		if (
			!modalOpen.is(e.target) && // если клик был не по нашему блоку
			modalOpen.has(e.target).length === 0
		) {
			// и не по его дочерним элементам
			modalOpen.closest('.modal-container').hide();
			$('html').removeClass('hiden');
		}
	});


	//поле для загрузки множества файлов
	let files = []

	buttonFile.addEventListener('click', event => {
		loader.click()
	})

	loader.addEventListener('change', event => {
		for (let i = 0; i < loader.files.length; i++) {
			let file = loader.files[i]
			let item = document.createElement('div')
			item.className = "input-file__name";

			files.push(file)
			listFile.appendChild(item)

			item.textContent = file.name
			item.addEventListener('click', event => {
				files = files.filter(f => f.name !== file.name)

				item.remove()
			})
		}

		loader.value = ''
	})

	if ($(window).width() >= '991') {
		$('.video-block__wrap-play').click(function () {
			var videoEl = $(this).closest('.video-block__wrapper').find('.video-block__video')[0],
				widthWindow = $(window).width(),
				heightWindow = $(window).height(),
				video = $(this).closest('.video-block__wrapper').find('.video-block__video');

			$(this).closest('.video-block__wrap-play').hide();

			$(this).closest('.video-block').addClass('video-block--fixed');

			$(this).closest('.video-block--fixed').find('.video-block__wrapper').animate({
				width: '25' + 'vw',
				left: widthWindow * 0.73,
				top: heightWindow * 0.7,
			}, 500).animate({
				complete: true
			}, function () {});

			if (videoEl.paused) {
				videoEl.play();
			} else {
				videoEl.pause();
			};
			videoEl.controls = true;
			video.on('timeupdate', function () {
				var currentPos = video[0].currentTime; //Get currenttime
				var maxduration = video[0].duration; //Get video duration
				var percentage = 100 * currentPos / maxduration; //in %
				$('.time-bar').css('width', percentage + '%');
			});
		});

		$('.video-block__close').click(function () {
			var videoEl = $(this).closest('.video-block__wrapper').find('.video-block__video')[0];
			$(this).closest('.video-block').find('.video-block__wrap-play').show();
			$(this).closest('.video-block').removeClass('video-block--fixed');
			$(this).closest('.video-block__wrapper').css({
				'width': '136px',
				'height': 'auto',
				'top': 'auto',
				'left': 'auto'
			})
			if (videoEl.paused) {
				videoEl.play();
			} else {
				videoEl.pause();
			};
			videoEl.controls = false;
		});
	}

	if ($(window).width() <= '991') {
		$('.video-block__wrap-play').click(function () {
			var videoEl = $(this).closest('.video-block__wrapper').find('.video-block__video')[0],
				video = $(this).closest('.video-block__wrapper').find('.video-block__video');

			$(this).closest('.video-block__wrap-play').hide();

			if (videoEl.paused) {
				videoEl.play();
			} else {
				videoEl.pause();
			};
			videoEl.controls = true;
			video.on('timeupdate', function () {
				var currentPos = video[0].currentTime; //Get currenttime
				var maxduration = video[0].duration; //Get video duration
				var percentage = 100 * currentPos / maxduration; //in %
				$('.time-bar').css('width', percentage + '%');
			});
			$('.video-block__close').css({
				'opacity': '1'
			});
		});
		$('.video-block__close').click(function () {
			var videoEl = $(this).closest('.video-block__wrapper').find('.video-block__video')[0];
			if (videoEl.paused) {
				videoEl.play();
			} else {
				videoEl.pause();
			};
			videoEl.controls = false;
			$(this).closest('.video-block').hide();
			$(this).css({
				'opacity': '0'
			});
		});
	}

	$('.article-inner-video__wrap-play').click(function () {
		var videoEl = $(this).closest('.article-inner-video').find('.article-inner-video__video')[0];
		if (videoEl.pause) {
			$(this).hide();
			videoEl.play();
		} else {
			videoEl.pause();
		};
	});

	$("#today").selectmenu();
	$("#now").selectmenu();

	var swiper = new Swiper('.program-guide', {
		slidesPerView: 'auto',
		spaceBetween: 0,
		freeMode: true
	});

	var swiper = new Swiper('.hash-slider__container', {
		slidesPerView: 'auto',
		spaceBetween: 0,
		freeMode: true,
		observer: true,
		observeParents: true,
	});

	var swiper = new Swiper('.popular-issues__slider', {
		slidesPerView: 'auto',
		spaceBetween: 16,
		freeMode: true,
		observer: true,
		observeParents: true,
		navigation: {
			nextEl: '.popular-issues__arrow--next',
			prevEl: '.popular-issues__arrow--prev'
		},
	});

	var swiper = new Swiper('.additionally-slider__slider', {
		slidesPerView: 'auto',
		spaceBetween: 32,
		freeMode: true,
		observer: true,
		observeParents: true,
		observeSlideChildren: true,
	});

	var swiper = new Swiper('.first-screen-slider', {
		slidesPerView: 1,
		spaceBetween: 0,
		speed: 700,
		pagination: {
			el: '.first-screen-slider__pagination'
		},
		navigation: {
			nextEl: '.first-screen-slider__arrow--next',
			prevEl: '.first-screen-slider__arrow--prev'
		},
	});

	var swiper = new Swiper('.interesting-slider', {
		slidesPerView: 3,
		spaceBetween: 1,
		loop: true,
		navigation: {
			nextEl: '.interesting-slider__arrow--next',
			prevEl: '.interesting-slider__arrow--prev'
		},
		breakpoints: {
			1120: {
				slidesPerView: 2,
			},
			991: {
				slidesPerView: 1,
			},
			575: {
				slidesPerView: 1,
			},
		}
	});

	var swiper = new Swiper('.post-slider', {
		slidesPerView: 1,
		spaceBetween: 0,
		speed: 700,
		navigation: {
			nextEl: '.post-slider__arrow--next',
			prevEl: '.post-slider__arrow--prev'
		},
	});

	Scrollbar.init(document.querySelector('#blockNewsPosts'));
});