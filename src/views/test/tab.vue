<template>
  <div>
      <div class="tab">
        <div class="tab-header">
          <div 
          v-for="item,index in tabData" 
		    	@click="tab(index)"
          v-bind:class="{'tab-active':index === currentIndex}"  
          class="tab-item">{{item.title}}</div>
        </div>
        <div class="tab-content">
          <div v-for="item,index in tabData" v-bind:style="{display:index == currentIndex ? 'block':'' }">
            <p v-for="option in item.list">{{option.subTitle}}</p>
          </div>
        </div>
      </div>
  </div>
</template>
<script>
  let tabData = [
    {
      title: '标签一1',
      list: [
        {
          subTitle: 'css课程2'
        },
        {
          subTitle: 'css课程3'
        },
        {
          subTitle: 'css课程4'
        }
      ]
    },
    {
      title: '标签二2',
      list: [
        {
          subTitle: 'js课程'
        }
      ]
    },
    {
      title: '标签三3',
      list: [
        {
          subTitle: 'Vue课程'
        }
      ]
    }
  ]
  export default {
    data() {
      return {
        tabData: tabData,
        currentIndex: 0
      }
    },
    methods:{
      tab(index){
        this.currentIndex = index
      }
    }
  }


</script>
<style>
  .tab {
    width: 500px;
    background: #fff;
    margin: 0px auto;
    background: rgb(227, 232, 238);
    padding: 16px;
  }
  .tab-header{
    overflow: hidden;
  }
  .tab-item {
    width: 100px;
    height: 30px;
    line-height: 30px;
    background: #ccc;
    border: 1px solid #dddee1;
    background: #f8f8f9;
    text-align: center;
    margin-right: 5px;
    border-radius: 2px;
    float: left;
  }
  .tab-active {
    border-color: transparent;
    height: 32px;
    padding-bottom: 5px;
    background: #fff;
    transform: translateZ(0);
    color: #e6451e;
  }
  .tab-content {
    height: 100px;
    line-height: 10px;
    background: #fff;
    overflow: hidden;
  }
  .tab-content div {
    width: 100%;
    height: 100%;
    text-align: center;
    display: none;
  }
  .tab-content p {
    width: 100%;
    height: 25px;
    line-height: 25px;
    text-align: center;
  }
</style>