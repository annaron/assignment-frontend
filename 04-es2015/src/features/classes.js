export function es5(val) {
  var C = function(hello) {
    this.hello = hello
  }
  C.prototype.say = function() {
    return this.hello
  }

  var o = new C(val)
  return o.say()
}

export function es6(val) {

	class C {
		constructor(word){
			this.word= word
		}


		hello(){
		return this.word;
		}
	}


	const o = new C("World!")
	return o.hello()
}
