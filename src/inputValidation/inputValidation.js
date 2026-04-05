class Validation{

    nameValidation(name){
        if(!name || name.replace(/\s/g, "") === ""){
            throw new Error("Invalid name, Please enter a valid name.")
        }
    }

    gmailValidation(gmail) {
        const emailRegex = /^(?!.*\.\.)[a-zA-Z0-9](\.?[a-zA-Z0-9]){3,29}@gmail\.com$/;
        if (!emailRegex.test(gmail)) {
            throw new Error("Invalid email, Please enter a valid email id.");
        }
    }

    phoneValidation(phone){
        const phoneRegex = /^(?:\+91|91)?[6-9]\d{9}$/;
        if (!phoneRegex.test(phone)){
            throw new Error("Invalid phone number");
        }
    }
    
    ageValidationforTeacher(age){
        if(age < 18 || age > 70){
            throw new Error("Age must be between 18 and 70");
        }
    }
    
    aadharValidation(aadhaar){
        const aadhaarRegex = /^\d{4}\s?\d{4}\s?\d{4}$/;
        if (!aadhaarRegex.test(aadhaar)){
            throw new Error("Invalid aadhar number, aadhar must be contain 12 number");
        }
    }
    cleanAadhaar(aadhaar) {
        return aadhaar.replace(/\s/g, "");
    }
     formatAadhaar(aadhaar) {
        if(aadhaar === null){
            throw new Error("Input field in empty, please try again later");
        }
        return aadhaar.replace(/\D/g, "")      // ensure only digits
                        .replace(/(\d{4})(?=\d)/g, "$1 ");
    }

}

const validation = new Validation();
export default validation;