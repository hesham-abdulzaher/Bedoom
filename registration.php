<?php include "parts-php/header.php" ?>
  <div class="overlay">
    <?php include 'parts-php/loading.php' ?>
  </div>
  <section id="rig-form" class="form">
    <a href="./login.php">Do yau have an account ?</a>
    <!-- #1 -->
    <div class="divforinp">
      <label class="label" id="regUsername">Username</label>
      <input class="my-inp" id="reg-name" type="text" data-min-length="1">
    </div>
    <!-- #2 -->
    <div class="divforinp">
      <label class="label">Full name</label>
      <input class="my-inp" id="reg-fullname" type="text" data-min-length="6">
    </div>
    <!-- #3 -->
    <div class="divforinp">
      <label class="label">Creat a password</label>
      <input class="my-inp" id="reg-pass" type="password" data-min-length="6">
    </div>
    <!-- #4 -->
    <div class="divforinp">
      <label class="label">Confirm your password</label>
      <input class="my-inp" type="password" data-should-match="reg-password">
    </div>
    <!-- #5 -->
    <div class="divforinp">
      <label class="label">Email</label>
      <input class="my-inp" id="reg-email" type="text" data-should="email">
    </div>
    <!-- #6 -->
    <div class="divforinp">
      <label class="label">Phone</label>
      <input class="my-inp" id="reg-phone" type="text" data-should="phone" data-length="11">
    </div>
    <button id="reg-submit-btn" class="submit_btn">Submit</button>

  </section>

<?php include "parts-php/footer.php" ?>
