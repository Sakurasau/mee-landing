import type { SVGProps } from 'react'

export function LineMdChevronUp(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}>
      <path
        fill="none"
        stroke="currentColor"
        strokeDasharray={12}
        strokeDashoffset={12}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 8l-7 7M12 8l7 7">
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          dur="0.3s"
          values="12;0"></animate>
      </path>
    </svg>
  )
}
