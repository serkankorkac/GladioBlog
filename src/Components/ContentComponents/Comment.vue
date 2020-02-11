<template>
  <section>
    <!-- comment -->
<div class="row">
    <div class="col-md-11">
        <div class="media g-mb-30 media-comment">
            <img class="d-flex g-width-50 g-height-50 g-mt-3 g-mr-15" src="../../assets/img/default-profile.png" alt="Image Description">
            <div class="media-body">
              <div class="g-mb-15">
                <b class="fn">
                  <a href="#" rel="external nofollow ugc">Cihan</a>
                </b>
                <span class="g-color-gray-dark-v4 g-font-size-12">diyor ki:</span>
              </div>
              <div class="comment-metadata">
                <a href="#" rel="external nofollow ugc">February 7, 2020 at 12:48 pm</a>
              </div>
            </div>
        </div>
        <em class="info comment-awaiting-moderation">Yorumunuz onay bekliyor. Bu bir önizleme, yorumunuz onaylandıktan sonra görünecek.
        </em>
         <div class="description">
              <div class="comment-content">
                  <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue
                felis in faucibus ras purus odio, vestibulum in vulputate at, tempus viverra turpis.</p>
        
              </div>
                <div class="reply">
                  <a rel="nofollow" href="#" class="comment-reply-link">Reply</a>
                </div>
              
              </div>
              
    <div class="title-item">
        <h4>Leave a Reply</h4>
        <p>Your email address will not be published. Required fields are marked *</p>
    </div>

    </div>
</div>
    <!-- comment last -->
    <form>
      <div class="form-group">
    <label for="exampleFormControlTextarea1"><h5>Comment</h5> </label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="10"></textarea>
  </div>
   <div class="form-group row">
    <label for="inputName" class="col-sm-2 col-form-label">Name*</label>
    <div class="col-5">
      <input type="text" class="form-control" id="inputName" placeholder="Name">
    </div>
  </div>
  <div class="form-group row">
    <label for="inputEmail" class="col-sm-2 col-form-label">Email*</label>
    <div class="col-5">
      <input type="email" class="form-control" id="inputEmail" placeholder="Email">
    </div>
  </div>
   <div class="form-group row">
    <label for="inputWebSite" class="col-sm-2 col-form-label">Web Site</label>
    <div class="col-5">
      <input type="text" class="form-control" id="inputWebSite" placeholder="Web site">
    </div>
  </div>
  <div class="form-group">
    <div>
      <button type="submit" class="btnComment">Post Comment</button>
    </div>
  </div>
</form>
  </section>
</template>

<script>
export default {
}
</script>

<style lang="less"scoped>@nbfcolor: #303030;
@bgcolor: #ffffff;
@incolor: #999999;
@redcolor: #e33;
@pagebgcolor: #E5E5E5;
@btntextcolor: #eee;
@headingfont: 'Kanit', sans-serif;
@contentfont: 'Exo', sans-serif;
@blackHover:#303030;
section{
  padding-left: 2rem
}
/**comment-css */

@media (min-width: 0) {
    .g-mr-15 {
        margin-right: 1.07143rem !important;
    }
}
@media (min-width: 0){
    .g-mt-3 {
        margin-top: 0.21429rem !important;
    }
}

.g-height-50 {
    height: 50px;
}
.g-color-gray-dark-v4 {
    color: #777 !important;
}

.g-font-size-12 {
    font-size: 0.85714rem !important;
}

.media-comment {
    margin-top:20px
}
a:link, a:visited {
    color: @redcolor;
}
a:hover{
  text-decoration: none;
  color: @blackHover;
}
a{
  text-decoration: none;
  background-color: transparent
}
b, strong {
    font-weight: bold;
}
.comment-metadata {
    margin-top: 0.3em;
    font-size: 0.875rem;
}
.media-body{
  padding-bottom: .7rem;
}
.info{
  font-style: italic;
}
.description{
  padding-top: .7rem;
}
.comment-content{
  clear: left;
  padding: 2em 0 0;
}
.reply{
  padding-top: 1rem;
}
.title-item{
  padding-top: 1.4rem;
    p{
        padding-bottom: 1rem;
    }
}

/**comment-last */
form{
  padding: 1rem 0 1rem 0;
  textarea{
    margin-bottom: 3rem;
  }
  input{
    padding: 1rem;
  }
  label{
    padding-left: 0;
    font-weight: bold;
    font-size: 1rem;
    margin-top: .1rem;
  }
  input{
    margin-bottom: 3rem
  }
  button{
    background-color: @redcolor;
    padding: 1rem 3rem 1rem 3rem;
    border:none;
    margin-left: 0;
    color: @btntextcolor;
  }
}
</style>