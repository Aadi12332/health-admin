type Props = {
  title: string
  value: string
  icon: React.ReactNode
  bgColor: string
}

function StatsCard({ title, value, icon, bgColor }: Props) {
  return (
    <div className="bg-white lg:p-6 p-3 rounded-lg lg:rounded-[14px] flex items-center border border-[#0000001A]">
      <div className="flex items-center gap-3">
        <div className={`lg:w-12 w-9 lg:h-12 h-9 lg:min-w-12 min-w-9 rounded-lg lg:rounded-[10px] flex items-center justify-center ${bgColor}`}>
          {icon}
        </div>
        <div>
          <p className="text-[#4A5565] text-sm">{title}</p>
          <h2 className="text-[24px] text-[#101828]">{value}</h2>
        </div>
      </div>
    </div>
  )
}

export default StatsCard