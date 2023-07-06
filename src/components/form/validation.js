export default function validation(userData) {
    const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const regexPassword = /^(?=.*\d).{6,10}$/
    const errors ={};

    // //email
    // if(!userData.email){
    //     setErrors({...errors, email: 'Completar campo'});
    // } else if(userData.email.length > 35){
    //     setErrors({...errors, email: 'no se puede superar los 35 car.'})
    // }   else if(!regexEmail.test(userData.email)){
    //     setErrors({...errors, email: "Email invalido"})
    // } else {setErrors({...errors, email: ''})}

    if(!regexEmail.test(userData.email)){
        errors.email = "the entered email is not valid"
    }
    if(!userData.email){
        errors.email= "complete email"
    }
    if(userData.email.length > 35){
        errors.email = 'the email must not exceed 35 characters'
    }


    //password
    if(!userData.password){
        errors.password = 'complete password';
    }else if (!regexPassword.test(userData.password)) {
        errors.password = "The password must be between 6 and 10 characters long and contain at least one number."
    } else{errors.password = ''}

    return errors;
}