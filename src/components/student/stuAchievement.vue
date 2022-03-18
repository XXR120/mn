<template>
    <div>
        <!-- 卡片视图区 -->
        <el-card class="box-card">
            <!-- 搜索框与导出按钮 -->
                    <el-input placeholder="根据科目名称查询" class="input-with-select">
                    <el-button slot="append" icon="el-icon-search" type="primary"></el-button>
                    </el-input>
                    <el-button type="primary">一键导出</el-button>
            <!-- 学生成绩列表 -->
            <el-table :data="tableData" stripe 
            :header-cell-style="{background: '#e3e6f8' ,color: '#606166' ,'text-align':'center'}"
            >
                <el-table-column label="科目" prop="subject" align="center"></el-table-column>
                <el-table-column label="教师" prop="teacher" align="center"></el-table-column>
                <el-table-column label="分数" prop="score" align="center"></el-table-column>
            </el-table>
            <!-- 分页 -->
            <div class="block">
            <el-pagination
                @current-change="handleCurrentChange"
                :current-page="currentPage"
                :page-size="100"
                layout="prev, pager, next, jumper"
                :total="400">
            </el-pagination>
            </div>

        </el-card>
    </div>
</template>

<script>
export default {
    data(){
        return {
            tableData: [{
            subject: '2016-05-02',
            teacher: '王小虎',
            score: '上海市普陀区金沙江路 1518 弄'
            }, {
            subject: '2016-05-04',
            teacher: '王小虎',
            score: '上海市普陀区金沙江路 1517 弄'
            }, {
            subject: '2016-05-01',
            teacher: '王小虎',
            score: '上海市普陀区金沙江路 1519 弄'
            }, {
            subject: '2016-05-03',
            teacher: '王小虎',
            score: '上海市普陀区金沙江路 1516 弄'
            }],
            // 获取列表参数对象
            queryInfo: {
                query: '',
                pagenum: 1,
                pagesize: 2
            },
            // 分页
            currentPage:1,
            userList: [],
            total: 0
        }
    },
    methods: {
        // 监听页码值变化
        handleCurrentChange(newSize) {
            console.log(newSize)
        }

    }
}
</script>

<style scoped>
.el-card{
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15) !important;
}
.input-with-select{
    width: 250px;
    margin-bottom: 10px;
    float: left;
}
.el-button{
    margin-bottom: 10px;
    float: right;
}
.el-table{
    margin-top: 15px;
    /* float: left; */
}
.block{
    margin-top: 30px;
    text-align: center;
}
</style>