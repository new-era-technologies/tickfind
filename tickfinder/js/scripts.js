$(document).ready(function(e) {

	/*header-tags marginLeft*/
	// var hTagsLeft = $('.header__info__inner--title_box').offset().left + 'px';
	// var hTagsWidth = 0;
	// if ($(window).innerWidth() < 960) {
	// 	$('.header__tags__wrapper__list__item:nth-child(1)').css('marginLeft', hTagsLeft);
	// 	for (var le = 1; le <= $('.header__tags__wrapper__list__item').length; le++) {
	// 		hTagsWidth += $('.header__tags__wrapper__list__item:nth-child(' + [le] + ')').outerWidth(true) + 2;
	// 	}
	// 	$('.header__tags__wrapper__list').css('width', hTagsWidth + 'px');
	// } else {
	// 	$('.header__tags').css('marginLeft', hTagsLeft);
	// 	var fullinfoMarLeft = ($('.header__info__inner--title_box').offset().left - $('.container').offset().left) + 'px';
	// 	$('.concerts_full_info').css('margin', '0 ' + fullinfoMarLeft);
	// }

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
		$('.header__menu__list__item__img--lang').removeClass('header__menu__list__item__img__lang--rotated');
	});

	/* show calendar by click */
	$('.header__menu__list__item__img--calend').click(function() {
		$('.header__calendar__menu').slideToggle(200);
		$('.header__menu__list__item__img--lang').removeClass('header__menu__list__item__img__lang--rotated');
	});

	/* show cities by click */
	$('.header__menu__list__item--loc').click(function() {
		$('.header__location__menu').slideToggle(200);
		$('.header__location__menu__inp').focus();
		$('.header__menu__list__item__img--lang').removeClass('header__menu__list__item__img__lang--rotated');
	});

	/* show language by click */
	$('.header__menu__list__item--lang').click(function() {
		$('.header__menu__list__item__img--lang').toggleClass('header__menu__list__item__img__lang--rotated');
		$('.header__lang__menu--cho').slideToggle(200);
	});

	/* show client-cabinet by click */
	$('.header__menu__list__item__inner__img').click(function() {
		$('.header__enter_cab__menu').slideToggle(200);
	});

	/*close menu-ext, calendar, cities, lang, client-cab*/
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
			$('.header__search_box__input__inner__text').val('');
		}
		if (!$(e.target).closest('.header__menu__list__item--search').length) {
			$('.header__search_box__popup--sec').css('display', 'none');
			$('.header__menu__list__item__text--search').val('');
		}
		if (!$(e.target).closest('.header__menu__list__item__inner__img').length) {
			$('.header__enter_cab__menu').css('display', 'none');
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
			$('.header__menu_ext__link__img--white').css('display', 'none');
			$('.header__menu_ext__link__img--black').css('display', 'block');
			$('.header__menu__list__item__city_name--loc').css('color', '#36373D');
			$('.header__menu__list__item__lang--cur').css('color', '#36373D');
			$('.header__menu__list__item__inner__link').css('color', '#07C4AE');

			/*search-input placeholder*/
			$('.header__menu__list__item__text--theatres_search').addClass('header__menu__list__item__text--theatres_search_b');

			/*480*/
			if ($(window).innerWidth() > 479) {
				$('.header__menu__list__item__text--search').css('display', 'block');
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
			$('.header__menu_ext__link__img--white').css('display', 'block');
			$('.header__menu_ext__link__img--black').css('display', 'none');
			$('.header__menu__list__item__city_name--loc').css('color', 'white');
			$('.header__menu__list__item__lang--cur').css('color', 'white');
			$('.header__menu__list__item__inner__link').css('color', 'white');

			/*search-input placeholder*/
			$('.header__menu__list__item__text--theatres_search').removeClass('header__menu__list__item__text--theatres_search_b');

			$('.header__menu__list__item__text--search').css('display', 'none');

			/*1250*/
			if ($(window).innerWidth() > 1249) {
				$('.header__menu__list__item__city_name--loc').css('display', 'block');
			}
			/*just for first page*/
			$('.header__search_box__popup--sec').css('display', 'none');

		}
	}

	/*scroll to search menu*/
	if ($(window).innerWidth() < 768) {
		$('.header__search_box__input__inner__text').click(function() {
		// $('html,body').animate({
		// 	scrollTop: $('.header__info__inner--title_box').offset().top
		// }, 200);
		$('.header__popup__search').css('display', 'block');
		$('.header__menu__list__item__text--search_popup').focus();
	});
		$('.header__menu__list__item--search').click(function() {
			$('.header__popup__search').css('display', 'block');
			$('.header__menu__list__item__text--search_popup').focus();
		});
	}
	$('.header__menu__list__item--search').click(function() {
		$('.header__menu__list__item__text--search').focus();
	});
	$('.header__popup__search__close_but').click(function() {
		$('.header__popup__search').animate({'opacity': 'toggle'}, 200);
	});
	function clearSearch() {
		$('.header__search_box__popup__wrapper__info_box__links_box').children().remove();
		$('.header__search_box__popup__wrapper__info_box__concerts_box').children().remove();
		$('.header__search_box__popup__wrapper__info_box__artists__inner').children().remove();
		$('.header__search_box__popup__wrapper__info_box__title--hidden').css('display', 'none');
		$('.header__search_box__popup__wrapper__info_box__load_more').css('display', 'none');
	}
	/*show search-menu*/
	$('.header__menu__list__item__text--search').keyup(findArt);
	$('.header__menu__list__item__text--theatres_search').keyup(findArt);
	$('.header__search_box__input__inner__text').keyup(findArt);
	$('.header__menu__list__item__text--search_popup').keyup(findArt);
	function findArt(e) {

		fetch('https://tickfind.com/attraction.json')
		.then(function(res) { 
			return res.json(); 
		})
		.then(function(dataConcerts) {
			var adr = [];
			var arrData = [];
			clearSearch();
			if (e.target == document.querySelector('.header__search_box__input__inner__text')) {
				$('.header__search_box__popup--main').css('display', 'block');
			} else if (e.target == document.querySelector('.header__menu__list__item__text--search_popup')) {
				$('.header__search_box__popup--mob').css('display', 'block');
			} else {
				$('.header__search_box__popup--sec').css('display', 'block');
			}
			for(var i = 0; i < dataConcerts.length; i++) {
				if ((((dataConcerts[i].activity_name.indexOf($('.header__search_box__input__inner__text').val()) != -1) || (dataConcerts[i].activity_name.toLowerCase().indexOf($('.header__search_box__input__inner__text').val()) != -1)) && $('.header__search_box__input__inner__text').val()) || (((dataConcerts[i].activity_name.indexOf($('.header__menu__list__item__text--search').val()) != -1) || (dataConcerts[i].activity_name.toLowerCase().indexOf($('.header__menu__list__item__text--search').val()) != -1)) && $('.header__menu__list__item__text--search').val()) || (((dataConcerts[i].activity_name.indexOf($('.header__menu__list__item__text--theatres_search').val()) != -1) || (dataConcerts[i].activity_name.toLowerCase().indexOf($('.header__menu__list__item__text--theatres_search').val()) != -1)) && $('.header__menu__list__item__text--theatres_search').val()) || (((dataConcerts[i].activity_name.indexOf($('.header__menu__list__item__text--search_popup').val()) != -1) || (dataConcerts[i].activity_name.toLowerCase().indexOf($('.header__menu__list__item__text--search_popup').val()) != -1)) && $('.header__menu__list__item__text--search_popup').val())) {
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
// var tagsColArr = ['#07C4AE', '#F27877', '#FABE8A', '#2F5677', '#50CDE3', '#56A5FF', '#7765E3', '#8386B5', '#AC8CBD', '#3F737B'];
// $('.header__tags__wrapper__list__item').each(function() {
// 	var tagCol = tagsColArr[Math.floor(Math.random()*tagsColArr.length)];
// 	tagsColArr.splice(tagsColArr.indexOf(tagCol),1);
// 	$(this).css('background', tagCol);
// });

/*hover page-cols*/
$('.concerts_full_info__inner__list__item--page_cols').children().hover(function() {
	$(this).children().css('background', '#07C4AE');
},
function() {
	$(this).children().css('background', '#999999');
});

});