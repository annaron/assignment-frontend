import $ from 'jquery'
import router from './router'
import homeTpl from './templates/home.hbs'
import playerTpl from './templates/player.hbs'
import contactTpl from './templates/contact.hbs'
import notFoundTpl from './templates/not-found.hbs'

const $app = $('#app')

const all_Players = {
  magnus: {
    name: 'Magnus Carlsen',
    image: "https://cdn.worldchess.com/static/img/nyfide/carlsen_2x.png",
    description: 'Lorem ipsum'
  },

  sergey: {
    name: 'Sergey Karjakin',
    image: "https://cdn.worldchess.com/static/img/nyfide/karjakin_2x.png",
    description: 'Lorem ipsum'
  }
}

function index() {
  $app.html(homeTpl())
}

function contact() {
  $app.html(contactTpl())
}

function players(ctx) {
  const player = all_Players[ctx.params.player];
  if(player==undefined)
    notFound();
  else{
  var name = player.name;
  var image = player.image;
  var description = player.description;
  $app.html(playerTpl({name, image, description}));
}
}

function notFound() {
  $app.html(notFoundTpl())
}

router('/', index)
router('/players/:player', players)
router('/contact', contact)
router('*', notFound)
router()
