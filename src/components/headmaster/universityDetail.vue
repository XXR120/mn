<template>
    <div class="box">
        <div class="boxOne">
            <!-- 搜索框开始 -->
            <el-input
                size="mini"
                class="inputSearch"
                v-model="input"
                placeholder="根据名称、时间查询"
            >
            </el-input>
            <!-- 搜索框结束 -->
            <!-- 搜索按钮开始 -->
            <el-button
                size="mini"
                class="SearchButton"
                icon="el-icon-search"
                type="primary"
                circle
            >
            </el-button>
            <!-- 搜索按钮结束 -->
            <div>
            <!-- 返回按钮结束 -->
            <el-button
            size="mini"
            class="btnOne"
            type="primary"
            plain
            @click="hReturn()"
            >
            返回
            </el-button>
            <!-- 返回按钮结束 -->
            </div>
            </div>
            <!-- 表格开始 -->
            <div class="boxTwo">
            <el-table
            :data="tableData.slice((currentPage - 1) * pageSize,currentPage * pageSize)"
            :stripe="true"
            border
            style="width: 90%;top:5%;left:5%"
            :header-cell-style="{fontWeight:'bold', fontSize:'14px', color:'#000'}"
            >
            <el-table-column
                align="center"
                label="下设专业班级"
                prop="professionalClasses"
                min-width="200"
            >
            </el-table-column>
            <el-table-column
                align="center"
                label="学生人数"
                prop="StudentNumber"
                min-width="200"
            >
            </el-table-column>
            <el-table-column
                align="center"
                label="数据操作"
                min-width="200"
                >
            <el-button
                size="mini"
                type="primary"
                @click="dialogVisible = true">
                查 看 图 表
            </el-button>
            </el-table-column>
            </el-table>
        </div>
        <!-- 表格结束 -->
        <!-- 学院总数开始 -->
        <div class="boxThree">
        <span class="sumNum">专业总数 : num</span>
        <span class="sumNum">学生总数 : num</span>
        <span class="sumNum">教师总数 : num</span>
        </div>
        <!-- 学院总数结束 -->
        <div class="boxFive">
        <el-pagination
            align="center"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-sizes="[5]"
            :page-size="pageSize"
            layout="total, jumper"
            :total="tableData.length">
        </el-pagination>
        </div>
        <!-- 分页开始 -->
        <div class="boxFour">
            <el-pagination
                background
                align="center"
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="currentPage"
                :page-sizes="[5]"
                :page-size="pageSize"
                layout="prev, pager, next"
                :total="tableData.length">
            </el-pagination>
        </div>
        <!-- 分页结束 -->
        <!-- 查看详情开始 -->
        <el-dialog
            :visible.sync="dialogVisible"
            width="95%"
            >
            <div style="width:100%">
                <div style="width:50%;float:right">
                <div class="pictureOne">{{}}</div>
                <div class="divOne">学生男女人数比例</div>
                </div>
                <div>
                <div class="pictureTwo">{{}}</div>
                <div class="divTwo">教师男女人数比例</div>
                </div>
            </div>
            <div>
            <div>
            <div class="pictureThree">{{}}</div>
            <div class="divThree">学生人数各科目平均成绩柱状图</div>
            </div>
            </div>
        </el-dialog>
        <!-- 查看详情结束 -->
    </div>
</template>

<script>
export default {
    data() {
        return {
        // 搜索输入框
        input: '',
         // 表格数据
        tableData: [
        {
            professionalClasses: '计算机与软件学院',
            StudentNumber: '100000'
        },
        {
            professionalClasses: '信息与商务管理学院',
            StudentNumber: '...........'
        },
        {
            professionalClasses: '数字艺术与设计学院',
            StudentNumber: '名字'
        },
        {
            professionalClasses: 'xxxxxxxxxxxxx',
            StudentNumber: 'namebalbala'
        },
        {
            professionalClasses: '计算机与软件学院',
            StudentNumber: '名字'
        },
        {
            professionalClasses: '信息与商务管理学院',
            StudentNumber: '...........'
        },
        {
            professionalClasses: '数字艺术与设计学院',
            StudentNumber: '名字'
        },
        {
            professionalClasses: 'xxxxxxxxxxxxx',
            StudentNumber: 'namebalbala'
        },
        ],
        // 分页
        currentPage: 1,
        pageSize:5,
        dialogVisible: false
        }
    },
    methods:{
        hReturn(){
            this.$router.push('/hSchool');
        },
                // 分页
        handleSizeChange(val) {
            this.pageSize=val;
        },
        // 分页
        handleCurrentChange(val) {
            this.currentPage=val;
        },
        // 关闭弹出框
        handleClose(done) {
        this.$confirm('确认关闭？')
            .then(_ => {
                done();
            })
            .catch(_ => {});
        }
    }
    }
</script>

<style scoped>
/* 大盒子 */
.box {
    background-color: #fff;
    height: 100%;
    width: 100%;
}

/* 搜索框 */
.inputSearch {
    border-radius: 30px;
    height: 40.8px;
    padding-left: 5%;
    width: 60%;
}

/* 搜索框边角 */
::v-deep .el-input__inner {
    border-radius: 23px;
    }

/* 搜索框按钮 */
.SearchButton {
    padding-top: 1%;
}

.boxOne {
    padding: 10px;
}

.boxTwo {
    padding: 10px;
}

.boxThree {
    padding: 10px;
}

.boxFour {
    padding-top: 10px;
}

.boxFive {
    padding-top: 10px;
}

.btnOne {
    margin-left: 5%;
}

.sumNum {
    padding-left: 5%;
}

/* 修改 表格单行的颜色 */
::v-deep .el-table tr {
	background-color: #F4F5FC;
}

/* 学生男女人数比例 */
.pictureOne {
    width:90%;
    height:200px;
    margin-left: 9%;
    border:2px solid #F4F5FC;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}

/* 教师人数比例男女 */
.pictureTwo {
    width:45%;
    height:200px;
    margin-left: 1%;
    border:2px solid #F4F5FC;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
.pictureThree {
    width:650vm;
    height:200px;
    border:2px solid #F4F5FC;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
.divOne{
    text-align: center;
    padding: 5px;
    /* margin-left: 40px; */
    margin-top: 15px;
}
.divTwo{
    text-align: center;
    padding: 5px;
    /* margin-left: 40px; */
    margin-top: 15px;
    margin-bottom: 15px;
}
.divThree{
    text-align: center;
    padding: 10px;
    margin-top: 10px;
}
</style>