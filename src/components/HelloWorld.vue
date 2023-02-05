<template>
  <div class="hello">
    <img src="../assets/jlu.jpg" >
    <h1>基于语音特征与身份ID的3D人脸动画生成系统</h1>
    王泽卿， 吉林大学 软件学院
    <p>
      一段关于该任务的介绍视频，非常详细的阐述了“语音驱动”这一工作的目的，以及应用场景。
      <a href="https://github.com/pettarin/forced-alignment-tools" target="_blank" rel="noopener">视频来源于Speech Driven Tongue Animation(CVPR,2022)</a>.
    </p>

    <video controls width="500">
        <source src="/media/cc0-videos/flower.webm" type="video/webm">

        <source src="../assets/tongue-anim.mp4" type="video/mp4">

        Download the
        <a href="/media/cc0-videos/flower.webm">WEBM</a>
        or
        <a href="/media/cc0-videos/flower.mp4">MP4</a>
        video.
    </video>

    <div>
      <el-divider />
    </div>

    <h2>只需3步，尝试制作属于你的3D人脸动画！</h2>

    <el-steps :active="1" align-center>
      <el-step title="第一步" description="上传一段音频，并根据需要，选择是否通过文本协助内容生成。" />
      <el-step title="第二步" description="选择生成的风格以及生成ID，即3D人脸动画的生成风格以及生成的人物ID。" />
      <el-step title="第三步" description="提交数据，等待您的3D人脸动画生成！" />
    </el-steps>

    <h3>第一步，上传您的音频,并根据选择输入文字</h3>
    <p></p>
    <el-upload
      v-model:file-list="fileList"
      class="upload-wav"
      action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
      multiple
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :before-remove="beforeRemove"
      :limit="3"
      :on-exceed="handleExceed"
    >
    <el-button type="primary">上传音频。</el-button>
      <template #tip>
        <div class="el-upload__tip">
          wav音频文件大小应不超过5MB
        </div>
        <el-input v-model="input" placeholder="请输入与音频相对应的文字" />
      </template>
    </el-upload>

    <p></p>

    <el-steps :active="2" align-center>
      <el-step title="第一步" description="上传一段音频，并根据需要，选择是否通过文本协助内容生成。" />
      <el-step title="第二步" description="选择生成的风格以及生成ID，即3D人脸动画的生成风格以及生成的人物ID。" />
      <el-step title="第三步" description="提交数据，等待您的3D人脸动画生成！" />
    </el-steps>

    <h3>第二步，选择您想要生成的风格以及ID</h3>
    <p></p>
    <el-select v-model="value" class="m-2" placeholder="Select" size="large">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </el-select>

    <el-select v-model="value" class="m-2" placeholder="Select" size="large">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </el-select>

    <p></p>

    <el-steps :active="3" align-center>
      <el-step title="第一步" description="上传一段音频，并根据需要，选择是否通过文本协助内容生成。" />
      <el-step title="第二步" description="选择生成的风格以及生成ID，即3D人脸动画的生成风格以及生成的人物ID。" />
      <el-step title="第三步" description="提交数据，等待您的3D人脸动画生成！" />
    </el-steps>

    <h3>第三步，提交数据，并等待您的3D人脸动画生成！</h3>
    <p></p>
    <div>
      <el-button type="primary" disabled>生成</el-button>
    </div>
    <p></p>
    <video controls width="500">
        <source src="/media/cc0-videos/flower.webm" type="video/webm">

        <source src="../assets/test_FaceTalk_170809_00138_TA_condition_FaceTalk_170913_03279_TA.mp4" type="video/mp4">

        Download the
        <a href="/media/cc0-videos/flower.webm">WEBM</a>
        or
        <a href="/media/cc0-videos/flower.mp4">MP4</a>
        video.
    </video>


  </div>
</template>
<script setup>
// import { Edit, Picture, UploadFilled } from '@element-plus/icons-vue'
import { ref } from 'vue'

const value = ref('')

const options = [
  {
    value: 'Option1',
    label: 'Option1',
  },
  {
    value: 'Option2',
    label: 'Option2',
  },
  {
    value: 'Option3',
    label: 'Option3',
  },
  {
    value: 'Option4',
    label: 'Option4',
  },
  {
    value: 'Option5',
    label: 'Option5',
  },
]

</script>

<!-- <script>
// import { ref } from 'vue'
// const value1 = ref(true)
// const value2 = ref(true)
export default {
  // name: 'HelloWorld',
  // props: {
  //   msg: String
  // },
  // data: {
    
  //   }
  // }
  
}
</script> -->

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
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
