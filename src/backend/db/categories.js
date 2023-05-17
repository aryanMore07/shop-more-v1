import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Mobiles",
    description:"Best deals in on Mobile phones",
    img: 'https://images.samsung.com/is/image/samsung/assets/in/offer/online/latest-5g-mobile-phone-online/Banner_Mobile_720x402.jpg?$720_N_JPG$w'
  },
  {
    _id: uuid(),
    categoryName: "Furnitures",
    description:
      "Up to 75% off on Furniture & mattresses",
    img: 'https://m.media-amazon.com/images/I/61cefoSfepS._SL1062_.jpg'
  },
  {
    _id: uuid(),
    categoryName: "Home Entertainment Systems",
    description:
      "Best Details available for Home Entertainment Systems",
    img: 'https://static.standard.co.uk/s3fs-public/thumbnails/image/2020/10/16/15/kef-q-series-lifestyle-home-theatre-1.jpg?width=968&auto=webp&quality=50&crop=968%3A645%2Csmart'
  },
  {
    _id: uuid(),
    categoryName: "Clothes",
    description:
      "Clothings for all Men, women and Kids",
    img: 'https://www.livingrichwithcoupons.com/wp-content/uploads/2019/02/5-8-1.jpg'
  },
];
