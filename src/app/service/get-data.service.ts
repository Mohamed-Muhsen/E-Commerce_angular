import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GetDataService {
  constructor() {}

  // subcategory data .

  subCategorisFilterData = [
    { id: 1, categories: 'appliances', subcategories: 'mobile' },
    { id: 2, categories: 'appliances', subcategories: 'smart tv' },
    { id: 3, categories: 'appliances', subcategories: 'air cooler' },
    { id: 4, categories: 'appliances', subcategories: 'refrigerator' },
    { id: 5, categories: 'appliances', subcategories: 'Microwaves' },
    { id: 6, categories: 'appliances', subcategories: 'Dishwashers' },
    { id: 7, categories: 'appliances', subcategories: 'Ovens' },
    { id: 8, categories: 'appliances', subcategories: 'Blenders' },
    { id: 9, categories: 'appliances', subcategories: 'Toasters' },
    { id: 10, categories: 'fashion', subcategories: 'Men' },
    { id: 11, categories: 'fashion', subcategories: 'Women' },
    { id: 12, categories: 'fashion', subcategories: 'Kids' },
    { id: 13, categories: 'fashion', subcategories: 'Accessories' },
    { id: 14, categories: 'homeandfurniture', subcategories: 'Chairs' },
    { id: 15, categories: 'homeandfurniture', subcategories: 'Tables' },
    { id: 16, categories: 'homeandfurniture', subcategories: 'Sofas' },
    { id: 17, categories: 'homeandfurniture', subcategories: 'Cabinets' },
    { id: 18, categories: 'homeandfurniture', subcategories: 'Desks' },
    { id: 19, categories: 'homeandfurniture', subcategories: 'Beds' },
    { id: 20, categories: 'homeandfurniture', subcategories: 'Shelves' },
    { id: 21, categories: 'toys', subcategories: 'Figures' },
    { id: 22, categories: 'toys', subcategories: 'Building' },
    { id: 23, categories: 'toys', subcategories: 'Educational' },
    { id: 24, categories: 'toys', subcategories: 'Dolls' },
    { id: 25, categories: 'toys', subcategories: 'Vehicles' },
    { id: 26, categories: 'toys', subcategories: 'Puzzles' },
    { id: 27, categories: 'toys', subcategories: 'Outdoor' },
    { id: 28, categories: 'beautyandhealth', subcategories: 'Skincare' },      
    { id: 29, categories: 'beautyandhealth', subcategories: 'Makeup' },      
    { id: 30, categories: 'beautyandhealth', subcategories: 'Haircare' },      
    { id: 31, categories: 'beautyandhealth', subcategories: 'Fragrance' },      
    { id: 32, categories: 'beautyandhealth', subcategories: 'Supplements' },      
    { id: 33, categories: 'beautyandhealth', subcategories: 'Wellness' },      
    { id: 34, categories: 'beautyandhealth', subcategories: 'Fitness' },    
    { id: 35, categories: 'automotive', subcategories: 'Batteries' },  
    { id: 36, categories: 'automotive', subcategories: 'tires' },            
    { id: 37, categories: 'automotive', subcategories: 'Brakes' }, 
    { id: 38, categories: 'automotive', subcategories: 'Engines' },  
    { id: 39, categories: 'automotive', subcategories: 'Exhausts' },  
    { id: 40, categories: 'automotive', subcategories: 'Suspension' },  
    { id: 41, categories: 'automotive', subcategories: 'Filters' }  
  ];



  // category data 
  categoriesData = [
    {
      id: 1,
      name: 'Fashion',
      img: '../../assets/images/categoriesimg/fashon.png',
      code: 'fashion',
    },
    
    {
      id: 2,
      name: 'Appliance',
      img: '../../assets/images/categoriesimg/appliance.png',
      code: 'appliances',
    },
    {
      id: 3,
      name: 'Toys',
      img: '../../assets/images/categoriesimg/toys.png',
      code: 'toys',
    },
    {
      id: 4,
      name: 'Automotive',
      img: '../../assets/images/categoriesimg/auto.png',
      code: 'automotive',
    },
    {
      id: 5,
      name: 'Home & Furniture',
      img: '../../assets/images/categoriesimg/home.png',
      code: 'homeandfurniture',
    },
    {
      id: 6,
      name: 'Beauty & Health',
      img: '../../assets/images/categoriesimg/beauty.png',
      code: 'beautyandhealth',
    },
  ];

  // product details 

  productData = [
    {
      pdId: 8575,
      pdName: "Fresh Turbo Air Cooler, 40 Liter, White - FA-V40M",
      pdDesc: "Stay cool and comfortable with this compact air cooler. Featuring 3 adjustable speeds and lightweight portability, it's perfect for small spaces and on-the-go cooling.",
      pdPrice: 223,
      pdCategory: "appliances",
      pdSubCategory: "air cooler",
      pdImg: "../../assets/images/productimg/air3.jpg"
    },
    {
      pdId: 8565,
      pdName: "Apple iPhone 15 Pro Max, 256 GB, 5G - Blue Titanium",
      pdDesc: "Experience the iPhone 15 – your dynamic companion. Dynamic Island ensures you stay connected, bubbling up alerts seamlessly while you're busy.",
      pdPrice: 1199,
      pdCategory: "appliances",
      pdSubCategory: "mobile",
      pdImg: "../../assets/images/productimg/mob1.png"
    },
    {
      pdId: 8566,
      pdName: "Samsung Galaxy S21 Ultra, 256 GB, 5G - Phantom Blue",
      pdDesc: "The Samsung Galaxy S21 Ultra offers an immersive 6.8-inch Dynamic AMOLED display and a powerful quad-camera setup for stunning photography. Its 5G capability ensures fast connectivity.",
      pdPrice: 1099,
      pdCategory: "appliances",
      pdSubCategory: "mobile",
      pdImg: "../../assets/images/productimg/mob2.png"
    },
    {
      pdId: 8567,
      pdName: "Oppo Reno 12 pro , 128GB , 5G , 67wat - light Mint Green",
      pdDesc: "The Oppo Reno 12 combines elegance with performance, featuring a sleek design and a 6.4-inch AMOLED display. It offers a versatile camera system for capturing your moments in style.",
      pdPrice: 599,
      pdCategory: "appliances",
      pdSubCategory: "mobile",
      pdImg: "../../assets/images/productimg/mob3.png"
    },
   
    {
      pdId: 8568,
      pdName: "Realme 8 Pro, 128 GB, 5G - Dark Blue",
      pdDesc: "The Realme 8 Pro boasts a remarkable 108 MP camera, perfect for photography enthusiasts. With a 6.4-inch Super AMOLED display, it delivers vibrant visuals and fast 5G connectivity for seamless performance.",
      pdPrice: 399,
      pdCategory: "appliances",
      pdSubCategory: "mobile",
      pdImg: "../../assets/images/productimg/mob4.png"
    },

    {
      pdId: 8567,
      pdName: "Oppo Reno 12 pro , 128GB , 5G , 67wat - light Mint Green",
      pdDesc: "The Oppo Reno 12 combines elegance with performance, featuring a sleek design and a 6.4-inch AMOLED display. It offers a versatile camera system for capturing your moments in style.",
      pdPrice: 599,
      pdCategory: "appliances",
      pdSubCategory: "mobile",
      pdImg: "../../assets/images/productimg/mob3.png"
    },
    // --------tv
    {
      pdId: 8569,
      pdName: "Samsung 40 Inch Full HD Smart LED TV with Built-in Receiver - Black",
      pdDesc: "Experience stunning 4K visuals with this Smart TV. Equipped with built-in streaming apps, voice control, and a sleek design, it's perfect for modern home entertainment.",
      pdPrice: 329,
      pdCategory: "appliances",
      pdSubCategory: "smart tv",
      pdImg: "../../assets/images/productimg/tv1.jpg"
    },
    

    {
      pdId: 8570,
      pdName: "LG LED Smart TV 32 inch LM637B Series HD HDR Smart LED TV ",
      pdDesc: "Experience stunning 4K visuals with this Smart TV. Equipped with built-in streaming apps, voice control, and a sleek design, it's perfect for modern home entertainment.",
      pdPrice: 299,
      pdCategory: "appliances",
      pdSubCategory: "smart tv",
      pdImg: "../../assets/images/productimg/tv2.jpg"
    },

    {
      pdId: 8571,
      pdName: "Sony 80 cm (32 inches) HD Ready Smart google TV",
      pdDesc: "Experience stunning 4K visuals with this Smart TV. Equipped with built-in streaming apps, voice control, and a sleek design, it's perfect for modern home entertainment.",
      pdPrice: 250,
      pdCategory: "appliances",
      pdSubCategory: "smart tv",
      pdImg: "../../assets/images/productimg/tv3.jpg"
    },

    {
      pdId: 8572,
      pdName: "TV LG 50 UHD Magic Remote-Commercial TV-50UR801| 2B ",
      pdDesc: "Experience stunning 4K visuals with this Smart TV. Equipped with built-in streaming apps, voice control, and a sleek design, it's perfect for modern home entertainment.",
      pdPrice: 499,
      pdCategory: "appliances",
      pdSubCategory: "smart tv",
      pdImg: "../../assets/images/productimg/tv4.jpg"
    },

    // --------aircooler
    {
      pdId: 8573,
      pdName: "Clarion Lg-15 Longer Air Cooler - 90 Litres, Cream",
      pdDesc: "Stay cool and comfortable with this compact air cooler. Featuring 3 adjustable speeds and lightweight portability, it's perfect for small spaces and on-the-go cooling.",
      pdPrice: 119,
      pdCategory: "appliances",
      pdSubCategory: "air cooler",
      pdImg: "../../assets/images/productimg/air1.jpg"
    },
    {
      pdId: 8574,
      pdName: " Casa Copenhagen 5L 165W Metal Blue Tower Air Cooler",
      pdDesc: "Stay cool and comfortable with this compact air cooler. Featuring 3 adjustable speeds and lightweight portability, it's perfect for small spaces and on-the-go cooling.",
      pdPrice: 149,
      pdCategory: "appliances",
      pdSubCategory: "air cooler",
      pdImg: "../../assets/images/productimg/air2.jpg"
    },
    {
      pdId: 8575,
      pdName: "Fresh Turbo Air Cooler, 40 Liter, White - FA-V40M",
      pdDesc: "Stay cool and comfortable with this compact air cooler. Featuring 3 adjustable speeds and lightweight portability, it's perfect for small spaces and on-the-go cooling.",
      pdPrice: 223,
      pdCategory: "appliances",
      pdSubCategory: "air cooler",
      pdImg: "../../assets/images/productimg/air3.jpg"
    },
    //-----------refrigerator
    {
      pdId: 8576,
      pdName: "LG 635L Side by Side Refrigerator - GL-L257CPZX",
      pdDesc: "Keep your food fresh with this spacious, energy-efficient refrigerator. Features include frost-free technology, adjustable shelves, and a sleek, modern design.",
      pdPrice: 799,
      pdCategory: "appliances",
      pdSubCategory: "refrigerator",
      pdImg: "../../assets/images/productimg/ref1.jpg"
    },
    {
      pdId: 8577,
      pdName: "LG REFRIGERATOR 14 Feet HYGEINE FRESH NO FROST BLACK ",
      pdDesc: "Keep your food fresh with this spacious, energy-efficient refrigerator. Features include frost-free technology, adjustable shelves, and a sleek, modern design.",
      pdPrice: 849,
      pdCategory: "appliances",
      pdSubCategory: "refrigerator",
      pdImg: "../../assets/images/productimg/ref2.jpg"
    },
    {
      pdId: 8578,
      pdName: "Black Stainless Steel 29. cu. ft. 4-Door Flex Family Hub Fridge",
      pdDesc: "Keep your food fresh with this spacious, energy-efficient refrigerator. Features include frost-free technology, adjustable shelves, and a sleek, modern design.",
      pdPrice: 1099,
      pdCategory: "appliances",
      pdSubCategory: "refrigerator",
      pdImg: "../../assets/images/productimg/ref3.jpg"
    },

    {
      pdId: 8636,
      pdName: "Microwave - Samsung",
      pdDesc: " A sleek, countertop microwave with sensor cooking and multiple power levels for perfect heating and cooking.",
      pdPrice: 250,
      pdCategory: "appliances",
      pdSubCategory: "Microwaves",
      pdImg: "../../assets/images/productimg/micro.jpg"
    },

    {
      pdId: 8637,
      pdName: "Dishwasher - Bosch",
      pdDesc: "A quiet, energy-efficient dishwasher with multiple wash cycles and a spacious interior, perfect for family meals.",
      pdPrice: 899,
      pdCategory: "appliances",
      pdSubCategory: "Dishwashers",
      pdImg: "../../assets/images/productimg/dish.jpg"
    },

    {
      pdId: 8638,
      pdName: "Oven - KitchenAid",
      pdDesc: "Description: A versatile oven with convection technology, offering consistent baking results and a stylish design.",
      pdPrice: 1200,
      pdCategory: "appliances",
      pdSubCategory: "Ovens",
      pdImg: "../../assets/images/productimg/oven.jpg"
    },

    {
      pdId: 8639,
      pdName: "Blender",
      pdDesc: "A high-performance blender designed for smoothies and soups, featuring a powerful motor and durable blades.",
      pdPrice: 400,
      pdCategory: "appliances",
      pdSubCategory: "Blenders",
      pdImg: "../../assets/images/productimg/blend.jpg"
    },

    {
      pdId: 8640,
      pdName: "Toaster",
      pdDesc: "A premium toaster with customizable settings and extra-wide slots, ensuring even toasting for various bread types.",
      pdPrice: 150,
      pdCategory: "appliances",
      pdSubCategory: "Toasters",
      pdImg: "../../assets/images/productimg/toast.jpg"
    },

    
    // --------fashion

    {
      pdId: 8579,
      pdName: "T-shirt - Casual, Comfortable, Everyday Wear",
      pdDesc: "This sleek, formal shirt is a wardrobe staple, offering versatility for both work and special occasions. Crisp fabric with a tailored fit.",
      pdPrice: 25,
      pdCategory: "fashion",
      pdSubCategory: "Men",
      pdImg: "../../assets/images/productimg/co3.jpg",
      pdSize: ["S", "M", "L", "XL"]
    },
    
    {
      pdId: 8580,
      pdName: "Sweater - Soft, Warm, Timeless",
      pdDesc: "A timeless sweater that combines warmth and softness. Perfect for colder weather, with a classic design that never goes out of style.",
      pdPrice: 54,
      pdCategory: "fashion",
      pdSubCategory: "Men",
      pdImg: "../../assets/images/productimg/c1.jpg",
      pdSize: ["S", "M", "L", "XL"]
    },
    
    {
      pdId: 8581,
      pdName: "Shirt - Classic, Comfortable, and Versatile",
      pdDesc: "A timeless wardrobe staple, this shirt offers a perfect balance of comfort and style, ideal for both casual and formal occasions.",
      pdPrice: 40,
      pdCategory: "fashion",
      pdSubCategory: "Men",
      pdImg: "../../assets/images/productimg/c4.jpg",
      pdSize: ["S", "M", "L", "XL"]
    },
    
    {
      pdId: 8582,
      pdName: "Pullover - Cozy, Warm, Stylish",
      pdDesc: "Stay warm and stylish with this cozy pullover. Ideal for layering or wearing on its own, it's perfect for chilly days.",
      pdPrice: 40,
      pdCategory: "fashion",
      pdSubCategory: "Men",
      pdImg: "../../assets/images/productimg/c5.jpg",
      pdSize: ["S", "M", "L", "XL"]
    },
    
    {
      pdId: 8583,
      pdName: "Sweater Vest - Stylish, Lightweight, Versatile",
      pdDesc: "This sleeveless sweater adds a touch of style and versatility to your wardrobe. Perfect for layering over shirts or wearing on its own in mild weather.",
      pdPrice: 59,
      pdCategory: "fashion",
      pdSubCategory: "Men",
      pdImg: "../../assets/images/productimg/c6.jpg",
      pdSize: ["S", "M", "L", "XL"]
    },

    {
      pdId: 8584,
      pdName: "Pullover - Cozy, Warm, Stylish",
      pdDesc: "Stay warm and stylish with this cozy pullover. Ideal for layering or wearing on its own, it's perfect for chilly days.",
      pdPrice: 45,
      pdCategory: "fashion",
      pdSubCategory: "Men",
      pdImg: "../../assets/images/productimg/c7.jpg",
      pdSize: ["S", "M", "L", "XL"]
    },

    {
      pdId: 8585,
      pdName: "Sweater Vest - Stylish, Lightweight, Versatile",
      pdDesc: "This sleeveless sweater adds a touch of style and versatility to your wardrobe. Perfect for layering over shirts or wearing on its own in mild weather.",
      pdPrice: 49,
      pdCategory: "fashion",
      pdSubCategory: "Men",
      pdImg: "../../assets/images/productimg/c8.jpg",
      pdSize: ["S", "M", "L", "XL"]
    },

    {
      pdId: 8586,
      pdName: "Sweater - Soft, Warm, Timeless",
      pdDesc: "A timeless sweater that combines warmth and softness. Perfect for colder weather, with a classic design that never goes out of style.",
      pdPrice: 54,
      pdCategory: "fashion",
      pdSubCategory: "Men",
      pdImg: "../../assets/images/productimg/co1.jpg",
      pdSize: ["S", "M", "L", "XL"]
    },

    {
      pdId: 8587,
      pdName: "Pullover - Cozy, Warm, Stylish",
      pdDesc: "Stay warm and stylish with this cozy pullover. Ideal for layering or wearing on its own, it's perfect for chilly days.",
      pdPrice: 39,
      pdCategory: "fashion",
      pdSubCategory: "Men",
      pdImg: "../../assets/images/productimg/co2.jpg",
      pdSize: ["S", "M", "L", "XL"]
    },

    {
      pdId: 8588,
      pdName: "Shirt - Classic, Comfortable, and Versatile",
      pdDesc: "A timeless wardrobe staple, this shirt offers a perfect balance of comfort and style, ideal for both casual and formal occasions.",
      pdPrice: 40,
      pdCategory: "fashion",
      pdSubCategory: "Men",
      pdImg: "../../assets/images/productimg/co4.jpg",
      pdSize: ["S", "M", "L", "XL"]
    },

    {
      pdId: 8589,
      pdName: "Sweater Vest - Stylish, Lightweight, Versatile",
      pdDesc: "This sleeveless sweater adds a touch of style and versatility to your wardrobe. Perfect for layering over shirts or wearing on its own in mild weather.",
      pdPrice: 50,
      pdCategory: "fashion",
      pdSubCategory: "Men",
      pdImg: "../../assets/images/productimg/co6.jpg",
      pdSize: ["S", "M", "L", "XL"]

    },
    {
      pdId: 8590,
      pdName: "Pullover - Cozy, Warm, Stylish",
      pdDesc: "Stay warm and stylish with this cozy pullover. Ideal for layering or wearing on its own, it's perfect for chilly days.",
      pdPrice: 42,
      pdCategory: "fashion",
      pdSubCategory: "Men",
      pdImg: "../../assets/images/productimg/co5.jpg",
      pdSize: ["S", "M", "L", "XL"]
    },
    {
      pdId: 8591,
      pdName: "Pullover - Cozy, Warm, Stylish",
      pdDesc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque placeat asperiores sint molestiae expedita facilis, illum voluptas optio amet cumque veniam itaque commodi vel incidunt sed deserunt, ea unde laudantium.",
      pdPrice: 39,
      pdCategory: "fashion",
      pdSubCategory: "Men",
      pdImg: "../../assets/images/productimg/co7.jpg",
      pdSize: ["S", "M", "L", "XL"]
    },
    {
      pdId: 8592,
      pdName: "Sweater Vest - Stylish, Lightweight, Versatile",
      pdDesc: "This sleeveless sweater adds a touch of style and versatility to your wardrobe. Perfect for layering over shirts or wearing on its own in mild weather.",
      pdPrice: 49,
      pdCategory: "fashion",
      pdSubCategory: "Men",
      pdImg: "../../assets/images/productimg/co8.jpg",
      pdSize: ["S", "M", "L", "XL"]
    },

//----------women
{
  pdId: 8593,
  pdName: "Sweater Vest - Stylish, Lightweight, Versatile",
  pdDesc: "This sleeveless sweater adds a touch of style and versatility to your wardrobe. Perfect for layering over shirts or wearing on its own in mild weather.",
  pdPrice: 49,
  pdCategory: "fashion",
  pdSubCategory: "Women",
  pdImg: "../../assets/images/productimg/wom1.jpg",
  pdSize: ["S", "M", "L", "XL"]
},
{
  pdId: 8594,
  pdName: "Sweater Vest - Stylish, Lightweight, Versatile",
  pdDesc: "This sleeveless sweater adds a touch of style and versatility to your wardrobe. Perfect for layering over shirts or wearing on its own in mild weather.",
  pdPrice: 49,
  pdCategory: "fashion",
  pdSubCategory: "Women",
  pdImg: "../../assets/images/productimg/wom2.jpg",
  pdSize: ["S", "M", "L", "XL"]
},
{
  pdId: 8595,
  pdName: "Sweater Vest - Stylish, Lightweight, Versatile",
  pdDesc: "This sleeveless sweater adds a touch of style and versatility to your wardrobe. Perfect for layering over shirts or wearing on its own in mild weather.",
  pdPrice: 49,
  pdCategory: "fashion",
  pdSubCategory: "Women",
  pdImg: "../../assets/images/productimg/wom3.jpg",
  pdSize: ["S", "M", "L", "XL"]
},
{
  pdId: 8596,
  pdName: "Sweater Vest - Stylish, Lightweight, Versatile",
  pdDesc: "This sleeveless sweater adds a touch of style and versatility to your wardrobe. Perfect for layering over shirts or wearing on its own in mild weather.",
  pdPrice: 49,
  pdCategory: "fashion",
  pdSubCategory: "Women",
  pdImg: "../../assets/images/productimg/wom4.jpg",
  pdSize: ["S", "M", "L", "XL"]
},
{
  pdId: 8597,
  pdName: "Sweater Vest - Stylish, Lightweight, Versatile",
  pdDesc: "This sleeveless sweater adds a touch of style and versatility to your wardrobe. Perfect for layering over shirts or wearing on its own in mild weather.",
  pdPrice: 49,
  pdCategory: "fashion",
  pdSubCategory: "Women",
  pdImg: "../../assets/images/productimg/wom6.jpg",
  pdSize: ["S", "M", "L", "XL"]
},
{
  pdId: 8598,
  pdName: "Sweater Vest - Stylish, Lightweight, Versatile",
  pdDesc: "This sleeveless sweater adds a touch of style and versatility to your wardrobe. Perfect for layering over shirts or wearing on its own in mild weather.",
  pdPrice: 49,
  pdCategory: "fashion",
  pdSubCategory: "Women",
  pdImg: "../../assets/images/productimg/wom5.jpg",
  pdSize: ["S", "M", "L", "XL"]
},
{
  pdId: 8599,
  pdName: "Sweater Vest - Stylish, Lightweight, Versatile",
  pdDesc: "This sleeveless sweater adds a touch of style and versatility to your wardrobe. Perfect for layering over shirts or wearing on its own in mild weather.",
  pdPrice: 49,
  pdCategory: "fashion",
  pdSubCategory: "Women",
  pdImg: "../../assets/images/productimg/wom9.jpg",
  pdSize: ["S", "M", "L", "XL"]
},

//----------kids
{
  pdId: 8600,
  pdName: "Kids Clothing Set ",
  pdDesc: "This outfit adds a touch of style and versatility to your kids",
  pdPrice: 19,
  pdCategory: "fashion",
  pdSubCategory: "Kids",
  pdImg: "../../assets/images/productimg/kid1.jpg",
  pdSize: ["S", "M", "L", "XL"]
},
{
  pdId: 8601,
  pdName: "Kids Clothing Set ",
  pdDesc: "This outfit adds a touch of style and versatility to your kids",
  pdPrice: 59,
  pdCategory: "fashion",
  pdSubCategory: "Kids",
  pdImg: "../../assets/images/productimg/kid2.jpg",
  pdSize: ["S", "M", "L", "XL"]
},
{
  pdId: 8602,
  pdName: "Kids Clothing Set ",
  pdDesc: "This outfit adds a touch of style and versatility to your kids",
  pdPrice: 29,
  pdCategory: "fashion",
  pdSubCategory: "Kids",
  pdImg: "../../assets/images/productimg/kid10.jpg",
  pdSize: ["S", "M", "L", "XL"]
},
{
  pdId: 8603,
  pdName: "Kids Clothing Set ",
  pdDesc: "This outfit adds a touch of style and versatility to your kids",
  pdPrice: 39,
  pdCategory: "fashion",
  pdSubCategory: "Kids",
  pdImg: "../../assets/images/productimg/kid4.jpg",
  pdSize: ["S", "M", "L", "XL"]
},
{
  pdId: 8604,
  pdName: "Kids Clothing Set ",
  pdDesc: "This outfit adds a touch of style and versatility to your kids",
  pdPrice: 89,
  pdCategory: "fashion",
  pdSubCategory: "Kids",
  pdImg: "../../assets/images/productimg/kid5.jpg",
  pdSize: ["S", "M", "L", "XL"]
},
{
  pdId: 8605,
  pdName: "Kids Clothing Set ",
  pdDesc: "This outfit adds a touch of style and versatility to your kids",
  pdPrice: 36,
  pdCategory: "fashion",
  pdSubCategory: "Kids",
  pdImg: "../../assets/images/productimg/kid6.jpg",
  pdSize: ["S", "M", "L", "XL"]
},
{
  pdId: 8606,
  pdName: "Kids Clothing Set ",
  pdDesc: "This outfit adds a touch of style and versatility to your kids",
  pdPrice: 25,
  pdCategory: "fashion",
  pdSubCategory: "Kids",
  pdImg: "../../assets/images/productimg/kid7.jpg",
  pdSize: ["S", "M", "L", "XL"]
},
{
  pdId: 8607,
  pdName: "Kids Clothing Set ",
  pdDesc: "This outfit adds a touch of style and versatility to your kids",
  pdPrice: 30,
  pdCategory: "fashion",
  pdSubCategory: "Kids",
  pdImg: "../../assets/images/productimg/kid8.jpg",
  pdSize: ["S", "M", "L", "XL"]
},
{
  pdId: 8608,
  pdName: "Kids Clothing Set ",
  pdDesc: "This outfit adds a touch of style and versatility to your kids",
  pdPrice: 50,
  pdCategory: "fashion",
  pdSubCategory: "Kids",
  pdImg: "../../assets/images/productimg/kid9.jpg",
  pdSize: ["S", "M", "L", "XL"]
},

//----------accessories

{
  pdId: 8608,
  pdName: "fluffy women accessories",
  pdDesc: "A collection of earrings in different colors and shapes , fluffy women accessories",
  pdPrice: 39,
  pdCategory: "fashion",
  pdSubCategory: "Accessories",
  pdImg: "../../assets/images/productimg/acc1.jpg",
},

{
  pdId: 8608,
  pdName: "Perfume Case",
  pdDesc: "12ml Metal Bottle Glass Tank Perfume Case Aluminum Nozzle Spray Refillable Bottle Parfum Cosmetic Glass Container Accessories",
  pdPrice: 49,
  pdCategory: "fashion",
  pdSubCategory: "Accessories",
  pdImg: "../../assets/images/productimg/acc2.jpg",
},

{
  pdId: 8608,
  pdName: "Fashion Crystal Eyewear ",
  pdDesc: "Fashion Crystal Eyewear Accessories Anti-lost Glasses Chains Sunglasses Lanyards Glasses Cord Holder",
  pdPrice: 99,
  pdCategory: "fashion",
  pdSubCategory: "Accessories",
  pdImg: "../../assets/images/productimg/acc3.jpg",
},

//------------toys
{
  pdId: 8612,
  pdName: "Fashion Style Doll",
  pdDesc: "This stylish doll comes with a variety of outfits and accessories, providing endless fun for fashion-loving kids.",
  pdPrice: 29.99,
  pdCategory: "toys",
  pdSubCategory: "Dolls",
  pdImg: "../../assets/images/productimg/toy4.jpg",
},
{
  pdId: 8609,
  pdName: "Action Hero Figures",
  pdDesc: " Bring your favorite heroes to life with these highly detailed action figures. Perfect for both kids and collectors.",
  pdPrice: 24.99,
  pdCategory: "toys",
  pdSubCategory: "Figures",
  pdImg: "../../assets/images/productimg/toy1.jpg",
},
{
  pdId: 8610,
  pdName: "Creative Block Set",
  pdDesc: " Ignite your imagination with a versatile building block set. Create endless structures and designs while improving spatial skills.",
  pdPrice: 39.99,
  pdCategory: "toys",
  pdSubCategory: "Building",
  pdImg: "../../assets/images/productimg/toy2.jpg",
},
{
  pdId: 8611,
  pdName: "Interactive Learning Tablet",
  pdDesc: "Make learning fun with this interactive educational tablet. It features games and activities designed to teach math, language, and science.",
  pdPrice: 49.99,
  pdCategory: "Toys",
  pdSubCategory: "Educational",
  pdImg: "../../assets/images/productimg/toy3.jpg",
},

{
  pdId: 8613,
  pdName: "Remote Control Car",
  pdDesc: "Speed across any surface with this high-performance remote control car, perfect for racing enthusiasts of all ages",
  pdPrice: 34.99,
  pdCategory: "toys",
  pdSubCategory: "Vehicles",
  pdImg: "../../assets/images/productimg/toy5.jpg",
},
{
  pdId: 8614,
  pdName: "1000-Piece World Map Puzzle",
  pdDesc: "Challenge your mind with this detailed 1000-piece world map puzzle, perfect for puzzle lovers and geography enthusiasts.",
  pdPrice: 19.99,
  pdCategory: "toys",
  pdSubCategory: "Puzzles",
  pdImg: "../../assets/images/productimg/toy6.jpg",
},
{
  pdId: 8615,
  pdName: "Giant Inflatable Pool",
  pdDesc: "Enjoy hours of fun in the sun with this giant inflatable pool, perfect for backyard adventures and family gatherings.",
  pdPrice: 89.99,
  pdCategory: "toys",
  pdSubCategory: "Outdoor",
  pdImg: "../../assets/images/productimg/toy7.jpg",
},

//------automotive
{
  pdId: 8616,
  pdName: "027 Powerline Car Battery 12V",
  pdDesc: "Reliable and long-lasting car battery that delivers high cranking power for easy starting in all weather conditions.",
  pdPrice: 150,
  pdCategory: "automotive",
  pdSubCategory: "Batteries",
  pdImg: "../../assets/images/productimg/auto1.jpg",
},

{
  pdId: 8617,
  pdName: "All-Season Performance Tires",
  pdDesc: " Durable all-season tires designed for optimal grip and handling in various road conditions. Perfect for year-round performance.",
  pdPrice: 120,
  pdCategory: "automotive",
  pdSubCategory: "tires",
  pdImg: "../../assets/images/productimg/auto2.jpg",
},

{
  pdId: 8618,
  pdName: "Ceramic Brake Pads",
  pdDesc: "High-performance ceramic brake pads that provide superior stopping power, reduced noise, and longer lifespan.",
  pdPrice: 80,
  pdCategory: "automotive",
  pdSubCategory: "Brakes",
  pdImg: "../../assets/images/productimg/auto3.jpg",
},

{
  pdId: 8619,
  pdName: "V6 Turbo Engine",
  pdDesc: " A powerful V6 turbo engine that enhances acceleration, performance, and fuel efficiency for your vehicle.",
  pdPrice: 3500,
  pdCategory: "automotive",
  pdSubCategory: "Engines",
  pdImg: "../../assets/images/productimg/auto4.jpg",
},

{
  pdId: 8620,
  pdName: "Stainless Steel Performance Exhaust",
  pdDesc: " High-flow stainless steel exhaust system designed to boost your vehicle's horsepower and improve engine sound.",
  pdPrice: 600,
  pdCategory: "automotive",
  pdSubCategory: "Exhausts",
  pdImg: "../../assets/images/productimg/auto5.jpg",
},

{
  pdId: 8621,
  pdName: "Adjustable Coilover Suspension Kit",
  pdDesc: " Upgrade your ride with an adjustable coilover suspension kit for improved handling, ride height control, and comfort.",
  pdPrice: 700,
  pdCategory: "automotive",
  pdSubCategory: "Suspension",
  pdImg: "../../assets/images/productimg/auto6.jpg",
},

{
  pdId: 8622,
  pdName: "High-Performance Air Filter",
  pdDesc: "High-efficiency air filter that improves airflow and engine performance while protecting against dust and debris.",
  pdPrice: 25,
  pdCategory: "automotive",
  pdSubCategory: "Filters",
  pdImg: "../../assets/images/productimg/auto7.jpg",
},

//-----------home
{
  pdId: 8622,
  pdName: "Chair",
  pdDesc: "A comfortable and ergonomic chair perfect for your home or office, available in various styles.",
  pdPrice: 120 ,
  pdCategory: "homeandfurniture",
  pdSubCategory: "Chairs",
  pdImg: "../../assets/images/productimg/home1.jpg",
},

{
  pdId: 8623,
  pdName: "Table",
  pdDesc: "A stylish and durable dining table designed for modern spaces, crafted from high-quality wood.",
  pdPrice: 250,
  pdCategory: "homeandfurniture",
  pdSubCategory: "Tables",
  pdImg: "../../assets/images/productimg/home2.jpg",
},

{
  pdId: 8624,
  pdName: "Sofa",
  pdDesc: "A luxurious, plush sofa with spacious seating for the ultimate relaxation experience. Available in multiple colors and fabrics.",
  pdPrice: 850,
  pdCategory: "homeandfurniture",
  pdSubCategory: "Sofas",
  pdImg: "../../assets/images/productimg/home3.jpg",
},

{
  pdId: 8625,
  pdName: "Cabinet",
  pdDesc: "A sleek storage cabinet with adjustable shelves, perfect for organizing your home essentials.",
  pdPrice: 180,
  pdCategory: "homeandfurniture",
  pdSubCategory: "Cabinets",
  pdImg: "../../assets/images/productimg/home4.jpg",
},

{
  pdId: 8626,
  pdName: "Desk",
  pdDesc: "A versatile and sturdy desk designed for both work and study, featuring ample workspace and storage compartments.",
  pdPrice: 200,
  pdCategory: "homeandfurniture",
  pdSubCategory: "Desks",
  pdImg: "../../assets/images/productimg/home5.jpg",
},

{
  pdId: 8627,
  pdName: "Bed",
  pdDesc: "A comfortable bed frame with an elegant headboard, built for a restful night's sleep. Available in queen and king sizes.",
  pdPrice: 600,
  pdCategory: "homeandfurniture",
  pdSubCategory: "Beds",
  pdImg: "../../assets/images/productimg/home6.jpg",
},

{
  pdId: 8628,
  pdName: "Shelf",
  pdDesc: "A minimalist wall-mounted shelf, ideal for displaying books, décor, or storage. Available in different sizes and finishes.",
  pdPrice: 90,
  pdCategory: "homeandfurniture",
  pdSubCategory: "Shelves",
  pdImg: "../../assets/images/productimg/home7.jpg",
},

//-------beauty
{
  pdId: 8629,
  pdName: "Skincare",
  pdDesc: "High-quality skincare products designed to nourish and hydrate your skin, including moisturizers, cleansers, and serums.",
  pdPrice: 80,
  pdCategory: "beautyandhealth",
  pdSubCategory: "Skincare",
  pdImg: "../../assets/images/productimg/beauty1.jpg",
},

{
  pdId: 8630,
  pdName: "Makeup",
  pdDesc: "A range of professional makeup products, from foundations and lipsticks to eyeshadows, perfect for creating any look.",
  pdPrice: 50,
  pdCategory: "beautyandhealth",
  pdSubCategory: "Makeup",
  pdImg: "../../assets/images/productimg/beauty2.jpg",
},

{
  pdId: 8631,
  pdName: "Haircare",
  pdDesc: "Specialized haircare products for every hair type, including shampoos, conditioners, and styling tools to keep your hair healthy and shiny.",
  pdPrice: 60,
  pdCategory: "beautyandhealth",
  pdSubCategory: "Haircare",
  pdImg: "../../assets/images/productimg/beauty3.jpg",
},

{
  pdId: 8632,
  pdName: "Fragrance",
  pdDesc: "A collection of luxurious perfumes and colognes, offering captivating scents for every occasion.",
  pdPrice: 100,
  pdCategory: "beautyandhealth",
  pdSubCategory: "Fragrance",
  pdImg: "../../assets/images/productimg/beauty4.jpg",
},

{
  pdId: 8633,
  pdName: "Supplements",
  pdDesc: "Nutritional supplements designed to support overall health and wellness, including vitamins, minerals, and herbal extracts.",
  pdPrice: 55,
  pdCategory: "beautyandhealth",
  pdSubCategory: "Supplements",
  pdImg: "../../assets/images/productimg/beauty5.jpg",
},

{
  pdId: 8634,
  pdName: "Wellness",
  pdDesc: "Products aimed at improving your mental and physical well-being, from relaxation tools to stress relief items.",
  pdPrice: 80,
  pdCategory: "beautyandhealth",
  pdSubCategory: "Wellness",
  pdImg: "../../assets/images/productimg/beauty6.jpg",
},

{
  pdId: 8635,
  pdName: "Fitness",
  pdDesc: "Essential fitness gear and accessories, including workout equipment, apparel, and supplements to help you stay in shape.",
  pdPrice: 150,
  pdCategory: "beautyandhealth",
  pdSubCategory: "Fitness",
  pdImg: "../../assets/images/productimg/beauty7.jpg",
},



  ];


}
