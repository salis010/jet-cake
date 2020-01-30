export const signUpValidator = (formData, setFormData) => {
    
    const reviewedData = Object.assign(formData)
    
    // validate photo file
    const file = reviewedData.photo.value
    if(typeof file != 'object') {
        reviewedData.photo.isValid = false
    } else {    
        const fileExtension = file.name.substring(file.name.lastIndexOf('.'))

        if(!(fileExtension == '.png' || fileExtension == '.jpg')) { 
            reviewedData.photo.isValid = false
        } else {
            reviewedData.photo.isValid = true
        }
    }
   

    // validate phone number
    if(reviewedData.phoneNumber.value == '') {
        reviewedData.phoneNumber.isValid = false
    }
    else if(typeof reviewedData.phoneNumber.value != 'string') {
        reviewedData.phoneNumber.isValid = false
    } else if(reviewedData.phoneNumber.value.length < 8) {
        reviewedData.phoneNumber.isValid = false
    } else {
        reviewedData.phoneNumber.isValid = true
    }
    
    
    // validate address
    if(reviewedData.address.value == '') {
        reviewedData.address.isValid = false
    } else {
        reviewedData.address.isValid = true
    }

    // validate email
    const regex = /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
    
    reviewedData.email.isValid = regex.test(reviewedData.email.value)

    // validate date of birth
    reviewedData.dateOfBirth.isValid = reviewedData.dateOfBirth.value != ''

    // validate Security Question 1
    reviewedData.question1.isValid = reviewedData.question1.value != ''

    // validate Answer 1
    reviewedData.answer1.isValid = reviewedData.answer1.value != ''

    // validate Security Question 2
    reviewedData.question2.isValid = reviewedData.question2.value != '' && reviewedData.question2.value != reviewedData.question1.value

    // validate Answer 2
    reviewedData.answer2.isValid = reviewedData.answer2.value != ''

    // validate Security Question 3
    reviewedData.question3.isValid = reviewedData.question3.value != '' && reviewedData.question3.value != reviewedData.question1.value && reviewedData.question3.value != reviewedData.question2.value

    // validate Answer 3
    reviewedData.answer3.isValid = reviewedData.answer3.value != ''
    
    
    reviewedData.formReviewed = true
    
    setFormData({...formData, reviewedData })
}