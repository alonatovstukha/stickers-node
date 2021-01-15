const {Router} = require ('express');
const router = Router();
const Sticker = require('../models/Sticker')

router.get('/', async(req, res) => {
  const stickers = await Sticker.find({}).lean();
  res.render('board', {stickers});

});


router.post('/', async (req, res) => {
  const newSticker = new Sticker({
    title: req.body.stickerTitle
  });
  await newSticker.save();
  res.redirect('/');
})

router.post('/delete', async (req, res) => {
  // const newSticker = new Sticker({
  //   title: req.body.stickerTitle
  // });
  // await newSticker.save();
  const sticker = await Sticker.findById(req.body.id);

  Sticker.deleteOne({_id: req.body.id}, (err) => {
    if(err) console.log(err);
  console.log("Successful deletion");
  })
  res.redirect('/');
})

module.exports = router;