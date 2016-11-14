
var routes = []; //stores all possible routes

export default function(href, name) {

	if(name!=undefined && href!=undefined)
		routes[href]=name;
	else if(name==undefined&&href!=undefined)
	{
		if(!isRoute(href)){
			defaultWay();
		}
		else{
			goTo(href);
		}
	}
}


function isRoute(href)
{
	if(typeof routes[href]=='function') 
		return true; 
	else
		return false;
}

function goTo(href) {
	var obj = {href: href};
	window.history.pushState(obj, null, href);
	routes[href](); 
}

function defaultWay(href) {
	var obj = {href: '*'};
	window.history.pushState(obj, null, 'notFound');
	routes['*'](); //notFound

}






