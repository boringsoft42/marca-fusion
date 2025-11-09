import { ComponentPropsWithoutRef, ReactNode } from "react"

import { cn } from "@/lib/utils"

interface BentoGridProps extends ComponentPropsWithoutRef<"div"> {
  children: ReactNode
  className?: string
}

interface BentoCardProps extends ComponentPropsWithoutRef<"div"> {
  name: string
  className: string
  background: ReactNode
  Icon: React.ElementType
  description: string
  href: string
  cta: string
}

const BentoGrid = ({ children, className, ...props }: BentoGridProps) => {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[14rem] grid-cols-3 gap-4",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

const BentoCard = ({
  name,
  className,
  background,
  Icon,
  description,
  ...props
}: BentoCardProps) => (
  <div
    key={name}
    className={cn(
      "group relative col-span-3 flex flex-col justify-center overflow-hidden rounded-2xl",
      // Dark theme styles
      "bg-[#2a2a2a] border border-[#333]",
      "shadow-[0_2px_8px_rgba(0,0,0,0.3)]",
      "transform-gpu transition-all duration-300",
      "hover:shadow-[0_8px_24px_rgba(0,0,0,0.4)] hover:-translate-y-1",
      className
    )}
    {...props}
  >
    <div>{background}</div>
    <div className="p-5">
      <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1.5">
        <Icon className="h-8 w-8 text-marca-green mb-1" strokeWidth={1.5} />
        <h3 className="text-lg font-medium text-white">
          {name}
        </h3>
        <p className="text-sm text-[#a0a0a0] leading-snug line-clamp-3">{description}</p>
      </div>
    </div>

    <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-white/[.03]" />
  </div>
)

export { BentoCard, BentoGrid }
