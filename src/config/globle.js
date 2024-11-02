import { message } from "antd";



let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

window.isEmail = email => emailRegex.test(email)


window.toastify = (text, type) =>{
    switch (type) {
        case "success":   return message.success(text)
        case "error":     return message.error(text)
        default:          return message.info(text)
            
    }
}