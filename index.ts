const propertyContainer = document.querySelector('.properties')
const footer = document.querySelector(.'footer')

import { displayReviewTotal, populateUser } from './utils'
let isOpen: boolean

// Reviews
const reviews: {
    name: string;
    stars: number;
    loyaltyUser: boolean;
    date: string;
}[] = [
    {
        name: 'Sheia',
        stars: 5,
        loyaltyUser: true,
        date: '01-04-2021'
    },
    {
        name: 'Andrzej',
        stars: 3,
        loyaltyUser: false,
        date: '28-03-2021'
    },
    {
        name: 'Omar',
        stars: 4,
        loyaltyUser: true,
        date: '27-03-2021'
    }
]


// user
// const you: {
//     userName: {firstName : string, lastName : string};
//     isReturning: boolean;
//     age: number;
//     stayedAt: string[];
// } = {
//     userName: {firstName: 'Mike', lastName: 'Brown'},
//     isReturning: true,
//     age: 50,
//     stayedAt: ['florida-home', 'oman-flat', 'tokyo-bungalow']
// }

const ADMIN = 'admin'
const READ_ONLY = 'read-only'

enum Permissions {
    ADMIN,
    READ_ONLY 
}

const you = {
    userName: {firstName: 'Mike', lastName: 'Brown'},
    permissions: Permissions.ADMIN, 
    isReturning: true,
    age: 50,
    stayedAt: ['florida-home', 'oman-flat', 'tokyo-bungalow']
}





const properties: {
        img: string;
        title: string;
        price: number;
        location: {
            streetAddress: string;
            city: string;
            state: string;
            zipcode: number;
            country: string;
        };
        contactDetails: [number, string];
        isAvailableToRent: boolean;
}[] = [
    {
        img: './images/todd-kent-178j8tJrNlc-unsplash.jpg',
        title: 'Lovely Country Home!',
        price: 500,
        location: {
            streetAddress: '123 Main Street',
            city: 'Niceville',
            state: 'Florida',
            zipcode: 12345,
            country: 'USA'
        },
        contactDetails: [8506521687, 'landlord@home.com'],
        isAvailableToRent: true
    },
    {
        img: './images/ralph-ravi-kayden-2d4lAQAlbDA-unsplash.jpg',
        title: 'Super Posh Bungaloo!',
        price: 1500,
        location: {
            streetAddress: '123 Beach Drive',
            city: 'South Beach',
            state: 'Florida',
            zipcode: 65432,
            country: 'USA'
        },
        contactDetails: [7706548451, 'madoff@aol.com'],
        isAvailableToRent: true
    },
    {
        img: './images/sieuwert-otterloo-aren8nutd1Q-unsplash.jpg',
        title: 'Charming Family Dwelling!',
        price: 7500,
        location: {
            streetAddress: '123 Country Avenue',
            city: 'Youngstown',
            state: 'Alabama',
            zipcode: 98745,
            country: 'USA'
        },
        contactDetails: [6652125481, 'bobbyjoe@yahoo.com'],
        isAvailableToRent: false
    }

]

displayReviewTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser)

populateUser(you.isReturning, you.userName.firstName)

for (let i=0; i < properties.length; i++) {
    const card = document.createElement('div')
    card.classList.add('card')
    card.innerHTML = properties[i].title
    const image = document.createElement('img')
    image.setAttribute('src', properties[i].img)
    card.appendChild(image)
    propertyContainer.appendChild(card)
}

//use your location, your current time, and the current temp
let currentLocation : [string, string, number] = ['Kennesaw, GA', '2:23PM', 75]
footer.innerHTML = `${currentLocation[0]} ${currentLocation[1]} ${currentLocation[2]}°F`