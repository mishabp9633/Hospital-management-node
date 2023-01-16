const mobileNumberRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im

export function isValidMobileNumber(value){
    // console.log('mobile number', value)
    return  mobileNumberRegex.test(value)
}
