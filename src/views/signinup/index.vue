<template>
 <div>
  <section>
    <div class="container">
      <!-- 登录开始 -->
      <div class="user signinBx">
        <div class="imgBx"><img src="../../assets/bg1.jpg" alt=""></div>
        <div class="formBx">
          <form action="">
            <h2>登录</h2>
            <input type="text" placeholder="手机/邮箱/用户名" id="identifier_login">
            <input type="password" placeholder="请输入密码" id="password_login">
            <p class="signup"><a href="#">已有账号，忘记密码？</a></p>
            <input type="button" value="登录" @click="login">
            <p class="signup">没有账号? <a href="javascript:void(0)" @click="toggleForm">点此注册</a></p>
          </form>
        </div>
      </div>
      <!-- 登录结束 -->
      <!-- 注册开始 -->
      <div class="user signupBx">
        <div class="formBx">
          <form style="width: 85%">
            <h2>注册</h2>
            <div class="register">
              <input ref="reg" type="text" placeholder="用户名" v-on:blur="judgeIdentifier(`username`)">
            </div>
            <div class="dtype">
              <select name="itype" id="itypeid" v-model="selected" @change="changeIndex">
                <option v-for="option in options" v-bind:value="option.text"
                    v-bind:key="option.value">{{option.text}}</option>
              </select>
              <input id="identifier"
                     :type="options[indexd].type" :placeholder="options[indexd].text"
                     :pattern="options[indexd].pattern" :title="options[indexd].text">
            </div>
              <div class="go-captcha-wrap">
                  <GoCaptchaBtn
                          class="go-captcha-btn"
                          v-model="captStatus"
                          width="100%"
                          height="50px"
                          :image-base64="captBase64"
                          :thumb-base64="captThumbBase64"
                          @confirm="handleConfirm"
                          @refresh="handleRequestCaptCode"
                  />
              </div>
            <div class="code">
              <button type="button" @click="GetCaptcha(this)">获取验证码</button>
              <input type="text" placeholder="请输入验证码" id="code">
            </div>
            <input type="password" placeholder="密码不少于6位" id="password2">
            <input type="button" value="注册" @click="register">
            <p class="signup">已有账号? <a href="javascript:void(0)" @click="toggleForm">点此登录</a></p>
          </form>
        </div>
        <div class="imgBx"><img src="../../assets/bg2.jpg" alt=""></div>
      </div>
      <!-- 注册结束 -->
    </div>
  </section>
 </div>
</template>

