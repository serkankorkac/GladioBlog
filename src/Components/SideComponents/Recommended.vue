<template>
  <aside>
    <div class="sidecardhead">
      <h5>Recommended</h5>
      <button class="active sidebuttons" @click="listToRecent(blogs)">Recent</button>
      <button class="sidebuttons" @click="listToPopular()">Popular</button>
      <button class="sidebuttons" @click="listToComments()">Comments</button>
    </div>

    <ul>
      <li  v-for="blog in blogs" :key="blog._id">
        <div class="imgdiv"><img :src="blog.image" alt="Blog İmage">
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
import Axios from 'axios'
export default {
  name: 'Recommended',
  data() {
    return {
      blogs: [],


    
    }
  },
  mounted() {
    let getBlogs=[]
    Axios.get('http://localhost:2500/api/post').then(res => {
      getBlogs= res.data;
    }).then(()=>{
      this.listToRecent(getBlogs);
    }).catch(err => {
      console.log(err);
    })

    
  },
  methods: {
    listToRecent(blogs) {
      this.blogs= [];
      this.blogs.push(blogs[blogs.length-3],blogs[blogs.length-2],blogs[blogs.length-1]);
      //this.recentBlogs.push(this.blogs[this.blogs.length-1],this.blogs[this.blogs.length-2],this.blogs[this.blogs.length-3])
    
    },  
    listToPopular(){
      Axios.get('http://localhost:2500/api/counter').then(res => {
        this.blogCounter = [];
        this.blogCounter = res.data;
        var by = []
        for (let index = 0; index < this.blogCounter.length; index++) {

          if (index == 0) {
            var element = this.blogCounter[index].counter
          }
          if (this.blogCounter[index].counter >= element) {
            if (by.length > 3) {
              for (let i = 0; i < by.length; index++) {
                const elt = by[i];
                if (elt < element) {
                  by.splice(i, 1)
                  by.push(this.blogCounter[index])
                }
              }
            } else if (by.length < 3) {
              by.push(this.blogCounter[index])
            } else {
              by.push(this.blogCounter[index])
              element = this.blogCounter[index].counter
            }
          }
        }
        by.map(counter => {
       
          this.blogs.map(res => {
            if (counter.blogid == res._id) {
              this.recentBlogs=[];
              this.recentBlogs+=counter;
            }
          })
         
        })
      
       console.log(this.recentBlogs)
       console.log(this.blogPopular);
      
      })
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
