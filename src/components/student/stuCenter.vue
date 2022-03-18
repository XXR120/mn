
<template>
    <div class="main">
    <!-- 内容框，存放m默认字段 -->
    <div class="content-box">
      <div class="list1">
        <ul class="attribute">
          <li class="name">姓名</li>
          <li class="display_names">吴臣棚</li>
        </ul>
        <ul>
          <li class="stuNum">学号</li>
          <li class="display_stuNum">20320120240</li>
        </ul>
        <ul>
          <li class="ages">年龄</li>
          <li class="dispaly_ages">20</li>
        </ul>
        <ul>
          <li class="institute">所属学院</li>
          <li class="dislapy_institute">信息与商务管理学院</li>
        </ul>
      </div>
      <div class="list2">
        <ul>
          <li class="sexs">性别</li>
          <li class="dispaly_sexs">男</li>
        </ul>
        <ul>
          <li class="Pclass">专业班级</li>
          <li class="display_Pclass">商务20202</li>
        </ul>
        <ul>
          <li class="e-mail">邮箱</li>
          <li>528026985@qq.com</li>
        </ul>
      </div>
      <!-- 显示信息字段 -->
      <div class="change_password">
          <el-button type="primary" @click="dialogFormVisible = true" class="button1">修改密码</el-button>
            <el-dialog title="提示" :visible.sync="dialogFormVisible">
          
            <el-form :model="form">
              <el-form-item label="请输入密码" :label-width="formLabelWidth">
                <el-input v-model="form.name" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="请在此输入" :label-width="formLabelWidth">
                <el-input v-model="form.name" autocomplete="off"></el-input>
              </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogFormVisible = false" class="button2">确 定</el-button>
             </div>
          </el-dialog>
      </div>
    </div>
    <!-- 修改密码按钮 -->

  </div>
</template>

<script>
export default {
    data() {
      return {
        dialogFormVisible: false,
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '100px'
      };
    }
  };
</script>

<style scoped>
.main{
  position: relative;
  top: 1%;
  left: 1%;
  width: 100%;
  height: 100%;
  background-color: #ffffff;
}
.content-box{
  float: left;
  height:50%;
  width: 60% ;
  padding-top: 10%;
  padding-left: 10%;
}
/* ul,li样式 */
ul,li{
  list-style: none;
  padding: 0;
  margin: 0;
  display:block;
}
li{
  height:50px;
  width: 90px;
  float:left;
}
/* 两列内容排版 */
.list1,.list2{
  float: left;
  padding-left:10%;
}
.list2{
  padding-top: 5%;
  /* padding-left: 10%; */
}
.display2{
  float: left;
  display: block;
  padding-top: 10%;
  padding-left: 10%;
}
.change_password{
  float: left;
  margin-left:50%;
  margin-right: 50%;
  padding-top: 20%;
  /* 按钮居中 */
}
::v-deep .button1,.button2{
  background-color: #1B3AA4;
}
</style>