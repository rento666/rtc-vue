<template>
 <div id="gen">
  <!-- 尊贵的头部-GT -->
  <header>
    <section class="top">
      <section class="top_left">
        <img src="../../assets/logo.png" alt="">
      </section>
      <section class="top_center">
        <ul>
          <li>
            <a href="javascript:void (0);">
            更多<i class="iconfont icon-icon-test"></i></a>
            <div>
              <ul>
                <li><a href=""><img src="../../assets/shdx.png" alt=""><span>朋友圈</span></a></li>
                <li><a href=""><img src="../../assets/shdx.png" alt=""><span>朋友圈</span></a></li>
                <li><a href=""><img src="../../assets/shdx.png" alt=""><span>朋友圈</span></a></li>
                <li><a href=""><img src="../../assets/shdx.png" alt=""><span>朋友圈</span></a></li>
              </ul>
            </div>
          </li>
          <li><a href="">首页</a></li>
          <li><a href="">第二页</a></li>
          <li><a href="">第三页</a></li>
          <li><a href="">第四页</a></li>
          <li><a href="">第五页</a></li>
          <li><a href="">第六页</a></li>
        </ul>
      </section>
      <section class="top_right">
        <ul>
          <li><a href="">登录</a></li>
        </ul>
      </section>
      <section class="notpc iconfont icon-san">
        <div>
          <section>
            <ul>
            <li><a href="">更多</a></li>
              <li><a href="">第一页</a></li>
              <li><a href="">第二页</a></li>
              <li><a href="">第三页</a></li>
              <li><a href="">第四页</a></li>
              <li><a href="">第五页</a></li>
              <li><a href="">第六页</a></li>
              <li><a href="">第七页</a></li>
            </ul>
          </section>
        </div>
      </section>
    </section>
  </header>
  <!-- 导航、header之下 -->
  <nav>
      <ul>
        <li><a href="">全部</a></li>
        <li><a href="">Golang</a></li>
        <li><a href="">Java</a></li>
        <li><a href="">Python</a></li>
        <li><a href="">Vue</a></li>
        <li><a href="">Linux</a></li>
        <li><a href="">博客</a></li>
        <li><a href="">Github</a></li>
      </ul>
    </nav>
    <section id="content">
      <router-view></router-view>
    </section>
  <!-- 分页、主体内容之下 -->
  <section id="page">
        <article><a href="">1</a></article>
        <article><a href="">2</a></article>
        <article><a href="">3</a></article>
        <article><a href="">4</a></article>
        <article><a href="">5</a></article>
        <article><a href="">6</a></article>
        <article><a href="">7</a></article>
    </section>
    <footer>
        <section class="footer">
            <section class="footer_left">
              <img src="../../assets/shdx.png" alt="">
              <p>
                山河大学是一所以培养新时代人才为目标，以服务国家和社会为使命的高等学府。我们提供高质量的教育，激发学生的创新和实践，培养学生的人文和国际，促进学生的全面和终身。我们坚持学术的自由和独立，推动学科的交叉和创新，构建开放和包容的学术，促进科研和社会的发展。
              </p>
            </section>
            <section class="footer_center">
              <div>
                <h6>相关链接</h6>
                <ul>
                  <li><a href="">山河标志</a></li>
                  <li><a href="">校园地图</a></li>
                  <li><a href="">山河校历</a></li>
                  <li><a href="">校园服务</a></li>
                </ul>
              </div>
              <div>
                <h6>加入我们</h6>
                <ul>
                  <li><a href="">专科生招生</a></li>
                  <li><a href="">本科生招生</a></li>
                  <li><a href="">研究生招生</a></li>
                  <li><a href="">人事招聘</a></li>
                </ul>
              </div>
              <div>
                <h6>联系方式</h6>
                <ul>
                  <li>地址:四省交界处</li>
                  <li>邮编:257455</li>
                  <li>电话:0000-1234567</li>
                </ul>
              </div>
            </section>
            <section class="footer_right">
              <img src="../../assets/name.png" alt="">
              <span>山河大学</span>
            </section>
        </section>
        <section class="footer_bottom">&copy;山河<b>ICP</b>备123456789号</section>
    </footer>
 </div>
