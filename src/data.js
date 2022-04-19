
export const products = [
    {id:1, name:'Iphone', description:"products description", price:1400, image:'https://hocotech.com/wp-content/uploads/2019/07/hoco-w21-graceful-charm-wire-control-headphones-overview.jpg'},
    {id:2, name:'Iphone', description:"products description", price:1400, image:'https://hocotech.com/wp-content/uploads/2019/07/hoco-w21-graceful-charm-wire-control-headphones-overview.jpg'},
    {id:3, name:'Iphone', description:"products description", price:1400, image:'https://hocotech.com/wp-content/uploads/2019/07/hoco-w21-graceful-charm-wire-control-headphones-overview.jpg'},
    {id:4, name:'Iphone', description:"products description", price:1400, image:'https://hocotech.com/wp-content/uploads/2019/07/hoco-w21-graceful-charm-wire-control-headphones-overview.jpg'},
    {id:5, name:'Iphone', description:"products description", price:1400, image:'https://hocotech.com/wp-content/uploads/2019/07/hoco-w21-graceful-charm-wire-control-headphones-overview.jpg'},
    {id:6, name:'Iphone', description:"products description", price:1400, image:'https://hocotech.com/wp-content/uploads/2019/07/hoco-w21-graceful-charm-wire-control-headphones-overview.jpg'},
];
export const orders = [
    {
        id:1,
        sellerId: 1,
        status:'Shipped',
        buyerId:1,
        products:[
        products[0], products[1]
        ]
    },
    {
        id:2,
        sellerId: 2,
        status:'Shipped',
        buyerId:2,
        products:[
        products[2], products[3]
        ]
    }
]
export const sellers = [
    {
        id:1,
        name:'Eria Pinyi',
        company: "SoftTech",
        phone:"641-819-4455",
        address:"1000 N 4th ST"
    },
    {
        id:2,
        name:'Eria Pinyi',
        company: "SoftTech",
        phone:"641-819-4455",
        address:"1000 N 4th ST"
    },
    {
        id:3,
        name:'Eria Pinyi',
        company: "SoftTech",
        phone:"641-819-4455",
        address:"1000 N 4th ST"
    },
    {
        id:4,
        name:'Eria Pinyi',
        company: "SoftTech",
        phone:"641-819-4455",
        address:"1000 N 4th ST"
    },
]

export const reviews = [
    {
        id:1,
        buyerId:1,
        productId:1,
        comment:'jashdksakda ksadk sakhd askhd askdh adskhd askhd asdkb'
    },
    {
        id:2,
        buyerId:2,
        productId:2,
        comment:'jashdksakda ksadk sakhd askhd askdh adskhd askhd asdkb'
    },
    {
        id:3,
        buyerId:3,
        productId:3,
        comment:'jashdksakda ksadk sakhd askhd askdh adskhd askhd asdkb'
    },
    {
        id:4,
        buyerId:4,
        productId:4,
        comment:'jashdksakda ksadk sakhd askhd askdh adskhd askhd asdkb'
    },
]