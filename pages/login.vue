<template>
  <div class="absolute inset-0 flex login-page">
    <div class="flex-1 desktop:block mobile:hidden" />
    <div class="flex-1 flex-center">
      <div class="login-card desktop:w-[400px] mobile:w-[80%] space-y-10">
        <div class="space-y-2">
          <img class="h-15 w-15" src="/logo.jpg">
          <div class="title text-2xl font-bold">
            现在立即登陆
          </div>
          <div class="text-sm flex items-center space-x-1">
            <span>没有帐号?</span>
            <ElLink style="--el-link-font-size: 0.875rem;" type="primary">
              注册一个
            </ElLink>
          </div>
        </div>

        <div class="login-form">
          <ElForm ref="loginFormRef" :model="loginModel" :rules="loginRules">
            <ElFormItem prop="username">
              <ElInput v-model="loginModel.username" placeholder="请输入用户名" size="large">
                <template #prepend>
                  用户名
                </template>
              </ElInput>
            </ElFormItem>
            <ElFormItem prop="password">
              <ElInput
                v-model="loginModel.password"
                placeholder="请输入密码"
                size="large"
                type="password"
              >
                <template #prepend>
                  密码
                </template>
              </ElInput>
            </ElFormItem>
            <ElFormItem>
              <ElButton
                class="w-full"
                size="large"
                type="primary"
                @click="onSubmit"
              >
                登录
              </ElButton>
            </ElFormItem>
          </ElForm>
        </div>
      </div>
    </div>
  </div>
  <div class="background">
    <div v-for="_ in 4" :key="_" class="wave" />
  </div>
</template>

<style lang="scss" scoped>
@use "sass:math";

.login-card{
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;

}
.login-form :deep(.el-input-group__prepend){
  background-color: var(--bg-color);
  color:var(--text-color-primary);
  min-width: 3em;
  font-size: 0.8rem;
  font-weight: bolder;
}

.background{
    position: absolute;
    inset: 0;
    z-index: -1;
    align-items: center;
    min-height: 100vh;
    background-color: fff;
    overflow: hidden;

    .wave {
        content: "";
        position: absolute;
        left: 50%;
        min-width: 300vw;
        min-height: 300vw;
        background: linear-gradient(60deg, rgba(84,58,183,1) 0%, rgba(0,172,193,1) 100%);
        animation: rotate 15s cubic-bezier(.55,.5,.45,.5) infinite;

        @for $i from 1 to 5{
          &:nth-child(#{$i}) {
            bottom: calc(15vh + #{$i * 5}px);
            opacity: calc(0.9 - #{$i * 0.1});
            animation-delay: #{-2 * $i}s;
            border-radius: #{calc(45 - $i * 0.5) + '%'};
          }
        }
    }
}

@keyframes rotate {
    0% {
        transform: translate3d(-50%, 0,0) rotateZ(0deg);
    }
    50% {
        transform: translate3d(-50%, -2%,0) rotateZ(180deg);
    }
    100% {
        transform: translate3d(-50%, 0%,0) rotateZ(360deg);
    }
}
</style>

<script setup lang="ts">
import type { FormInstance, FormRules } from 'element-plus'

const store = useStore()
const router = useRouter()
const loginFormRef = $ref<FormInstance>()
const loginModel = $ref({
  username: '',
  password: '',
})

const loginRules: FormRules = {
  username: [
    {
      required: true,
      message: '请输入用户名',
      trigger: 'blur',
    },
    {
      min: 4,
      max: 12,
      message: '用户名格式错误',
      trigger: 'blur',
    }],
  password: [
    {
      required: true,
      message: '请输入密码',
      trigger: 'blur',
    },
    {
      min: 6,
      max: 12,
      message: '密码格式错误',
      trigger: 'blur',
    }],
}

function onSubmit() {
  if (!loginFormRef) return

  loginFormRef?.validate((valid) => {
    if (valid) {
      store.user.updateToken(Math.random().toString(32).slice(2))
      store.user.updateUser({
        roles: ['ADMIN'],
      })
      location.replace('/')
    }
  })
}
</script>
