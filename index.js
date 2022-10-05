//Array map methods (values ,index ,Array)
let ary = [40, 41, 42, 43, 44]
console.log(ary)
let arry = ary.map((val, index, arr) => {
  console.log(val, index, arr)
  return 1 + val + index
})
console.log(arry, ary)

//Array filter method
let a = [25, 2, 10, 5,8, 6, 08, 040, 522, 55,]
//i dont know here why my ide is print 32 instead of 040
let b = a.filter((x) => {
  return x > 5
})
console.log(b,a)

//Array reduce methods
let j =[ 3,2,3,4,5,6,7]
const redufun = (l,m)=>{
  return l+m
}
let k = j.reduce(redufun)
// let k = j.reduce((l ,m)=>{
// return l + m 
// })

console.log(k)
