import bag from '../images/bag.jpg'
import sandle from '../images/sandle.jpg'
import watch from '../images/watch.jpg'
import cap from '../images/cap.jpg'
import boot from '../images/boot1.jpg'
import dove from '../images/dove.jpg'
import headphone from '../images/headphone.jpg'
import robot from '../images/robot.jpg'
import wwatch from '../images/wwatch.jpg'
import shirt from '../images/shirt.jpg'
import water_bottle from '../images/water bottle.jpg'
import purse from "../images/purse.jpg"
import boyshirt from "../images/boyshirt.jpg"
import wshirt from "../images/wshirt.jpg"
import blush from "../images/blush.jpg"
import cassrole from "../images/cassrole.jpg"
import cc_cream from "../images/cc_cream.jpg"
import concealer from "../images/concealer.jpg"
import pan from "../images/pan.jpg"
import dining from "../images/dining.jpg"
import foundation from "../images/foundation.jpg"
import gas from "../images/gas.jpg"
import iphone from "../images/iphone.jpg"
import lip_balm from "../images/lip_balm.jpg"
import lip_gloss from "../images/lip_gloss.jpg"
import moisture from "../images/moisture.jpeg"
import oppo from "../images/oppo.png"
import primer from "../images/primer.jpg"
import realme from "../images/realme.jpg"
import samsung from "../images/samsung.jpg"
import octopus from '../images/octopus.jpg'
import rabbit from '../images/rabbit.jpg'
import race_car from '../images/race_car.jpg'
import unicorn from '../images/unicorn.jpg'
import teddy from '../images/teddy.jpg'
import truck from '../images/truck.jpg'
import mini_mouse from '../images/mini_mouse.jpg'
import { nanoid } from '@reduxjs/toolkit'

export const Category = [
    "Fashion",
    "Electronics",
    "Home",
    "Beauty",
    "Toys ",
]

export const mockData = [
    {
        id: nanoid(),
        image: robot,
        name: "Dynamo Vex Robo",
        price: 25000,
        category:"electronics",
    }, {
        id: nanoid(),
        image: watch,
        name: "Trendy Watch",
        price: 7000,
        category:"fashion",
    }, {
        id: nanoid(),
        image: dove,
        name: "Dove Men+Care ",
        price: 399,
        category:"beauty",
    }, {
        id: nanoid(),
        image: headphone,
        name: "boAT Headphones 900",
        price: 3999,
        category:"electronics",
    },{
        id: nanoid(),
        image: shirt,
        name: "Men T-Shirt",
        price: 799,
        category: "fashion",
    }, {
        id: nanoid(),
        image: bag,
        name: "TravelPack Bag",
        price: 1799,
        category:"home",
    }, {
        id: nanoid(),
        image: sandle,
        name: "LiteRide Crocs",
        price: 999,
        category:"fashion",
    },{
        id: nanoid(),
        image: boot,
        name: "Shoes",
        price: 2499,
        category:"fashion",
    }, {
        id: nanoid(),
        image: wwatch,
        name: "Watch for Women",
        price: 1199,
        category:"fashion",
    },{
        id: nanoid(),
        image: cap,
        name: "Cap | Nike",
        price: 399,
        category:"fashion",
    }, {
        id: nanoid(),
        image: water_bottle,
        name: "Water Bottle",
        price: 699,
        category:"home",
    }, {
        id: nanoid(),
        image: purse,
        name: "Hand Pusre",
        price: 1299,
        category:"fashion",
    },{
        id: nanoid(),
        image: pan,
        name: "Frying Pan",
        price: 619,
        category:"home",
    }, {
        id: nanoid(),
        image: cassrole,
        name: "ThermoWare Cassrole",
        price: 899,
        category:"home",
    },{
        id: nanoid(),
        image: boyshirt,
        name: "Jacket for Kids",
        price: 999,
        category: "fashion",
    }, {
        id: nanoid(),
        image: wshirt,
        name: "Women's Top",
        price: 399,
        category: "fashion",
    },  {
        id: nanoid(),
        image: cc_cream,
        name: "Lakme 9 to 5 CC Cream",
        price: 99,
        category:"beauty",
    }, {
        id: nanoid(),
        image: foundation,
        name: "Foundation",
        price: 519,
        category:"beauty",
    }, {
        id: nanoid(),
        image: blush,
        name: "Revlon Blush",
        price: 899,
        category:"beauty",
    }, {
        id: nanoid(),
        image: concealer,
        name: "Maybelline Concealer",
        price: 649,
        category:"beauty",
    },{
        id: nanoid(),
        image: gas,
        name: "Gas Stove",
        price: 2999,
        category:"home",
    },{
        id: nanoid(),
        image: lip_balm,
        name: "Nivea Soft Lip Balm",
        price: 209,
        category:"beauty",
    },{
        id: nanoid(),
        image: lip_gloss,
        name: "SUGAR Lip Gloss",
        price: 521,
        category:"beauty",
    },{
        id: nanoid(),
        image: dining,
        name: "Cello Dinner Set",
        price: 2099,
        category:"home",
    },{
        id: nanoid(),
        image: moisture,
        name: "Nivea Soft Moisturizing Cream",
        price: 275,
        category:"beauty",
    },{
        id: nanoid(),
        image: primer,
        name: "Glam21 Primer",
        price: 319,
    },{
        id: nanoid(),
        image: samsung,
        name: "Samsung S23",
        price: 44999,
        category:"electronics",
    },{
        id: nanoid(),
        image: oppo,
        name: "OPPO A3 5G",
        price: 15999,
        category:"electronics",
    },{
        id: nanoid(),
        image: iphone,
        name: "IPhone 16 Pro",
        price: 119900,
        category:"electronics",
    },{
        id: nanoid(),
        image: realme,
        name: "Realme P1 Pro 5G",
        price: 14999,
        category:"electronics",
    },{
        id: nanoid(),
        image: octopus,
        name: "Reversible Octopus",
        price: 209,
        category:"toys",
    },{
        id: nanoid(),
        image: rabbit,
        name: "Bunny Rabbit",
        price: 399,
        category:"toys",
    },{
        id: nanoid(),
        image: mini_mouse,
        name: "Minnie Mouse Airplane",
        price: 499,
        category:"toys",
    },{
        id: nanoid(),
        image: race_car,
        name: "Racing Car",
        price: 549,
        category:"toys",
    },{
        id: nanoid(),
        image: truck,
        name: "Mini Truck",
        price: 899,
        category:"toys.",
    },{
        id: nanoid(),
        image: unicorn,
        name: "Babyque Unicorn",
        price: 349,
        category:"toys",
    },{
        id: nanoid(),
        image: truck,
        name: "Kids Truck",
        price: 699,
        category:"toys",
    },

   
   
   
    
   
   
   
    
   
   
   
    
   
   

]
