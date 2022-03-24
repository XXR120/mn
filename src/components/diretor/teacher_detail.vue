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
                prop="ClassName"
                label="教授班级"
                width="250">
            </el-table-column>
            <el-table-column
                prop="grade"
                label="平均分"
                width="250">
            </el-table-column>
        </el-table>
    </el-card>
</template>

<script>
export default {
    created() {
     this.getUser()
     this.TeachClass()
    },
   data() {
    
    return {
        // 姓名
        nameinput: '',
        oldinput: '',
        sexinput: '',
        phoneinput: '',
        emailinput: '',
        schoolinput: '',
        teachinput: '',
        peopleinput: '',
        jobinput: '',
        // 表格
        tableData: [],
        // 按钮
        changepop:false,
    }
  },
  methods: {
    back() {
      this.$router.push('/dTeacher');
    },
    // 显示
    async getUser() {
        const token = window.localStorage.getItem("token");
        const tea_email = window.localStorage.getItem("tea_email");
        // console.log(val);
        const { data: res } = await this.$http.post('/api/deans/checkdetails?token='+token,{
          email:tea_email
        })
        if( res.code !== 200 ) {
          return this.$message.error("搜索失败")
        }
        // console.log(res);
        this.nameinput = res.data[0].TeacherName
        this.oldinput = res.data[0].TeacherAge
        this.sexinput = res.data[0].TeacherSex
        this.phoneinput = res.data[0].TeacherPhone
        this.emailinput = res.data[0].TeacherEmail
        this.schoolinput = res.data[0].TFormCollege
        this.teachinput = res.data[0].Subject
        this.peopleinput = res.data[0].ifPresident
        this.jobinput = res.data[0].Title
    },
    // 班级显示
    async TeachClass() {
        const token = window.localStorage.getItem("token");
        const tea_email = window.localStorage.getItem("tea_email");
        // const tea_name = window.localStorage.getItem("tea_name");
        // console.log(val);
        const { data: res } = await this.$http.post('/api/deans/teachclassandgrade?token='+token,{
          email:tea_email,
        })
        if( res.code !== 200 ) {
          // console.log(res);
          return this.$message.error("该老师未教授班级")
        }
        // console.log(res);
        this.tableData= res.data
    },
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