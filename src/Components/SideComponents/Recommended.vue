<template>
  <aside>
    <div class="sidecardhead">
      <h5>Recommended</h5>
      <button class=" sidebuttons" @click="listToRecent()">Recent</button>
      <button class="sidebuttons" @click="listToPopular()">Popular</button>
      <button class="sidebuttons" @click="listToComments()">Comments</button>
    </div>

    <ul>
      <li  v-for="blog in recentBlogs" :key="blog.id">
        <div class="imgdiv"><img :src="blog.image" alt="Blog İmage">
        </div>
        <div class="sidetext">
          <a href="">
            <h6>{{blog.title}}</h6>
          </a>
          <div class="blog-meta">
            <time class="blogtime">{{blog.cradetAt}}</time>
          </div>
        </div>
      </li>
      
    </ul>


  </aside>
</template>

<script>
import Axios from 'axios'
export default {
  name: 'Recommended',
  data() {
    return {
      blogs: [],
      blogCounter:[],
      recentBlogs:[]
    
    }
  },
  mounted() {

    Axios.get('http://localhost:2500/api/post').then((res) => {
      this.blogs= res.data;
    }).then(()=>{
      this.listToRecent();
    }).catch(err => {
      console.log(err);
    })

    
  },
  methods: {
    listToRecent() {
      this.recentBlogs = [];
      this.recentBlogs.push(this.blogs[this.blogs.length - 3], this.blogs[this.blogs.length - 2], this.blogs[this.blogs.length - 1])
    },
    listToPopular() {
      Axios.get('http://localhost:2500/api/counter').then(res => {
        this.blogCounter = [];
        let by = [];
        this.blogCounter = res.data;
        this.blogCounter.forEach(element => {
          by.push({
            counter: element.counter,
            id:  element.blogid
          })
       });
          
        
      by.sort(function (a, b) {
          var keyA = a.counter,
            keyB = b.counter;
          if (keyA < keyB) return -1;
          if (keyA > keyB) return 1;
          return 0;
        })
        this.recentBlogs = []
        let popular = []
        by.forEach(element => {
          this.blogs.forEach(blog=>{
             if (blog._id == element.id) {
              popular.push(blog)
            }
          })
        });
        // by.map(count => {
        //   this.blogs.map(blog => {
        //     if (blog._id == count.id) {
        //       popular.push(blog)
        //     }
        //   })
        // })
        this.recentBlogs.push(popular[popular.length - 1] , popular[popular.length - 2], popular[popular.length - 3])

      })
    },
    listToComments(){
      this.blogs.sort(function (a, b) {
          var keyA = a.comment.length,
            keyB = b.comment.length ;
          if (keyA < keyB) return -1;
          if (keyA > keyB) return 1;
          return 0;
        })
        this.recentBlogs=[]
        this.recentBlogs.push(this.blogs[this.blogs.length - 1] , this.blogs[this.blogs.length - 2], this.blogs[this.blogs.length - 3])
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
