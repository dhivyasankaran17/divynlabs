// TODO: replace this placeholder with the real Divyn Labs logo.
type LogoProps = {
  className?: string
}

export default function Logo({ className = 'h-8 w-8' }: LogoProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 40 40"
      role="img"
      aria-label="Divyn Labs logo placeholder"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="1" y="1" width="38" height="38" rx="6" fill="#f1f5f9" stroke="#475569" strokeWidth="2" />
      <text
        x="20"
        y="24"
        textAnchor="middle"
        fontFamily="ui-sans-serif, system-ui, sans-serif"
        fontSize="10"
        fontWeight="700"
        fill="#334155"
      >
        LOGO
      </text>
    </svg>
  )
}
