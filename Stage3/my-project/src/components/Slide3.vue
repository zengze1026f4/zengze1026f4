<template>
  <div class="slide-right">
    <article class="catebox-details-mode">
      <header class="catebox-details-banner clearfix">
        <a class="navigation clearfix" href="###">
          <img src="../assets/bigss3.jpg" alt />
        </a>
      </header>
      <div class="catebox-details-body clearfix">
        <nav class="catebox-details-list">
          <div class="catebox-details-item">
            <a href="###" class="navigation">
              <img class="catebox-details-item-pic" src="../assets/ss13.jpg" alt="送恋人鲜花" />
              <p class="catebox-details-item-desc">绿色植物</p>
            </a>
          </div>
          <div class="catebox-details-item">
            <a href="###" class="navigation">
              <img class="catebox-details-item-pic" src="../assets/ss14.jpg" alt="送恋人鲜花" />
              <p class="catebox-details-item-desc">花盆花卉</p>
            </a>
          </div>
          <div class="catebox-details-item">
            <a href="###" class="navigation">
              <img class="catebox-details-item-pic" src="../assets/ss15.jpg" alt="送恋人鲜花" />
              <p class="catebox-details-item-desc">多肉盆栽</p>
            </a>
          </div>
        </nav>
      </div>
    </article>
  </div>
</template>
<style lang="scss">
.clearfix::after {
  content: "";
  clear: both;
  display: block;
  overflow: hidden;
  visibility: hidden;
}
.slide-right {
  width: 72%;
  margin: vw(5) vw(5);
  padding: vw(5) vw(5);
  // border: 1px solid #e6e6e6;
  .catebox-details-mode {
    width: 100%;
    .catebox-details-banner {
      margin-bottom: vw(20);
    }
    .catebox-details-body {
      padding: vw(5) vw(5);
      .catebox-details-item {
        float: left;
        width: 33.33333333%;
        padding: vw(8) 0;
        text-align: center;
        img {
          width: vw(56);
          height: vw(56);
          border-radius: 50%;
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