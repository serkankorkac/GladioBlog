<template>
<aside>
  <div class="sidecardhead">
    <h5>Archives</h5>
 
    </div>
        <ul>
      <li><a href="">Ocak 2019   </a> (1)</li>
      <li><a href="">Şubat 2019  </a> (1)</li>
      <li><a href="">Mart 2019   </a> (1)</li>
      <li><a href="">Nisan 2019  </a> (1)</li>
      <li><a href="">Mayıs 2019  </a> (1)</li>
      <li><a href="">Haziran 2019</a> (1)</li>
      <li><a href="">Temmuz 2019 </a> (1)</li>
      <li><a href="">Ağustos 2019</a> (1)</li>
      <li><a href="">Eylül 2019  </a> (1)</li>
      <li><a href="">Ekim 2019   </a> (1)</li>
      <li><a href="">Kasım 2019  </a> (1)</li>
      <li><a href="">Aralık 2019 </a> (1)</li>
    </ul>
</aside>
</template>

<script>

export default {
  name: 'Archives',
   data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
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

ul{
  padding-left:2rem;
}

li{
   list-style-type: circle;
   padding-top:.7rem;
  
}
a{
  text-decoration: none;
  color:@redcolor;
  transition: .5s;
  padding-left: .5rem;
  padding-right: .5rem;
}
a:hover{
  color:@nbfcolor;
}

</style>
