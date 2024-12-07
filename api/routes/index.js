const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");
const compression = require("compression");

// Routes
const ProductRoutes = require('./product.routes');

const router = express();
const apiRoute = express();

apiRoute
    .use(cors())
    .use(bodyParser.json())
    .use(compression());

apiRoute.use('/products', ProductRoutes);

router.use('/api', apiRoute);
module.exports = router;