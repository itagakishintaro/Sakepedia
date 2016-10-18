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
const LIMIT = 100;

// For Cross Origin
router.all( '/*', ( req, res, next ) => {
  res.contentType( 'json' );
  res.header( 'Access-Control-Allow-Origin', '*' );
  next();
} );

// GET find
router.get( '/', ( req, res ) => {
  let query = {}
  if ( req.query.prefecture ) {
    query['prefecture'] = new RegExp( req.query.prefecture );
  }
  if ( req.query.brewrey ) {
    query['brewery'] = new RegExp( req.query.brewrey );
  }
  if ( req.query.brand ) {
    query['brand'] = new RegExp( req.query.brand );
  }
  collection( 'sake' ).find( query ).limit( LIMIT ).toArray( ( err, docs ) => {
    res.send( docs );
  } );
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

// POST insert data
router.post( '/', ( req, res ) => {
  collection( 'sake' ).insertOne( req.body ).then( function ( r ) {
    res.send( r );
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
