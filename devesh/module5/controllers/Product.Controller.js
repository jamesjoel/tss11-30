let routes = require("express").Router();

let product = 
[
    {
      id: 1,
      title: "iPhone 9",
      description: "An apple mobile which is nothing like apple",
      price: 549,
      
      rating: 4.69,
      stock: 94,
      brand: "Apple",
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    },
    {
      id: 2,
      title: "iPhone X",
      description: "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
      price: 899,
      
      rating: 4.44,
      stock: 34,
      brand: "Apple",
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/2/thumbnail.jpg"
    },
    {
      id: 3,
      title: "Samsung Universe 9",
      description: "Samsung's new variant which goes beyond Galaxy to the Universe",
      price: 1249,
      
      rating: 4.09,
      stock: 36,
      brand: "Samsung",
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/3/thumbnail.jpg"
    },
    {
      id: 4,
      title: "OPPOF19",
      description: "OPPO F19 is officially announced on April 2021.",
      price: 280,
      
      rating: 4.3,
      stock: 123,
      brand: "OPPO",
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/4/thumbnail.jpg"
    },
    {
      id: 5,
      title: "Huawei P30",
      description: "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
      price: 499,
      
      rating: 4.09,
      stock: 32,
      brand: "Huawei",
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/5/thumbnail.jpg"
    },
    {
      id: 6,
      title: "MacBook Pro",
      description: "MacBook Pro 2021 with mini-LED display may launch between September, November",
      price: 1749,
      
      rating: 4.57,
      stock: 83,
      brand: "Apple",
      category: "laptops",
      thumbnail: "https://i.dummyjson.com/data/products/6/thumbnail.png"
    },
    {
      id: 7,
      title: "Samsung Galaxy Book",
      description: "Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched",
      price: 1499,
      
      rating: 4.25,
      stock: 50,
      brand: "Samsung",
      category: "laptops",
      thumbnail: "https://i.dummyjson.com/data/products/7/thumbnail.jpg"
    },
    {
      id: 8,
      title: "Microsoft Surface Laptop 4",
      description: "Style and speed. Stand out on HD video calls backed by Studio Mics. Capture ideas on the vibrant touchscreen.",
      price: 1499,
      
      rating: 4.43,
      stock: 68,
      brand: "Microsoft Surface",
      category: "laptops",
      thumbnail: "https://i.dummyjson.com/data/products/8/thumbnail.jpg"
    },
    {
      id: 9,
      title: "Infinix INBOOK",
      description: "Infinix Inbook X1 Ci3 10th 8GB 256GB 14 Win10 Grey – 1 Year Warranty",
      price: 1099,
      
      rating: 4.54,
      stock: 96,
      brand: "Infinix",
      category: "laptops",
      thumbnail: "https://i.dummyjson.com/data/products/9/thumbnail.jpg"
    },
    {
      id: 10,
      title: "HP Pavilion 15-DK1056WM",
      description: "HP Pavilion 15-DK1056WM Gaming Laptop 10th Gen Core i5, 8GB, 256GB SSD, GTX 1650 4GB, Windows 10",
      price: 1099,
      
      rating: 4.43,
      stock: 89,
      brand: "HP Pavilion",
      category: "laptops",
      thumbnail: "https://i.dummyjson.com/data/products/10/thumbnail.jpeg"
    },
    {
      id: 11,
      title: "perfume Oil",
      description: "Mega Discount, Impression of Acqua Di Gio by GiorgioArmani concentrated attar perfume Oil",
      price: 13,
      
      rating: 4.26,
      stock: 65,
      brand: "Impression of Acqua Di Gio",
      category: "fragrances",
      thumbnail: "https://i.dummyjson.com/data/products/11/thumbnail.jpg"
    },
    {
      id: 12,
      title: "Brown Perfume",
      description: "Royal_Mirage Sport Brown Perfume for Men & Women - 120ml",
      price: 40,
      
      rating: 4,
      stock: 52,
      brand: "Royal_Mirage",
      category: "fragrances",
      thumbnail: "https://i.dummyjson.com/data/products/12/thumbnail.jpg"
    },
    {
      id: 13,
      title: "Fog Scent Xpressio Perfume",
      description: "Product details of Best Fog Scent Xpressio Perfume 100ml For Men cool long lasting perfumes for Men",
      price: 13,
      
      rating: 4.59,
      stock: 61,
      brand: "Fog Scent Xpressio",
      category: "fragrances",
      thumbnail: "https://i.dummyjson.com/data/products/13/thumbnail.webp"
    },
    {
      id: 14,
      title: "Non-Alcoholic Concentrated Perfume Oil",
      description: "Original Al Munakh® by Mahal Al Musk | Our Impression of Climate | 6ml Non-Alcoholic Concentrated Perfume Oil",
      price: 120,
      
      rating: 4.21,
      stock: 114,
      brand: "Al Munakh",
      category: "fragrances",
      thumbnail: "https://i.dummyjson.com/data/products/14/thumbnail.jpg"
    },
    {
      id: 15,
      title: "Eau De Perfume Spray",
      description: "Genuine  Al-Rehab spray perfume from UAE/Saudi Arabia/Yemen High Quality",
      price: 30,
      
      rating: 4.7,
      stock: 105,
      brand: "Lord - Al-Rehab",
      category: "fragrances",
      thumbnail: "https://i.dummyjson.com/data/products/15/thumbnail.jpg"
    },
    {
      id: 16,
      title: "Hyaluronic Acid Serum",
      description: "L'OrÃ©al Paris introduces Hyaluron Expert Replumping Serum formulated with 1.5% Hyaluronic Acid",
      price: 19,
      
      rating: 4.83,
      stock: 110,
      brand: "L'Oreal Paris",
      category: "skincare",
      thumbnail: "https://i.dummyjson.com/data/products/16/thumbnail.jpg"
    },
    {
      id: 17,
      title: "Tree Oil 30ml",
      description: "Tea tree oil contains a number of compounds, including terpinen-4-ol, that have been shown to kill certain bacteria,",
      price: 12,
      
      rating: 4.52,
      stock: 78,
      brand: "Hemani Tea",
      category: "skincare",
      thumbnail: "https://i.dummyjson.com/data/products/17/thumbnail.jpg"
    },
    {
      id: 18,
      title: "Oil Free Moisturizer 100ml",
      description: "Dermive Oil Free Moisturizer with SPF 20 is specifically formulated with ceramides, hyaluronic acid & sunscreen.",
      price: 40,
      
      rating: 4.56,
      stock: 88,
      brand: "Dermive",
      category: "skincare",
      thumbnail: "https://i.dummyjson.com/data/products/18/thumbnail.jpg"
    },
    {
      id: 19,
      title: "Skin Beauty Serum.",
      description: "Product name: rorec collagen hyaluronic acid white face serum riceNet weight: 15 m",
      price: 46,
      
      rating: 4.42,
      stock: 54,
      brand: "ROREC White Rice",
      category: "skincare",
      thumbnail: "https://i.dummyjson.com/data/products/19/thumbnail.jpg"
    },
    {
      id: 20,
      title: "Freckle Treatment Cream- 15gm",
      description: "Fair & Clear is Pakistan's only pure Freckle cream which helpsfade Freckles, Darkspots and pigments. Mercury level is 0%, so there are no side effects.",
      price: 70,
      
      rating: 4.06,
      stock: 140,
      brand: "Fair & Clear",
      category: "skincare",
      thumbnail: "https://i.dummyjson.com/data/products/20/thumbnail.jpg"
    }
]
routes.get("/", (req,res) => {
    res.send(product);
});


routes.get("/price/min/:a",(req,res) => {
    let x = req.params.a ;
    let arr = [] ;
    for ( let i = 0 ; i <= 19 ; i++)
    {
        if ( product[i].price < x ) {
            arr.push (product[i]);
        }
    }
    res.send(arr);
});

routes.get("/price/max/:b",(req,res) => {
    let y = req.params.b ;
    let arr = [] ;
    for ( let i = 0 ; i <= 19 ; i++)
    {
        if ( product[i].price > y ) {

            arr.push (product[i]);
        }
    }
    res.send(arr);
});

routes.get("/price/rating/:c",(req,res) => {
    let z = req.params.c ;
    let arr = [] ;
    for ( let i = 0 ; i <= 19 ; i++)
    {
        if ( product[i].rating <= z ) {

            arr.push (product[i]);
        }
    }
    res.send(arr);
});


module.exports = routes;
