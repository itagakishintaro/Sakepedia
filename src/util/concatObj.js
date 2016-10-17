const concatObj = (o1, o2) => {
  let o = {}
  for( let key in o1 ){
    o[key] = o1[key]
  }
  for( let key in o2){
    o[key] = o2[key]
  }
  return o
}
export default concatObj
