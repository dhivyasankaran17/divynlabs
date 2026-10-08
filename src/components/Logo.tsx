type LogoProps = {
  className?: string
}

// The Divyn Labs "DL" mark. Source file: public/logo-mark.png (transparent background).
export default function Logo({ className = 'h-9 w-9' }: LogoProps) {
  return <img src="/logo-mark.png" alt="" width={36} height={36} className={`${className} object-contain`} />
}