<script>
  import GoCaptchaBtn from '../../components/GoCaptchaBtn'
  import Aes from "@/utils/aes";
  import githubBtn from '@/assets/github-btn'
  import {addCookie,editCookie,getCookieValue} from '@/utils/cookie'
  import {goCaptchaCheckData, goCaptchaData, judgeUserExist, loginAPI, registerAPI, registerCode} from '@/api'
  import {RSAencrypt} from "@/utils/rsa";
  import {login_regular, register_regular} from "@/utils/regular";
  import {mapMutations} from "vuex";

 export default {
  name:'loginandregister',
   data () {
     return {
      selected: "手机号",
      indexd: 0,//select选中的值
      options: [
        { text: '手机号', value: 'phone', type: 'tel',
            pattern: `^1(([38][\\d])|([5,9][0-3,5-9])|(66)|(7[2-3,5-9]))\\d{8}$`},
        { text: '邮箱', value: 'email',type: 'email',
            pattern: ``},
      ],
      screenWidth: document.body.clientWidth,
      isCollapse: false,
      // 验证码数据---------------
      needCapt: false,
      popoverVisible: true,
      captBase64: '',
      captThumbBase64: '',
      captKey: '',
      captStatus: 'default',      // 为 success时，代表已经验证通过
      captExpires: 0,
      captAutoRefreshCount: 0,
      // -------------------
      userIsOk: false,
      publicKey: ''
     }
   },
   components: {
    GoCaptchaBtn
   },
   created () {
    //-------
    githubBtn()
    //--------
   },
   methods: {
    ...mapMutations(['login_s']),
    changeIndex(){
      this.indexd = this.indexd === 0 ? 1 : 0
    },
    /**
     * 切换登录/注册
     */
    toggleForm(){
      const container = document.querySelector('.container');
      const section = document.querySelector('section');
      container.classList.toggle('active');
      section.classList.toggle('active');
      this.captStatus = 'default'
    },
    /**
     * 获取验证码，手机验证码/邮箱验证码
     */
    GetCaptcha(btn) {
      if (this.captStatus !== "success"){
          this.$message({
              message: "请先进行人机验证！",
              type: "warning"
          })
          return
      }
      this.sendCode(btn);
      const v = getCookieValue("secondRemained")
        addCookie()
        editCookie()
      if(v>0){
          this.setTime(btn);
      }
    },
     /**
      * 发送请求，请求获取验证码
      */
    sendCode(btn){
        const type = this.options[this.indexd].value
        const num = document.getElementById("identifier").value
         // 如果手机号/邮箱为空，则不进行请求
        if(!num){
            this.$message({
                message : type + "为空，无法获取验证码！",
                type: "error",
                duration: 1000
            })
            return
        }
        registerCode(num,type).then((res)=>{
            console.log(res.data)
            this.$message({
                message: res.data.msg,
                type: "info",
                duration: 1000
            })
        })
    },
     /**
      * 注册按钮
      */
    register(){
         if (this.captStatus !== "success"){
             this.$message({
                 message: "请先进行人机验证！",
                 type: "warning"
             })
             return
         }
        let username = this.$refs.reg.value
        let identifier = document.getElementById("identifier").value
        let password = document.getElementById("password2").value
        let code = document.getElementById("code").value
        let type = this.options[this.indexd].value
         // 进行正则校验
        let res = register_regular(username,type,identifier,password,code)
        if(res !== "success"){
            this.$message(res)
            return
        }
         if(!this.userIsOk){
             this.$message("用户名已存在！")
             return
         }
        // let pk = this.publicKey
        //  console.log(pk)
        const jia = RSAencrypt(Aes.encrypt(username) + "|" + Aes.encrypt(identifier))
        let data = {
            IdentityType : type,
            Identifier : jia,
            Credential : password,
            Code : code
        }
        console.log(Aes.encrypt(username) + "|" + Aes.encrypt(identifier))
        registerAPI(data).then((res)=>{
            this.$message(res.data.msg)
            if(res.data.code === 200){
                this.toggleForm()
                this.captStatus= "default"
            }
        })
    },
     /**
      * 登录按钮
      */
     login(){
         const that = this
         const identifier = document.getElementById("identifier_login").value
         const password = document.getElementById("password_login").value
         let res = login_regular(identifier,password)
         if(res === "fail"){
             that.$message("登录数据不能为空！")
             return
         }
         // 现在 res 为 identifier 的类型了。
         const pas = res + "|" + identifier + "|" + password
         const info = RSAencrypt(pas)
         // 登录api
         loginAPI({info}).then((res)=>{
             if(res.data.code===200){
                 that.login_s(res.data.data)
                 // 跳转到/home
                 this.$router.push({path: '/home'})
             }
         })
     },
    /**
     * 处理请求验证码
     */
      handleRequestCaptCode() {
      this.captBase64 = ''
      this.captThumbBase64 = ''
      this.captKey = ''

        goCaptchaData().then((response)=>{
        const {data = {}} = response;
        if (data['code']  === 200) {
          if (this.$lodash.isEmpty(data)) {
            return
          }

          this.captBase64 = data.data['ImgBase64'] || ''
          this.captThumbBase64 = data.data['ThumbBase64'] || ''
          this.captKey = data.data['CaptchaKey'] || ''
        } else {
          this.$message({
            message: data['msg'], // 生成验证码失败
            type: 'warning'
          })
        }
      })
    },
    /**
     * 处理验证码校验请求
     */
    handleConfirm(dots) {
      if (this.$lodash.size(dots) <= 0) {
        this.$message({
          message: `请进行人机验证再操作`,
          type: 'warning'
        })
        return
      }

      let dotArr = []
      this.$lodash.forEach(dots, (dot) => {
        dotArr.push(dot.x, dot.y)
      })

      goCaptchaCheckData(dotArr.join(','),this.captKey).then((response)=>{
        const {data = {}} = response;

        if (data['code'] === 200 && data.data === true) {
          this.$message({
            message: data['msg'], // 验证成功
            type: 'success'
          })
          this.captStatus = 'success'
          this.captAutoRefreshCount = 0
        } else {
          this.$message({
            message: data['msg'], // 验证失败
            type: 'warning'
          })
          if (this.captAutoRefreshCount > 5) {
            this.captAutoRefreshCount = 0
            this.captStatus = 'over'
            return
          }

          this.handleRequestCaptCode()
          this.captAutoRefreshCount += 1
          this.captStatus = 'error'
        }
      })
    },
    /**
     * 检验用户名是否已存在
     */
    judgeIdentifier(type) {
        const Identifier = this.$refs.reg.value;
        const reg = document.querySelector('.register')
      if(!Identifier){
        this.userIsOk = false
        reg.classList.remove('active')
        return
      }
      judgeUserExist(Identifier,type).then((res)=>{
        if(res.data.code === 200){
            this.userIsOk = false
          reg.classList.add('active')
        }else if(res.data.code === 204){
            this.userIsOk = true
          reg.classList.remove('active')
        }
        this.publicKey = res.data.data
      })
     },
   }
 }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800;900&display=swap');
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}
section {
  position: relative;
  min-height: 100vh;
  background: #d7dbde;
  /* background: #fff; */
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  transition: 0.5s;
}
section.active {
  background: #4796d7;
}
section .container {
  position: relative;
  width: 1000px;
  height: 600px;
  background: #fff;
  box-shadow: 0 15px 50px rgba(0,0,0,0.1);
  overflow: hidden;
}
section .container .user {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
}
section .container .user .imgBx {
  position: relative;
  width: 50%;
  height: 100%;
  transition: 0.5s;
}
section .container .user .imgBx img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
section .container .user .formBx {
  position: relative;
  width: 50%;
  height: 100%;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
  transition: 0.5s;
}
section .container .user .formBx h2 {
  font-size: 18px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
  text-align: center;
  width: 100%;
  margin-bottom: 10px;
  color: #555;
}

