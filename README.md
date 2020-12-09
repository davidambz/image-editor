# image Editor

Command line image editor developed with nodejs.

# How to use
Edit all images in the images directory at once, creating a new file in the directory related to the function performed.


## Resize
### The images will be resized from the width:
node app.js **resize width(int)**

### Example:
node app.js **resize 1920**



## Compress
### The images will be compressed with the command:
node app.js **compress**



## CLEAR
### Delete images from directories:

#### Delete images from directory: images
node app.js **clear images**


#### Delete images from directory: **images_resize**
node app.js **clear imagesResize**


#### Delete images from directory: **images_compress**
node app.js **clear imagesCompress**