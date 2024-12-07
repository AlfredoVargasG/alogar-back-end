const { Router } = require("express");
const { SelectController } = require("../controllers");

const router = Router();

let SelectCtrl = new SelectController();

router.get('/', SelectCtrl.selectAll)

module.exports = router;