<template>
  <view class="container">
    <h2>GoEasy 实时消息 Demo</h2>
    
    <!-- 消息列表 -->
    <view class="message-list">
      <view v-for="(msg, index) in messages" :key="index" class="message-item">
        {{ msg.content }}
      </view>
    </view>

    <!-- 发送消息 -->
    <view class="input-area">
      <input v-model="inputMsg" placeholder="输入消息..." @confirm="sendMessage" />
      <button @click="sendMessage">发送</button>
    </view>

    <!-- 状态 -->
    <view class="status">
      连接状态: {{ isConnected ? '✅ 已连接' : '❌ 未连接' }}
    </view>
  </view>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { initGoEasy, getGoEasy } from '@/utils/goeasy.js'

// 替换为你的 Common Key
const COMMON_KEY = 'BC-dc93b6f339d7426a8c1207e22fff322b'

const messages = ref([])
const inputMsg = ref('')
const isConnected = ref(false)

onMounted(() => {
  const goEasy = initGoEasy(COMMON_KEY)
  
  // 监听连接状态
  goEasy.on('connected', () => {
    isConnected.value = true
    // 订阅公共频道
    goEasy.subscribe({
      channel: 'public_chat',
      onMessage: (message) => {
        messages.value.push(message)
      }
    })
  })
  
  goEasy.on('disconnected', () => {
    isConnected.value = false
  })
})

const sendMessage = () => {
  if (!inputMsg.value.trim()) return
  
  // 调用后端 API 发送消息（不直接用 REST Key！）
  uni.request({
    url: 'http://localhost:3000/send-message',
    method: 'POST',
    data: {
      content: inputMsg.value
    },
    success: () => {
      inputMsg.value = ''
    },
    fail: (err) => {
      uni.showToast({ title: '发送失败', icon: 'none' })
    }
  })
}

onUnmounted(() => {
  const goEasy = getGoEasy()
  if (goEasy) {
    goEasy.disconnect()
  }
})
</script>

<style>
.container {
  padding: 20rpx;
}
.message-list {
  height: 60vh;
  overflow-y: auto;
  border: 1px solid #eee;
  padding: 20rpx;
  margin-bottom: 20rpx;
}
.message-item {
  padding: 10rpx 0;
  border-bottom: 1px dashed #ccc;
}
.input-area {
  display: flex;
  gap: 10rpx;
}
.input-area input {
  flex: 1;
  border: 1px solid #ccc;
  padding: 10rpx;
}
.status {
  margin-top: 20rpx;
  color: #666;
}
</style>