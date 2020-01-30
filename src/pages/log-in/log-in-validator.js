export const logInValidator = (formData, logInData, setLogInData) => {
    
    const reviewedData = Object.assign(logInData)

    // validate email
    // bypass actual validation method had a backend with database be implemented
    // reviewedData.email.isValid = reviewedData.email.value == formData.email.value
    reviewedData.email.isValid = reviewedData.email.value != ''
    
    // validate Password
    reviewedData.password.isValid = reviewedData.password.value != ''
    
    reviewedData.formReviewed = true
    console.log(reviewedData)
    
    setLogInData({...logInData, reviewedData })
}