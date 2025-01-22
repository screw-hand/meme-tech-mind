export interface MemeSettingsType {
  /* 主角 */
  source: string
  /* 攻击对象 */
  target: string
  /* 特殊效果 */
  specialEffect: (settings: MemeSettingsType) => string
}
