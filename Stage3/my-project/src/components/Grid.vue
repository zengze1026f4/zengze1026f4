<template >
  <nav class="procate">
    <div class="procate-item">
      <img src="../assets/grid1.png" alt="鲜花" />
      <p>鲜花</p>
    </div>
    <div class="procate-item">
      <img src="../assets/grid2.png" alt="永生花" />
      <p>永生花</p>
    </div>
    <div class="procate-item">
      <img src="../assets/grid3.png" alt="蛋糕" />
      <p>蛋糕</p>
    </div>
    <div class="procate-item">
      <img src="../assets/grid4.png" alt="礼品" />
      <p>礼品</p>
    </div>
    <div class="procate-item">
      <img src="../assets/grid5.png" alt="巧克力" />
      <p>巧克力</p>
    </div>
  </nav>
</template>
<style lang="scss">
@function vw($px) {
  @return ($px / 375) * 100vw;
}
.procate {
  display: flex;
  // height: vw(50);
  margin-top: vw(10);
  align-items: center;
  justify-content: space-around;

  .procate-item {
    color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      height: vw(40);
    }
    p {
      font-size: vw(13);
      height: vw(20);
      margin: 0;
    }
  }
}
</style>