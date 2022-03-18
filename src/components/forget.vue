<template>
<div class="header">
    <div class="forget_container">
        <el-form :rules="forgetRules" :model="forgetForm" >
            <h2 class="forgetTitle">忘记密码</h2>
            <el-form-item prop="email">
                <el-input type="text" auto-complete="false" v-model="forgetForm.email" placeholder="请输入邮箱"></el-input>
            </el-form-item>
            <el-form-item prop="password">
                <el-input type="password" auto-complete="false" v-model="forgetForm.password" placeholder="请输入密码" show-password></el-input>
            </el-form-item>
            <el-form-item prop="confirm">
                <el-input type="password" auto-complete="false" v-model="forgetForm.confirm" placeholder="请确认密码" show-password></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="info" style="width:100%" @click="backLogin">返回登录</el-button>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" style="width:100%" @click="send">发生验证</el-button>
            </el-form-item>
        </el-form>
    </div>
    </div>
</template>

<script>
export default {
    data(){
         // 验证邮箱的规则
    var checkEmail = (rule, value, cb) => {
      const regEmail = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/

      if (regEmail.test(value)) {
        // 合法邮箱
        return cb()
      }

      cb(new Error('请输入合法的邮箱'))
    }
        return{
            forgetForm:{
                email:'',
                password:'',
                confirm:''
            },
            forgetRules:{
        email: [{ required: true, message: "请输入邮箱", trigger: "biur" },
         { validator: checkEmail, trigger: 'blur' }],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
        confirm: [{ required: true, message: "请确认密码", trigger: "blur" }],
            }
        }
    },
    methods:{
        backLogin(){
            this.$router.push("./login");
        },
        send(){
            this.$router.push("./login");
        }
    }
}
</script>

<style scoped>
.header {
    height: 100%;
position: relative;
background: linear-gradient(60deg,rgba(84,58,183,1) 0%, rgba(0,172,193,1) 100%);
color: wheat;
}
h2{
      font-family: 'Lato','sans-serif';
      font-weight: 300;
      /* font-spacing:2px; */
      font-size: 28px;
}
.forget_container{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
  border-radius: 15px;
  background-clip: border-box;
  width: 350px;
  padding: 15px 35px 15px 35px;
  background: #fff;
  border: 1px solid rgb(227, 236, 236);
  box-shadow: 0 0 25px #caccc6c6;
}
.forgetTitle{
      text-align: center;
  margin: 10px auto 15px auto;
}
.el-form-item__content{
    display: flex;
    align-items: center;
}
@media (max-width:768px) {
    .forget_container{
        width: 250px;
    }
}
</style>
