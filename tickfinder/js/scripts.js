$(document).ready(function(){

	/*header-tags marginLeft*/
	var hTagsLeft = $('.header__info__inner--title_box').offset().left + 40 + 'px';
	$('.header__tags').css('marginLeft', hTagsLeft);
	var hTagsWidth = 'calc(100% - ' + hTagsLeft + ')';

	/*burger show by click*/
	$('.header__menu__list__item--burger').click(function(){
		showBurgerMenu();
	});
	$('.burger_menu__inner__close_but').click(function() {
		showBurgerMenu();
	});
	function showBurgerMenu() {
		$('body').toggleClass('hidden-body');	/*need 2 check*/
		$('.burger_menu').animate({'width': 'toggle'}, 200);
	};

	/*change language in burger-menu*/
	$('.burger_menu__inner__lang__list__item:nth-child(1)').click(function(e) {
		e.preventDefault();
		if ($('.burger_menu__inner:nth-child(1)').height() === 30) {
			$('.burger_menu__inner:nth-child(1)').animate({
				height: 130
			}, 200);
		} else {
			$('.burger_menu__inner:nth-child(1)').animate({
				height: 30
			}, 200);
		}
		$('.burger_menu__inner__lang__list__item__img').toggleClass('burger_menu__inner__lang__list__item__img--rotated');
		$('.burger_menu__inner__lang__list__item:nth-child(2)').slideToggle(200);
		$('.burger_menu__inner__lang__list__item:nth-child(3)').slideToggle(200);
		$('.burger_menu__inner__lang__list__item:nth-child(4)').slideToggle(200);
	});

	/*show add info in burger menu*/
	$('.burger_menu__inner__list__item__link--categories').click(function(e) {
		e.preventDefault();
		$('.burger_menu__inner:nth-child(3)').slideToggle(200);
	});

	/*show menu ext*/
	$('.header__menu_ext__link--dots').click(function(e) {
		e.preventDefault();
		$('.header__submenu_ext').slideToggle(200);
		$('.header__calendar__menu').css('display', 'none');
		$('.header__location__menu').css('display', 'none');
		$('.header__lang__menu--cho').css('display', 'none');
		$('.header__menu__list__item__img--lang').removeClass('header__menu__list__item__img__lang--rotated');
	});

	/* show calendar by click */
	$('.header__menu__list__item__img--calend').click(function() {
		$('.header__calendar__menu').slideToggle(200);
		$('.header__submenu_ext').css('display', 'none');
		$('.header__location__menu').css('display', 'none');
		$('.header__lang__menu--cho').css('display', 'none');
		$('.header__menu__list__item__img--lang').removeClass('header__menu__list__item__img__lang--rotated');
	});

	/* show cities by click */
	$('.header__menu__list__item--loc').click(function() {
		$('.header__location__menu').slideToggle(200);
		$('.header__location__menu__inp').focus();
		$('.header__submenu_ext').css('display', 'none');
		$('.header__calendar__menu').css('display', 'none');
		$('.header__lang__menu--cho').css('display', 'none');
		$('.header__menu__list__item__img--lang').removeClass('header__menu__list__item__img__lang--rotated');
	});

	/* show language by click */
	$('.header__menu__list__item--lang').click(function() {
		$('.header__menu__list__item__img--lang').toggleClass('header__menu__list__item__img__lang--rotated');
		$('.header__lang__menu--cho').slideToggle(200);
		$('.header__submenu_ext').css('display', 'none');
		$('.header__calendar__menu').css('display', 'none');
		$('.header__location__menu').css('display', 'none');
	});

	/*fetch cities*/
	var dataCities = {
		"cities_rus" : 
		[
		"Киев",
		"Харьков",
		"Одесса",
		"Запорожье",
		"Днепр",
		"Львов",
		"Винница",
		"Хмельницкий",
		"Кропивницкий",
		"Черкассы",
		"Суммы",
		"Черновцы",
		"Мариуполь",
		"Кривой Рог",
		"Северодонецк",
		"Житомир",
		"Бровары",
		"Луцк",
		"Ровно",
		"Ивано-Франковск",
		"Краматорск",
		"Полтава",
		"Белая Церковь",
		"Кременчуг",
		"Чернигов",
		"Ужгород",
		"Мелитополь",
		"Покровск",
		"Херсон",
		"Умань",
		"Николаев",
		"Каменское"
		]
		,
		"cities_links" : [
		"kiiv",
		"harkov",
		"odesa",
		"zaporizhzhja",
		"dnipro",
		"lviv",
		"vinnitsja",
		"hmelnitskij",
		"kropivnitskij",
		"cherkasi",
		"sumy",
		"chernivtsi",
		"mariupol",
		"krivij-rig",
		"severodonetsk",
		"zhitomir",
		"brovari",
		"lutsk",
		"rovno",
		"ivano-frankivsk",
		"kramatorsk",
		"poltava",
		"bila-tserkva",
		"kremenchuk",
		"chernigov",
		"uzhgorod",
		"melitopol",
		"pokrovsk",
		"herson",
		"uman",
		"mikolaiv",
		"kam39-janske"
		]
	};

	for(var i = 0; i < dataCities.cities_rus.length; i++) {
		$(".header__location__menu__inner").append('<a class="header__location__menu__link header__location__menu__link--checkable" href="' + 'https://tickfind.com/type/' + dataCities.cities_links[i] + '/hday/date/index.htm' + '">' + dataCities.cities_rus[i] + '</a>');
	}

	// fetch("../json/cities.json")
	// .then(function(res) {
	// 	return res.json();
	// })
	// .then(function(data) {
	// 	for(var i = 0; i < dataCities.cities_rus.length; i++) {
	// 		return $(".header__location__menu__inner").append('<a class="header__location__menu__link header__location__menu__link--checkable" href="' + 'https://tickfind.com/type/' + dataCities.cities_links[i] + '/hday/date/index.htm' + '">' + dataCities.cities_rus[i] + '</a>');
	// 	}
	// });

	/*input to find city*/
	$('.header__location__menu__inp').keyup(function(){
		$('.header__location__menu__inner').children().remove();
		for(var i = 0; i < dataCities.cities_rus.length; i++) {
			if (dataCities.cities_rus[i].toLowerCase().indexOf($(this).val()) != -1) {
				$(".header__location__menu__inner").append('<a class="header__location__menu__link header__location__menu__link--checkable" href="' + 'https://tickfind.com/type/' + dataCities.cities_links[i] + '/hday/date/index.htm' + '">' + dataCities.cities_rus[i] + '</a>');
			} else if (dataCities.cities_rus[i].indexOf($(this).val()) != -1) {
				$(".header__location__menu__inner").append('<a class="header__location__menu__link header__location__menu__link--checkable" href="' + 'https://tickfind.com/type/' + dataCities.cities_links[i] + '/hday/date/index.htm' + '">' + dataCities.cities_rus[i] + '</a>');
			}
		}
	});

	/* fixed menu header */
	window.onscroll = function() {

		var menuImgSearch = document.querySelector('.header__menu__list__item__img--search');

		if ($(window).scrollTop() > $('header').outerHeight()) {
			$('.header__menu').addClass('fixed_header__menu');
			$('.header__menu__list__item__img--white').css('display', 'none');
			$('.header__menu__list__item__img--black').css('display', 'block');
			$('.burger__line').css('backgroundColor', '#36373d');
			$('.header__menu_ext__link').css('color', '#6E7380');		
			$('.header__menu__list__item__img--search').css('display', 'block');
			$('.header__menu_ext__link__img--white').css('display', 'none');
			$('.header__menu_ext__link__img--black').css('display', 'block');
			$('.header__menu__list__item__city_name--loc').css('color', '#36373D');
			$('.header__menu__list__item__lang--cur').css('color', '#36373D');
			$('.header__menu__list__item--ent > a').css('color', '#07C4AE');

			/*480*/
			if ($(window).innerWidth() > 479 && $(window).innerWidth() < 768) {
				$('.header__menu__list__item__text--search_sho').css('display', 'block');
			}
			/*768*/
			if ($(window).innerWidth() > 767) {
				$('.header__menu__list__item__text--search_lo').css('display', 'block');
			}
			/*1250*/
			if ($(window).innerWidth() > 1249) {
				$('.header__menu__list__item__city_name--loc').css('display', 'none');
			}

		} else {
			$('.header__menu').removeClass('fixed_header__menu');
			$('.header__menu__list__item__img--white').css('display', 'block');
			$('.header__menu__list__item__img--black').css('display', 'none');
			$('.burger__line').css('backgroundColor', 'white');
			$('.header__menu_ext__link').css('color', 'white');	
			$('.header__menu__list__item__img--search').css('display', 'none');
			$('.header__menu_ext__link__img--white').css('display', 'block');
			$('.header__menu_ext__link__img--black').css('display', 'none');
			$('.header__menu__list__item__city_name--loc').css('color', 'white');
			$('.header__menu__list__item__lang--cur').css('color', 'white');
			$('.header__menu__list__item--ent > a').css('color', 'white');

			/*480*/
			$('.header__menu__list__item__text--search_sho').css('display', 'none');
			/*768*/
			$('.header__menu__list__item__text--search_lo').css('display', 'none');
			/*1250*/
			$('.header__menu__list__item__city_name--loc').css('display', 'block');

		}
	}

});