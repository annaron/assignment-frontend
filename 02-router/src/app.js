import $ from 'jquery'
import router from './router'
import homeTpl from './templates/home.hbs'
import contactTpl from './templates/contact.hbs'
import notFoundTpl from './templates/not-found.hbs'
import playersTpl from './templates/player.hbs'


const $app = $('#app')


$("nav a").click(function(event){
    event.preventDefault();
    var site = this.getAttribute('href');
	router(site);

});


function index() {
  $app.html(homeTpl())
}

function contact() {
  $app.html(contactTpl())
}

function notFound() {
  $app.html(notFoundTpl())
}


function players() {
	var current =window.location.href;
	var player = current.split('/');
	var player = player[4];
	
  	$app.html(playersTpl({
    	player
  }))
}


router('/', index)
router('/contact', contact)
router('/players/:player', players)
router('*', notFound)
router()

window.addEventListener('load', function(event){ 
	router(window.location.pathname);
})

window.addEventListener('popstate', function(event){
	router(window.location.pathname);
	})
