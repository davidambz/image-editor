const fs = require("fs");
var imageEditor = require('./imageEditor');

const imgsPath = "./images/"; 
const imgsResizePath = "./images_resize/"; 
const imgsCompressPath = "./images_compress/"; 

let action = process.argv[2];

getFilesName(imgsPath, function (err, content) {
    let filesName = content;

    switch (action) {
        case 'resize':
            let width = parseInt(process.argv[3]);
            imageEditor.resize(filesName, imgsPath, width, imgsResizePath);
            console.log('Resized images');
    
            break;
            
        case 'compress':
            imageEditor.compress(filesName, imgsPath, imgsCompressPath);
            
            console.log('Compressed images');
            break;
    
        case 'clear':
            let imageType = decidePathDeleteImages(process.argv[3]);
            if((typeof imageType === "string")){
                deleteImages(imageType, filesName);
                console.log('Clear images');
            }else{
                console.log('invalid directory');
            }

            break;

        default:
            console.log("invalid action");
    }
})

function getFilesName(path, callback){
    fs.readdir(path, function (err, items) {
        if (err) {
            return callback(err)
        }
        callback(null, items)
    })
}

function deleteImages(path, filesName){
    for(let i = 0; i < filesName.length; i++){
        let newPath = path + filesName[i];
        fs.unlink(newPath, (err) => {
            console.log(filesName[i])
        })
    }
}

function decidePathDeleteImages(arg){
    if(arg === 'imagesResize'){
        return imgsResizePath;
    }else if(arg === 'imagesCompress'){
        return imgsCompressPath;
    }else if(arg === 'images'){
        return imgsPath;
    }else{
        return false;
    }
}