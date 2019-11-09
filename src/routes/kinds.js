const express = require('express');
const path = require('path');
const MongoConnect = require('../lib/mongo.js');
const KindService = require('../services/kind-service.js');

const kindRoutes = (app) => {
  const router = express.Router();
  app.use('/api/', router);

  const mongoConnect = new MongoConnect();

  router.get('/kinds', async (req, res, next) => {
    try{
      const kinds = await KindService.find({}).exec()
      res.status(200).json(kinds);
    }catch(err){
      res.status(404).json({"error": err});
    }
  });

  router.post('/kinds', async (req, res, next ) => {
    try{
      const kind = new KindService(req.body);
      const doc = await kind.save()
      res.status(200).json(doc);
    }catch(err){
      res.status(404).json({"error": err});
    }
  });

}

module.exports = kindRoutes;