<template>
  <!-- 教师个人信息 -->
  <el-card>
    <el-descriptions :column="2" :model="peopleDate">
      <el-descriptions-item label="姓名">
        {{ peopleDate.name }}
      </el-descriptions-item>
      <el-descriptions-item label="年龄">
        {{ peopleDate.age }}
      </el-descriptions-item>
      <el-descriptions-item label="性别">
        {{ peopleDate.sex }}
      </el-descriptions-item>
      <el-descriptions-item label="电话">
        {{ peopleDate.num }}
      </el-descriptions-item>
      <el-descriptions-item label="邮箱">
        {{ peopleDate.qq }}
      </el-descriptions-item>
      <el-descriptions-item label="所属学院">
        {{ peopleDate.xueyuan }}
      </el-descriptions-item>
      <el-descriptions-item label="教授科目">
        {{ peopleDate.kemu }}
      </el-descriptions-item>
      <el-descriptions-item label="岗位">
        {{ peopleDate.gangwei  }}
      </el-descriptions-item>
      <el-descriptions-item label="职称">
        {{ peopleDate.cheng }}
      </el-descriptions-item>
    </el-descriptions>

    <!-- 教授班级平均分 -->
    <el-table :data="headData"  align="center" style="width:100%">
      <el-table-column prop="headClass"  label="教授班级" width="200"></el-table-column>
      <el-table-column prop="headPoint" label="期末平均分" width="200"> </el-table-column>
    </el-table>
<el-row><el-button  @click="dialogFormVisible = true">修改密码</el-button></el-row>

<!-- 修改密码弹窗 -->
<div class="tanchuang">
  <!-- :visible.sync控制弹窗显示隐藏 -->
<el-dialog :visible.sync="dialogFormVisible" overflow="auto"  >
  <el-form :model="form">
    修改密码
    <el-row>
      <el-col :span="10">
        <el-input v-model="headchangemima1"></el-input>
      </el-col>
    </el-row>
     再次输入
      <el-row>
       <el-col :span="10">
         <el-input  v-model="headchangemima2"></el-input>
        </el-col>
      </el-row>
  </el-form>
  <div slot="footer" class="dialog-footer">
   <el-row>  <el-button type="primary" @click="dialogFormVisible = false"  >确 定</el-button></el-row>
  </div>
</el-dialog>
</div>

  </el-card>
</template>

<script>
export default {

  data() {
    return {
      aa:'',
      // 修改密碼
      headchangemima1:'',
      headchangemima2:'',
      // 教师个人信息
      peopleDate: {
       name: "谢某某",
        age: "28",
        sex: "女",
        num: "1234567890098",
        mail: "87654321",
        xueyuan: "计算机与软件学院",
        kemu: "计算机",
        gangwei: "否",
        cheng: "副教授",
      },
      // 教师班级成绩表格
      headData: [
        {
          headClass: "信息工程20201",
          headPoint: "44",
        },
        {
          headClass: "信息工程20201",
          headPoint: "44",
        }, {
          headClass: "信息工程20201",
          headPoint: "44",
        }, {
          headClass: "",
          headPoint: "",
        },
      ],
      // 弹窗扽显示隐藏
      dialogTableVisible: false,
      dialogFormVisible: false,
      form:{},
      screenWidth: null,  //屏幕尺寸
    };
  },
  methods: {
    // 弹窗里确定修改密码
    // btnyes(){
    //   alert("成功")
    // }

    // 监听屏幕宽度

  },

};
</script>
<style scoped>
.el-row {
  text-align: center;
  margin: 20px;
}
.el-dialog{
  text-align: center;
}
.el-form{
  width: 560px;
}
.el-descriptions{
  height: 250px;
  font-size: 20px;
}
.el-input{
  width: 40vw;
}
@media screen and (max-width:800px) {
  .el-input{
    float: left;
    width: 100px;
  }
}
@media screen and (max-width:670px) {

.el-descriptions{
  font-size: 10px;
}
}
</style>
