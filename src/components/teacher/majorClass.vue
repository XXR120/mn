<template>
  <el-card>
    <!-- 顶部搜索框 -->
    <div>
      <el-row>
        <el-col :span="1">&nbsp;</el-col>
        <el-col :span="7">
          <!-- 根据专业查找及下拉框 -->
          <el-select
            placeholder="选择专业"
            :popper-append-to-body="false"
            v-model="majoy"
          >
            <el-option
              v-for="(item, index) in majoyList"
              :label="item.name"
              :value="item.id"
              :key="index"
            ></el-option>
          </el-select>
        </el-col>
        <el-col :span="8">
          <el-input placeholder="根据姓名查询" v-model="checkname">
            <el-button
              slot="append"
              icon="el-icon-search"
              @click="btn_foundname"
            ></el-button>
          </el-input>
        </el-col>
        <el-col :span="4"></el-col>
      </el-row>

      <el-button type="primary" @click="putout" class="out">一键导出</el-button>
    </div>

    <!-- 學生列表,给学生打分 -->

    <el-table
      :data="
        tableData.slice((currentPage - 1) * PageSize, currentPage * PageSize)
      "
      style="width: 100%"
    >
      <el-table-column label="姓名" prop="name"> </el-table-column>
      <el-table-column label="性别" prop="sex"> </el-table-column>
      <el-table-column label="年龄" prop="age"> </el-table-column>
      <el-table-column label="学号" prop="account"></el-table-column>
      <el-table-column label="分数" prop="num"> </el-table-column>
      <el-table-column label="操作" width="200" >
        <el-button type="warning"  @click="dialogFormVisible = true">打分</el-button>
        <el-button type="primary"  @click="dialogFormVisible = true">修改</el-button>
      </el-table-column>
    </el-table>

<!-- 弹窗 -->
    <el-dialog :visible.sync="dialogFormVisible" overflow="auto"  >
  <el-form :model="form">
    输入分数
    <el-row>
      <el-col :span="20">
        <el-input v-model="fenshu"></el-input>
      </el-col>
    </el-row>

  </el-form>
  <div slot="footer" class="dialog-footer">
   <el-row>  <el-button type="primary" @click="dialogFormVisible = false"  >确 定</el-button></el-row>
  </div>
</el-dialog>
    <!-- 分页 -->
    <div>专业总数: 80</div>
    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-size="PageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="totalCount"
      >
      </el-pagination>
    </div>
  </el-card>
</template>

<script>
export default {
  created: function () {
    this.getData();
  },
  // 学生信息，得分
  data() {
    return {
      // 专业
      majoy: "",
      fenshu:'',
      majoyList: [
        {
          id: "1",
          name: "信息工程20201",
        },
        {
          id: "2",
          name: "信息工程20202",
        },
        {
          id: "3",
          name: "信息工程20203",
        },
      ],
      // 查名字
      checkname: "",
      currentPage: 1,
      // 总条数，根据接口获取数据长度(注意：这里不能为空)
      totalCount: 100,
      // 个数选择器（可修改）
      pageSizes: 6,
      // 默认每页显示的条数（可修改）
      PageSize: 5,
      // 弹窗
      dialogTableVisible: false,
      dialogFormVisible: false,
      form:{},
      screenWidth: null,
      tableData: [
        {
          name: "1",
          sex: "2",
          age: "3",
          num: "42",
          account: "5222222222",
          changefenshu: "none",
        },
        {
          name: "2",
          sex: "2",
          age: "3",
          num: "4",
          account: "5",
          changefenshu: "none",
        },
        {
          name: "3",
          sex: "2",
          age: "3",
          num: "4",
          account: "5",
          changefenshu: "none",
        },
        {
          name: "1",
          sex: "2",
          age: "3",
          num: "4",
          account: "5",
          changefenshu: "none",
        },
        {
          name: "1",
          sex: "2",
          age: "3",
          num: "4",
          account: "5",
          changefenshu: "none",
        },
        {
          name: "1",
          sex: "2",
          age: "3",
          num: "4",
          account: "5",
          changefenshu: "none",
        },
      ],
    };
  },
  methods: {
    getData() {
      // 这里使用axios，使用时请提前引入
      // axios
      //   .post(
      //     url,
      //     {
      //       orgCode: 1,
      //     },
      //     { emulateJSON: true },
      //     {
      //       headers: {
      //         "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
      //       },
      //     }
      //   )
      //   .then((reponse) => {
      //     console.log(reponse);
      //     // 将数据赋值给tableData
      //     this.tableData = data.data.body;
      //     // 将数据的长度赋值给totalCount
      //     this.totalCount = data.data.body.length;
      //   });
    },
    // 分页
    // 每页显示的条数

    handleSizeChange(val) {
      // 改变每页显示的条数
      this.PageSize = val;
      // 注意：在改变每页显示的条数时，要将页码显示到第一页
      this.currentPage = 1;
    },
    // 显示第几页
    handleCurrentChange(val) {
      // 改变默认的页数
      this.currentPage = val;
    },

    // 姓名查询按钮
    btn_foundname() {
      var xhr = new XMLHttpRequest();
      var aa = document.getElementsByClassName
      // 发送异步 GET 请求
      xhr.open("GET", "https://www.runoob.com/try/ajax/ajax_info.txt", true);
      xhr.send();
      alert("checkname");
    },
    //
    putout() {
      alert("导出");
    },
  },
};
</script>

<style scoped>
input {
  margin-left: 20px;
  height: 30px;
}
.out {
  float: right;
}
.block {
  text-align: center;
}
</style>