</template>

<script>
 export default {
   data () {
     return {

     }
   },
   components: {
   },
   created () {
    document.querySelector('meta[name="viewport"]').setAttribute('content','width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0')
   }
 }
</script>

<style>

  body,ul,li,a {
      margin: 0;
      padding: 0;
      list-style: none;
      text-decoration: none;
  }
  
  #gen {
    display: flex;
    flex-direction: column;
    min-height: 100%;
  }
  /* 头部 */
  @import url("https://at.alicdn.com/t/font_1362546_4gl5w4cegvt.css");
    header {
      flex: 0;
      width: 100%;
      height: var(--head-height);
      background: #fff;
      margin-bottom: 20px;
      box-shadow: 0px 0px 5px 5px #ccc;
    }
    .top {
      height: 100%;
      width: var(--main-width);
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
    }

    .top_left {
      flex-grow: 1;
      display: flex;
      align-items: center; /* 垂直居中 */
    }
    .top_left>img {
      height: 50px;
    }
    .top_center{
      flex-grow: 5;
    }
    .top_center>ul, .top_right>ul{
      height: var(--head-height);
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .top_center>ul>li>a, .top_right>ul>li>a{
      font-size: 14px;
      color: rgba(31, 45, 61, 0.5);
      font-weight: bold;
    }
    /* 更多 */
    .top_center>ul>li:first-child {
      position: relative;
    }
    /* 鼠标放到更多上显示div */
    .top_center>ul>li:first-child:hover>div {
      display: block;
    }
    /* 更多中的导航条 */
    .top_center>ul>li:first-child>div {
      box-shadow: 0px 0px 2px 2px #f3f3f3;
      position: absolute;
      padding-left: 5px;
      width: 140px; /*更多中每个li的宽度 */
      background: #fff;
      /* 这个top如果改得比较大的话，例如25px，他就很难悬停了 */
      top: 20px;
      left: -5px;
      /**隐藏 */
      display: none; 
    }
    /* 更多中的每一个li */
    .top_center>ul>li:first-child>div>ul>li{
      /* 上下间距 */
      margin: 5px 0px;
    }
    /* 更多中的每一个li的a */
    .top_center>ul>li:first-child>div>ul>li>a{
      display: flex;
      align-items: center;
      padding: 0px 10px;
    }
    /* 更多中的每一个li的a的图片 */
    .top_center>ul>li:first-child>div>ul>li>a>img {
      height: 40px;
    }
    /* 更多中的每一个li的a的文字 */
    .top_center>ul>li:first-child>div>ul>li>a>span {
      color: var(--text-color);
      font-size: 14px;
      font-weight: bold;
      margin-left: 15px;
    }
    .top_right {
      flex-grow: 2;
    }
    .top_right>ul {
      justify-content: space-around;
    }

    .notpc {
      display: none;
      line-height: var(--head-height);
      color: var(--text-color);
      cursor: pointer;
    }
    .notpc>div {
      width: 100%;
      height: 300px;
      background: #fff;
      position: absolute;
      left: 0;
      z-index: 1;
      display: none;
    }
    .notpc:hover>div {
      display: block;
    }

    .notpc>div>section {
      width: var(--main-width);
      border: 1px solid red;
      margin: 0 auto;
    }

    /* 导航 */
    nav {
      flex: 0;
        width: var(--main-width);
        height: var(--nav-height);
        margin: 0 auto;
        background: #fff;
        box-shadow: 0px 5px 5px #ccc;
        border-radius: 10px;
        margin-bottom: 20px;
    }

    nav>ul {
      display: flex;
      justify-content: space-around;
      align-items: center;
      height: var(--nav-height);
    }

    nav>ul>li:first-child {
      padding: 10px 30px;
      background: #8492A6;
      border-radius: 5px;
    }
    
    nav>ul>li>a {
      color: var(--text-color);
    }

    nav>ul>li:first-child>a {
      color: #fff;
    }

    /* 内容 */
    #content {
      flex: 1;
      width: var(--main-width);
      margin: 0 auto;
      margin-bottom: 20px;
    }

    /* page */
    #page {
      flex: 0;
      width: var(--main-width);
      margin: 0 auto;
      display: flex;
      justify-content: center;
      border: 1px solid blue;
      margin-bottom: 20px;
    }
    #page>article {
        border: 1px solid red;
        padding: 8px 15px;
        margin-left: 5px;
    }

    /* footer */
    footer {
      flex: 0;
      width: 100%;
      background: #fff;
      /* height: 300px; */
      height: auto;
    }
    .footer_bottom {
        margin: 0 auto;
        width: var(--main-width);
        height: 20px;
        text-align: center;
    }
    .footer {
        width: var(--main-width);
        height: 300px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        font-size: 14px;
      color: var(--text-color);
    }
    .footer_left {
      /* flex-grow: 3; */
      /* 不设置上边这个也行，设置width */
      width: 40%;
      position: relative;
    }
    .footer_left>img {
      position: absolute;
      width: 120px;
      top: -20px;
      left: calc(50% - 120px / 2);
    }
    .footer_left>p {
      margin-top: 100px;
      text-indent: 2em;
      padding: 10px;
    }

    .footer_center{
      flex-grow: 5;
      display: flex;
      justify-content: space-around;
    }
    
    .footer_center>div>h6 {
      color: #333;
      font-size: 16px;
      padding-bottom: 10px;
      border-bottom: 1px solid #0097e1;
      text-align: center;
    }
    .footer_center>div>ul {
      text-align: center;
    }
    .footer_center>div>ul>li  {
      margin-top: 10px;
    }
    .footer_center>div>ul>li>a{
      color: var(--text-color);
    }
    .footer_right {
      /* flex-grow: 1; */
      display: flex;
      /* 垂直排列了 */
      flex-direction: column;
      align-items: center;

    }
    .footer_right>img {
      margin-top: 120px;
      width: 100px;
      margin-bottom: 20px;
    }

    /* pc样式*/
    @media screen and (min-width: 960px) {
      .top {
        min-width: 960px;
      }
      nav {
        min-width: 960px;
      }
      .footer {
        min-width: var(--pc-minw);
      }
      .footer_bottom {
        min-width: var(--pc-minw);
      }
    }
    /* pad样式 */
    @media screen and (max-width: 960px) and (min-width: 750px) {
      .top {
        min-width: 750px;
      }
      .top_center, .top_right{
        display: none;
      }
      .notpc {
        display: block;
      }
      nav {
        min-width: 750px;
      }
      nav>ul {
        flex-wrap: wrap;
      }
      .footer {
        min-width: 750px;
        height: auto;
      }
      .footer_bottom {
        min-width: 750px;
      }
      footer {
        height: auto;
      }
    }
    /* phone样式 */
    @media screen and (max-width:750px) {
      .top {
        min-width: 200px;
      }
      .top_center, .top_right{
        display: none;
      }
      .notpc {
        display: block;
      }
      nav {
        min-width: 200px;
        height: 130px;
      }
      nav>ul {
        padding: 5px;
        flex-wrap: wrap;
      }
      nav>ul>li {
        width: 30%;
        padding: 8px 0px;
        text-align: center;
      }
      nav>ul>li:first-child {
        padding: 10px 0;
      }
      .footer {
        min-width: 200px;
        flex-direction: column;
        height: auto;
      }
      .footer_bottom {
        min-width: 200px;
      }
      /* 隐藏中间内容 */
      .footer_center {
        display: none;
      }
      /* 重新调整样式 */
      .footer_left {
        width: 100%;
      }
      .footer_right {
        /* border: 1px solid green; */
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 20px;
      }
      .footer_right>img {
        margin-top: 20px;
      }

      footer {
        height: auto;
      }
    }

</style>
