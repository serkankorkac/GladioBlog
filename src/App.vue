<template>
  <div id="app">
    <div class="container">

     

      <div class="row col-12">
        <Header></Header>
      </div>

      <div class="row col-12">
        <Navigation></Navigation>
      </div>

      <div class="row col-12">


        <div clas="col-9 blogcontent">
           <router-view></router-view>

        </div>

        <div class="sidecontent">
          <Sidebar></Sidebar>
        </div>


      </div>
      <div class="row col-12">
        
          <Footer></Footer>
        
      </div>



    </div>

  </div>
</template>

<script>
import Header from './Components/Header';
import Navigation from './Components/Navigation';
import Sidebar from './Components/Sidebar';
import Footer from './Components/Footer';
export default {
  name: 'app',
  components:{
    Header,
    Navigation,
    Sidebar,
    Footer
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="less">
/*
Page Bg color #E5E5E5 =@pagebgcolor 
Navbar/Footer Background #303030 = @nbfcolor
Body bg : #ffffff =@bgcolor
İnactive : #B5B5B5, = incolor
Red : #e33 = @redcolor

1. font-family: 'Kanit', sans-serif; @headingfont
2. font-family: 'Exo', sans-serif;  @contentfont
*/

@nbfcolor:#303030;
@bgcolor:#ffffff;
@incolor:#B5B5B5;
@redcolor:#e33;
@pagebgcolor:#E5E5E5;
@sidebgcolor:#FAFAFA;
@headingfont:'Kanit', sans-serif;
@contentfont:'Exo', sans-serif;
@btntextcolor:#eee;

#app{
 background-color: @pagebgcolor;  
 
}
.container{
  background-color:@bgcolor;
  margin: 2em auto;
  padding: 0;
  max-width: 1280px;
  width: 100%;
 background: @bgcolor;
 box-shadow: 0 0 2px #aaa;
}
.row{
  padding: 0;
  margin: 0;
}
.blogcontent{
  width: 70%;
  margin: 0;
  //padding:3.5rem 3.5rem;
}
.sidecontent{
  width: 30%;
   background-color: @sidebgcolor;
   border: 1px solid #ddd
}
.sidecardhead{
  padding-left: 1rem;
        h5{
      padding: 2rem 1rem 1rem 0;
    }
}

h1,h2,h3,h4,h5,h6,button{
  font-family: @headingfont;

}

nav{
  width:100%;
  background-color: @nbfcolor;
  
    a{
      text-decoration: none;
     color: @bgcolor;
    }

}
footer{
   background-color: @nbfcolor; 
}
li,
ul {
  list-style: none;
}

ul {
  margin: 0;
  padding: 0;

}

//   html {
//   background-color: #E5E5E5;
//   font-family: 'Exo', sans-serif !important;
//   font-size: 16px;
// }
// body {
//   background-color: #E5E5E5;
//   font-family: 'Exo', sans-serif !important;
//   color: #303030;
// }
// @media (max-width: 575.98px) {
//   html {
//     font-size: 12px;
//   }
// }
// @media (min-width: 576px) and (max-width: 767.98px) {
//   html {
//     font-size: 14px;
//   }
// }
// @media (min-width: 768px) and (max-width: 991.98px) {
//   html {
//     font-size: 16px;
//   }
// }
// @media (min-width: 992px) and (max-width: 1199.98px) {
//   html {
//     font-size: 18px;
//   }
// }
// @media (min-width: 1200px) {
//   html {
//     font-size: 18px;
//   }
// }
// @media (max-width: 992px) {
//   /* ===> APP <===*/
//   .blogcontent {
//     width: 100% !important;
//     float: none;
//     text-align: center;
//   }
//   .sidecontent {
//     width: 100% !important;
//     float: none;
//     text-align: center;
//   }
//   /* ===> HEADER <===*/
//   .logo {
//     display: block;
//     width: 100%;
//     float: none;
//     text-align: center;
//   }
//   #search-social {
//     display: block;
//     width: 100%;
//     float: none;
//     text-align: center;
//     padding-top: 0 !important;
//     margin: 0 !important;
//   }
//   #searchbar,
//   #social-icons {
//     display: inline-block;
//     float: none;
//   }
//   /* ===> BLOGS <===*/
//   .cardb {
//     text-align: left !important;
//     padding-bottom: 0 !important;
//   }
//   .cardb h3,
//   .cardb p,
//   .cardb a {
//     margin-top: 1rem;
//   }
//   /* ===> RECENT <===*/
//   .textdiv {
//     text-align: left;
//   }
//   aside {
//     padding-left: 1rem;
//     text-align: left !important;
//   }
//   aside ul {
//     text-align: left !important;
//   }
//   aside ul li {
//     text-align: left !important;
//   }
// }
// @media (max-width: 768px) {
//   /* ===> HEADER <===*/
//   #search-social {
//     text-align: center;
//   }
//   #searchbar,
//   #social-icons {
//     display: block !important;
//     width: 100%;
//   }
//   #searchbar ul,
//   #social-icons ul,
//   #searchbar form,
//   #social-icons form {
//     display: inline-block !important;
//   }
// }
// @media (max-width: 575.98px) {
//   /* ===> BLOGS <===*/
//   .contentimg,
//   .contenttext {
//     width: 100% !important;
//     float: none !important;
//     margin-left: 0 !important;
//     padding: 1.2rem !important;
//   }
// }

</style>
