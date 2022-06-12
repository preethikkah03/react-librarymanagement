import { firstNameValidation ,passwordValidation, emailValidation} from "./Constants";
export const alphaNumeric=(input)=>{
    let result = /^[a-zA-Z0-9\s]{2,50}$/.test(input);
    if(result){
        return true;
    }
    else{
        return firstNameValidation;
    }
     
}

export const emailCheck=(input)=>{
    let result = /^.+@.+\..+$/.test(input);
    if(result){
        return true;
    }
    else{
        return emailValidation;
    }
     
}
export const passwordCheck=(input)=>{
    let result = /^[a-zA-Z0-9\s]{2,50}$/.test(input);
    if(result){
        return true;
    }
    else{
        return passwordValidation;
    }


} 