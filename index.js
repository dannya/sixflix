var detection = 'class ಠ_ಠ extends Array{constructor(j=`a`,...c){let q=(({u: e})=>{return{[`${c}`]:Symbol(j)}})({});super(j,q,...c)}}new Promise(f=>{let a=function*(){return"\\u{20BB7}".match(/./u)[0].length===2||!0};for(let z of a()){let[x,y,w,k]=[new Set(),new WeakSet(),new Map(),new WeakMap()];break}f(new Proxy({},{get:(h,i)=>i in h?h[i]:"j".repeat(0o2)}))}).then(t=>new ಠ_ಠ(t.d))'

var result

module.exports = function () {
  if (result === void 0) {
    try {
      eval(detection)
      result = true
    } catch (e) {
      result = false
    }
  }
  return result
}
