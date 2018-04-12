<!-- Header -->
<?php include "parts-php/header.php" ?>
<div class="overlay">
  <!-- loading -->
  <?php include "parts-php/loading.php" ?>
</div>

  <div id="log_form" class="form">
    <a href="./registration.php">Creat a new account</a>
    <!-- Email or Username -->
    <div class="divforinp">
      <label class="label">Username</label>
      <input class="my-inp" id="username" type="text">
    </div>
    <!-- password -->
    <div class="divforinp">
      <label class="label">Password</label>
      <input class="my-inp" id="password" type="password">
    </div>
    <button id="login" class="submit_btn">Login</button>
  </div>


<?php include "parts-php/footer.php" ?>
