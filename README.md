# mage Processing App

This Node.js script serves as an image processing tool, offering functionalities such as resizing, compressing, and clearing images in specified directories.

## Prerequisites

Ensure you have Node.js installed on your machine before running this script.

## Usage

1. Clone or download the repository.
2. Install dependencies using npm:

```bash
npm install
```

### Actions

#### 1. **Resize Images**

To resize all images in the "images" directory:

```bash
node app.js resize <width>
```

**Example:**

```bash
node app.js resize 1920
```

#### 2. **Compress Images**

To compress images in the "images" directory:

```bash
node app.js compress
```

#### 3. **Clear Images**

To delete images from specific directories:

* Delete images from the "images" directory:

  ```bash
  node app.js clear images
  ```
* Delete images from the "images_resize" directory:

  ```bash
  node app.js clear imagesResize
  ```
* Delete images from the "images_compress" directory:

  ```bash
  node app.js clear imagesCompress
  ```

### Notes


* The script utilizes the `imageEditor` module for image processing operations.
* Ensure that the required directories (`images`, `images_resize`, `images_compress`) exist before running the script.

Feel free to customize the directories and parameters according to your needs. Happy image processing! 📸✨
