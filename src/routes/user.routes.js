const express = require('express');
const router = express.Router();


router.get('/', (req, res)=>{
  res.status(200).json({
    success: true,
    message: 'Hi, Welcome to User'
  })
});

router.get("/:id", (req, res)=>{
    res.status(200).json({
      success: true,
      message: req.params.id
    })
});

router.post("/", (req, res)=>{
    res.status(200).json({
      success: true,
      message: req.params.id
    })
});

router.put("/:id", (req, res)=>{
    res.status(200).json({
      success: true,
      message: req.params.id
    })
});

router.delete("/:id", (req, res)=>{
    res.status(200).json({
      success: true,
      message: req.params.id
    })
});
module.exports = router;
