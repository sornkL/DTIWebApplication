<template>
  <el-container>
    <el-header>
      <ul style="display: inline">
        <el-menu style="position: absolute; left: 15%" default-active="1" class="el-menu-demo" mode="horizontal" @select="handleSelect">
          <el-menu-item index="1">主页</el-menu-item>
          <el-menu-item index="2">个人中心</el-menu-item>
          <el-menu-item index="3">关于我们</el-menu-item>
          <el-menu-item index="4">还没想好</el-menu-item>
        </el-menu>
        <li><a href="" style="display: inline; position: relative;left: 30%" type="primary">登录</a></li>
      </ul>
    </el-header>
    <el-main>
      <p style="padding: 0;font-size: 360%; color: cornflowerblue; font-weight: bold; margin-right: 35%">
        配体受体<span style="font-size: 130%; color: #42b983">预测</span>
      </p>
      <div class="picture-container">
        <div class="picture"><div class="test"></div></div>
        <svg style="align-self: center" t="1622640488967" class="icon" viewBox="0 0 1027 1024" xmlns="http://www.w3.org/2000/svg" p-id="3011" width="128" height="128"><path d="M 927.878 467.618 h -377.118 v -365.861 c 0 -16.8859 -16.8859 -39.4004 -39.4004 -39.4004 c -22.5145 0 -39.4004 22.5145 -39.4004 45.029 v 365.861 H 106.097 c -22.5145 -5.62863 -45.029 16.8859 -45.029 39.4004 s 22.5145 39.4004 39.4004 39.4004 h 365.861 v 365.861 c 5.62863 22.5145 22.5145 45.029 45.029 45.029 s 39.4004 -22.5145 39.4004 -39.4004 v -371.49 h 371.49 c 22.5145 0 39.4004 -22.5145 39.4004 -39.4004 s -11.2573 -45.029 -33.7718 -45.029 Z" fill="" p-id="3012"></path></svg>
<!--        <el-image src="http://www.w3.org/2000/svg" alt="add"-->
<!--                  fit="cover" width="200px" height="200px" style="flex-shrink: 0;align-self: center;width: 200px;height: 200px"></el-image>-->
        <div class="picture"><div class="test">test</div></div>
      </div>
      <el-pagination
          :page-size="20"
          :pager-count="11"
          layout="prev, pager, next"
          :total="1000">
      </el-pagination>

      <!--    渐变色背景框-->
      <div id="grad">
        <div id="framePrediction">
          点击预测
        </div>
        <!--      预测同级别框-->
        <div id="frame">
          <!--        百分号前面最小框-->
          <div id="frame2"></div>
          <div id="baifenhao"><div style="text-align: center; line-height: 100px;height:100px;width:100px;font-size: 300%;color: #f0f7ff">%</div></div>
        </div>
      </div>

    </el-main>

  </el-container>

</template>

<script>
export default {
  name: "eltest",
  data(){
    return{
      activeIndex:"1",
    };
  }
}
</script>

<style scoped>

.el-row {
  margin-bottom: 20px;
}
.el-col {
  border-radius: 4px;
}
  #grad {
    display: flex;
    flex-direction: column;
    background-image: linear-gradient(#FFFFFF, #ADD8E6);
  }
  #frame {
    display: flex;
    flex-direction: row;
    justify-content: center;
    border:4px solid;
    border-radius:0;
    border-color: #8cc5ff;
    background-color: #87CEFA;
    height: 100px;
    width: 440px;
    position:relative ;
    top: 50%;
    left: 30%;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    margin-bottom: 100px;
    margin-top: 100px;
  }
  #framePrediction {
    border:4px solid;
    border-radius:0;
    height: 40px;
    width: 200px;
    border-color: #67c23a;
    background-color: #67c23a;
    margin: auto;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)
  }
  #frame2 {
    display: flex;
    border:4px solid;
    border-radius:0px;
    height: 60px;
    width: 300px;
    border-color: #ADD8E6;
    background-color: #f0f7ff;
    margin: auto;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)
  }

#baifenhao{
  display: flex;
  justify-content: center;
  flex-direction: row;
}
.el-main {
  color: #333;
  text-align: center;
  line-height: 160px;
  background: url("../views/background.jpg") no-repeat;
  background-size: cover;
}
ul{
  list-style-type: none;
}
.el-row {
  margin-bottom: 20px;
}
.el-col {
  border-radius: 14px;
}
.bg-purple {
  background: #d3dce6;
}
.picture-container{
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.picture{
  height: 400px;
  width: 400px;
  background-color: red;
  margin: 6%;
  border-radius: 15px;
}

.add{
  height: 400px;
  width: 400px;
  margin: 6%;
  border-radius: 15px;
}
.test{
  height: 350px;
  width: 350px;
  background-color: #00FFFF;
  margin: 25px;
  border-radius: 15px;
  line-height: 250px;
}

</style>