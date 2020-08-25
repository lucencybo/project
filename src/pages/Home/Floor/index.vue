<template>
  <!--楼层-->
  <div class="floor">
    <div class="py-container">
      <div class="title clearfix">
        <h3 class="fl">{{floor.name}}</h3>
        <div class="fr">
          <ul class="nav-tabs clearfix">
            <li class="active" v-for="(nav,index) in floor.navList" :key="nav.text">
              <a href="#tab1" data-toggle="tab">{{nav.text}}</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="tab-content">
        <div class="tab-pane">
          <div class="floor-1">
            <div class="blockgary">
              <ul class="jd-list">
                <li v-for="(keyword,index) in floor.keywords" :key="index">{{keyword}}</li>
                <!-- <li>4K电视</li>
                <li>空气净化器</li>
                <li>IH电饭煲</li>
                <li>滚筒洗衣机</li>
                <li>电热水器</li>-->
              </ul>
              <img :src="floor.imgUrl" />
            </div>
            <div class="floorBanner">
              <!-- <div class="swiper-container" ref="floor1Swiper">
                <div class="swiper-wrapper">
                  <div
                    class="swiper-slide"
                    v-for="(carousel,index) in floor.carouselList"
                    :key="carousel.id"
                  >
                    <img :src="carousel.imgUrl" />
                  </div> -->
                  <!-- <div class="swiper-slide">
                    <img src="./images/floor-1-b02.png" />
                  </div>
                  <div class="swiper-slide">
                    <img src="./images/floor-1-b03.png" />
                  </div>-->
                <!-- </div> -->
                <!-- 如果需要分页器 -->
                <!-- <div class="swiper-pagination"></div> -->

                <!-- 如果需要导航按钮 -->
                <!-- <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div> -->
              <!-- </div> -->
              <SliderLoop :bannerList='floor.carouselList'></SliderLoop>
            </div>
            <div class="split">
              <span class="floor-x-line"></span>
              <div class="floor-conver-pit">
                <img :src="floor.recommendList[0]" />
              </div>
              <div class="floor-conver-pit">
                <img :src="floor.recommendList[1]" />
              </div>
            </div>
            <div class="split center">
              <img :src="floor.bigImg" />
            </div>
            <div class="split">
              <span class="floor-x-line"></span>
              <div class="floor-conver-pit">
                <img :src="floor.recommendList[2]" />
              </div>
              <div class="floor-conver-pit">
                <img :src="floor.recommendList[3]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/css/swiper.min.css";
export default {
  name: "Floor",
  props: ["floor"],
  mounted() {
    //1.在这里直接创建swiper实例，是可以的
    //原因：在我们floor当中，轮播图结构已经形成了
    //因为我们的floor数据不需要请求获取，而是直接在创建floor组件的时候就已经有这个数据了
    // new Swiper(this.$refs.floor1Swiper, {
    // direction: 'vertical', // 垂直切换选项
    // loop: true, // 循环模式选项
    // 如果需要分页器
    // pagination: {
    // el: ".swiper-pagination",
    // },
    // 如果需要前进后退按钮
    // navigation: {
    //   nextEl: ".swiper-button-next",
    //   prevEl: ".swiper-button-prev",
    // },
    //});
  },
  // watch: {
    //bannerList(newVal,oldVal){
    //}
    // floor: {
     //监视：一旦监视和深度监视
     //deep:true //配置深度监视
    //  immediate:true, //immediate立即的意思
    //   handler(newVal, oldVal) {
    //     this.$nextTick(() => {
    //       new Swiper(this.$refs.floor1Swiper,{
            // direction: 'vertical', // 垂直切换选项
            // loop: true, // 循环模式选项
            // 如果需要分页器
            // pagination: {
            //   el: ".swiper-pagination",
            // },
            // 如果需要前进后退按钮
    //         navigation: {
    //           nextEl: ".swiper-button-next",
    //           prevEl: ".swiper-button-prev",
    //         },
    //       });
    //     });
    //   },
    // },
  // },
};
</script>

<style lang="less" scoped>
.floor {
  margin-top: 15px;

  .py-container {
    width: 1200px;
    margin: 0 auto;

    .title {
      .fl {
        float: left;
        color: #c81623;
        font-size: 20px;
        line-height: 30px;
        margin: 9px 0;
        font-weight: 700;
      }

      .fr {
        float: right;

        .nav-tabs {
          margin: 10px 0 0;
          display: inline-block;

          li {
            float: left;
            line-height: 18px;

            a {
              padding-top: 1px;
              font-weight: 400;
              background-color: #fff;

              &::after {
                content: "|";
                padding: 0 10px;
              }
            }

            &:nth-child(7) {
              a {
                &::after {
                  content: "";
                }
              }
            }

            &.active {
              a {
                color: #e1251b;
              }
            }
          }
        }
      }
    }

    .tab-content {
      border-top: 2px solid #c81623;
      border-bottom: 1px solid #e4e4e4;

      .tab-pane {
        .floor-1 {
          height: 360px;
          display: flex;

          .blockgary {
            width: 210px;
            height: 100%;
            background: #f7f7f7;

            .jd-list {
              padding: 15px 0;
              overflow: hidden;

              li {
                list-style-type: none;
                float: left;
                width: 40%;
                margin: 0 10px;
                border-bottom: 1px solid #e4e4e4;
                text-align: center;
                line-height: 26px;
              }
            }

            img {
              width: 100%;
            }
          }

          .floorBanner {
            width: 330px;
            height: 100%;
          }

          .split {
            width: 220px;
            height: 100%;
            position: relative;

            .floor-x-line {
              position: absolute;
              background: #e4e4e4;
              width: 220px;
              height: 1px;
              top: 180px;
            }

            .floor-conver-pit {
              width: 100%;
              height: 50%;

              img {
                width: 100%;
                height: 100%;
                transition: all 400ms;

                &:hover {
                  opacity: 0.8;
                }
              }
            }
          }

          .center {
            border: 1px solid #e4e4e4;
          }
        }
      }
    }
  }
}
</style>