import { Permissions, LoyaltyUser } from "./enums"

const returningUserDisplay = document.querySelector('#returning-user')
const userNameDisplay = document.querySelector('#user')
const reviewTotalDisplay = document.querySelector('#reviews')


export function displayReviewTotal(value: number, reviewer: string, loyalty: LoyaltyUser) {
    const iconDisplay = LoyaltyUser.GOLD_USER ? '🌟' : ''
    reviewTotalDisplay.innerHTML = 
        `review total ${value.toString()} | last reviewed by ${reviewer} ${iconDisplay}`
}

export function populateUser(isReturning: boolean, userName: string ) {
    if (isReturning){
        returningUserDisplay.innerHTML = 'back'
    }
    userNameDisplay.innerHTML = userName
}

export function displayProperties(properties) {
    properties.forEach(prop => {
        propertiesDisplay.innerHTML += `
        <div>
            <h3>${prop.title}</h3>
            <img src="${prop.img}"/>
        </div>
        `
    })
}
