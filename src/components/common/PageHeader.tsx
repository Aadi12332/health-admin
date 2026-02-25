type Props = {
  title: string
  subtitle?: string
  buttonText?: string
  buttonIcon?: string
  onClick?: () => void
}

function PageHeader({
  title,
  subtitle,
  buttonText,
  buttonIcon,
  onClick
}: Props) {
  return (
    <div className="flex items-center justify-between gap-3">
      <div>
        <h1 className="text-[24px] text-[#101828]">
          {title}
        </h1>
        {subtitle && (
          <p className="text-[#4A5565] text-base mt-1">
            {subtitle}
          </p>
        )}
      </div>

      {buttonText && (
        <button
          onClick={onClick}
          className="bg-gradient-to-b from-[#219580] to-[#346079] text-white px-6 h-[36px] flex items-center gap-3 rounded-lg text-sm font-medium"
        >
          {buttonIcon && (
            <img src={buttonIcon} alt="" />
          )}
          {buttonText}
        </button>
      )}
    </div>
  )
}

export default PageHeader