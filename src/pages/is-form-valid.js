export const isFormValid = form => {
    const arr = Object.keys(form)
    let isValid = true

    arr.forEach(prop => {        
        if(form[prop]) {
            if(form[prop].isValid == false) {
                isValid = false
                return false
            }
        }       
    })
    return isValid
}