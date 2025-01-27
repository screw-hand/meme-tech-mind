export interface MemeSettingsType {
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
    size: number
    color: string
    borderRadius: number
    paddingX: number
    paddingY: number
    gap: number
  }
  text: {
    width: number
    color: string
    fontSize: number
    fontFamily: string
  }
}
