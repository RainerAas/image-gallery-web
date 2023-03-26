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

Start by cloning the project to your own machine and then install the packages by using npm.

```bash
  npm install
```
    
## Usage

You must create a file inside the project directory named **.env** and put your API URL there which, if you are running the API part of the project locally, is most likely http://localhost:3000/api/v1. An example of this can be found in the file called **.env.exmaple**.  

Then, if your API is running you can run `npm start` to run the project locally. More about the available scripts is written down below.

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
