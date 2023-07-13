//发送验证码时添加cookie
export function addCookie(name, value, expiresHours){
    var cookieString=name+"="+escape(value);
    //判断是否设置过期时间,0代表关闭浏览器时失效
    if(expiresHours>0){
        var date=new Date();
        date.setTime(date.getTime()+expiresHours*1000);
        cookieString=cookieString+";expires=" + date.toUTCString();
    }
    document.cookie=cookieString;
}
//修改cookie的值
export function editCookie(name, value, expiresHours){
    let cookieString = name + "=" + escape(value);
    if(expiresHours>0){
        const date = new Date();
        date.setTime(date.getTime()+expiresHours*1000); //单位是毫秒
        cookieString=cookieString+";expires=" + date.toGMTString();
    }
    document.cookie=cookieString;
}
//根据名字获取cookie的值
export function getCookieValue(name){
    const strCookie = document.cookie;
    const arrCookie = strCookie.split("; ");
    for(let i=0; i<arrCookie.length; i++){
        const arr = arrCookie[i].split("=");
        if(arr[0]===name){
            return decodeURI(arr[1]);
        }
    }
    return ""
}
