<template>
  <header>
    <div class="logo">
    <a class="navbar-brand m-4" href="#"><img src="../assets/siyah.png" width="200" alt="Lanista Software"></a>
</div>
<div id="search-social">
    <div id="searchbar" >
      <form class="form-inline clearfix" id="header-form">
        <div class="input-group-prepend">
          <input class="form-control search-input" type="search" placeholder="Search" aria-label="Search">
          <div class="social " id="search-icon"><i class="fas fa-search"></i></div>
        </div>
      </form>
    </div>


    <div id="social-icons" class="clearfix">
      <ul>
        <li><a href="#">
            <div class="social"><i class="fab fa-facebook-f"></i></div>
          </a></li>
        <li><a href="#">
            <div class="social"><i class="fab fa-twitter"></i></div>
          </a></li>
        <li><a href="#">
            <div class="social"><i class="fab fa-linkedin"></i></div>
          </a></li>
        <li><a href="#">
            <div class="social"><i class="fab fa-instagram"></i></div>
          </a></li>
        <li><a href="#">
            <div class="social"><i class="fab fa-pinterest"></i></div>
          </a></li>
      </ul>
    </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      msg: 'Lanista Gladio Blog Header'
    }
  }
}
</script>

<style lang="less" scoped>
@nbfcolor:#303030;
@bgcolor:#ffffff;
@incolor:#B5B5B5;
@redcolor:#e33;
@pagebgcolor:#E5E5E5;
@headingfont:'Kanit', sans-serif;
@contentfont:'Exo', sans-serif;
header{
    width:100%;
    padding: 2,1rem;
}

#searchbar,.logo,#social-icons,#search-social{ 
  display:inline-block;
  vertical-align: middle;
  margin: 1rem 0 1rem 0;
}
#social-icons{
  margin-right: 1rem;
}
#search-social{
  float: right;
  padding-top: 2%;
}
#searchbar{
  margin-right: 2rem;
}
.social {
  width: 3rem;
  height: 3rem;
  background-color: @redcolor;
  border:none;

}
.search-input{    
    padding: 0.125rem;
}

li {

  float: left;
  padding: 0.125rem;
}

i, .fa-search {

  font-size: 1.4rem;
  color: @bgcolor;
  margin: 33%;
 
}
.social:hover{
 cursor: pointer;
  i{
    color:@nbfcolor;
  }
}
#search-icon{
    display: inline-block;
}
.form-inline{
    input{
        border-radius: 0;
        width: 15rem;
        height: 3rem;
        padding: 1rem;
    }
}

</style>