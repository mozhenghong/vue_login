//设置cookie
export function setCookie(c_name,value,expire) {
    var date = newDate()
    date.setSeconds(date.getSeconds()+expire)
    document.cookie=c_name+"="+escape(value)+";expires="+date.toGMTString()
    console.log(document.cookie)
}