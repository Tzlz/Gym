<template>
  <q-page class="flex flex-center">
    <div class="row justify-center">
      <q-form
        @submit="Register"
        class="q-gutter-md"
      >
        <div class="text-h6 main-color" style="margin-left: 20px">用户名</div>
        <q-input outlined bottom-slots v-model="username" label="username">
          <template v-slot:append>
            <q-icon name="close" @click="text = ''" class="cursor-pointer" />
          </template>
          <template v-slot:hint>
            Please input your username
          </template>
        </q-input>

        <div class="text-h6 main-color" style="margin-left: 20px">密码</div>
        <q-input outlined bottom-slots v-model="password" label="password">
          <template v-slot:append>
            <q-icon
              :name="isPwd ? 'visibility_off' : 'visibility'"
              class="cursor-pointer"
              @click="isPwd = !isPwd"
            />
          </template>
          <template v-slot:hint>
            Please input your password
          </template>
        </q-input>
        <div class="text-h6 main-color" style="margin-left: 20px">确认</div>
        <q-input outlined bottom-slots v-model="password" label="password" >
          <template v-slot:append>
            <q-icon
              :name="isPwd ? 'visibility_off' : 'visibility'"
              class="cursor-pointer"
              @click="isPwd = !isPwd"
            />
          </template>
          <template v-slot:hint>
            Please confirm your password
          </template>
        </q-input>
        <q-btn
          dense
          class="q-px-xl q-py-xs text-h5"
          type="submit"
          color="secondary"
          style="width: 95%; background: #76b8c8; color: white"
          label="注册"></q-btn>
        <div class="text-h8 main-color" style="margin-left: 20px">已有账户？登录</div>
      </q-form>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'Register',
  data () {
    return {
      username: '',
      password: '',
      isPwd: true
    }
  },
  methods: {
    Register () {
      this.simulateProgress(this.success)
      // this.$router.push({
      //   path: '/user/registerResult',
      //   query: { email: this.email }
      // })
    }
  }
}
</script>
<style scoped>

</style>
