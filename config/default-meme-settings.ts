import { MemeSettingsType } from "@/types/meme-settings"

export const DefaultMeMeSettings: MemeSettingsType = {
  source: "react",
  target: "vue",
  specialEffect: "",
  icon: {
    size: 130,
  },
  emoji: {
    size: 48,
    x: 15,
    y: 20,
  },
  background: {
    size: 180,
    color: "#fff",
    borderRadius: 30,
    paddingX: 10,
    paddingY: 10,
    gap: 3,
  },
  text: {
    width: 180,
    color: "#000",
    fontSize: 18,
    fontFamily: "Arial",
  },
}
