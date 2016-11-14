
export function valid(email) {
	var patt = /[a-z]*.mmt-[b,m][0-9]{4}@fh-salzburg\.ac\.at$/;
	
	if(patt.test(email))
		return true;
	else
		return false;
}

export function degreeProgram(email) {
	var patt=/.mmt-/;

	if(patt.test(email)&&valid(email))
		return 'MMT';
	
}

export function level(email) {
	var patB = /.mmt-b/;
	var patM = /.mmt-m/;

	if(patB.test(email)&&valid(email))
		return 'BA';
	else if(patM.test(email)&&valid(email))
		return 'MA';
	

}

export function graduationYear(email) {
	var patt = /20[0-9]{2}/;

	if(valid(email)){
		var year = email.match(patt);
		return parseInt(year) + 3;
	}
}
