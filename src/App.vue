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

        <div class="blogcontent">
          <Content></Content>
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
import Content from './Components/Content';
import Sidebar from './Components/Sidebar';
import Footer from './Components/Footer';
export default {
  name: 'app',
  components:{
    Header,
    Navigation,
    Content,
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

html{
  background-color: @pagebgcolor;
  font-family: @contentfont !important;
  font-size: 16px;
}
body{
   background-color: @pagebgcolor;
  font-family: @contentfont !important;
  color: @nbfcolor;
}
ul{
  margin:0;
  padding:0;

}
#app{
 background-color: @pagebgcolor;  
}
.container{
  background-color:@bgcolor;
  margin: 2em auto;
  padding: 0;
  max-width: 1280px;
  width: 100%;
 background: #fff;
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
// Extra small devices (portrait phones, less than 576px)
@media (max-width: 575.98px) {
  html {
    font-size: 8px
  }
}

// Small devices (landscape phones, less than 768px)
@media (max-width: 767.98px) { 
   html {
    font-size: 12px
  }
 }

// Medium devices (tablets, less than 992px)
@media (max-width: 991.98px) { 
   html {
    font-size: 14px
  }
 }

// Large devices (desktops, less than 1200px)
@media (max-width: 1199.98px) { 
   html {
    font-size: 16px
  }
 }

// Extra large devices (large desktops)
// No media query since the extra-large breakpoint has no upper bound on its width

</style>
