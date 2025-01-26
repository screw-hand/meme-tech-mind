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
    <div className="setting-bar">
      <div className="item-center flex gap-2">
        <p className="flex-none py-[6px] text-sm font-medium">{label}</p>
        <div className="flex flex-auto flex-col">
          {children}
          {other && <div className="mt-2 text-xs text-gray-500">{other}</div>}
        </div>
      </div>
    </div>
  )
}
