# About this project

This project simulate an online store for musical instruments where users can search and add items to their carts. The items are split in multiple categories that also split in multiple subcategories, up to 5 level deep of subcategories. Users can search their desired items by either navigating through category/subcategory cards located on the home page or can use the search bar in the navbar.

The project was mainly meant to help me learn how to use typescript and react (which is why many questionable/dumb code might be present ) as well as many other things.

## Technologies that helped the creation of this page

- **React**
- **Styled Components**
- **Slick Slider**
- **Formik** (used for singin/login forms. The contact page form was build by me from scratch)
- **Yup** (for formik forms validation)
- **Typescript**
- **Scss**
- **Node.Js**
- **Express**
- **MongoDB**
- **Mongoose**
- **Axios**

## Getting Started

### Installation

Follow these steps in order to set up this app

1. Clone this repo in your editor

```sh
  git clone https://github.com/CiolpanSergiu/Shopping-Page.git
```

2. Select this project folder using

```sh
  cd musical-instruments-shop
```

3. Install NPM packages

```sh
  npm install
```

4. Open project on localhost with

```sh
  npm run dev
```

If you want to be able to create an account, log in and use this webstie to it's fullest you will need to go to
[https://www.mongodb.com/] and create an account (which is free if you choose the free plan). You can watch [https://www.youtube.com/watch?v=scVi_6xqAEc&ab_channel=Headhonk] if you have trouble. After reaching the 7:06 video mark pause it and create a .env file
in the musical-instruments-shop in your cloned folder. in it you will create a variable like this:

```sh
  MONGO_DB_URL=""
```

Now got back to the video and until 9:08 video mark. Copy your link and put it in your .env variable's quotation marks like this:

```sh
  MONGO_DB_URL="mongodb+srv://{your name will be here}:<password>@{your cluster name will be here}.aptr19m.mongodb.net/?retryWrites=true&w=majority"
```

Next replace <password> from your variable with your password and you are ready to go;

1. Open another terminal window and select this project folder using

```sh
  cd musical-instruments-shop
```

2. Start the server and mongodb with the following command:

```sh
  npm run startServer
```
