<template>
  <nav class="navbar navbar-expand-lg">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        
        <router-link to="/" tag="li" class="nav-item active">
             <a class="nav-link">Home <span class="sr-only">(current)</span></a>
        </router-link>
        <li class="nav-item">
          <a class="nav-link" href="#">Authors</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
            aria-haspopup="true" aria-expanded="false">
            Dropdown
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Something else here</a>
          </div>
        </li>
        <router-link to="/contact" tag="li" class="nav-item active">
             <a class="nav-link">İletişim</a>
        </router-link>
      </ul>

    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navigation',
  data () {
    return {
      msg: 'Lanista Gladio Blog Navigation'
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
@btntextcolor:#eee;
@headingfont:'Kanit', sans-serif;
@contentfont:'Exo', sans-serif;
nav{
    padding:1rem 1rem 1em 1rem;
}
a{
    margin-right: 3rem;
}
  a:hover {

  color: @redcolor;
}
</style>