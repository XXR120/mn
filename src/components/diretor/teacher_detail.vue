<template>
    <el-card class="box-card" >
        <el-row>
           <el-button type="danger" plain class="btn" @click="back()">返回</el-button>
        </el-row>
        <el-row>
            <el-col :span="4" class="name">姓名： </el-col>
            <el-col :span="4">
                 <el-input
                    placeholder="请输入内容"
                    v-model="nameinput"
                    :disabled="true"
                    >
                </el-input>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="4" class="name">年龄： </el-col>
            <el-col :span="4">
                 <el-input
                    placeholder="请输入内容"
                    v-model="oldinput"
                    :disabled="true"
                    >
                </el-input>
            </el-col>
            <el-col :span="4" class="name">性别： </el-col>
            <el-col :span="4">
                 <el-input
                    placeholder="请输入内容"
                    v-model="sexinput"
                    :disabled="true"
                    >
                </el-input>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="4" class="name">电话： </el-col>
            <el-col :span="4">
                 <el-input
                    placeholder="请输入内容"
                    v-model="phoneinput"
                    :disabled="true"
                    >
                </el-input>
            </el-col>
            <el-col :span="4" class="name">邮箱： </el-col>
            <el-col :span="4">
                 <el-input
                    placeholder="请输入内容"
                    v-model="emailinput"
                    :disabled="true"
                    >
                </el-input>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="4" class="name">所属学院： </el-col>
            <el-col :span="4">
                 <el-input
                    placeholder="请输入内容"
                    v-model="schoolinput"
                    :disabled="true"
                    >
                </el-input>
            </el-col>
            <el-col :span="4" class="name">教授科目： </el-col>
            <el-col :span="4">
                 <el-input
                    placeholder="请输入内容"
                    v-model="teachinput"
                    :disabled="true"
                    >
                </el-input>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="4" class="name">教师是否院长 </el-col>
            <el-col :span="4">
                 <el-input
                    placeholder="请输入内容"
                    v-model="peopleinput"
                    :disabled="true"
                    >
                </el-input>
            </el-col>
            <el-col :span="4" class="name">教师职称： </el-col>
            <el-col :span="4">
                 <el-input
                    placeholder="请输入内容"
                    v-model="jobinput"
                    :disabled="true"
                    >
                </el-input>
            </el-col>
        </el-row>
        <!-- 表格 -->
         <el-table
            :data="tableData"
            style="width: 100%"
            align="center"
            class="tab"
            >
            <el-table-column
                prop="cla"
                label="教授班级"
                width="250">
            </el-table-column>
            <el-table-column
                prop="grade"
                label="平均分"
                width="250">
            </el-table-column>
            <el-table-column
                prop="other"
                label="备注"
                 width="250">
            </el-table-column>
        </el-table>
    </el-card>
</template>

<script>
export default {
    created() {
     
    },
   data() {
    
    return {
        // 姓名
        nameinput: '帅哥',
        oldinput: '20',
        sexinput: '男',
        phoneinput: '134xxxxxxx80',
        emailinput: '119xxxxxxx@qq.com',
        schoolinput: '数字艺术与设计学院',
        teachinput: '数字媒体技术',
        peopleinput: '是',
        jobinput: '教授',
        // 表格
        tableData: [{
             cla: '信息工程 1 班',
             grade: '84',
             other: '无'
           }, {
             cla: '信息工程 2 班',
             grade: '84',
             other: '无'
           }, {
             cla: '信息工程 3 班',
             grade: '84',
             other: '无'
           }, {
             cla: '信息工程 4 班',
             grade: '84',
             other: '无'
           },{
             cla: '信息工程 5 班',
             grade: '84',
             other: '无'
           },],
        // 按钮
         changepop:false,
    }
  },
  methods: {
      back() {
           this.$router.push('/dTeacher');
      }
  }
}
</script>

<style scoped>
.text {
    font-size: 14px;
  }

  .item {
    padding: 18px 0;
  }

  .box-card { 
    width: 100%;
   
  }
  .el-row {
    margin-top: 30px;
    margin-bottom: 20px;
    justify-content: center;
    align-items: center;
  }
  .el-col {
    border-radius: 4px;
    
  }
  .name {
    margin-top: 8px;
    margin-left: 15%;
    margin-right: -5%;
  }

  .tab {
      margin-top: 3%;
      margin-bottom: 4%;
  }
  .btn {
      margin-left: 5%;
  }

 

  
</style>