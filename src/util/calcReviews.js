const averageEvaluation = reviews => {
  if( !reviews ) {
    return 0
  }
  return reviews.map( r => r.evaluation ? Number( r.evaluation ) : 0 ).reduce( ( p, c ) => p + c ) / reviews.length
}

const averageReview = reviews => {
  if( !reviews ) {
    return {}
  }
  let flavor = reviews.map( r => Number( r.flavor ) ).reduce( ( p, c ) => p + c ) / reviews.length
  let taste = reviews.map( r => Number( r.taste ) ).reduce( ( p, c ) => p + c ) / reviews.length
  let maturation = reviews.map( r => Number( r.maturation ) ).reduce( ( p, c ) => p + c ) / reviews.length
  return { flavor, taste, maturation }
}
export { averageEvaluation, averageReview }
