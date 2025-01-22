export function SettingBar({
  label,
  children,
}: {
  label: React.ReactNode
  children: React.ReactNode
}) {
  return (
    <div className="setting-bar">
      <label className="flex items-center gap-2 text-sm font-medium">
        <p className="flex-initial">{label}</p>
        <div className="flex-auto">{children}</div>
      </label>
    </div>
  )
}
