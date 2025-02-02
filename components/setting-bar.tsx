import { Label } from "./ui/label"

export function SettingBar({
  label,
  other,
  children,
}: {
  label?: React.ReactNode
  other?: React.ReactNode
  children?: React.ReactNode
}) {
  return (
    <div className="setting-bar grid grid-cols-[auto,1fr] gap-2">
      <div className="setting-bar-label setting-bar-left">
        <Label>
          <p className="setting-bar-label-text py-[6px] text-sm font-medium">
            {label}
          </p>
        </Label>
      </div>
      <div className="setting-bar-right flex flex-col">
        <div className="setting-bar-content flex flex-auto flex-col justify-center">
          {children}
        </div>
        {other && (
          <div className="setting-bar-other mt-[2px] text-xs text-gray-500">
            {other}
          </div>
        )}
      </div>
    </div>
  )
}
