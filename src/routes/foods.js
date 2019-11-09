const express = require('express');
const path = require('path');

const foodRoutes = (app) => {
  const router = express.Router();
  app.use('/api/', router);

  router.get('/kinds', async (req, res, next) => {
    const storeProducts = await productService.getProducts()
    res.status(200).json(storeProducts);
  });

}

module.exports = foodRoutes;