/* 输入框input，化腐朽为神奇，牛皮666 */
section .container .user .formBx input {
  width: 100%;
  padding: 10px;
  background: #f5f5f5;
  color: #333;
  border: none;
  outline: none;
  box-shadow: none;
  font-size: 14px;
  margin: 8px 0;
  letter-spacing: 1px;
  font-weight: 300;
}
.register.active::before{
  content: "\00D7  用户名已存在！";
  color: red;
  font-size: 12px;
  position: relative;
  left: 10px;
}


section .container .user .formBx .dtype {
  width: 100%;
}

section .container .user .formBx .dtype select {
  width: 25%;
  padding: 10px;
  border: none;
  background: #d1d1d1;
  color: #333;
  appearance: none; /* 让右侧三角消失 */
  outline: none;
  box-shadow: none;
  font-size: 14px;
  margin: 8px 0;
  letter-spacing: 1px;
  font-weight: 300;
  text-align: center;
    cursor: pointer;
}

section .container .user .formBx .dtype{
  width: 100%;
}

section .container .user .formBx .dtype input{
  width: 70%;
  position: relative;
  left: 5%;
}

section .container .user .formBx .code button {
  width: 35%;
  padding: 10px;
  background: #677eff;
  color: #fff;
  border: none;
  outline: none;
  box-shadow: none;
  font-size: 14px;
  margin: 8px 0;
  letter-spacing: 1px;
  font-weight: 300;
  text-align: center;
  cursor: pointer;
}

section .container .user .formBx .code input {
  width: 60%;
  position: relative;
  left: 5%;
}
.go-captcha-wrapp{
  width: 100%;
}

.go-captcha-btn{
  width: 100%;
}

section .container .user .formBx input[type="button"]{
  max-width: 100px;
  background: #677eff;
  color: #fff;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 1px;
  transition: 0.5s;
}

section .container .user.signupBx .formBx input[type="button"]{
  background: #e73e49;
}


section .container .user .formBx .signup {
  position: relative;
  margin: 10px 0;
  font-size: 13px;
  letter-spacing: 1px;
  color: #555;
  text-transform: uppercase;
  font-weight: 300;
}
section .container .user .formBx .signup a {
  font-weight: 500;
  text-decoration: none;
  color: #577eff;
}
section .container .signupBx {
  pointer-events: none;
}
section .container.active .signupBx {
  pointer-events: initial;
}
section .container .signupBx .formBx {
  top: 100%;
}
section .container.active .signupBx .formBx {
  top: 0;
}
section .container .signupBx .imgBx {
  top: -100%;
  transition: 0.5s;
}
section .container.active .signupBx .imgBx {
  top: 0;
}



section .container .signinBx {
  top: 0;
}
section .container.active .signinBx .formBx{
  top: 100%;
}

section .container .signinBx .formBx {
  top: 0;
}
section .container.active .signinBx .formBx{
  top: 100%;
}
section .container .signinBx .imgBx {
  top: 0;
  transition: 0.5s;
}
section .container.active .signinBx .imgBx{
  top: -100%;
}

@media(max-width: 991px){
  section .container {
    max-width: 500px;
  }
  section .container .imgBx {
    display: none;
  }
  section .container .user .formBx {
    width: 100%;
  }
  section .container.active .signinBx .formBx{
    top: -100%;
  }


}

</style>
