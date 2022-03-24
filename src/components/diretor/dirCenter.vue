<template>
    <el-card class="box-card" >
        <el-row>
            <el-col :span="4" class="name">姓名： </el-col>
            <el-col :span="6">
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
            <el-col :span="6">
                 <el-input
                    placeholder="请输入内容"
                    v-model="oldinput"
                    :disabled="true"
                    >
                </el-input>
            </el-col>
            <el-col :span="4" class="name">性别： </el-col>
            <el-col :span="6">
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
            <el-col :span="6">
                 <el-input
                    placeholder="请输入内容"
                    v-model="phoneinput"
                    :disabled="true"
                    >
                </el-input>
            </el-col>
            <el-col :span="4" class="name">邮箱： </el-col>
            <el-col :span="6">
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
            <el-col :span="6">
                 <el-input
                    placeholder="请输入内容"
                    v-model="schoolinput"
                    :disabled="true"
                    >
                </el-input>
            </el-col>
            <el-col :span="4" class="name">教授科目： </el-col>
            <el-col :span="6">
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
            <el-col :span="6">
                 <el-input
                    placeholder="请输入内容"
                    v-model="peopleinput"
                    :disabled="true"
                    >
                </el-input>
            </el-col>
            <el-col :span="4" class="name">教师职称： </el-col>
            <el-col :span="6">
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
        <!-- 按钮 --> 
        <el-row type="flex" justify="center"> 
            <el-button type="primary" plain class="btn" @click="changepop=true;">修改密码</el-button>
        </el-row>

        <!-- 修改密码弹窗 -->
        <el-dialog title="修改密码" :visible.sync="changepop" width="80%" >
            <el-form :label-position="labelPosition" :model="Passworld" ref="lookFormRules" :rules="lookFormRules" label-width="80px"   width="200%" >
                <el-form-item label="修改密码"  label-width="150px"  prop="oldpass">
                <el-input v-model="Passworld.oldpass" show-password></el-input>
                </el-form-item>
                <el-form-item label="再次修改密码："  label-width="150px"  prop="newpass">
                <el-input v-model="Passworld.newpass" show-password></el-input>
                </el-form-item>   
            </el-form>
            <el-row type="flex" justify="center"> 
                <el-button type="danger" @click="changepop=false;ChangeClose()">退出</el-button>
            <el-button type="success" @click="changepop=false;change(Passworld)">修改</el-button>
            </el-row>
        </el-dialog>
    
    </el-card>
</template>

<script>
export default {
    created() {
      this.getUserList()
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
        labelPosition:"left",
        // 表格
        tableData: [],
        // 按钮
         changepop:false,
        // 密码
        Passworld:
            {
                oldpass:'',
                newpass:''
            },
        
        // 密码规则
        lookFormRules: {
         oldpass: [
           { required: true, message: "密码不能为空", trigger: 'blur' },
           { min: 3, max: 10, message: "长度在 3 到 10 个字符", trigger: 'blur'}
         ],
         newpass: [
           { required: true, message: "密码不能为空", trigger: 'blur' },
           { min: 3, max: 10, message: "长度在 3 到 10 个字符", trigger: 'blur'}
         ],
      },
    }
  },
  methods: {
     // 修改密码
    async change(val) {
      const ConfirmResult = await this.$confirm(
        "此操作将修改表单状态, 是否继续?",
        "提示",
        {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
          center:true,
        }
      ).catch((err) => err);
      if (ConfirmResult !== "confirm") {
        return this.$message.info("已取消修改");
      }
      // 院长修改密码
      const token = window.localStorage.getItem("token");
      const account = window.localStorage.getItem("account")
      const { data: res } = await this.$http.post('/api/modifycode?token='+token,{
        account:account,
        code:val.oldpass,
        confirmCode:val.newpass
      })
      if( res.code !== 200 ) {
        return this.$message.error("修改失败")
      }
      // console.log(res);
      this.$message.success("修改成功")
    },
    // 获取信息
    async getUserList() {
      var token = window.localStorage.getItem("token");
      var account = window.localStorage.getItem("account")
      // console.log(token);
      const { data: res } = await this.$http.post('/api/deans/checkone?token='+token,{
        account:account,
      })
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
      window.localStorage.setItem("teacherName",this.nameinput)
      if( res.code !== 200 ) {
      //  console.log('获取用户列表失败！')
      }
     
    },
    // 获取教授班级
    async TeachClass() {
      const token = window.localStorage.getItem("token");
      const account = window.localStorage.getItem("account")
      // console.log(teacherName);
      const { data: res } = await this.$http.post('/api/deans/checktwo?token='+token,{
        email:account,
      })
      // console.log(res);
      this.tableData= res.data
    },
    //重置窗口  
    // ChangeClose() {
    //     this.$refs['ChangeRef'].resetFields();
    // },
   

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
    margin-right: -10%;
  }
  .btn {
    margin-top: 2%;
  }
  .tab {
      margin-top: 3%;
  }
  .el-input__inner {
    padding: 0 5px;
  }
 

  
</style>