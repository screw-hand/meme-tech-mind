import { MemeSettingsType } from "@/types/meme-settings"

export const DefaultMeMeSettings: MemeSettingsType = {
  searchKey: "react",
  source: "skill-icons:react-dark",
  target: "vue",
  specialEffect: "",
  ai: {
    baseURL:
      window.localStorage.getItem("baseURL") || "https://api.deepseek.com",
    apiKey: window.localStorage.getItem("apiKey") || "",
    model: window.localStorage.getItem("model") || "deepseek-coder",
    prompt: {
      target: (settings: MemeSettingsType) =>
        `${settings.source},会攻击哪个对象？极简回复！！`,
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
