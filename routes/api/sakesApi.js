'use strict';
/**
 * node-mongodbのドキュメント
 * http://mongodb.github.io/node-mongodb-native/2.1/
 */
let express = require( 'express' );
let router = express.Router();
let ObjectID = require( 'mongodb' ).ObjectID;
// MongoDB用ファイルを指定
let collection = require( '../../mongo' );
let fs = require('fs');
let axios = require('axios');
const LIMIT = 100;

// For Cross Origin
router.all( '/*', ( req, res, next ) => {
  // res.contentType( 'json' );
  res.header( 'Access-Control-Allow-Origin', '*' );
  next();
} );

// GET find
router.get( '/', ( req, res ) => {
  let query = {}
  if ( req.query.prefecture ) {
    query.prefecture = new RegExp( decodeURIComponent(req.query.prefecture) );
  }
  if ( req.query.brewrey ) {
    query.brewery = new RegExp( decodeURIComponent(req.query.brewrey) );
  }
  if ( req.query.brand ) {
    query.brand = new RegExp( decodeURIComponent(req.query.brand) );
  }
  let reviews = {}
  if ( req.query['reviews.userid'] ) {
    reviews.userid = decodeURIComponent(req.query['reviews.userid']);
    reviews.date = {}
    if ( req.query.from ) {
      reviews.date['$gt'] = decodeURIComponent(req.query.from);
    }
    if ( req.query.to ) {
      reviews.date['$lt'] = decodeURIComponent(req.query.to);
    }
    query['reviews'] = { '$elemMatch': reviews }
  }
  collection( 'sake' ).find( query ).sort([[ 'date', 1 ]]).project( { image: 0 } ).limit( LIMIT ).toArray( ( err, docs ) => {
    res.send( docs );
  } );
} );

// GET find my breweries
router.get( '/myBreweries', ( req, res ) => {
  let query = {}
  let reviews = {}
  if ( req.query['reviews.userid'] ) {
    reviews.userid = decodeURIComponent(req.query['reviews.userid']);
    query['reviews'] = { '$elemMatch': reviews }
    collection( 'sake' ).distinct( 'brewery', query, {}, ( err, docs ) => {
      res.send( docs );
    } );
  } else {
    res.send([]);
  }
} );

// GET find brands
router.get( '/brands', ( req, res ) => {
  collection( 'sake' ).distinct( 'brand', ( err, docs ) => { res.send( docs) } );
} );

// GET find breweries
router.get( '/breweries', ( req, res ) => {
  collection( 'sake' ).distinct( 'brewery', ( err, docs ) => { res.send( docs) } );
} );

// GET find koubos
router.get( '/sakeYeasts', ( req, res ) => {
  collection( 'sake' ).distinct( 'sakeYeast', ( err, docs ) => { res.send( docs) } );
} );

// GET find prefectures
router.get( '/prefectures', ( req, res ) => {
  collection( 'sake' ).distinct( 'prefecture', ( err, docs ) => { res.send( docs) } );
} );

// GET find rices
router.get( '/rices', ( req, res ) => {
  collection( 'sake' ).distinct( 'riceForMakingKoji', ( err, docs ) => {
    let riceOfKoujis = docs
    collection( 'sake' ).distinct( 'sakeRiceExceptForKojiMaking', ( err, docs ) => {
      let riceOfKakes = docs
      let rices = [ ...riceOfKoujis, ...riceOfKakes ].filter( ( x, i, self ) => self.indexOf( x ) === i );
      res.send( rices )
    } );
  } );
} );

// GET find :id
router.get( '/:id', ( req, res ) => {
  collection( 'sake' ).findOne( {
    _id: new ObjectID( req.params.id )
  }, {}, function ( err, r ) {
    res.send( r );
  } );
} );

// GET find brand name
router.get( '/brand/:name', ( req, res ) => {
  collection( 'sake' ).findOne( {
    brand: req.params.name
  }, { fields: { image: 0, reviews: 0 } }, function ( err, r ) {
    res.send( r );
  } );
} );

const returnNull = ( res ) =>{
  res.contentType( 'image/png' );
  res.end( null );
}

const getImage = ( res, r ) => {
  axios.get( r.image, { responseType: 'arraybuffer' } )
  .then( r => {
    let buffer = new Buffer( r.data, 'binary' );
    fs.writeFileSync( 'data.' + r.headers['content-type'].replace(/image\//, ''), buffer );
    res.contentType( r.headers['content-type'] );
    res.end( buffer );
  })
  .catch( () => {
    returnNull( res );
  });
}

// GET find image
router.get( '/:id/image', ( req, res ) => {
  collection( 'sake' ).findOne( {
    _id: new ObjectID( req.params.id )
  }, {}, function ( err, r ) {
    const regex = /^data:.+\/(.+);base64,(.*)$/;
    if( r.image === undefined ){
      returnNull( res );
    } else {
      let matches = r.image.match( regex );
      if( matches === null ) {
        getImage( res, r );
      } else {
        let ext = matches[1];
        let data = matches[2];
        let buffer = new Buffer( data, 'base64' );
        fs.writeFileSync( 'data.' + ext, buffer );
        res.contentType( 'image/' + ext );
        res.end( buffer );
      }
    }
  } );
} );

// POST insert data
router.post( '/', ( req, res ) => {
  collection( 'sake' ).insertOne(
    req.body,
    function ( err, r ) {
      res.send( r.insertedId );
    } );
} );

// PUT add review
router.put( '/:id/add/review', ( req, res ) => {
  collection( 'sake' ).findAndModify(
    { _id: new ObjectID( req.params.id ) },
    [ [ '_id', 1 ] ],
    { $push: { 'reviews': req.body } },
    { upsert: true },
    function ( err, r ) {
      res.send( r );
    }
  );
} );

// PUT update review
router.put( '/:id/update/review', ( req, res ) => {
  collection( 'sake' ).update(
    { _id: new ObjectID( req.params.id ),
      'reviews.date': req.body.originDate,
      'reviews.userid': req.body.userid
    },
    { $set: { 'reviews.$': req.body } },
    {},
    function ( err, r ) {
      res.send( r );
    }
  );
} );

// PUT update data
router.put( '/:id', ( req, res ) => {
  collection( 'sake' ).findAndModify(
    { _id: new ObjectID( req.params.id ) },
    [ [ '_id', 1 ] ],
    req.body,
    { upsert: true },
    function ( err, r ) {
      res.send( r );
    }
  );
} );

module.exports = router;
