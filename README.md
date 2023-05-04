# Image Gallery - Web

This is the front-end application part of the Image Gallery project. The project is made with best technologies and practices in mind and is the perfect base application for anyone wanting to play around with it or build a new application on.  

**The back-end API part of this project is found [here](https://github.com/RainerAas/image-gallery-api)**.

The project is built using **React.js**.

## Features

In conjunction with the API, the application supports:

* image upload (both singular and multiple image files) by either drag and drop or browsing and selecting from your local file system,
* image deleting,
* browsing with a lightbox that is capable of zooming and shows a thumbnail track,
* image lazy loading with the placeholder being a BlurHash image,
* image gallery viewing.  

**Note: the application by default supports .PNG, .JPEG/.JPG and .WEBP files up to 10MB. Those limits can be changed in the back-end API. For changing the image formats you must also update the `fileTypes` array in `...src\views\image-upload\image-uploader\image-uploader.component.jsx`.**

## Installation

**Note: you need to have Node.js installed on your machine.**

Start by cloning the project to your own machine and then install the packages by using npm.

```bash
  npm install
```
    
## Usage

You must create a file inside the project directory named **.env** and put your API URL there which, if you are running the API part of the project locally, is most likely http://localhost:3000/api/v1. An example of this can be found in the file called **.env.exmaple**.  

Then, if your API is running you can run `npm start` to run the project locally. More about the available scripts is written down below.  

To upload an image, navigate to the **Image Upload** view from the navigation bar above the content of the webpage. From there you may click on the outlined box to browse your local file system or drag your selected files to said box.  

To view uploaded images, navigate to **Images** view from the navigation bar. From there you may click on the images to view them in a lightbox. The lightbox supports keyboard, mouse, touchpad and touchscreen navigation and you may also zoom with said controls. Zooming is also possible by clicking the magnifying glass icon on the upper right side of the lightbox.  

To delete an image on PC, hover your cursor over the image and an trashcan icon will appear on the top right side of the image you are hovering over. Then click the trash can icon and a check icon will appear instead which signifies confirmation. Once you click the check icon, the application will attempt to remove said image. You will get a notification notifying if the deletion was successful or not. To delete an image on mobile devices, hovering is not necessary and the icon will always be apparent.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.

The page will reload when you make changes.  
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.  
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.  
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.  
Your app is ready to be deployed!  

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Author

- [Rainer Aas](https://github.com/RainerAas)

## License

[MIT](https://choosealicense.com/licenses/mit/)
