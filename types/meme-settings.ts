export interface MemeSettingsType {
  ai: {
    baseURL: string
    apiKey: string
    model: string
    prompt: {
      target: string | ((settings: MemeSettingsType) => string)
      specialEffect: string | ((settings: MemeSettingsType) => string)
    }
  }
  /* 搜索关键词 */
  searchKey: string
  /* 主角 */
  source: string
  /* 攻击对象 */
  target: string
  /* 特殊效果 */
  // specialEffect?: ((settings: MemeSettingsType) => string) | string
  specialEffect: string
  icon: {
    size: number
  }
  emoji: {
    size: number
    x: number
    y: number
  }
  background: {
    width: number
    height: number
    color: string
    borderRadius: number
    topPadding: number
  }
  text: {
    width: number
    color: string
    marginTop: number
    fontSize: number
    fontFamily: string
  }
}
