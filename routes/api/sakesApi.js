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
    query['都道府県'] = new RegExp( req.query.prefecture );
  }
  if ( req.query.brewrey ) {
    query['蔵元'] = new RegExp( req.query.brewrey );
  }
  if ( req.query.name ) {
    query['銘柄名'] = new RegExp( req.query.name );
  }
  collection( 'sake' ).find( query ).limit( LIMIT ).toArray( ( err, docs ) => {
    res.send( docs );
  } );
} );

// GET find names
router.get( '/names', ( req, res ) => {
  collection( 'sake' ).distinct( '銘柄名', ( err, docs ) => { res.send( docs) } );
} );

// GET find breweries
router.get( '/breweries', ( req, res ) => {
  collection( 'sake' ).distinct( '蔵元', ( err, docs ) => { res.send( docs) } );
} );

// GET find prefectures
router.get( '/prefectures', ( req, res ) => {
  collection( 'sake' ).distinct( '都道府県', ( err, docs ) => { res.send( docs) } );
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

// PUT update data
router.put( '/:id', ( req, res ) => {
  collection( 'sake' ).findOneAndUpdate( {
    _id: new ObjectID( req.params.id )
  }, req.body, {}, function ( err, r ) {
    res.send( r );
  } );
} );

module.exports = router;
