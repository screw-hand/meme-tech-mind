import { MemeSettingsType } from "@/types/meme-settings"

export const DefaultMeMeSettings: MemeSettingsType = {
  searchKey: "react",
  source: "skill-icons:react-dark",
  target: "vue",
  specialEffect: "",
  ai: {
    baseURL:
      window.localStorage.getItem("baseURL") || "https://api.deepseek.com",
    apiKey: window.localStorage.getItem("apiKey") || "sk-***",
    model: window.localStorage.getItem("model") || "deepseek-coder",
    prompt: {
      target: (settings: MemeSettingsType) => `
        请作为数字产品分析师，为输入的软件/互联网产品推荐最具代表性的竞争/替代方案。遵循以下规则：
        推荐原则：
        1. 核心功能对标：推荐与输入产品解决相同用户需求的产品
        2. 市场定位匹配：优先推荐同级别/同类型竞品
        3. 用户群体相似：考虑目标用户的重叠度
        4. 社区认知共识：符合主流用户群体的对比习惯
        推荐优先级：
        ▸ 直接竞品 > 功能替代品 > 生态替代方案
        ▸ 同领域 > 跨领域解决方案
        ▸ 活跃产品 > 已停止维护的产品
        特殊处理：
        当无明确竞品时，推荐以下关联产品：
        1. 同一公司/生态的其他知名产品
        2. 上下游关联产品
        3. 互补型产品
        4. 具有相似技术特征的产品
        输出规范：
        1. 仅输出一个最相关结果
        2. 保持产品名称的官方命名规范
        4. 不允许使用iconify命名规范
        3. 禁止解释说明

        当前任务：
          输入：${settings.searchKey}
          输出：
      `,
      specialEffect: (settings: MemeSettingsType) =>
        `${settings.source}会如何嘲讽${settings.target}？极简回复！！`,
    },
  },
  icon: {
    size: 130,
  },
  emoji: {
    size: 48,
    x: 110,
    y: 135,
  },
  background: {
    width: 180,
    height: 180,
    color: "#ffffff",
    borderRadius: 30,
    topPadding: 10,
  },
  text: {
    width: 180,
    color: "#000000",
    marginTop: 3,
    fontSize: 18,
    fontFamily: "Arial",
  },
}
