import {v2 as cloudinary} from 'cloudinary';
import * as fs from 'fs';
import multer from 'multer';
          
cloudinary.config({ 
  cloud_name: 'deiamljto', 
  api_key: '843231361958451', 
  api_secret: 's-uCSbzFnC2fCozMU679LjJ7iEE' 
});

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, 'uploads/')
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname)
    }
})

const upload = multer({ storage: storage });


const uploadToCloudinary = async(file: any) => {
    return new Promise((resolve, reject) => {
        cloudinary.uploader.upload(file.path,
        { public_id: file.originalname }, 
        (error, result) => {
            fs.unlinkSync(file.path)
            if(error) reject(error)
            resolve(result)
        })
    })
}

export const FileUploadHelper = {
    uploadToCloudinary,
    upload
}