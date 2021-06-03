<template>
  <div class="hello">
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1"><a href="http://sornk.cn">撤硕儿</a></el-menu-item>
    <el-submenu index="2">
      <template slot="title">我的餐厅</template>
      <el-menu-item index="2-1"><a href="http://houqin.ecnu.edu.cn/" target="_blank">学校</a></el-menu-item>
      <el-menu-item index="2-2"><a href="https://baijiahao.baidu.com/s?id=1683864255378735379&wfr=spider&for=pc" target="_blank">商城</a></el-menu-item>
      <el-menu-item index="2-3"><a href="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fgss0.baidu.com%2F94o3dSag_xI4khGko9WTAnF6hhy%2Fzhidao%2Fpic%2Fitem%2Fa2cc7cd98d1001e9212179f9b30e7bec54e79722.jpg&refer=http%3A%2F%2Fgss0.baidu.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1625234779&t=1a57a1da3ddb48e2e95a181e2f510030" target="_blank">路边摊</a></el-menu-item>
      <el-submenu index="2-4">
        <template slot="title">来点别的</template>
        <el-menu-item index="2-4-1"><a href="https://www.bilibili.com/">林总家</a></el-menu-item>
        <el-menu-item index="2-4-2"><a href="https://acm.ecnu.edu.cn/">谢哥家</a></el-menu-item>
        <el-menu-item index="2-4-3"><a href="https://www.zhihu.com/">俞总家</a></el-menu-item>
      </el-submenu>
    </el-submenu>
    <el-menu-item index="3" disabled>Pornhub</el-menu-item>
    <el-menu-item index="4"><a href="https://www.mihoyo.com" target="_blank">我的家</a></el-menu-item>
  </el-menu>

    <div>
      <el-carousel :interval="4000" type="card" height="200px">
        <el-carousel-item v-for="item in imgList" :key="item">
          <img :src="item.img" alt="lalala" class="image" style="height: 100%;width: 100%;">
        </el-carousel-item>
      </el-carousel>
    </div>

    <h1>{{"我是傻逼二次元"}}</h1>
    <div>
      <span>伟大哲学家刀哥说过:</span>
      <p></p><span><cite><q>我宣布个事儿，我是个傻逼！</q></cite></span>
      <el-divider><i class="el-icon-camera-solid"></i></el-divider>
    </div>

    <fieldset>
      <legend><h3>创建一个属于你的刘诺纬</h3></legend>
      <div class="block">
        <span class="demonstration"><b>智商</b></span>
        <el-slider v-model="value2"></el-slider>
      </div>

      <div id="bodyset">
        <span class="display"><b>身体设置</b></span>
        <p></p>
        <el-radio-group v-model="radio">
          <el-radio disabled label="3">有gugubird</el-radio>
          <el-radio :label="6">无gugubird</el-radio>
          <el-radio :label="9">随机</el-radio>
        </el-radio-group>
      </div>

      <h3>每天工作时长</h3>
      <p><q><i>996是福报</i></q></p>
      <el-progress type="dashboard" :percentage="percentage" :color="colors"></el-progress>
      <div>
        <el-button-group>
          <el-button icon="el-icon-minus" @click="decrease"></el-button>
          <el-button icon="el-icon-plus" @click="increase"></el-button>
        </el-button-group>
      </div>

      <h3>Genshin</h3>
      <div class="block">
        <span class="demonstration">我的老婆是</span>
        <el-cascader
            v-model="value"
            :options="options"
            @change="handleChange"></el-cascader>
      </div>
    </fieldset>


  </div>
</template>

<script>
export default {
  data() {
    return {
      imgList: [
        {img: require('../../carosal/paimon.jpg')},
        {img: require('../../carosal/hutao.jpg')},
        {img: require('../../carosal/qiqi.jpg')},
        {img: require('../../carosal/keqing.jpg')},
        {img: require('../../carosal/diona.jpg')},
        {img: require('../../carosal/keli.jpg')}
      ],
      percentage: 10,
      colors: [
        {color: '#f56c6c', percentage: 20},
        {color: '#e6a23c', percentage: 40},
        {color: '#5cb87a', percentage: 60},
        {color: '#1989fa', percentage: 80},
        {color: '#6f7ad3', percentage: 100}
      ],
      activeIndex: '1',
      activeIndex2: '1',
      value2 : 50,
      value: [],
      options: [{
        value: 'tianli',
        label: '天理',
        children: [{
          value: 'unknown',
          label: '不男不女',
          children: [{
            value:'paimon',
            label:'派蒙',
          }]
        }]
      },{
        value: 'liyue',
        label: '璃月',
        children: [{
          value: 'male',
          label: '男的',
          children: [{
            value: 'zhongli',
            label: '钟离'
          }, {
            value: 'xiao',
            label: '魈'
          }, {
            value: 'xingqiu',
            label: '行秋'
          }, {
            value: 'chongyun',
            label: '重云'
          }]
        }, {
          value: 'female',
          label: '女的',
          children: [{
            value: 'keqing',
            label: '刻晴'
          }, {
            value: 'yeyang',
            label: '王小美'
          }, {
            value: 'ningguang',
            label: '凝光'
          }, {
            value: 'hutao',
            label: '胡桃'
          }, {
            value: 'xiangling',
            label: '香菱'
          }, {
            value: 'qiqi',
            label: '七七'
          }]
        }]
      }, {
        value: 'mengde',
        label: '蒙德',
        children: [{
          value: 'male',
          label: '男的',
          children: [{
            value: 'diluke',
            label: '迪卢克'
          }, {
            value: 'abeduo',
            label: '阿贝多'
          }, {
            value: 'kaiya',
            label: '凯亚'
          }, {
            value: 'bannite',
            label: '班尼特'
          }]
        }, {
          value: 'female',
          label: '女的',
          children: [{
            value: 'babala',
            label: '芭芭拉'
          }, {
            value: 'qing',
            label: '琴'
          }, {
            value: 'luoshaliya',
            label: '罗莎莉亚'
          }, {
            value: 'keli',
            label: '可莉'
          }, {
            value: 'feixieer',
            label: '菲谢尔'
          }, {
            value: 'nuoaier',
            label: '诺埃尔'
          }]
        }, {
          value: 'unknown',
          label: '不男不女',
          children: [{
            value: 'wendi',
            label: '温迪'
          }]
        }]
      },{
        value: 'zhidong',
        label: '至冬',
        children: [{
          value: 'male',
          label: '男的',
          children: [{
            value: 'dadaliya',
            label: '达达利亚'
          },{
            value: 'sanbin',
            label: '散兵'
          }]
        },{
          value: 'female',
          label: '女的',
          children: [{
            value: 'nvshi',
            label: '女士'
          }]
        }]
      }]
    };
  },
  methods: {
    handleChange(value) {
      console.log(value);
    },
    formatTooltip(val) {
      return val / 100;
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    increase() {
      this.percentage += 10;
      if (this.percentage > 100) {
        this.percentage = 100;
      }
    },
    decrease() {
      this.percentage -= 10;
      if (this.percentage < 0) {
        this.percentage = 0;
      }
    }
  }
};


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}
.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}  .el-carousel__item h3 {
     color: #475669;
     font-size: 14px;
     opacity: 0.75;
     line-height: 200px;
     margin: 0;
   }
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}
.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col{
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  font-size: 28px;
  background: #d3dce6;
}
.bg-purple-light {
  font-size: 28px;
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
h2 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
