<template>
    <div class="box">
        <div class="boxOne">
            <!-- 搜索框开始 -->
            <div>
            <el-input
                size="mini"
                class="inputSearch"
                v-model="input"
                placeholder="根据姓名查询"
            >
            </el-input>
            <!-- 搜索按钮开始 -->
            <el-button
                size="mini"
                class="SearchButton"
                icon="el-icon-search"
                type="primary"
                circle
            ></el-button>
            <!-- 搜索按钮结束 -->
            </div>
            <!-- 搜索框结束 -->
            <div class="divBtn">
            <!-- 一键导入按钮开始 -->
            <el-button
            size="mini"
            type="primary"
            class="btnOne"
            >
            一键导入
            </el-button>
            <!-- 一键导入按钮结束 -->
            <!-- 格式下载开始 -->
            <el-button
            size="mini"
            type="primary"
            class="btnTwo"
            >
            格式下载
            </el-button>
            <!-- 格式下载结束 -->
            </div>
            <div class="addBtn">
            <!-- 添加按钮开始 -->
            <el-button
            size="mini"
            type="primary"
            plain
            @click="handleAdd()"
            >
            添加
            </el-button>
            <!-- 添加按钮结束 -->
            </div>
        </div>
        <!-- 表格开始 -->
        <div class="boxTwo">
            <el-table
            :data="tableData.slice((currentPage - 1) * pageSize,currentPage * pageSize)"
            :stripe="true"
            border
            style="width: 85%;top:5%;left:5%"
            :header-cell-style="{fontWeight:'bold', fontSize:'14px', color:'#000'}"
            >
            <el-table-column
                align="center"
                label="所属学院"
                prop="collegeSchool"
                min-width="200"
            >
            </el-table-column>
            <el-table-column
                align="center"
                label="名称"
                prop="NameName"
                min-width="300"
            >
            </el-table-column>
            <el-table-column
                align="center"
                label="数据操作"
                min-width="300"
                >
            <template slot-scope="scope">
            <!-- 详情按钮开始 -->
            <el-button
                size="mini"
                type="warning"
                @click="handleEdit(scope.$index, scope.row)">
                详 情
            </el-button>
            <!-- 详情按钮结束 -->
            <!-- 修改按钮开始 -->
            <el-button
                size="mini"
                type="primary"
                @click="handleRemove(scope.$index, scope.row)">
                修 改
            </el-button>
            <!-- 修改按钮结束 -->
            <!-- 删除按钮开始 -->
            <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)">
                删 除
            </el-button>
            <!-- 删除按钮结束 -->
            </template>
            </el-table-column>
            </el-table>
        </div>
        <!-- 表格结束 -->
        <!-- 学院总数开始 -->
        <div class="boxThree">
        <span class="sumNum">学院总数 : num</span>
        </div>
        <!-- 学院总数结束 -->
        <div class="boxFive">
        <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-sizes="[5]"
            :page-size="pageSize"
            layout="total, jumper"
            :total="tableData.length"
            align="center"
            >
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
        <!-- 修改按钮的弹窗开始 -->
        <el-dialog
        :visible.sync="modificationForm"
        width="90%"
        center
        >
            <el-form
            :model="formaAlter"
            :rules="DialogRules"
            ref="formaAlter"
            >
                <el-form-item
                label="教师姓名"
                :label-width="formLabelWidth"
                prop="teacherName"
                >
                    <el-input
                    v-model="formaAlter.teacherName"
                    ></el-input>
                </el-form-item>
                <el-form-item
                label="教师年龄" :label-width="formLabelWidth"
                prop="TeacherAge"
                >
                    <el-input
                    v-model="formaAlter.TeacherAge"
                    ></el-input>
                </el-form-item>
                <el-form-item
                label="教师性别"
                :label-width="formLabelWidth"
                prop="teacherGender"
                >
                    <el-input
                    v-model="formaAlter.teacherGender"
                    ></el-input>

                </el-form-item>
                <el-form-item
                label="教师邮箱" :label-width="formLabelWidth"
                prop="TeacherEmail"
                >
                    <el-input
                    v-model="formaAlter.TeacherEmail"
                    ></el-input>
                </el-form-item>
                <el-form-item
                label="教师电话"
                :label-width="formLabelWidth"
                prop="teacherPhone"
                >
                    <el-input
                    v-model="formaAlter.teacherPhone"
                    ></el-input>
                </el-form-item>
                <el-form-item
                label="所属学院" :label-width="formLabelWidth"
                prop="TeacherCollege"
                >
                    <el-input
                    v-model="formaAlter.TeacherCollege"
                    ></el-input>
                </el-form-item>
                <el-form-item
                label="教授科目" :label-width="formLabelWidth"
                prop="ProfessorSubject"
                >
                    <el-input
                    v-model="formaAlter.ProfessorSubject"
                    ></el-input>
                </el-form-item>
                <el-form-item
                label="是否院长" :label-width="formLabelWidth"
                prop="WhetherDean"
                >
                    <el-input
                    v-model="formaAlter.WhetherDean"
                    ></el-input>
                </el-form-item>
                <el-form-item
                label="教师职称" :label-width="formLabelWidth"
                prop="TeachersTitle"
                >
                    <el-input
                    v-model="formaAlter.TeachersTitle"
                    ></el-input>
                </el-form-item>
            </el-form>
            <div class="btnDialog">
                <el-button
                type="primary"
                style="display:block;margin:0 auto"
                @click="submitForm('formaAlter')">提 交</el-button>
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
                label="教师姓名"
                :label-width="formLabelWidth"
                prop="teacherNames"
                >
                    <el-input
                    v-model="formAdd.teacherNames"
                    ></el-input>
                </el-form-item>
                <el-form-item
                label="教师年龄"
                :label-width="formLabelWidth"
                prop="TeacherAges"
                >
                <el-input
                v-model="formAdd.TeacherAges"
                ></el-input>
                </el-form-item>
                <el-form-item
                label="教师性别"
                :label-width="formLabelWidth"
                prop="teacherGenders"
                >
                    <el-input
                    v-model="formAdd.teacherGenders"
                    ></el-input>

                </el-form-item>
                <el-form-item
                label="教师邮箱" :label-width="formLabelWidth"
                prop="TeacherEmails"
                >
                    <el-input
                    v-model="formAdd.TeacherEmails"
                    ></el-input>
                </el-form-item>
                <el-form-item
                label="教师电话"
                :label-width="formLabelWidth"
                prop="teacherPhones"
                >
                    <el-input
                    v-model="formAdd.teacherPhones"
                    ></el-input>
                </el-form-item>
                <el-form-item
                label="所属学院" :label-width="formLabelWidth"
                prop="TeacherColleges"
                >
                    <el-input
                    v-model="formAdd.TeacherColleges"
                    ></el-input>
                </el-form-item>
                <el-form-item
                label="教授科目" :label-width="formLabelWidth"
                prop="ProfessorSubjects"
                >
                    <el-input
                    v-model="formAdd.ProfessorSubjects"
                    ></el-input>
                </el-form-item>
                <el-form-item
                label="是否院长" :label-width="formLabelWidth"
                prop="WhetherDeans"
                >
                    <el-input
                    v-model="formAdd.WhetherDeans"
                    ></el-input>
                </el-form-item>
                <el-form-item
                label="教师职称" :label-width="formLabelWidth"
                prop="TeachersTitles"
                >
                    <el-input
                    v-model="formAdd.TeachersTitles"
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
            collegeSchool: '计算机与软件学院',
            NameName: '名字'
        },
        {
            collegeSchool: '信息与商务管理学院',
            NameName: '...........'
        },
        {
            collegeSchool: '数字艺术与设计学院',
            NameName: '名字'
        },
        {
            collegeSchool: 'xxxxxxxxxxxxx',
            NameName: 'namebalbala'
        },
        {
            collegeSchool: '计算机与软件学院',
            NameName: '名字'
        },
        {
            collegeSchool: '信息与商务管理学院',
            NameName: '...........'
        },
        {
            collegeSchool: '数字艺术与设计学院',
            NameName: '名字'
        },
        {
            collegeSchool: 'xxxxxxxxxxxxx',
            NameName: 'namebalbala'
        },
        ],
        // 分页
        currentPage: 1,
        pageSize:5,
        // 修改
        modificationForm: false,
        // 添加
        AddForm: false,
        formaAlter:{
            teacherName:'',
            TeacherAge:'',
            teacherGender:'',
            TeacherEmail:'',
            teacherPhone:'',
            TeacherCollege:'',
            ProfessorSubject:'',
            WhetherDean:'',
            TeachersTitle:''
            },
        // 添加后的数据
        formAdd:{
            teacherNames:'',
            TeacherAges:'',
            teacherGenders:'',
            TeacherEmails:'',
            teacherPhones:'',
            TeacherColleges:'',
            ProfessorSubjects:'',
            WhetherDeans:'',
            TeachersTitles:''
            },
            formLabelWidth: '80px',
            // 修改后的数据
            formaAlterTwo:{
                teacherName:'',
                TeacherAge:'',
                teacherGender:'',
                TeacherEmail:'',
                teacherPhone:'',
                TeacherCollege:'',
                ProfessorSubject:'',
                WhetherDean:'',
                TeachersTitle:''
            },
        // 修改弹窗校验规则
        DialogRules:{
            teacherName:[{required:true,message:"注意教师姓名不能为空呐",trigger:"blur"}],
            TeacherAge:[{required:true,message:"注意教师年龄不能为空呐",trigger:"blur"}],
            teacherGender:[{required:true,message:"注意教师性别不能为空呐",trigger:"blur"}],
            TeacherEmail:[{required:true,message:"注意教师邮箱不能为空呐",trigger:"blur"}],
            teacherPhone:[{required:true,message:"注意教师电话不能为空呐",trigger:"blur"}],
            TeacherCollege:[{required:true,message:"注意所属学院不能为空呐",trigger:"blur"}],
            ProfessorSubject:[{required:true,message:"注意教授科目不能为空呐",trigger:"blur"}],
            WhetherDean:[{required:true,message:"注意是否院长不能为空呐",trigger:"blur"}],
            TeachersTitle:[{required:true,message:"注意教师职称不能为空呐",trigger:"blur"}]
        },
        // 添加的校验规则
        DialogRulesTwo:{
            teacherNames:[{required:true,message:"注意教师姓名不能为空呐",trigger:"blur"}],
            TeacherAges:[{required:true,message:"注意教师年龄不能为空呐",trigger:"blur"}],
            teacherGenders:[{required:true,message:"注意教师性别不能为空呐",trigger:"blur"}],
            TeacherEmails:[{required:true,message:"注意教师邮箱不能为空呐",trigger:"blur"}],
            teacherPhones:[{required:true,message:"注意教师电话不能为空呐",trigger:"blur"}],
            TeacherColleges:[{required:true,message:"注意所属学院不能为空呐",trigger:"blur"}],
            ProfessorSubjects:[{required:true,message:"注意教授科目不能为空呐",trigger:"blur"}],
            WhetherDeans:[{required:true,message:"注意是否院长不能为空呐",trigger:"blur"}],
            TeachersTitles:[{required:true,message:"注意教师职称不能为空呐",trigger:"blur"}]
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
            message: '删除成功!'
            });
        }).catch(() => {
            this.$message({
            type: 'info',
            message: '已取消删除'
            });
        });
        },
        // 修改按钮
        handleRemove(){
            this.modificationForm = true
        },
        // 添加按钮
        handleAdd(){
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
        // 修改 + 添加弹窗提交按钮
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
        if (valid) {
            this.$message({
            message: '操作成功~',
            type: 'success'
        });
        this.formaAlter.teacherName = "";
        this.formaAlter.TeacherAge = "";
        this.formaAlter.teacherGender = "";
        this.formaAlter.TeacherEmail = "";
        this.formaAlter.teacherPhone = "";
        this.formaAlter.TeacherCollege = "";
        this.formaAlter.ProfessorSubject = "";
        this.formaAlter.WhetherDean = "";
        this.formaAlter.TeachersTitle = "";
        this.modificationForm = false;
        this.formAdd.teacherNames = "";
        this.formAdd.TeacherAges = "";
        this.formAdd.teacherGenders = "";
        this.formAdd.TeacherEmails = "";
        this.formAdd.teacherPhones = "";
        this.formAdd.TeacherColleges = "";
        this.formAdd.ProfessorSubjects = "";
        this.formAdd.WhetherDeans = "";
        this.formAdd.TeachersTitles = "";
        this.AddForm = false;
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
            this.$router.push('/hTeacherDetails');
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

.boxFour {
    padding: 10px;
}

.boxFive {
    padding-top: 10px;
}

.sumNum {
    padding-left: 5%;
}

/* 搜索框 */
.inputSearch {
    border-radius: 30px;
    height: 40.8px;
    padding-left: 5%;
    width: 50%;
}

/* 搜索框边角 */
::v-deep .el-input__inner {
    border-radius: 23px;
    }

/* 搜索框按钮 */
.SearchButton {
    padding-top: 1%;
}

/* 两种按钮 */
.divBtn {
    padding: 1%;
    padding-top: 1%;
    padding-left: 5%;
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

</style>