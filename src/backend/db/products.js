import { v4 as uuid } from "uuid";

/**
 uuid() Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

 export const products = [
  {
    _id: uuid(),
    name: "Smartphone",
    category: "Electronics",
    inStock: true,
    price: 32000,
    image: "https://m.media-amazon.com/images/I/61L1ItFgFHL._SL1500_.jpg",
    rating: 4.2
  },
  {
    _id: uuid(),
    name: "Laptop",
    category: "Electronics",
    inStock: true,
    price: 65000,
    image: "https://in-media.apjonlinecdn.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/6/K/6K9C4PA-1_T1680319140.png",
    rating: 4.8
  },
  {
    _id: uuid(),
    name: "Headphones",
    category: "Electronics",
    inStock: true,
    price: 2500,
    image: "https://m.media-amazon.com/images/I/51JbsHSktkL._SL1500_.jpg",
    rating: 4.1
  },
  {
    _id: uuid(),
    name: "Television",
    category: "Electronics",
    inStock: true,
    price: 42000,
    image: "https://www.mylloyd.com/media/products/small_1-min.jpg",
    rating: 4.6
  },
  {
    _id: uuid(),
    name: "Gaming Chair",
    category: "Furniture",
    inStock: true,
    price: 14000,
    image: "https://cdn.shopify.com/s/files/1/0564/3816/1489/products/yellow.jpg?v=1662192277",
    rating: 4.5
  },
  {
    _id: uuid(),
    name: "Tablet",
    category: "Electronics",
    inStock: true,
    price: 22000,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0YVNighlF4sECiJjUuXfgwxDm24G2EE99mIApytj9StphK7Qlqv3eyPrUrVqGp6Vnhnw&usqp=CAU",
    rating: 4.3
  },
  {
    _id: uuid(),
    name: "Soundbar",
    category: "Electronics",
    inStock: true,
    price: 8000,
    image: "https://m.media-amazon.com/images/I/7133Wa9--iL._SL1500_.jpg",
    rating: 4.4
  },
  {
    _id: uuid(),
    name: "Desktop Computer",
    category: "Electronics",
    inStock: true,
    price: 72000,
    image: "https://m.media-amazon.com/images/I/811A5xhCQtL._SY450_.jpg",
    rating: 4.7
  },
  {
    _id: uuid(),
    name: "Smartwatch",
    category: "Electronics",
    inStock: true,
    price: 12000,
    image: "https://5.imimg.com/data5/SELLER/Default/2020/12/KN/WP/OI/5388819/t500-smartwatch-500x500.jpg",
    rating: 4.0
  },
  {
    _id: uuid(),
    name: "Wireless Earbuds",
    category: "Electronics",
    inStock: true,
    price: 5000,
    image: "https://cdn1.smartprix.com/rx-iP8UNBXrc-w420-h420/boat-airdopes-141-tr.jpg",
    rating: 4.2
  },
  {
    _id: uuid(),
    name: "Sofa",
    category: "Furniture",
    inStock: true,
    price: 45000,
    image: "https://m.media-amazon.com/images/I/51R6Ygn0WkL._SX425_.jpg",
    rating: 4.6
  },
  {
    _id: uuid(),
    name: "Dining Table",
    category: "Furniture",
    inStock: true,
    price: 28000,
    image: "https://media.royaloakindia.com/media/catalog/product/7/_/7_copy_6.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=500&width=800&canvas=800:500",
    rating: 4.3
  },
  {
    _id: uuid(),
    name: "Recliner Chair",
    category: "Furniture",
    inStock: true,
    price: 19000,
    image: "https://m.media-amazon.com/images/I/91YUlLA8ClL._SL1500_.jpg",
    rating: 4.8
  },
  {
    _id: uuid(),
    name: "Air Conditioner",
    category: "Electronics",
    inStock: true,
    price: 35000,
    image: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202205/air_conditioner_0_1200x768.jpeg?VersionId=1ep_guOOJpkzYzpnu0.IOxwPvXKmFXim",
    rating: 4.5
  },
  {
    _id: uuid(),
    name: "Blender",
    category: "Appliances",
    inStock: true,
    price: 2500,
    image: "https://m.media-amazon.com/images/I/512M3RouQZL.jpg",
    rating: 4.1
  },
  {
    _id: uuid(),
    name: "Washing Machine",
    category: "Appliances",
    inStock: true,
    price: 27000,
    image: "https://hdn-1.jioretailer.com/jioretailer/products/pictures/item/free/original/zbXK6YlPPS-kelvinator-kwt-a700lg-washing-machines-491604436-i-1-1200wx1200h.jpeg",
    rating: 4.6
  },
  {
    _id: uuid(),
    name: "T-Shirt",
    category: "Cloths",
    inStock: true,
    price: 1500,
    image: "https://my-live-02.slatic.net/p/a66645c7da41e393798960fdf74a02ed.jpg",
    rating: 4.2
  },
  {
    _id: uuid(),
    name: "Jeans",
    category: "Cloths",
    inStock: true,
    price: 2500,
    image: "https://m.media-amazon.com/images/I/91Pka1f3yKS._UX679_.jpg",
    rating: 4.4
  },
  {
    _id: uuid(),
    name: "Dress",
    category: "Cloths",
    inStock: true,
    price: 3500,
    image: "https://assets.ajio.com/medias/sys_master/root/20210403/bsM4/606867797cdb8c1f147522ca/-473Wx593H-461088032-blue-MODEL.jpg",
    rating: 4.3
  },
  {
    _id: uuid(),
    name: "Shoes",
    category: "Cloths",
    inStock: true,
    price: 5000,
    image: "https://m.media-amazon.com/images/I/71TawoxTk6L._UY500_.jpg",
    rating: 4.7
  },
  {
    _id: uuid(),
    name: "Camera",
    category: "Electronics",
    inStock: true,
    price: 28000,
    image: "https://m.media-amazon.com/images/I/914hFeTU2-L._SL1500_.jpg",
    rating: 4.5
  },
  {
    _id: uuid(),
    name: "Printer",
    category: "Electronics",
    inStock: true,
    price: 5000,
    image: "https://m.media-amazon.com/images/I/61mobtz-vrL._SL1500_.jpg",
    rating: 3.8
  },
  {
    _id: uuid(),
    name: "Office Chair",
    category: "Furniture",
    inStock: true,
    price: 9000,
    image: "https://m.media-amazon.com/images/I/61xYawAgJnL._SX425_.jpg",
    rating: 4.2
  },
  {
    _id: uuid(),
    name: "Bed",
    category: "Furniture",
    inStock: true,
    price: 35000,
    image: "https://m.media-amazon.com/images/I/81mtcjYgDCL._SL1500_.jpg",
    rating: 4.7
  },
  {
    _id: uuid(),
    name: "Watch",
    category: "Accessories",
    inStock: true,
    price: 8000,
    image: "https://m.media-amazon.com/images/I/91z5KuonXrL._SX522_.jpg",
    rating: 4.0
  },
  {
    _id: uuid(),
    name: "Microwave Oven",
    category: "Appliances",
    inStock: true,
    price: 12000,
    image: "https://www.lg.com/in/images/microwave-ovens/md07536273/gallery/MC2886BHT-Microwave-ovens-Right-Low-Perspective-view-D-12.jpg",
    rating: 4.2
  },
  {
    _id: uuid(),
    name: "Handbag",
    category: "Cloths",
    inStock: true,
    price: 4000,
    image: "https://m.media-amazon.com/images/I/91Xhzn4NGnL._UX500_.jpg",
    rating: 4.5
  },
  {
    _id: uuid(),
    name: "TV Stand",
    category: "Furniture",
    inStock: true,
    price: 8000,
    image: "https://m.media-amazon.com/images/I/818f0tvJT-L._SL1500_.jpg",
    rating: 3.9
  },
  {
    _id: uuid(),
    name: "Sunglasses",
    category: "Accessories",
    inStock: true,
    price: 2500,
    image: "https://contents.mediadecathlon.com/p2480432/e5cae723949b40d6c05f9497105c9376/p2480432.jpg",
    rating: 4.1
  },
  {
    _id: uuid(),
    name: "Jacket",
    category: "Cloths",
    inStock: true,
    price: 3500,
    image: "https://www.redwolf.in/image/catalog/sweatshirts/goku-kanji-dragon-ball-z-baseball-jacket-india.jpg",
    rating: 4.3
  }
];
