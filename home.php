<!-- Header -->
<?php include "parts-php/header.php" ?>
  <!-- Overlay -->
  <div class="overlay">
    <!-- Edit Post -->
    <div class="pop-up edit-post">
      <div class="title-post title">
        <span>Edit Post</span>
        <i class="ion-edit"></i>
        <div class="close">
          <i class="ion-close-round"></i>
        </div>
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio rem aliquam mollitia laudantium libero tempora minima, dolores, totam recusandae aliquid quidem obcaecati nesciunt maiores autem corporis, eum sequi. Labore, deserunt.
      </p>
      <div class="bg-btn">
        <button class="my-btn">Edit</button>
      </div>
    </div>
    <!-- Delete Post -->
    <div class="pop-up">
      <div class="title-post title">
        <span>Delete Post</span>
        <i class="ion-android-delete"></i>
        <div class="close">
          <i class="ion-close-round"></i>
        </div>
      </div>
      <p>This post will be deleted and you won't be able to find it anymore.</p>
      <div class="bg-btn">
        <button class="my-btn">Edit</button>
      </div>
    </div>
  </div>
  <div class="container" data-top="100">
    <!-- New Post -->
    <div class="new-post">
      <div class="title-post title">
        <span>Make a Post</span>
        <i class="ion-edit"></i>
      </div>
      <textarea placeholder="What's on your mind, Hesham?"></textarea>
      <button class="my-btn" id="new-post">Post</button>
    </div>
    <!-- Posts place -->
    <section class="posts-home">
      <!-- All Posts will be here -->
    </section>
  </div>
  <div class="about-me">
    <div class="bg-linear"></div>
    <div class="img-author"></div>
    <div class="name-author">Hesham Abdulzaher</div>
  </div>

<?php include "parts-php/footer.php" ?>
