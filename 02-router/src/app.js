import $ from 'jquery'
import router from './router'
import homeTpl from './templates/home.hbs'
import contactTpl from './templates/contact.hbs'
import notFoundTpl from './templates/not-found.hbs'
import magnusTpl from './templates/magnus.hbs'
import sergeyTpl from './templates/sergey.hbs'

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

function players(player) {


	if(player=="magnus")
 		 $app.html(magnusTpl);
	if(player=="sergey")
		 $app.html(sergeyTpl);

}

router('/', index)
router('/contact', contact)
router('/players/:player', context => {const player=context.params.player})
router('*', notFound)
router()

window.addEventListener('load', function(event){ 
	router(window.location.pathname);
})



