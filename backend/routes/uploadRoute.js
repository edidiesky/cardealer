
import express from "express"
import path from 'path'
import multer from 'multer'
const router = express.Router()

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'public/uploads/')
  },
  filename(req, file, cb) {
    cb(
      null,
      `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
    )
  },
})

function checkFileType(file, cb) {
  const filetypes = /jpg|jpeg|png/
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase())
  const mimetype = filetypes.test(file.mimetype)

  if (extname && mimetype) {
    return cb(null, true)
  } else {
    cb('Images only!')
  }
}

const upload = multer({
  storage,
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb)
  },
})


router.post('/', upload.array('images', 4), (req, res) => {
  let files = req.files
  files = files.map(x => {
    const { path } = x
    return `/${path}`

  })
   res.setHeader("Content-Type", "text/html");
   res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");
  res.json({ files })
})


export default router
