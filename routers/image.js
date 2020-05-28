const express = require('express')

const { Router } = express;

const router = new Router();

const Image = require("../models").image



router.post('/', async (req, res, next) => {
    const { title, url } = req.body
    // here you can check if you got the params or respond with some error
    const newImage = await Image.create({ title, url })
    res.send(newImage)
  })  

async function getImages() {
    const images = await Image.findAll()
    const mappedImages = images.map(i=>i.url)

    console.log('mapped:',mappedImages)

    return mappedImages
}







router.get("/image"),(req,res) => res.send('xxx');

// router.get("/", async (req,res) => {
//     try {
//         const image = await Image.findAll()
//         return res.send(image)
//     } catch(e){
//         console.log('error:',e);
//     }
// }
// );

router.get("/", (req, res, next) => {
    const limit = Math.min(req.query.limit || 4, 5);
    const offset = req.query.offset || 0;
  
    Image.findAndCountAll({ limit, offset })
      .then((result) => res.send({ images: result.rows, total: result.count }))
      .catch((error) => next(error));
  });

module.exports = router;
