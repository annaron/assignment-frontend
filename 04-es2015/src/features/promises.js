export function es5(cb) {
  setTimeout(function() {
    cb(null, 10)
  }, 1)
}

export function es6() {
	let promise = new Promise((resolve, reject) => esolve(cb(null, 10)));
	return promise;
}
