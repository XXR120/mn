<template>
    <div class="box">
        <div class="boxOne">
            <!-- 搜索框开始 -->
            <div>
            <el-input
                class="inputSearch"
                size="mini"
                v-model="input"
                placeholder="根据名称、时间查询"
            >
            </el-input>
            <!-- 搜索按钮开始 -->
            <el-button
                class="SearchButton"
                size="mini"
                icon="el-icon-search"
                type="primary"
                circle
            ></el-button>
            <!-- 搜索按钮结束 -->
        </div>
            <!-- 搜索框结束 -->
            <!-- 添加按钮开始 -->
            <div class="addBtn">
            <el-button
                type="primary"
                size="mini"
                plain
                @click="btnAdd()"
            >
            添加
            </el-button>
            </div>
            <!-- 添加按钮结束 -->
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
                label="所属学院"
                prop="BelongSchool"
                min-width="200"
            >
            </el-table-column>
            <el-table-column
                align="center"
                label="专业班级"
                prop="ProfessionalClass"
                min-width="200"
            >
            </el-table-column>
            <el-table-column
                align="center"
                label="人数"
                prop="ProfessionalNumber"
                min-width="150"
            >
            </el-table-column>
            <el-table-column
                align="center"
                label="数据操作"
                min-width="300"
            >
            <template slot-scope="scope">
            <el-button
                size="mini"
                type="warning"
                @click="handleEdit(scope.$index, scope.row)">
                详 情
            </el-button>
            <el-button
                size="mini"
                type="primary"
                @click="handleRemove(scope.$index, scope.row)">
                修 改
            </el-button>
            <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)">
                删 除
            </el-button>
            </template>
            </el-table-column>
            </el-table>
        </div>
        <!-- 表格结束 -->
        <!-- 专业总数开始 -->
        <div class="boxThree">
        <span class="sumNum">专业总数 : num</span>
        </div>
        <!-- 专业总数结束 -->
        <div class="boxFive">
        <el-pagination
        align="center"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-sizes="[6]"
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
                :page-sizes="[6]"
                :page-size="pageSize"
                layout="prev, pager, next"
                :total="tableData.length">
            </el-pagination>
        </div>
        <!-- 分页结束 -->
        <!-- 修改按钮的弹窗开始 -->
        <el-dialog
        :visible.sync="modificationForm"
        width="90%"
        center
        >
            <el-form
            :model="formaAlter"
            :rules="DialogRules"
            ref="form"
            >
                <el-form-item
                label="所属学院"
                :label-width="formLabelWidth"
                prop="collegeName"
                >
                    <el-input
                    v-model="formaAlter.collegeName"
                    ></el-input>
                </el-form-item>
                <el-form-item
                label="专业名称" :label-width="formLabelWidth"
                prop="presidentName"
                >
                    <el-input
                    v-model="formaAlter.presidentName"
                    ></el-input>
                </el-form-item>
            </el-form>
            <div class="btnDialog">
                <el-button
                type="primary"
                style="display:block;margin:0 auto"
                @click="submitForm('form')">提 交</el-button>
            </div>
        </el-dialog>
        <!-- 修改按钮的弹窗结束 -->
        <!-- 添加按钮的弹窗开始 -->
        <el-dialog
            :visible.sync="AddForm"
            width="90%"
            center
        >
            <el-form
            :model="formAdd"
            :rules="DialogRulesTwo"
            ref="formAdd"
            >
                <el-form-item
                label="所属学院"
                :label-width="formLabelWidth"
                prop="collegeNames"
                >
                    <el-input
                    v-model="formAdd.collegeNames"
                    ></el-input>
                </el-form-item>
                <el-form-item
                label="专业名称" :label-width="formLabelWidth"
                prop="presidentNames"
                >
                    <el-input
                    v-model="formAdd.presidentNames"
                    ></el-input>
                </el-form-item>
            </el-form>
            <div class="btnDialog">
                <el-button
                type="primary"
                style="display:block;margin:0 auto"
                @click="submitForm('formAdd')">提 交</el-button>
            </div>
        </el-dialog>
        <!-- 添加按钮的弹窗结束 -->
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
            BelongSchool: '计算机与软件学院',
            ProfessionalClass: '名字',
            ProfessionalNumber:'23'
        },
        {
            BelongSchool: '信息与商务管理学院',
            ProfessionalClass: '...........',
            ProfessionalNumber:'23'
        },
        {
            BelongSchool: '数字艺术与设计学院',
            ProfessionalClass: '名字',
            ProfessionalNumber:'23'
        },
        {
            BelongSchool: 'xxxxxxxxxxxxx',
            ProfessionalClass: 'namebalbala',
            ProfessionalNumber:'23'
        },
        {
            BelongSchool: '计算机与软件学院',
            ProfessionalClass: '名字',
            ProfessionalNumber:'23'
        },
        {
            BelongSchool: '信息与商务管理学院',
            ProfessionalClass: '...........',
            ProfessionalNumber:'23'
        },
        {
            BelongSchool: '数字艺术与设计学院',
            ProfessionalClass: '名字',
            ProfessionalNumber:'23'
        },
        {
            BelongSchool: 'xxxxxxxxxxxxx',
            ProfessionalClass: 'namebalbala',
            ProfessionalNumber:'23'
        },
        ],
        // 分页
        currentPage: 1,
        pageSize:6,
        // 修改
        modificationForm: false,
        // 添加
        AddForm: false,
        // 修改dialog
        formaAlter:{
            collegeName:'',
            presidentName:''
        },
        formLabelWidth: '80px',
        // 添加dialog
        formAdd:{
            collegeNames:'',
            presidentNames:''
        },
        // 修改弹窗校验规则
        DialogRules:{
            collegeName:[{required:true,message:"注意学院名称不能为空呐",trigger:"blur"}],
            presidentName:[{required:true,message:"注意院长名称不能为空呐",trigger:"blur"}]
        },
        // 添加弹窗校验规则
        DialogRulesTwo:{
            collegeNames:[{required:true,message:"注意学院名称不能为空呐",trigger:"blur"}],
            presidentNames:[{required:true,message:"注意院长名称不能为空呐",trigger:"blur"}]
        },
        }
    },
        methods: {
        // 删除按钮
        handleDelete(){
            this.$confirm('此操作将永久删除该数据, 是否继续?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning',
            center: true,
            roundButton: true
        }).then(() => {
            this.$message({
            type: 'success',
            message: '删除成功!~'
            });
        }).catch(() => {
            this.$message({
            type: 'info',
            message: '已取消删除~'
            });
        });
        },
        // 修改按钮
        handleRemove(){
            this.modificationForm = true
        },
        // 添加按钮
        btnAdd(){
            this.AddForm = true
        },
        // 分页
        handleSizeChange(val) {
            this.pageSize=val;
        },
        // 分页
        handleCurrentChange(val) {
        this.currentPage=val;
        },
        // 修改弹窗提交按钮
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
        if (valid) {
            this.$message({
            message: '操作成功~',
            type: 'success'
        });
        // 修改
        this.formaAlter.collegeName = "";
        this.formaAlter.presidentName = "";
        this.modificationForm = false
        // 添加
        this.formAdd.collegeNames = "";
        this.formAdd.presidentNames = "";
        this.AddForm = false
        } else {
        this.$message({
            message: '注意填完所有的信息哦~',
            type: 'warning'
        });
            return false;
                }
            });
        },
        // 详情页面
        handleEdit(){
            this.$router.push('/hPC');
        }
    },
}
</script>

<style scoped>
/* 大盒子 */
.box {
    background-color: #fff;
    height: 100%;
    width: 100%;
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

.boxFive {
    padding-top: 10px;
}

.boxFour {
    padding: 10px;
}

.sumNum {
    padding-left: 5%;
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

/* 添加按钮 */
.addBtn {
    padding-top: 1%;
    padding-left: 5%;
}

/* 修改 表格单行的颜色 */
::v-deep .el-table tr {
	background-color: #F4F5FC;
}

/* 添加按钮 */
.btnThree {
    top: 3%;
    right: -60%;
}
</style>