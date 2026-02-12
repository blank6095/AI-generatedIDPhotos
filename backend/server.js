// backend/server.js
const express = require('express')
const cors = require('cors')
const axios = require('axios')

const app = express()
app.use(cors())
app.use(express.json())

// 替换为你的 REST Key
const GOEASY_REST_KEY = 'PR-366e135b404c4038bc8b58c5daa59641'
const GOEASY_PUBLISH_URL = 'https://rest-hangzhou.goeasy.io/publish'

// 接收前端消息并转发到 GoEasy
app.post('/send-message', async (req, res) => {
  try {
    const { content } = req.body

    if (!content) {
      return res.status(400).json({ error: '内容不能为空' })
    }

    // 调用 GoEasy REST API
    await axios.post(GOEASY_PUBLISH_URL, {
      appkey: GOEASY_REST_KEY,
      channel: 'public_chat', // 与前端订阅的频道一致
      content: content       // 必须是字符串
    })

    res.json({ success: true })
  } catch (error) {
    console.error('GoEasy 发送失败:', error.response?.data || error.message)
    res.status(500).json({ error: '消息发送失败' })
  }
})

const PORT = 3000
app.listen(PORT, () => {
  console.log(`🚀 后端启动: http://localhost:${PORT}`)
})