export function es5() {
  var o = {
    list: [1, 2, 3, 4, 5],
    result: 0,
    sum: function() {
      var that = this
      this.list.forEach(function(val) {
        that.result += val
      })
    }
  }

  o.sum()

  return o
}

export function es6() {

 var obj = {
  arr: [1, 2, 3, 4, 5],
  result: 0,
  sum: () => {
    obj.result = obj.arr.reduce((sum, x) => sum + x)
  }
 }

 obj.sum()

 return obj
}
