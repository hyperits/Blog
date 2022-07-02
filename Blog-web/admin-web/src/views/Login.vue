<template>
  <div class="container">
    <div class="loginBox">
      <a-form :rules="rules"
              ref="loginFormRef"
              :model="formdata"
              class="loginForm">
        <a-form-item name="username">
          <a-input placeholder="请输入用户名">

          </a-input>
        </a-form-item>

        <a-form-item name="password">
          <a-input-password placeholder="请输入密码">

          </a-input-password>
        </a-form-item>

        <a-form-item class="loginBtn">
          <a-button type="primary"
                    style="margin:10px"
                    @click="login">登陆</a-button>
          <a-button type="info"
                    style="margin:10px"
                    @click="resetFrom">取消</a-button>
        </a-form-item>

      </a-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formdata: {
        username: '',
        password: '',
      },
      rules: {
        username: [
          {
            required: true,
            message: 'Please input user name',
            trigger: 'blur',
          },
          {
            min: 4,
            max: 12,
            message: 'Length should be 4 to 12',
            trigger: 'blur',
          },
        ],
        password: [
          {
            required: true,
            message: 'Please input user password',
            trigger: 'blur',
          },
          {
            min: 4,
            max: 12,
            message: 'Length should be 4 to 12',
            trigger: 'blur',
          },
        ],
      },
    }
  },
  methods: {
    resetFrom() {
      this.$refs.loginFormRef.resetFields()
    },
    login() {
      console.log(this.$refs)
      this.$refs.loginFormRef.validate((valid) => {
        console.log(valid)
      })
    },
  },
}
</Script>

<style scoped>
.container {
  height: 100%;
  background-color: rgb(9, 104, 187);
}

.loginBox {
  width: 450px;
  height: 300px;
  background-color: aliceblue;
  position: absolute;
  top: 50%;
  left: 70%;
  transform: translate(-50%, -50%);
  border-radius: 9px;
}

.loginForm {
  width: 100%;
  position: absolute;
  bottom: 10px;
  padding: 0 20px;
  box-sizing: border-box;
}

.loginBtn {
  display: flex;
  justify-content: flex-end;
}
</style>

