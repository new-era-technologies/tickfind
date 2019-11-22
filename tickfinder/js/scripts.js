$(document).ready(function(e) {

	/*header-tags marginLeft*/
	var hTagsLeft = $('.header__info__inner--title_box').offset().left + 'px';
	var hTagsWidth = 0;
	if ($(window).innerWidth() < 960) {
		$('.header__tags__wrapper__list__item:nth-child(1)').css('marginLeft', hTagsLeft);
		for (var le = 1; le <= $('.header__tags__wrapper__list__item').length; le++) {
			hTagsWidth += $('.header__tags__wrapper__list__item:nth-child(' + [le] + ')').outerWidth(true) + 2;
		}
		$('.header__tags__wrapper__list').css('width', hTagsWidth + 'px');
	} else {
		$('.header__tags').css('marginLeft', hTagsLeft);
	}

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
		$(this).parent().css('display', 'none');
		$('.burger_menu__inner__list__item--hid').slideToggle(200);
		$(this).css('display', 'none');
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

	/*close menu-ext, calendar, cities, lang*/
	$(this).click(function(e) {
		if (!$(e.target).closest('.header__menu_ext__link--dots').length) {
			$('.header__submenu_ext').css('display', 'none');
		}
		if (!$(e.target).closest('.header__menu__list__item__img--calend').length) {
			$('.header__calendar__menu').css('display', 'none');
		}
		if (!$(e.target).closest('.header__menu__list__item--loc').length) {
			$('.header__location__menu').css('display', 'none');
		}
		if (!$(e.target).closest('.header__menu__list__item--lang').length) {
			$('.header__lang__menu--cho').css('display', 'none');
			$('.header__menu__list__item__img--lang').removeClass('header__menu__list__item__img__lang--rotated');
		}
		if (!$(e.target).closest('.header__search_box__input__inner__text').length) {
			$('.header__search_box__popup--main').css('display', 'none');
		}
		if (!$(e.target).closest('.header__menu__list__item--search').length) {
			$('.header__search_box__popup--sec').css('display', 'none');
		}

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
			if ($(window).innerWidth() > 1249) {
				$('.header__menu__list__item__city_name--loc').css('display', 'block');
			}
			$('.header__search_box__popup--sec').css('display', 'none');

		}
	}

	/*scroll to search menu*/
	$('.header__search_box__input__inner__text').click(function() {
		// $('html,body').animate({
		// 	scrollTop: $('.header__info__inner--title_box').offset().top
		// }, 200);
		clearSearch();
		$('.header__search_box__popup--main').css('display', 'block');
	});
	$('.header__menu__list__item--search').click(function() {
		clearSearch();
		$('.header__search_box__popup--sec').css('display', 'block');
		$('.header__menu__list__item__text--search').focus();
	});
	function clearSearch() {
		// $('body').toggleClass('hidden-body');
		$('.header__search_box__popup__wrapper__info_box__links_box').children().remove();
		$('.header__search_box__popup__wrapper__info_box__concerts_box').children().remove();
		$('.header__search_box__popup__wrapper__info_box__artists__inner').children().remove();
		$('.header__search_box__popup__wrapper__info_box__title--hidden').css('display', 'none');
		$('.header__search_box__popup__wrapper__info_box__load_more').css('display', 'none');
	}
	/*show search-menu*/
	$('.header__menu__list__item__text--search').keyup(findArt);
	$('.header__search_box__input__inner__text').keyup(findArt);
	function findArt() {

		fetch('https://tickfind.com/attraction.json')
		.then(function(res) { 
			return res.json(); 
		})
		.then(function(dataConcerts) {
			var adr = [];
			var arrData = [];
			$('.header__search_box__popup__wrapper__info_box__links_box').children().remove();
			$('.header__search_box__popup__wrapper__info_box__concerts_box').children().remove();
			$('.header__search_box__popup__wrapper__info_box__artists__inner').children().remove();
			for(var i = 0; i < dataConcerts.length; i++) {
				if ((((dataConcerts[i].activity_name.indexOf($('.header__search_box__input__inner__text').val()) != -1) || (dataConcerts[i].activity_name.toLowerCase().indexOf($('.header__search_box__input__inner__text').val()) != -1)) && $('.header__search_box__input__inner__text').val()) || (((dataConcerts[i].activity_name.indexOf($('.header__menu__list__item__text--search_lo').val()) != -1) || (dataConcerts[i].activity_name.toLowerCase().indexOf($('.header__menu__list__item__text--search_lo').val()) != -1)) && $('.header__menu__list__item__text--search_lo').val())) {
					arrData.push(dataConcerts[i]);
					
					/* artists */
					if ((dataConcerts[i].apr_page_name != '')) {
						adr.push(dataConcerts[i].apr_page_name)
					}
				} else {
					$('.header__search_box__popup__wrapper__info_box__title--hidden').css('display', 'none');
					$('.header__search_box__popup__wrapper__info_box__load_more').css('display', 'none');
				}
			}
			if (adr.length) {
				for (var b = 0; b < adr.length && b < 3; b++) {
					/* events */
					$(".header__search_box__popup__wrapper__info_box__links_box").append('<a class="header__search_box__popup__wrapper__info_box__links_box__link" href="' + 'https://tickfind.com/event/' + arrData[b].event_alias + '.htm' + '" target="_blank">' + arrData[b].event_name + '</a>');
					/*photo info*/
					$('.header__search_box__popup__wrapper__info_box__concerts_box').append(
						'<div class="header__search_box__popup__wrapper__info_box__concerts_box__inner">' +
						'<a href="' + 'https://tickfind.com/event/' + arrData[b].event_alias + '.htm' + '" target="_blank">' +
						'<div class="header__search_box__popup__wrapper__info_box__concerts_box__inner__img_box">' +
						'<img class="header__search_box__popup__wrapper__info_box__concerts_box__inner__img_box__img" src="' + 'https://tickfind.com/gallery/' + arrData[b].gallery_name + '/image_' + arrData[b].gallery_id + '_168_96.jpg' + '">' +
						'</div>' +
						'<div class="header__search_box__popup__wrapper__info_box__concerts_box__inner__info">' +
						'<p class="header__search_box__popup__wrapper__info_box__concerts_box__inner__info__text header__search_box__popup__wrapper__info_box__concerts_box__inner__info__text--date">' + arrData[b].city_name + ' • ' + arrData[b].event_at_str + '</p>' +
						'<p class="header__search_box__popup__wrapper__info_box__concerts_box__inner__info__text header__search_box__popup__wrapper__info_box__concerts_box__inner__info__text--name">' + arrData[b].apr_page_name + '</p>' +
						'<p class="header__search_box__popup__wrapper__info_box__concerts_box__inner__info__text header__search_box__popup__wrapper__info_box__concerts_box__inner__info__text--place">' + arrData[b].building_name + '</p>' +
						'</a>' +
						'</div>' +
						'<div class="header__search_box__popup__wrapper__info_box__concerts_box__inner__price">' +
						'<a href="' + 'https://tickfind.com/hall/' + arrData[b].event_alias + '.htm' + '" target="_blank">' +
						'<p>' + 'от ' + arrData[b].price_min + ' ₴' + '</p>' +
						'</a>' +
						'</div>' +
						'</div>'
						);

					$('.header__search_box__popup__wrapper__info_box__title--hidden').css('display', 'block');
					/*show link all results*/
					$('.header__search_box__popup__wrapper__info_box__load_more').css('display', 'table');
				}
			}
			/*artists*/
			var arrArtNam = adr.filter(function(elem, index, self) {
				return index === self.indexOf(elem);
			});
			for (var k = 0; k < arrArtNam.length; k++) {
				$('.header__search_box__popup__wrapper__info_box__artists__inner').append('<a class="header__search_box__popup__wrapper__info_box__artists__inner__link" >' + arrArtNam[k] + '</a>');
			};
		});
	};

/*change color background header-tags*/
var tagsColArr = ['#07C4AE', '#F27877', '#FABE8A', '#2F5677', '#50CDE3', '#56A5FF', '#7765E3', '#8386B5', '#AC8CBD', '#3F737B'];
$('.header__tags__wrapper__list__item').each(function() {
	var tagCol = tagsColArr[Math.floor(Math.random()*tagsColArr.length)];
	tagsColArr.splice(tagsColArr.indexOf(tagCol),1);
	$(this).css('background', tagCol);
})

});