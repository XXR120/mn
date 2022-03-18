<template>
    <div class="box">
        <!-- 返回按钮 -->
            <el-button
            type="primary"
            plain
            size="mini"
            @click="goTo()"
            class="btnOne"
            >
            返回
            </el-button>
        <!-- 返回按钮结束 -->
        <!-- 表格开始 -->
        <div class="boxOne">
        <el-form
        :label-position="labelPosition"
        ref="DetailsForm"
        :model="DetailsForm"
        label-width="100px"
        style="padding-left:10%"
        :inline="true"
        >
        <el-form-item
        label="姓名"
        >
        <el-input
            v-model="DetailsForm.TeacherName"
            :disabled="true"
        >
        </el-input>
        </el-form-item>
        </el-form>
        <el-form
        ref="DetailsFormTwo"
        :model="DetailsFormTwo"
        :label-position="labelPosition"
        label-width="100px"
        style="padding-left:10%"
        :inline="true"
        >
        <el-form-item label="年龄">
            <el-input
            v-model="DetailsFormTwo.TeacherAge"
            :disabled="true"
            ></el-input>
        </el-form-item>
        <el-form-item
        label="性别"
        >
            <el-input
            v-model="DetailsFormTwo.TeacherSex"
            :disabled="true"
            ></el-input>
        </el-form-item>
        </el-form>
        <el-form
        ref="DetailsFormThree"
        :label-position="labelPosition"
        :model="DetailsFormThree"
        label-width="100px"
        style="padding-left:10%"
        :inline="true"
        >
        <el-form-item label="电话">
            <el-input
            v-model="DetailsFormThree.TeacherPhone"
            :disabled="true"
            style="width:100%;"
            ></el-input>
        </el-form-item>
        <el-form-item
        label="邮箱"
        >
            <el-input
            v-model="DetailsFormThree.TeacherEmail"
            :disabled="true"
            style="width:100%;"
            ></el-input>
        </el-form-item>
        </el-form>
        <el-form
        ref="DetailsFormFour"
        :model="DetailsFormFour"
        :label-position="labelPosition"
        label-width="100px"
        style="padding-left:10%"
        :inline="true"
        >
        <el-form-item label="所属学院">
            <el-input
            v-model="DetailsFormFour.TeacherCollege"
            :disabled="true"
            style="width:100%;"
            ></el-input>
        </el-form-item>
        <el-form-item
        label="教授科目"
        >
            <el-input
            v-model="DetailsFormFour.TeacherSubject"
            :disabled="true"
            style="width:100%;"
            ></el-input>
        </el-form-item>
        </el-form>
        <el-form
        ref="DetailsFormFive"
        :model="DetailsFormFive"
        :label-position="labelPosition"
        label-width="100px"
        style="padding-left:10%"
        :inline="true"
        >
        <el-form-item label="教师是否院长">
            <el-input
            v-model="DetailsFormFive.TeacherWhether"
            :disabled="true"
            style="width:100%;"
            ></el-input>
        </el-form-item>
        <el-form-item
        label="教授职称"
        >
            <el-input
            v-model="DetailsFormFive.TeacherRank"
            :disabled="true"
            style="width:100%;"
            ></el-input>
        </el-form-item>
        </el-form>
        </div>
        <!-- 表格结束 -->
        <!-- 成绩表格开始 -->
        <el-table
            :data="tableData"
            :stripe="true"
            style="width: 70%;left:8%;margin:2%"
            height="200"
            border
            :header-cell-style="{fontWeight:'bold', fontSize:'14px', color:'#000'}"
        >
        <el-table-column
            prop="TeacherClass"
            label="教师教授班级"
            min-width="150"
            >
        </el-table-column>
        <el-table-column
            prop="AverageScore"
            label="期末平均分"
            min-width="100">
        </el-table-column>
        </el-table>
        <!-- 成绩表格结束 -->
    </div>
</template>

<script>
export default {
data() {
    return {
        labelPosition: 'left',
        DetailsForm:{
            TeacherName:'',
        },
        DetailsFormTwo:{
            TeacherAge:'',
            TeacherSex:''
        },
        DetailsFormThree:{
            TeacherPhone:'',
            TeacherEmail:''
        },
        DetailsFormFour:{
            TeacherCollege:'',
            TeacherSubject:''
        },
        DetailsFormFive:{
            TeacherWhether:'',
            TeacherRank:''
        },
        // 成绩表格
        tableData: [{
            TeacherClass: '2016-05-03',
            AverageScore: '王小虎'
        }, {
            TeacherClass: '2016-05-02',
            AverageScore: '王小虎'
        }, {
            TeacherClass: '2016-05-04',
            AverageScore: '王小虎'
        }, {
            TeacherClass: '2016-05-01',
            AverageScore: '王小虎'
        }, {
            TeacherClass: '2016-05-08',
            AverageScore: '王小虎'
        }, {
            TeacherClass: '2016-05-06',
            AverageScore: '王小虎'
        }, {
            TeacherClass: '2016-05-07',
            AverageScore: '王小虎'
        }]
    }
},
    methods:{
        //    返回按钮
        goTo(){
            this.$router.replace('/hTeacher');
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

/* 返回按钮 */
.btnOne {
    margin: 10px;
    right: -85%;
}

/* 修改 表格单行的颜色 */
::v-deep .el-table tr {
	background-color: #F4F5FC;
}
</style>