const returningUserDisplay = document.querySelector('#returning-user')
const userNameDisplay = document.querySelector('#user')
const reviewTotalDisplay = document.querySelector('#reviews')
const propertiesDisplay = document.querySelector('.properties')

export function displayReviewTotal(value: number, reviewer: string, loyalty: boolean) {
    const iconDisplay = loyalty ? '🌟' : ''
    reviewTotalDisplay.innerHTML = 
        `review total ${value.toString()} | last reviewed by ${reviewer} ${iconDisplay}`
}

export function populateUser(isReturning: boolean, userName: string ) {
    if (isReturning){
        returningUserDisplay.innerHTML = 'back'
    }
    userNameDisplay.innerHTML = userName
}

export function displayProperties() {
    
}
