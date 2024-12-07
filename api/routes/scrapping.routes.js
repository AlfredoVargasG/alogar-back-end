const { Router } = require("express");
const { ScrappingController } = require("../controllers");

const router = Router();

let SelectCtrl = new ScrappingController();

router.get('/categories', SelectCtrl.ScrapCategories)

module.exports = router;