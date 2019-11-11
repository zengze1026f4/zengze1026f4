<template>
  <div>
    <section class="products">
      <div class="product-list">
        <div class="product-item" v-for="(item,index) in flowersComputed" :key="index">
          <a href="javascript:;" class="navigation">
            <div class="product-item-pic" @click="changeFuc(item.id)">
              <img :src="imageList(index)" alt="不变的承诺" />
            </div>
            <div class="product-item-info">
              <p
                class="product-item-info-name text-overflow-line2"
                style="color: black"
                v-text="item.descript"
              ></p>
              <p>
                <strong data-id="9012177" style=" color: #ff734c;" v-text="item.price"></strong>
              </p>
            </div>
          </a>
        </div>
      </div>
      <div class="bottoms" v-if="list.legth>0">加载到底部了奥~~~</div>
    </section>
  </div>
</template>
<script>
import store from "../stores/vuex.js";
// window.console.log(store.state);
// window.console.log(store.state.searchText);
export default {
  data() {
    return {
      // store: store.state,
      list: []
    };
  },
  created() {
    // this.newsComputed,
    this.goodinfs();
  },
  computed: {
    search() {
      return store.getters.getAuthor;
    },
    flowersComputed() {
      if (this.search.value1) {
        return this.list.filter(item => {
          // window.console.log(item);
          if (item.descript.indexOf(this.search.value1) >= 0) {
            return item;
          }
        });
      } else {
        return this.list;
      }
    }
  },
  methods: {
    async goodinfs() {
      await this.$axios
        .get("http://localhost:3000/list")
        .then(({ data }) => {
          data.forEach(element => {
            this.list = this.list.concat(element);
            return this.list;
          });
        })
        .catch(error => {
          window.console.log(error);
        });
    },
    imageList(index) {
      return require(`../assets/sj${1 + index}.jpg`);
    },
    changeFuc(gid) {
      this.$router.push({
        path: "/detail",
        query: { gid: gid }
      });
    }
  }
};
</script>
<style lang="scss">
@function vw($px) {
  @return ($px / 375) * 100vw;
}
.bottoms {
  height: vw(30);
  line-height: vw(30);
  text-align: center;
  margin-bottom: vw(20);
}
.products {
  overflow: hidden;
  height: auto;
  margin-top: vw(8);

  .product-list {
    overflow: hidden;
    padding: 0 vw(4) vw(16);
    .product-item {
      float: left;
      width: 50%;
      padding-bottom: vw(10);
      margin-bottom: vw(10);
      .navigation {
        background: #fff;
        overflow: hidden;
        box-shadow: 0 vw(4) vw(8) 0 #e9ecf0;
        border-radius: vw(4);
        display: block;
        .product-item-pic {
          max-height: vw(187);
          min-height: vw(187);
          width: vw(176);
          overflow: hidden;
          img {
            width: 100%;
            vertical-align: middle;
          }
        }
        .product-item-info {
          font-size: vw(12);
          padding: vw(8) vw(8) vw(16);
          height: vw(82);
          overflow: hidden;
          position: relative;
        }
      }
    }
  }
}
</style>