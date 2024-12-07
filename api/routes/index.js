const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");
const compression = require("compression");

// Routes
const ProductRoutes = require('./product.routes');
const ScrappingRoutes = require('./scrapping.routes');

const router = express();
const apiRoute = express();

apiRoute
    .use(cors())
    .use(bodyParser.json())
    .use(compression());

apiRoute.use('/products', ProductRoutes);
apiRoute.use('/scrapping', ScrappingRoutes);

router.use('/api', apiRoute);
module.exports = router;