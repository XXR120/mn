<template>
    <el-card class="box-card">
        <el-row class="search_nav">
           <el-col :span="5" class="search">
               <el-input v-model="input" placeholder="请输入内容"></el-input>
           </el-col>
            <el-button icon="el-icon-search" type="primary"></el-button>
            <el-button plain type="primary" class="data_in">一键导出</el-button>
            <el-button plain type="primary" class="data_out">格式下载</el-button>
            <el-col >
               <el-button plain type="primary" class="add">添加</el-button>
            </el-col>
        </el-row>
        <el-table
          :data="tableData"
          align="center"
          style="width: 100%">
          <el-table-column
            label="姓名"
            width="300">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.name }}</span>
            </template>
          </el-table-column>
          <el-table-column
            label="性别"
            width="100">
            <template slot-scope="scope">
              <el-tag size="medium">{{ scope.row.sex }}</el-tag>
            </template>
          </el-table-column>
           <el-table-column
            label="年龄"
            width="100">
            <template slot-scope="scope">
              <el-tag size="medium">{{ scope.row.age }}</el-tag>
            </template>
          </el-table-column>
           <el-table-column
            label="学号"
            width="200">
            <template slot-scope="scope">
              <el-tag size="medium">{{ scope.row.stu_number }}</el-tag>
            </template>
          </el-table-column>
          <el-table-column label="操作" width="350" align="center">
            <template>
              <el-button
                size="mini"
                type="warning"
                @click="lookpop=true">查看成绩</el-button>
                <el-button
                size="mini"
                type="primary"
                @click="changepop=true">修改</el-button>
                <el-button
                size="mini"
                type="danger"
                @click="delate();">删除</el-button>
            </template>
          </el-table-column> 
        </el-table>
        <el-row  class="teanum">
          <el-col :span="4">专业总数：</el-col>
          <el-input
            class="tea_input"
            placeholder="请输入内容"
            v-model="teanum"
            :disabled="true">
          </el-input> 
        </el-row>
         <!-- 查看成绩弹窗 -->
        <el-dialog title="查看成绩"  align="center" :visible.sync="lookpop" width="40%">
          <el-table
            :data="LookData"
            align="center"
            style="width: 100%">
            <el-table-column
              prop="look_subject"
              label="科目"
              width="200">
            </el-table-column>
            <el-table-column
              prop="look_grade"
              label="分数"
              width="200">
            </el-table-column>
            <el-table-column
              prop="look_teacher"
              label="教师"
              width="200">
            </el-table-column>
          </el-table>
        </el-dialog>
        <!-- 修改弹窗 -->
        <el-dialog title="修改信息" :visible.sync="changepop" width="40%" @close="ChangeClose">
          <el-form :model="changeForm" ref="ChangeRef" label-width="80px"  :rules="lookFormRules" width="200%" >
              <el-form-item label="修改姓名"  label-width="160px"  prop="change_name">
              <el-input v-model="changeForm.change_name" ></el-input>
              </el-form-item>
              <el-form-item label="修改性别"  label-width="160px"  prop="change_sex">
              <el-input v-model="changeForm.change_sex" ></el-input>
              </el-form-item>
              <el-form-item label="修改年龄"  label-width="160px"  prop="change_age">
              <el-input v-model="changeForm.change_age" ></el-input>
              </el-form-item>   
              <el-form-item label="修改学号"  label-width="160px"  prop="change_id">
              <el-input v-model="changeForm.change_id" ></el-input>
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
          name: '肖二拾',
          sex: '男',
          age: '20',
          stu_number: '20330320620',
        },{
          name: '肖二拾',
          sex: '男',
          age: '20',
          stu_number: '20330320620',
        },{
          name: '肖二拾',
          sex: '男',
          age: '20',
          stu_number: '20330320620',
        },{
          name: '肖二拾',
          sex: '男',
          age: '20',
          stu_number: '20330320620',
        },{
          name: '肖二拾',
          sex: '男',
          age: '20',
          stu_number: '20330320620',
        },],
        // 查看表格
        LookData: [{
          look_subject:'数字媒体技术',
          look_grade:'98',
          look_teacher:'肖二拾',
        },{
          look_subject:'数字媒体技术',
          look_grade:'98',
          look_teacher:'肖二拾',
        },{
          look_subject:'数字媒体技术',
          look_grade:'98',
          look_teacher:'肖二拾',
        },{
          look_subject:'数字媒体技术',
          look_grade:'98',
          look_teacher:'肖二拾',
        },{
          look_subject:'数字媒体技术',
          look_grade:'98',
          look_teacher:'肖二拾',
        },],
         // 按钮
        changepop:false,
        lookpop:false,
        // 修改弹窗
        changeForm:
            {
               change_name:'',
               change_sex:'',
               change_age:'',
               change_id:'',
            },
        // 密码规则
        lookFormRules: {
         change_name: [
           { required: true, message: "不能为空", trigger: 'blur' },
           { min: 3, max: 10, message: "长度在 3 到 10 个字符", trigger: 'blur'}
         ],
         change_sex: [
           { required: true, message: "不能为空", trigger: 'blur' },
           { min: 3, max: 10, message: "长度在 3 到 10 个字符", trigger: 'blur'}
         ],
         change_age: [
           { required: true, message: "不能为空", trigger: 'blur' },
           { min: 3, max: 10, message: "长度在 3 到 10 个字符", trigger: 'blur'}
         ],
         change_id: [
           { required: true, message: "不能为空", trigger: 'blur' },
           { min: 3, max: 10, message: "长度在 3 到 10 个字符", trigger: 'blur'}
         ],
      },
      }
    },
    methods: {
      // 表格
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
      // 删除弹窗
      async delate() {
        const ConfirmResult = await this.$confirm(
          "此操作将删除表单, 是否继续?",
          "提示",
          {
            confirmButtonText: "确定",
            cancelButtonText: "取消",
            type: "warning",
            center:true,
          }
        ).catch((err) => err);
        if (ConfirmResult !== "confirm") {
          return this.$message.info("已取消");
        }
        this.$message.success("删除成功！");
      },
      //规则重置
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
  .search_nav {
    margin-top: 30px;
  }
  .tea_input {
    /* margin-left: -150px; */
    width: 20%;
  }
  .block {
    margin-top: 5%;
   
  }
  .add {
    margin-top: -40px;
    margin-right: 40px;
    float: right;
  }
</style>