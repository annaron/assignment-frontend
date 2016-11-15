
var routes = []; //stores all possible routes

export default function(href, name) {

	if(name!=undefined && href!=undefined)
		routes[href]=name;
	else if(name==undefined&&href!=undefined)
	{
		if(!isFunction(href)&&!checkdynamic(href)){
			
			defaultWay();
		}
	
		else {
			goTo(href);
		}
	}
}


function isFunction(href)
{
	return(typeof routes[href]=='function') 
}

function checkdynamic(href)
{
	var regex = /\/players\/[a-z]*$/;
	return(regex.test(href));
	
}

function goTo(href) {
	
	var obj = {href: href};
	window.history.pushState(obj, null, href);

	if(checkdynamic(href))
		routes['/players/:player']();
	else 
		routes[href](); 

}

function defaultWay(href) {
	var obj = {href: '*'};
	window.history.pushState(obj, null, 'notFound');
	routes['*'](); //notFound

}







