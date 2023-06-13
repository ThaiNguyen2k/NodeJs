const express = require("express");
const router = express.Router();

router.get("/get-all-book", (req, res) => {
  res.send([
    { name: "Chiec thuyen ngoai xa", price: 5000 },
    {
      name: "Hon truong ba, da hang thit",
      pice: 120000,
    },
    {
      name: "Hanh tinh cua mot ke nghi nhieu",
      price: 69000,
    },
  ]);
});
module.exports = router;
