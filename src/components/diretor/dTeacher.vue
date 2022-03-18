<template>
    <el-card class="box-card">
        <el-row>
           <el-col :span="4" class="search">
               <el-input v-model="input" placeholder="请输入内容"></el-input>
           </el-col>
            <el-button icon="el-icon-search" type="primary"></el-button>
        </el-row>
        <el-table
          :data="tableData"
          align="center"
          style="width: 100%">
          <el-table-column
            label="教师姓名"
            width="320">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.teacher_name }}</span>
            </template>
          </el-table-column>
          <el-table-column
            label="科目"
            width="320">
            <template slot-scope="scope">
              <el-tag size="medium">{{ scope.row.subject }}</el-tag>
            </template>
          </el-table-column>
           <el-table-column
            label="教授班级"
            width="320">
            <template slot-scope="scope">
              <el-tag size="medium">{{ scope.row.tea_class }}</el-tag>
            </template>
          </el-table-column>
          <el-table-column label="操作" width="320">
            <template slot-scope="scope">
              <el-button
                size="mini"
                type="warning"
                @click="handleEdit(scope.$index, scope.row);">详细</el-button>
              <el-button
                size="mini"
                type="primary"
                @click="handleDelete(scope.$index, scope.row);changepop= true">修改</el-button>
            </template>
          </el-table-column> 
        </el-table>
        <el-row  class="teanum">
          <el-col :span="4">教师总数：</el-col>
          <el-input
            class="tea_input"
            placeholder="请输入内容"
            v-model="teanum"
            :disabled="true">
          </el-input> 
        </el-row>
        <!-- 修改弹窗 -->
        <el-dialog title="修改信息" :visible.sync="changepop" width="50%" @close="ChangeClose">
          <el-form :model="changeForm" ref="ChangeRef" label-width="80px"  :rules="lookFormRules" width="200%" >
              <el-form-item label="修改教师名字"  label-width="160px"  prop="newname">
              <el-input v-model="changeForm.newname" ></el-input>
              </el-form-item>
              <el-form-item label="教授班级"  label-width="160px"  prop="newclass">
              <el-input v-model="changeForm.newclass" ></el-input>
              </el-form-item>   
          </el-form>
          <el-row type="flex" justify="center"> 
              <el-button type="danger" @click="changepop=false;ChangeClose()">退出</el-button>
          <el-button type="success" @click="changepop=false;change()">修改</el-button>
          </el-row>
        </el-dialog>
        <!-- 分页 -->
        <div class="block" align="center">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage3"
            :page-size="100"
            layout="prev, pager, next, jumper"
            :total="1000">
          </el-pagination>
        </div>
    </el-card>
</template>

<script>
export default {
    data() {
      return {
        // 搜索
        input:'',
        // 分页
        currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4,
        // 教师数量
        teanum:'100',
        // 表格
        tableData: [{
          teacher_name: '肖二拾',
          subject: '前端开发',
          tea_class: '数字媒体技术20206'
        },{
          teacher_name: '肖二拾',
          subject: '前端开发',
          tea_class: '数字媒体技术20206'
        },{
          teacher_name: '肖二拾',
          subject: '前端开发',
          tea_class: '数字媒体技术20206'
        },{
          teacher_name: '肖二拾',
          subject: '前端开发',
          tea_class: '数字媒体技术20206'
        },{
          teacher_name: '肖二拾',
          subject: '前端开发',
          tea_class: '数字媒体技术20206'
        },{
          teacher_name: '肖二拾',
          subject: '前端开发',
          tea_class: '数字媒体技术20206'
        },{
          teacher_name: '肖二拾',
          subject: '前端开发',
          tea_class: '数字媒体技术20206'
        },],
         // 按钮
        changepop:false,
        // 密码
        changeForm:
            {
                newname:'帅比',
                newclass:'数媒技术'
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
        // 表格
      handleEdit(index, row) {
        console.log(index, row);
        this.$router.push('/teacher_detail');
      },
      handleDelete(index, row) {
        console.log(index, row);
      },
      // 分页
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },

        // 通过状态
      async change() {
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
      this.$message.success("修改成功！");
      },
      //重置窗口  
      ChangeClose() {
          this.$refs['ChangeRef'].resetFields();
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
  .search {
      margin-left: 5%;
  }
  .teanum {
    margin-top: 2%;
    margin-left: 100px;
  }
  .tea_input {
    /* margin-left: -150px; */
    width: 20%;
  }
  .block {
    margin-top: 5%;
   
  }
</style>