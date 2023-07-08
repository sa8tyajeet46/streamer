const router = require("express").Router();
const test = require("./../controller/test");
router.get("/test", test);
module.exports = router;
