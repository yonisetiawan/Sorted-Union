
function uniteUnique(arr) {
  var hasil = []
  var tampung = []
  for (var i = 0; i < arguments.length; i++) {
    arguments[i].reduce((a, b)=>{
      if(hasil.indexOf(a)==-1){
        hasil.push(a)
      }
      if(hasil.indexOf(b)==-1){
        hasil.push(b)
      }
      return tampung.push(a+b)
    })
  }
  return hasil
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]))
