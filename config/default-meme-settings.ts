import { MemeSettingsType } from "@/types/meme-settings"

export const DefaultMeMeSettings: MemeSettingsType = {
  searchKey: "react",
  source: "skill-icons:react-dark",
  target: "vue",
  specialEffect: "",
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
