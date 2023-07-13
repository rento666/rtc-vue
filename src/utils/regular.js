const EMAIL    = "email"
const PHONE    = "phone"
const QQ       = "qq"
const WECHAT   = "wechat"
const USERNAME = "username"

export const register_regular = (user,type1,num,password,code) => {
    const u2 = user.trim();
    const t2 = type1.trim();
    const n2 = num.trim();
    const p2 = password.trim();
    const c2 = code.trim();
    if(u2 === "" || u2 === null || n2 === "" || n2 === null || p2 === "" || p2 === null || c2 === "" || c2 === null) {
        return "数据不能为空！"
    }
    if(!/^\w{6,25}$/.test(u2)){
        return "用户名必须是数字或字母，且长度在6到25位之间!"
    }
    if(!/^\w{6,25}$/.test(p2)){
        return "密码必须是数字或字母，且长度在6到25位之间!"
    }
    if(t2 === EMAIL){
        if(!/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(n2)){
            return "请输入正确的邮箱！"
        }
    }
    if(t2 === PHONE){
        if(!/^1(([38][\\d])|([5,9][0-3,5-9])|(66)|(7[2-3,5-9]))\\d{8}$/.test(n2)){
            return "请输入正确的手机号码！"
        }
    }
    if(!/^[0-9]{6}$/.test(c2)){
        return "请输入正确的6位验证码！"
    }
    return "success"
}

export const login_regular = (identifier,password) => {
    const n = identifier.trim()
    const p = password.trim()
    if(n === "" || n === null || p === "" || p === null) {
        return "fail"
    }
    if(/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(n)){
        return EMAIL
    }
    if(/^1(([38][\\d])|([5,9][0-3,5-9])|(66)|(7[2-3,5-9]))\\d{8}$/.test(n)){
        return PHONE
    }
    // if(!/^\w{6,25}$/.test(n)){
    //     return "username"
    // }
    return USERNAME
}