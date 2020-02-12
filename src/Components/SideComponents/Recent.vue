<template>
  <aside>
    <div class="sidecardhead">
      <h5>Recent Comments</h5>

    </div>

    <ul>
      <li>
        <div class="imgdiv">
          <a href="">
            <img src="https://i.pravatar.cc/122/{55*55}" alt="Blog İmage">
          </a>
        </div>
        <div class="textdiv"> <a href=""> ThomasW </a>
          on
          <a href=""> different sidebar layouts </a> </div>
      </li>
      <li>
        <div class="imgdiv">
          <a href="">
            <img src="https://i.pravatar.cc/123/{55*55}" alt="Blog İmage">
          </a>
        </div>
        <div class="textdiv"> <a href=""> ThomasW </a>
          on
          <a href=""> different sidebar layouts </a> </div>
      </li>
      <li>
        <div class="imgdiv">
          <a href="">
            <img src="https://i.pravatar.cc/143/{55*55}" alt="Blog İmage">
          </a>
        </div>
        <div class="textdiv"> <a href=""> ThomasW </a>
          on
          <a href=""> different sidebar layouts </a> </div>
      </li>
      <li>
        <div class="imgdiv">
          <a href="">
            <img src="https://i.pravatar.cc/9/{55*55}" alt="Blog İmage">
          </a>
        </div>
        <div class="textdiv"> <a href=""> ThomasW </a>
          on
          <a href=""> different sidebar layouts </a> </div>
      </li>
    </ul>
  



  </aside>
</template>

<script>

export default {
  name: 'Recent',
   data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
}
</script>

<style lang="less" scoped>
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

a{
  text-decoration: none;
  color:@redcolor;
  transition: .5s;
  letter-spacing: .1rem;
  
  
}
a:hover{
  color:@nbfcolor;

}

ul{
  padding:1rem;
}
li{
  list-style: none;
  padding-top: 1rem;

  overflow: auto;
}
img{
  vertical-align: text-top;
  float: left;
  width: 100%;
  height: auto;
  padding-right: 1.2rem;
}
.imgdiv{
width: 5rem;
}

</style>
