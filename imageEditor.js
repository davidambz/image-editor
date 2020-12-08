const sharp = require("sharp");
const compress_images = require("compress-images")

module.exports.resize = function (filesName,imgsPath,width,imgsResizePath) { 
    for (let i = 0; i < filesName.length; i++){
        sharp(imgsPath + filesName[i]).resize({width: width})
        .toFile(imgsResizePath + filesName[i], (err) => {
            if(err) {
                console.log(err);
            }
        })
    }
}
module.exports.compress = function (filesName,imgsPath,imgsCompressPath){
    for (let i = 0; i < filesName.length; i++){
        
        let newPath = imgsPath + filesName[i];

        console.log(newPath);
        compress_images(newPath, imgsCompressPath, { compress_force: false, statistic: true, autoupdate: true }, false,
            { jpg: { engine: "mozjpeg", command: ["-quality", "60"] } },
            { png: { engine: "pngquant", command: ["--quality=20-50", "-o"] } },
            { svg: { engine: "svgo", command: "--multipass" } },
            { gif: { engine: "gifsicle", command: ["--colors", "64", "--use-col=web"] } },
            function (error, completed, statistic) {
                console.log("-------------");
                console.log(error);
                console.log(completed);
                console.log(statistic);
                console.log("-------------");
            }
        );
    }
}