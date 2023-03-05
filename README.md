# About this project

This project simulate an online store for musical instruments where users can search and add items to their carts. The items are split in multiple categories that also split in multiple subcategories, up to 5 level deep of subcategories. Users can search their desired items by either navigating through category/subcategory cards located on the home page or can use the search bar in the navbar.

The project was mainly meant to help me learn how to use typescript and react (which is why many questionable/dumb code might be present ) as well as many other things.

## Notes:

1. Right now only the Guitar and Basses and it's subcategories have shopping items in it in order to save time
2. Most jsons files in data folder will be converted in ts files(currently only the guitars-and-basses folder is converted)
3. Empty alt property in a json file is for time saving,
4. The website is not fully complete but it is in a state where it looks decent and has most of the functionality done(which was the main goal) including:
   1. categories and subcategories navigation,
   2. functional search bar,
   3. login/singin/logout system,
   4. functional shopping cart,
   5. user data editing (phone number, country, full name, password) excepting email,
   6. placing orders
   7. orders history
   8. orders cancelling for orders within 1 hour since placement
   9. contact page where you can send a message/feedback
   10. persistent shopping cart and orders history throught different accounts
5. Legend:
   1. Category Page = the 9 main categories cards on the home page,
   2. Subcategory Page = A category page subpage,
   3. Shopping Page = A page that contain cards with different shop items,
   4. Item Page = A page that contains details about a single items
6. This website images, prices and navigation structure(mostly) were taken from [https://www.thomann.de/ro/index.html] along with some page desing,

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

2. Select this project folder using (it might be nested inside another folder but this should be the final one) or write cd and drag and drop musical-instruments-shop folder in terminal

```sh
  cd <previous folder name>
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
in the musical-instruments-shop cloned folder. In it create a variable named exactly like this:

```sh
  MONGO_DB_URL=""
```

Now got back to the video and watch until 9:08 video mark. Copy your link and put it in your .env variable's quotation marks like this:

```sh
  MONGO_DB_URL="mongodb+srv://{your name will be here}:<password>@{your cluster name will be here}.aptr19m.mongodb.net/?retryWrites=true&w=majority"
```

Next replace < password > from your variable with your password and you are ready to go;

Example of a final .env file:

```sh
  MONGO_DB_URL="mongodb+srv://TestUsername:StrongestPassword3452@MyUsersDB.aptr19m.mongodb.net/?retryWrites=true&w=majority"
```

1. Open another terminal window and select this project folder using

```sh
  cd musical-instruments-shop
```

2. Start the server and mongodb with the following command:

```sh
  npm run startServer
```
