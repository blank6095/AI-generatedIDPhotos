// frontend/utils/goeasy.js
import GoEasy from 'goeasy-lite'

let goEasyInstance = null

export function initGoEasy(commonKey) {
  if (!goEasyInstance) {
    // 判断是否是微信小程序
    const isWeixin = typeof wx !== 'undefined'
    const host = isWeixin ? 'wx-hangzhou.goeasy.io' : 'hangzhou.goeasy.io'

    goEasyInstance = new GoEasy({
      host: host,
      appkey: commonKey
    })

    goEasyInstance.on('connected', () => {
      console.log('✅ GoEasy 连接成功')
    })
    goEasyInstance.on('disconnected', () => {
      console.log('❌ GoEasy 断开连接')
    })
  }
  return goEasyInstance
}

export function getGoEasy() {
  return goEasyInstance
}