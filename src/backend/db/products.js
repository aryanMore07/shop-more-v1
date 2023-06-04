/**
 uuid() Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: '427dd8c4-fa2c-11ed-be56-0242ac120002',
    name: "Smartphone",
    category: "Electronics",
    inStock: true,
    price: 32000,
    image: "https://m.media-amazon.com/images/I/61L1ItFgFHL._SL1500_.jpg",
    rating: 4.2,
    discription: ["High-resolution display", "Powerful processor", "Ample storage capacity", "Advanced camera capabilities", "Long-lasting battery life", "Fast charging technology",]
  },
  {
    _id: '505d8732-fa2c-11ed-be56-0242ac120002',
    name: "Laptop",
    category: "Electronics",
    inStock: true,
    price: 65000,
    image: "https://in-media.apjonlinecdn.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/6/K/6K9C4PA-1_T1680319140.png",
    rating: 4.8,
    discription: ["High-resolution display", "Powerful processor", "Ample RAM", "Large storage capacity (SSD/HDD)", "Dedicated graphics card"]
  },
  {
    _id: "620bbddc-fa2c-11ed-be56-0242ac120002",
    name: "Headphones",
    category: "Electronics",
    inStock: true,
    price: 2500,
    image: "https://m.media-amazon.com/images/I/51JbsHSktkL._SL1500_.jpg",
    rating: 4.1,
    discription: ["High-quality sound reproduction", "Noise-cancellation technology", "Wireless connectivity (Bluetooth)", "Built-in microphone for hands-free calls", "Comfortable and adjustable fit"]
  },
  {
    _id: "6bbe49c6-fa2c-11ed-be56-0242ac120002",
    name: "Television",
    category: "Electronics",
    inStock: true,
    price: 42000,
    image: "https://www.mylloyd.com/media/products/small_1-min.jpg",
    rating: 4.6,
    discription: ["High-resolution display (e.g., 4K, 8K)", "Large screen size", "Smart TV capabilities (built-in streaming apps, internet connectivity)", "HDR (High Dynamic Range) for enhanced contrast and color", "Voice control functionality (e.g., Alexa, Google Assistant)",]
  },
  {
    _id: '757d2130-fa2c-11ed-be56-0242ac120002',
    name: "Gaming Chair",
    category: "Furniture",
    inStock: true,
    price: 14000,
    image: "https://cdn.shopify.com/s/files/1/0564/3816/1489/products/yellow.jpg?v=1662192277",
    rating: 4.5,
    discription: ["Ergonomic design for optimal comfort during long gaming sessions", "Adjustable height and reclining backrest", "Built-in lumbar support and headrest cushion", "High-quality and durable materials", "Armrests with adjustable height and angle" ]
  },
  {
    _id: '7d8927b6-fa2c-11ed-be56-0242ac120002',
    name: "Tablet",
    category: "Electronics",
    inStock: true,
    price: 22000,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0YVNighlF4sECiJjUuXfgwxDm24G2EE99mIApytj9StphK7Qlqv3eyPrUrVqGp6Vnhnw&usqp=CAU",
    rating: 4.3,
    discription: ["High-resolution display", "Touchscreen interface", "Portable and lightweight design", "Long battery life", "Fast processing power", "Ample storage capacity"]
  },
  {
    _id: "8317f2de-fa2c-11ed-be56-0242ac120002",
    name: "Soundbar",
    category: "Electronics",
    inStock: true,
    price: 8000,
    image: "https://m.media-amazon.com/images/I/7133Wa9--iL._SL1500_.jpg",
    rating: 4.4,
    discription: ["High-quality audio output", "Multiple built-in speakers for immersive sound", "Dolby Atmos or surround sound support", "Wireless connectivity (Bluetooth, Wi-Fi)", "HDMI or optical input for connecting to a TV or other devices", "Subwoofer for deep bass"]
  },
  {
    _id: '88a890fa-fa2c-11ed-be56-0242ac120002',
    name: "Desktop Computer",
    category: "Electronics",
    inStock: true,
    price: 72000,
    image: "https://m.media-amazon.com/images/I/811A5xhCQtL._SY450_.jpg",
    rating: 3.7,
    discription: ["Powerful processor for fast performance", "Ample RAM for smooth multitasking", "Large storage capacity (SSD/HDD)", "Dedicated graphics card for gaming or graphic-intensive tasks", "High-resolution display support", "Multiple USB ports for peripheral connectivity"]
  },
  {
    _id: "93af1ca8-fa2c-11ed-be56-0242ac120002",
    name: "Smartwatch",
    category: "Electronics",
    inStock: true,
    price: 12000,
    image: "https://5.imimg.com/data5/SELLER/Default/2020/12/KN/WP/OI/5388819/t500-smartwatch-500x500.jpg",
    rating: 2.0,
    discription: ["Touchscreen display", "Fitness tracking (heart rate, steps, calories)", "Sleep tracking", "GPS for location tracking", "Water and dust resistance (IP rating)", "Bluetooth connectivity"]
  },
  {
    _id: "9afb2a92-fa2c-11ed-be56-0242ac120002",
    name: "Wireless Earbuds",
    category: "Electronics",
    inStock: true,
    price: 5000,
    image: "https://cdn1.smartprix.com/rx-iP8UNBXrc-w420-h420/boat-airdopes-141-tr.jpg",
    rating: 4.2,
    discription: ["True wireless design (no wires between earbuds)", "Bluetooth connectivity", "Compact and portable charging case", "Long battery life (both earbuds and charging case)", "Quick charging capabilities", "Active Noise Cancellation (ANC)"]
  },
  {
    _id: "a19d2d1e-fa2c-11ed-be56-0242ac120002",
    name: "Sofa",
    category: "Furniture",
    inStock: true,
    price: 45000,
    image: "https://m.media-amazon.com/images/I/51R6Ygn0WkL._SX425_.jpg",
    rating: 4.6,
    discription: ["Comfortable seating with plush cushions", "Durable and high-quality upholstery", "Stylish and aesthetically pleasing design", "Various seating capacity options (2-seater, 3-seater, sectional)", "Adjustable backrest or reclining options"]
  },
  {
    _id: "a72ddd00-fa2c-11ed-be56-0242ac120002",
    name: "Dining Table",
    category: "Furniture",
    inStock: true,
    price: 28000,
    image: "https://media.royaloakindia.com/media/catalog/product/7/_/7_copy_6.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=500&width=800&canvas=800:500",
    rating: 4.3,
    discription: ["Sturdy construction for durability", "Appropriate size for the available dining space", "High-quality materials (e.g., solid wood, glass, metal)", "Attractive design that complements the overall dining area", "Sufficient seating capacity for the intended number of people"]
  },
  {
    _id: "ad5d2442-fa2c-11ed-be56-0242ac120002",
    name: "Recliner Chair",
    category: "Furniture",
    inStock: true,
    price: 19000,
    image: "https://m.media-amazon.com/images/I/91YUlLA8ClL._SL1500_.jpg",
    rating: 2.8,
    discription: ["Comfortable cushioning and ergonomic design", "Adjustable reclining positions for personalized comfort", "Durable construction with high-quality materials", "Support for head, back, and leg rest", "Built-in footrest for added relaxation", "Additional features like massage or heating functionality"]
  },
  {
    _id: "b2b6437e-fa2c-11ed-be56-0242ac120002",
    name: "Air Conditioner",
    category: "Electronics",
    inStock: true,
    price: 35000,
    image: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202205/air_conditioner_0_1200x768.jpeg?VersionId=1ep_guOOJpkzYzpnu0.IOxwPvXKmFXim",
    rating: 4.5,
    discription: ["Cooling capacity suitable for the intended room size", "Energy-efficient operation for cost savings", "Adjustable temperature settings", "Multiple fan speeds for personalized airflow", "Air filtration system for improved indoor air quality", "Programmable timer for automated operation"]
  },
  {
    _id: "b8c4d0a0-fa2c-11ed-be56-0242ac120002",
    name: "Blender",
    category: "Appliances",
    inStock: true,
    price: 2500,
    image: "https://m.media-amazon.com/images/I/512M3RouQZL.jpg",
    rating: 2.1,
    discription: ["Powerful motor for efficient blending", "Multiple speed settings for versatile blending options", "Durable and high-quality construction", "Sharp and stainless-steel blades for smooth blending", "Large capacity jar for blending larger quantities"]
  },
  {
    _id: "bfba02ae-fa2c-11ed-be56-0242ac120002",
    name: "Washing Machine",
    category: "Appliances",
    inStock: true,
    price: 27000,
    image: "https://hdn-1.jioretailer.com/jioretailer/products/pictures/item/free/original/zbXK6YlPPS-kelvinator-kwt-a700lg-washing-machines-491604436-i-1-1200wx1200h.jpeg",
    rating: 4.6,
    discription: ["Multiple wash programs for different types of fabrics", "Adjustable load capacity to accommodate various laundry sizes", "Efficient water usage for water conservation", "Energy-efficient operation for cost savings", "Built-in detergent dispenser for automatic dispensing", "Variable temperature settings for different wash requirements"]
  },
  {
    _id: "1df64e71-9893-492f-a6a5-1a194e56725d",
    name: "T-Shirt",
    category: "Cloths",
    inStock: true,
    price: 1500,
    image: "https://my-live-02.slatic.net/p/a66645c7da41e393798960fdf74a02ed.jpg",
    rating: 4.2,
    discription: ["Comfortable and breathable fabric for all-day wear", "Stylish and versatile design for various occasions", "Available in different sizes for a perfect fit", "Durable construction for long-lasting use", "Easy to clean and maintain", "Wide range of colors and patterns to choose from"]
  },
  {
    _id: "9ce8c347-c87b-4e8f-8217-9f2b8abe86cc",
    name: "Jeans",
    category: "Cloths",
    inStock: true,
    price: 2500,
    image: "https://m.media-amazon.com/images/I/91Pka1f3yKS._UX679_.jpg",
    rating: 2.4,
    discription: ["High-quality denim fabric for durability", "Classic and timeless design suitable for various styles", "Comfortable fit with different waist and inseam options", "Versatile and easy to pair with different outfits", "Stylish washes and finishes for a desired look", "Functional pockets for storage convenience"]
  },
  {
    _id: "6ceb19d1-7f0c-4465-9392-2bf95bec6e01",
    name: "Dress",
    category: "Cloths",
    inStock: true,
    price: 3500,
    image: "https://assets.ajio.com/medias/sys_master/root/20210403/bsM4/606867797cdb8c1f147522ca/-473Wx593H-461088032-blue-MODEL.jpg",
    rating: 4.3,
    discription: ["Elegant and feminine design for a stylish look", "Comfortable and breathable fabric for all-day wear", "Flattering fit that enhances body shape", "Versatile and suitable for various occasions", "Easy to dress up or down with accessories", "Available in different lengths and silhouettes"]
  },
  {
    _id: "401b42da-7d67-4231-8c74-5da705568c80",
    name: "Shoes",
    category: "Cloths",
    inStock: true,
    price: 5000,
    image: "https://m.media-amazon.com/images/I/71TawoxTk6L._UY500_.jpg",
    rating: 4.7,
    discription: ["High-quality and durable construction", "Comfortable fit with proper arch and heel support", "Stylish design suitable for different outfits", "Good traction for stable and slip-resistant walking", "Breathable materials for improved airflow", "Versatile and suitable for various activities and environments"]
  },
  {
    _id: "8818ed14-e73d-4288-9c36-8082602d84c6",
    name: "Camera",
    category: "Electronics",
    inStock: true,
    price: 28000,
    image: "https://m.media-amazon.com/images/I/914hFeTU2-L._SL1500_.jpg",
    rating: 4.5,
    discription: ["High-resolution image sensor for capturing detailed photos", "Various shooting modes and manual controls for creative flexibility", "Interchangeable lenses for different photography needs", "Fast autofocus system for capturing sharp images", "Built-in image stabilization for reducing camera shake", "Wireless connectivity for easy photo sharing and remote control"]
  },
  {
    _id: "d87cd991-312a-45e8-a256-201d232e05c0",
    name: "Printer",
    category: "Electronics",
    inStock: true,
    price: 5000,
    image: "https://m.media-amazon.com/images/I/61mobtz-vrL._SL1500_.jpg",
    rating: 3.8,
    discription: ["High-resolution printing for sharp and detailed output", "Fast printing speed for efficient document processing", "Wireless connectivity for easy printing from multiple devices", "Duplex (double-sided) printing for paper-saving convenience", "Multiple paper size and type compatibility", "Scanning and copying capabilities for versatile functionality"]
  },
  {
    _id: "e5338105-edb7-4276-a419-815f23b20ea5",
    name: "Office Chair",
    category: "Furniture",
    inStock: true,
    price: 9000,
    image: "https://m.media-amazon.com/images/I/61xYawAgJnL._SX425_.jpg",
    rating: 2.9,
    discription: ["Ergonomic design for proper posture and comfort", "Adjustable seat height and armrests for personalized fit", "Lumbar support for lower back health", "Swivel and tilt mechanism for easy movement and reclining", "Durable and high-quality materials for long-lasting use", "Breathable and cushioned seat for extended sitting sessions"]
  },
  {
    _id: "2f4a56f3-172b-4c34-8eb8-a04716830f1b",
    name: "Bed",
    category: "Furniture",
    inStock: true,
    price: 35000,
    image: "https://m.media-amazon.com/images/I/81mtcjYgDCL._SL1500_.jpg",
    rating: 4.7,
    discription: ["Sturdy and durable construction for long-lasting use", "Comfortable mattress for a restful sleep", "Ample bed size suitable for desired sleeping space", "Stylish design that complements bedroom decor", "Supportive bed frame or base for mattress stability", "Storage options (e.g., under-bed drawers) for maximizing space"]
  },
  {
    _id: "cd0cd292-b3a5-4a89-9d24-bf0b99d688f5",
    name: "Watch",
    category: "Accessories",
    inStock: true,
    price: 8000,
    image: "https://m.media-amazon.com/images/I/91z5KuonXrL._SX522_.jpg",
    rating: 2.0,
    discription: ["Accurate timekeeping with reliable movement mechanism", "Stylish and versatile design suitable for various occasions", "Durable construction and scratch-resistant materials", "Water resistance for everyday wear and occasional water exposure", "Additional functionalities such as date display, chronograph, or smart features", "Comfortable and adjustable strap for a secure fit"]
  },
  {
    _id: "883306a9-fbc9-404b-b2f4-1b7bca361bd7",
    name: "Microwave Oven",
    category: "Appliances",
    inStock: true,
    price: 12000,
    image: "https://www.lg.com/in/images/microwave-ovens/md07536273/gallery/MC2886BHT-Microwave-ovens-Right-Low-Perspective-view-D-12.jpg",
    rating: 3.2,
    discription: ["Multiple power levels for precise cooking control", "Quick and efficient heating for time-saving convenience", "Spacious interior capacity for accommodating different food sizes", "Pre-set cooking programs for easy and hassle-free cooking", "Defrosting function for thawing frozen foods", "Digital display and intuitive controls for easy operation"]
  },
  {
    _id: "4e8cf904-3dfb-47ab-95fb-99986b2ae971",
    name: "Handbag",
    category: "Cloths",
    inStock: true,
    price: 4000,
    image: "https://m.media-amazon.com/images/I/91Xhzn4NGnL._UX500_.jpg",
    rating: 4.5,
    discription: ["Spacious main compartment for storing essentials", "Multiple interior pockets for better organization", "Durable and high-quality material for long-lasting use", "Stylish design that complements various outfits", "Comfortable and adjustable straps for easy carrying", "Secure closure mechanism (e.g., zipper, magnetic snap)"]
  },
  {
    _id: "9c5cd9bc-1e6c-4fff-85d5-ddddff61e583",
    name: "TV Stand",
    category: "Furniture",
    inStock: true,
    price: 8000,
    image: "https://m.media-amazon.com/images/I/818f0tvJT-L._SL1500_.jpg",
    rating: 3.9,
    discription: ["Sturdy and durable construction for supporting the TV", "Appropriate size and weight capacity for the TV", "Ample storage space for media devices, cables, and accessories", "Cable management system for organizing and hiding wires", "Stylish design that complements the room decor", "Easy assembly and installation of the TV and components"]
  },
  {
    _id: "9da0e73a-9606-4ace-97ef-58a4beeabe5b",
    name: "Sunglasses",
    category: "Accessories",
    inStock: true,
    price: 2500,
    image: "https://contents.mediadecathlon.com/p2480432/e5cae723949b40d6c05f9497105c9376/p2480432.jpg",
    rating: 3.1,
    discription: ["UV protection for shielding eyes from harmful sun rays", "High-quality lenses for clear vision and reduced glare", "Stylish and fashionable designs for various tastes", "Durable frames for long-lasting use", "Comfortable fit with adjustable nose pads and temple arms", "Versatile functionality suitable for outdoor activities"]
  },
  {
    _id: "9344005d-4d9c-4581-b231-3ce3f2ae86ba",
    name: "Jacket",
    category: "Cloths",
    inStock: true,
    price: 3500,
    image: "https://www.redwolf.in/image/catalog/sweatshirts/goku-kanji-dragon-ball-z-baseball-jacket-india.jpg",
    rating: 2.3,
    discription: ["Warm and insulated material for cold weather protection", "Water-resistant or waterproof for wet conditions", "Stylish design suitable for various outfits", "Functional pockets for storage and convenience", "Adjustable cuffs and hem for a personalized fit", "Durable construction for long-lasting use"]
  }
];
