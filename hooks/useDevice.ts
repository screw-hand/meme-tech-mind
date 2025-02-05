import { useEventListener } from "@vueuse/core"
import { onMounted, ref } from "vue"

export function useDevice() {
  const isRealPc = ref(true)
  const mediaQueryList = window.matchMedia("(any-pointer: fine)")

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

  useEventListener(mediaQueryList, "change", () => {
    isRealPc.value = checkRealPc()
  })

  // 初始化值
  onMounted(() => {
    isRealPc.value = checkRealPc()
  })

  return {
    isRealPc,
  }
}
