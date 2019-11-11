<template>
  <div class="slide-right">
    <article class="catebox-details-mode">
      <header class="catebox-details-banner clearfix">
        <a class="navigation clearfix" href="###">
          <img src="../assets/bigss1.jpg" alt />
        </a>
      </header>
      <div class="catebox-details-body clearfix">
        <nav class="catebox-details-list">
          <div class="catebox-details-item">
            <a href="###" class="navigation">
              <img class="catebox-details-item-pic" src="../assets/ss1.jpg" alt="送恋人鲜花" />
              <p class="catebox-details-item-desc">送恋人鲜花</p>
            </a>
          </div>
          <div class="catebox-details-item">
            <a href="###" class="navigation">
              <img class="catebox-details-item-pic" src="../assets/ss2.jpg" alt="送长辈鲜花" />
              <p class="catebox-details-item-desc">送长辈鲜花</p>
            </a>
          </div>
          <div class="catebox-details-item">
            <a href="###" class="navigation">
              <img class="catebox-details-item-pic" src="../assets/ss3.jpg" alt="生日鲜花" />
              <p class="catebox-details-item-desc">生日鲜花</p>
            </a>
          </div>
          <div class="catebox-details-item">
            <a href="###" class="navigation">
              <img class="catebox-details-item-pic" src="../assets/ss4.jpg" alt="礼盒鲜花" />
              <p class="catebox-details-item-desc">礼盒鲜花</p>
            </a>
          </div>
          <div class="catebox-details-item">
            <a href="###" class="navigation">
              <img class="catebox-details-item-pic" src="../assets/ss5.jpg" alt="永生花" />
              <p class="catebox-details-item-desc">永生花</p>
            </a>
          </div>
          <div class="catebox-details-item">
            <a href="###" class="navigation">
              <img class="catebox-details-item-pic" src="../assets/ss6.jpg" alt="蛋糕" />
              <p class="catebox-details-item-desc">蛋糕</p>
            </a>
          </div>
          <div class="catebox-details-item">
            <a href="###" class="navigation">
              <img class="catebox-details-item-pic" src="../assets/ss7.jpg" alt="元祖蛋糕" />
              <p class="catebox-details-item-desc">元祖蛋糕</p>
            </a>
          </div>
          <div class="catebox-details-item">
            <a href="###" class="navigation">
              <img class="catebox-details-item-pic" src="../assets/ss8.jpg" alt="金箔花" />
              <p class="catebox-details-item-desc">金箔花</p>
            </a>
          </div>
          <div class="catebox-details-item">
            <a href="###" class="navigation">
              <img class="catebox-details-item-pic" src="../assets/ss9.jpg" alt="首饰" />
              <p class="catebox-details-item-desc">首饰</p>
            </a>
          </div>
          <div class="catebox-details-item">
            <a href="###" class="navigation">
              <img class="catebox-details-item-pic" src="../assets/ss10.jpg" alt="送恋人鲜花" />
              <p class="catebox-details-item-desc">巧罗巧克力</p>
            </a>
          </div>
        </nav>
      </div>
    </article>
  </div>
</template>
<style lang="scss">
@function vw($px) {
  @return ($px / 375) * 100vw;
}
.clearfix::after {
  content: "";
  clear: both;
  display: block;
  overflow: hidden;
  visibility: hidden;
}
.slide-right {
  width: 60%;
  float: right;
  left: 20%;
  top: vw(52);
  margin: vw(5) vw(5);
  padding: vw(5) vw(5);
  a {
    display: inline-block;
  }
  .catebox-details-mode {
    .catebox-details-body {
      padding: vw(5) vw(5);
      .catebox-details-item {
        float: left;
        width: 33.33333333%;
        // padding: vw(8) 0;
        text-align: center;
        img {
          width: vw(56);
          height: vw(56);
          border-radius: 50%;
          vertical-align: middle;
          overflow: hidden;
        }
        p {
          font-size: vw(14);
          font-weight: 300;
          line-height: vw(16);
          max-width: vw(72);
          margin: vw(8) auto 0;
          color: #232323;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
    }
    img {
      width: 100%;
      vertical-align: middle;
    }
  }
}
</style>