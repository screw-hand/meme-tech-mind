import { useEffect, useState } from "react"
import { Ref } from "vue"

export function useDevice() {
  const [isRealPc, setIsRealPc] = useState(true)

  const checkRealPc = () => {
    // 检查指针类型（检测设备是否支持精确输入：鼠标等）
    const hasFinePointer = window.matchMedia("(any-pointer: fine)").matches

    // 检查是否是移动平台
    const isMobilePlatform =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )

    // 新的UA Client Hints API (如果浏览器支持)
    const isMobileClient = (navigator as any).userAgentData?.mobile || false

    // 组合判断：必须满足以下条件才认为是真正的PC
    // 1. 有精确指针输入（鼠标）
    // 2. 不是移动平台
    // 3. 不是移动客户端
    return hasFinePointer && !isMobilePlatform && !isMobileClient
  }

  useEffect(() => {
    // 初始化值
    setIsRealPc(checkRealPc())

    // 设置媒体查询监听器
    const mediaQueryList = window.matchMedia("(any-pointer: fine)")
    const handleChange = () => setIsRealPc(checkRealPc())

    mediaQueryList.addEventListener("change", handleChange)

    // 清理函数
    return () => {
      mediaQueryList.removeEventListener("change", handleChange)
    }
  }, [])

  return {
    isRealPc,
  }
}
