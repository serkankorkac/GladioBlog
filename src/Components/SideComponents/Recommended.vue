<template>
<aside>
    <h5>Recommended</h5>
    <button class="active sidebuttons">Recent</button><button class="sidebuttons">Popular</button><button class="sidebuttons">Comments</button>
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
@incolor:#B5B5B5;
@redcolor:#e33;
@pagebgcolor:#E5E5E5;
@sidebgcolor:#FAFAFA;
@headingfont:'Kanit', sans-serif;
@contentfont:'Exo', sans-serif;
@btntextcolor:#eee;

button{
    background-color: #303030;
    border: none;
    margin: .3rem;
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

.active{
    background-color: @redcolor;
}

</style>
