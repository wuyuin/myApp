<template>
  <div class="login_container">
    <div class="login_box">
      <!-- 头像区域 -->
      <div class="avatar_box">
        <img
          src="../../assets/logo.png"
          alt=""
        >
      </div>
      <!-- 登陆表单区域 -->
      <el-form
        label-width="80px"
        class="login_form"
        :rules="loginRules"
        :model="loginForm"
        ref="loginFormRef"
      >
        <el-form-item
          label="用户名"
          prop="username"
        >

          <el-input
            placeholder="请输入用户名"
            v-model="loginForm.username"
          ></el-input>

        </el-form-item>
        <el-form-item
          label="密码"
          prop="password"
        >

          <el-input
            type='password'
            placeholder="请输入密码"
            v-model="loginForm.password"
          ></el-input>

        </el-form-item>
        <el-form-item class="btns">
          <el-button
            type="primary"
            @click="onSubmit"
          >登录</el-button>
          <el-button @click="resetForm">重置密码</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>

</template>

<script>
export default {
  name: "Login",
  data () {
    return {
      loginForm: {
        username: "",
        password: ""
      },
      loginRules: {
        username: [{ required: true, message: "请输入用户名", trigger: "blur" },
        { min: 3, max: 15, message: "用户名长度在3到15个字符", trigger: "blur" }
        ],
        password: [{ required: true, message: "请输入登录密码", trigger: "blur" },
        { min: 6, max: 20, message: "密码长度在6到20个字符", trigger: "blur" }]

      }
    }
  },
  methods: {
    onSubmit () {
      this.$refs.loginFormRef.validate(async (valid) => {
        // console.log(valid)  vaild 是一个boolean true false
        if (!valid) return;
        const { data: res } = await this.$axios.post("login", this.loginForm)
        // console.log(result)//结果是promise对象
        // console.log(res)
        if (res.meta.status !== 200) return this.$message.error("登陆失败")
        // this.$meassge({ message: "登陆成功", type: "success" })
        this.$message.success("登陆成功")

        window.sessionStorage.setItem("token", res.data.token)
        // 编程式导航  
        this.$router.push("/home")

      })

    },
    //重置表单
    resetForm () {
      //console.log(this)
      this.$refs.loginFormRef.resetFields()


    }
  }

}
</script>

<style scoped lang="less">
.login_container {
  background-color: rgb(70, 100, 182);
  height: 100%;
}
.login_box {
  width: 450px;
  height: 300px;
  background-color: aliceblue;
  border-radius: 3px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.avatar_box {
  width: 50px;
  height: 50px;
  border: 1px solid rgb(124, 124, 128);
  border-radius: 50%;
  padding: 8px;
  box-shadow: 0 0 1px gainsboro;
  transform: translate(300%, -70%);
  background-color: aliceblue;
  img {
    width: 100%;
    height: 100%;
  }
  .btns {
    display: flex;
    justify-content: flex-end;
  }
}
</style>