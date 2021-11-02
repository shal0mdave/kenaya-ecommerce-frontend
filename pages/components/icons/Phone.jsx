import * as React from "react"
function SvgComponent(props) {
  return (
    <svg
      width={35}
      height={60}
      viewBox="0 0 41 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M35.205 0H5.127A5.133 5.133 0 000 5.127v59.746C0 67.7 2.3 70 5.127 70h30.078c2.827 0 5.127-2.3 5.127-5.127V5.127C40.332 2.3 38.032 0 35.205 0zm3.076 55.645H9.23a1.025 1.025 0 000 2.05H38.28v7.178a3.08 3.08 0 01-3.076 3.076H5.127a3.08 3.08 0 01-3.076-3.076v-7.178h3.076a1.025 1.025 0 000-2.05H2.051V10.254h36.23v45.39zm0-47.442H2.051V5.127a3.08 3.08 0 013.076-3.076h30.078a3.08 3.08 0 013.076 3.076v3.076z"
        fill="#2C423A"
      />
      <path
        d="M24.269 4.102h-4.102a1.025 1.025 0 000 2.05h4.102a1.025 1.025 0 000-2.05zM20.166 59.746a3.08 3.08 0 00-3.076 3.076 3.08 3.08 0 003.076 3.076 3.08 3.08 0 003.076-3.076 3.08 3.08 0 00-3.076-3.076zm0 4.102a1.027 1.027 0 010-2.051 1.026 1.026 0 010 2.05zM16.064 6.152a1.025 1.025 0 100-2.05 1.025 1.025 0 000 2.05z"
        fill="#2C423A"
      />
    </svg>
  )
}

export default SvgComponent
