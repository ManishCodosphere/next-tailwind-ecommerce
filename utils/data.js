import bcrypt from 'bcryptjs';

const data = {
    users:[
        {
            name: 'Admin',
            email: 'admin@example.com',
            password: bcrypt.hashSync('123456'),
            isAdmin: true,
        },
        {
            name: 'User',
            email: 'user@example.com',
            password: bcrypt.hashSync('123456'),
            isAdmin: false,
        },
    ],
    products:[
        {
            name:'ColorFit Icon Buzz',
            slug:'colorFit-con-Buzz',
            category:'Smart Watch',
            image:"/images/watch1.webp",
            price:5000,
            brand:'Noise',
            rating: 4.0,
            numReviews:9,
            countInStock:20,
            description:'Popular Smart Watch'
        },{
            name:'Wave Select',
            slug:'wave-select',
            category:'Smart Watch',
            image:"/images/watch2.avif",
            price:7000,
            brand:'Boat',
            rating: 4.5,
            numReviews:9,
            countInStock:30,
            description:'Popular Smart Watch'
        },  {
            name:'Phoenix',
            slug:'phoenix',
            category:'Smart Watch',
            image:"/images/watch3.jpg",
            price:9000,
            brand:'Fire Boltt',
            rating: 4.5,
            numReviews:9,
            countInStock:35,
            description:'Popular Smart Watch'
        },{
            name:'Activity Tracker',
            slug:'activity-tracker',
            category:'Smart Watch',
            image:"/images/watch4.avif",
            price:4000,
            brand:'eOnz Elite',
            rating: 4.0,
            numReviews:9,
            countInStock:20,
            description:'Popular Smart Watch'
        },  {
            name:'Dual Belt Series7',
            slug:'dual-belt-series7',
            category:'Smart Watch',
            image:"/images/watch5.webp",
            price:3000,
            brand:'Firpro',
            rating: 3.5,
            numReviews:9,
            countInStock:10,
            description:'Popular Smart Watch'
        }, {
            name:'S1 pro',
            slug:'s1-pro',
            category:'Smart Watch',
            image:"/images/watch6.webp",
            price:900,
            brand:'sekyo',
            rating: 3.0,
            numReviews:9,
            countInStock:20,
            description:'Popular Smart Watch'
        }
    ]
}
export default data;