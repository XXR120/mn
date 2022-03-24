<template>
    <el-card class="box-card">
        <el-row>
           <el-col :span="6" class="search">
               <el-input v-model="input" placeholder="请输入内容"></el-input>
           </el-col>
            <el-button icon="el-icon-search" type="primary" @click="searchTeaName(input)"></el-button>
        </el-row>
        <el-table
          :data="tableData.slice((currentPage -1)*pageSize,currentPage*pageSize)"
          :stripe="true"
          align="center"
          style="width: 100%">
          <el-table-column
            label="教师姓名"
            width="200">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.TeacherName }}</span>
            </template>
          </el-table-column>
          <el-table-column
            label="科目"
            width="200">
            <template slot-scope="scope">
              <el-tag size="medium">{{ scope.row.Subject }}</el-tag>
            </template>
          </el-table-column>
           <el-table-column
            label="教授班级"
            width="200">
            <template slot-scope="scope">
              <el-tag size="medium">{{ scope.row.class }}</el-tag>
            </template>
          </el-table-column>
          <el-table-column
            label="邮箱"
            width="200">
            <template slot-scope="scope">
              <el-tag size="medium">{{ scope.row.TeacherEmail }}</el-tag>
            </template>
          </el-table-column>
          <el-table-column label="操作" width="320">
            <template slot-scope="scope">
              <el-button
                size="mini"
                type="warning"
                @click="Tea_Dtail(scope.row);">详细</el-button>
              <el-button
                size="mini"
                type="primary"
                @click="Tea_Change(scope.row);changepop= true">修改</el-button>
            </template>
          </el-table-column> 
        </el-table>
        <el-row  class="teanum">
          专业总数：{{teanum}}
        </el-row>
        <!-- 修改弹窗 -->
        <el-dialog title="修改信息" :visible.sync="changepop" width="80%" >
          <el-form :label-position="labelPosition" :model="changeForm" ref="lookFormRules" label-width="80px"  :rules="lookFormRules" width="200%" >
              <el-form-item label="原来教授班级"  label-width="120px"  prop="newname">
              <el-input :disabled="true" v-model="input_oldclass" ></el-input>
              </el-form-item>
              <el-form-item label="修改教授班级"  label-width="120px"  prop="newclass">
              <el-input v-model="changeForm.newclass" ></el-input>
              </el-form-item>   
                        <el-row type="flex" justify="center"> 
            <el-button type="danger" @click="changepop=false;ChangeClose()">退出</el-button>
            <el-button type="success" @click="change(changeForm);changepop=false">修改</el-button>
          </el-row>
          </el-form>

        </el-dialog>
        <!-- 分页 -->
        <div class="block" align="center">
          <el-pagination
            small
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-size="pageSize"
            :page-sizes="[5]"
            layout="prev, pager, next"
            :total="tableData.length"
            align="center"
            >
          </el-pagination>
        </div>
    </el-card>
</template>

<script>
export default {
    created() {
      this.getUserList()
    },
    data() {
      return {
        labelPosition:"left",
        // 搜索
        input:'',
        // 修改弹窗老班级
        input_oldclass:'',
        // 教师数量
        teanum:'0',
        // 表格
        tableData: [],
        // 分页
        currentPage:1,
        pageSize:9,
         // 按钮
        changepop:false,
        // 密码
        changeForm:
        {
          newclass:''
        },
        
        // 密码规则
        lookFormRules: {
         newname: [
           { required: true, message: "不能为空", trigger: 'blur' },
           { min: 3, max: 10, message: "长度在 3 到 10 个字符", trigger: 'blur'}
         ],
         newclass: [
           { required: true, message: "不能为空", trigger: 'blur' },
           { min: 3, max: 10, message: "长度在 3 到 10 个字符", trigger: 'blur'}
         ],
      
      },
      }
    },
    methods: {
      Tea_Change(val) {
        // console.log(val);
        localStorage.setItem('TeacherEmail',val.TeacherEmail)
        this.input_oldclass = val.class
      },
      // 分页
      handleSizeChange(val) {
        this.pageSize = val;
      },
      handleCurrentChange(val) {
        this.currentPage = val;
      },
      // 获取所有人显示
      async getUserList() {
        const token = window.localStorage.getItem("token");
        const { data: res } = await this.$http.post('/api/deans/checkall?token='+token)
       
        if( res.code !== 200 ) {
        //  console.log('获取用户列表失败！')
        }
        this.tableData = res.data[0]
        this.teanum = res.data[0].length
      },
      // 搜索
      async searchTeaName(val) {
        const token = window.localStorage.getItem("token");
        const { data: res } = await this.$http.post('/api/deans/teachersearch?token='+token,{
          teachername:val
        })
       if(val=='') {
          return this.getUserList()
       }
        if( res.code !== 200 ) {
          return this.$message.error("搜索失败")
        }
        this.tableData = res.data
        this.$message.success("搜索成功！");
      },
      // 详细
      Tea_Dtail(val) {
        window.localStorage.setItem("tea_email",val.TeacherEmail);
        window.localStorage.setItem("tea_name",val.TeacherName);
        this.$router.push('/teacher_detail');
      },
      // 通过状态
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
        const token = window.localStorage.getItem("token");
        const TeacherEmail = window.localStorage.getItem("TeacherEmail");
        const { data: res } = await this.$http.post('/api/deans/teachermodify?token='+token,{
          teacheremail: TeacherEmail,
          oldclass: this.input_oldclass,
          newclass: this.changeForm.newclass
        })
        if( res.code !== 200 ) {
          return this.$message.error("修改失败")
        }
        this.getUserList()
        this.$message.success("修改成功！");
        
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
  .search {
      margin-left: 5%;
  }
  .teanum {
    margin-top: 2%;
  }
  .tea_input {
    /* margin-left: -150px; */
    width: 20%;
  }
  .block {
    margin-top: 5%;
   
  }
</style>