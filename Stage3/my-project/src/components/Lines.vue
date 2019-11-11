<template>
  <section class="scene">
    <div class="modetitle">一秒选花</div>
    <div class="scene-list">
      <div class="scene-item scene-item-radius">
        <a href="###" class="navigation">
          <img src="../assets/list1.jpg" alt="送恋人" />
          <span class="scene-item-use-title">送恋人</span>
        </a>
      </div>
      <div class="scene-item scene-item-radius">
        <a href="###" class="navigation">
          <img src="../assets/list2.jpg" alt="送长辈" />
          <span class="scene-item-use-title">送长辈</span>
        </a>
      </div>
      <div class="scene-item scene-item-radius">
        <a href="###" class="navigation">
          <img src="../assets/list3.jpg" alt="送朋友" />
          <span class="scene-item-use-title">送朋友</span>
        </a>
      </div>
    </div>

    <div class="scene-list">
      <div class="scene-item scene-item-radius">
        <a href="###" class="navigation">
          <img src="../assets/list4.jpg" alt="生日祝福" />
          <span class="scene-item-title">生日祝福</span>
        </a>
      </div>
      <div class="scene-item scene-item-radius">
        <a href="###" class="navigation">
          <img src="../assets/list5.jpg" alt="表白求婚" />
          <span class="scene-item-title">表白求婚</span>
        </a>
      </div>
      <div class="scene-item scene-item-radius">
        <a href="###" class="navigation">
          <img src="../assets/list6.jpg" alt="开业商务" />
          <span class="scene-item-title">开业商务</span>
        </a>
      </div>
      <div class="scene-item scene-item-radius">
        <a href="###" class="navigation">
          <img src="../assets/list7.jpg" alt="周年纪念" />
          <span class="scene-item-title">周年纪念</span>
        </a>
      </div>
    </div>
    <!--mode-2-->

    <div class="scene-list">
      <a href="###" class="scene-item scene-item-bg">
        <p class="scene-item-name">热销榜</p>
        <p class="scene-item-desc">集万千宠爱</p>
        <div class="scene-item-bottom">
          <span class="scene-item-bottom-label">大家都在买</span>
          <span class="scene-item-bottom-text">热销10.9万束</span>
        </div>
      </a>
      <a href="###" class="scene-item scene-item-bg bg2">
        <p class="scene-item-name">特价专区</p>
        <p class="scene-item-desc">超值好货</p>
        <div class="scene-item-bottom">
          <span class="scene-item-bottom-label">限时直降</span>
          <span class="scene-item-bottom-text" style="opacity: 1;">
            ¥132
            <s>¥188</s>
          </span>
        </div>
      </a>
    </div>
    <!--mode-3-->

    <div class="scene-list">
      <div class="scene-item">
        <a href="###" class="navigation">
          <img src="../assets/list10.jpg" alt="新品来袭" />
          <span class="scene-item-pange">新品来袭</span>
        </a>
      </div>
      <div class="scene-item">
        <a href="###" class="navigation">
          <img src="../assets/list11.jpg" alt="品味之选" />
          <span class="scene-item-pange">品味之选</span>
        </a>
      </div>
      <div class="scene-item">
        <a href="###" class="navigation">
          <img src="../assets/list12.jpg" alt="设计师臻选" />
          <span class="scene-item-pange">设计师臻选</span>
        </a>
      </div>
    </div>
  </section>
</template>
<script>
export default {};
</script>
<style lang="scss">
@function vw($px) {
  @return ($px / 375) * 100vw;
}
.scene {
  font-size: vw(14);
  margin-bottom: vw(10);
  .modetitle {
    align-items: center;
    padding: vw(12);
    line-height: vw(40);
    background: #fff;
    font-size: vw(18);
    &::before {
      content: "";
      display: inline-block;
      width: vw(4);
      height: vw(20);
      line-height: vw(60);
      background: #435448;
      margin-right: vw(10);
    }
  }
  .scene-list {
    display: flex;
    padding: 0 vw(6);
    font-size: vw(14);
    margin-bottom: vw(10);
    .scene-item {
      display: block;
      flex: 1;
      position: relative;
      margin: 0 vw(2);
      overflow: hidden;
      .navigation {
        img {
          width: 100%;
          vertical-align: middle;
        }
        .scene-item-pange {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: rgba(35, 38, 40, 0.8);
          color: #fff;
          text-align: center;
          font-size: 0.85714286rem;
          padding: 0.28571429rem 0;
        }
      }
    }
    .scene-item-radius {
      margin-bottom: vw(8);
      .navigation {
        display: block;
        .scene-item-use-title {
          position: absolute;
          bottom: vw(4);
          left: 0;
          right: 0;
          z-index: 1;
          color: #fff;
          text-align: center;
          font-size: vw(14);
        }
        .scene-item-title {
          position: absolute;
          top: vw(4);
          left: 0;
          right: 0;
          z-index: 1;
          text-align: center;
          font-size: vw(14);
          color: black;
        }
      }
    }
    .scene-item-bg {
      display: block;
      margin-top: vw(8);
      background-image: url(../assets/list8.jpg);
      color: black;
      margin: 0;
      height: vw(160);
      background-repeat: no-repeat;
      background-size: contain;
      background-position: center center;
      padding: vw(12);
      border: 1px solid #e9ecf0;
      .scene-item-bottom {
        width: vw(158);
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: absolute;
        bottom: vw(15);
        left: vw(10);
        z-index: 1;
        font-size: vw(10);
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        .scene-item-bottom-label {
          border-radius: vw(10);
          padding: vw(2) vw(4);
          background: #ff734c;
          color: #fff;
          // margin-right: vw(6);
        }
      }
    }
    .bg2 {
      background-image: url(../assets/list9.jpg);
    }
  }
}
</style>