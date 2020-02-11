<template>
  <aside>
    <div class="sidecardhead">
      <h5>Recommended</h5>
      <button class="active sidebuttons">Recent</button>
      <button class="sidebuttons">Popular</button>
      <button class="sidebuttons">Comments</button>
    </div>

    <ul>
      <li>
        <div class="imgdiv"><img src="https://i.picsum.photos/id/11/90/65.jpg" alt="Blog İmage">
        </div>
        <div class="sidetext">
          <a href="">
            <h6>Magazine WordPress Theme</h6>
          </a>
          <div class="blog-meta">
            <time class="blogtime">January 24, 2016</time>
          </div>
        </div>
      </li>
      <li>
        <div class="imgdiv"><img src="https://i.picsum.photos/id/32/90/65.jpg" alt="Blog İmage">
        </div>
        <div class="sidetext">
          <a href="">
            <h6>Magazine WordPress Theme</h6>
          </a>
          <div class="blog-meta">
            <time class="blogtime">January 24, 2016</time>
          </div>
        </div>
      </li>
      <li>
        <div class="imgdiv"><img src="https://i.picsum.photos/id/91/90/65.jpg" alt="Blog İmage">
        </div>
        <div class="sidetext">
          <a href="">
            <h6>Magazine WordPress Theme</h6>
          </a>
          <div class="blog-meta">
            <time class="blogtime">January 24, 2016</time>
          </div>
        </div>
      </li>
    </ul>


  </aside>
</template>

<script>

export default {
  name: 'Recommended',
   data () {
    return {
      msg: 'Welcome to Your Recommended.js App'
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
@incolor:#999999;
@redcolor:#e33;
@pagebgcolor:#E5E5E5;
@sidebgcolor:#FAFAFA;
@headingfont:'Kanit', sans-serif;
@contentfont:'Exo', sans-serif;
@btntextcolor:#eee;

button{
    background-color: #303030;
    border: none;  
    padding:.4rem;
    color: @bgcolor;
    font-size: .9rem;
    transition: 1s;
}
button:active{
    background-color: @redcolor;
    
}
button:hover{
  background-color: @redcolor;
  color: #ffffff;
}
time{
  font-size: .8rem;
}
a{
  text-decoration: none;
  transition: 1s;
}


.active{
    background-color: @redcolor;
}

img{
  vertical-align: text-top;
  float: left;
  width: 100%;
  height: auto;
  margin-right: 1rem;
}
ul{
  padding:1rem;
}
li{
  list-style: none;
  padding-top: 1rem;
  overflow: auto;
}
.imgdiv{
width: 6rem;
}

.sidetext{

    h6{
      color: @redcolor;
      transition: 1s;
    }
    h6:hover{
      color:@nbfcolor;
    }
    time{
      color:@incolor;
    }
} 
</style>
