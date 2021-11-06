import * as React from "react"

function SvgComponent(props) {
  return (
    <svg
      width={25}
      height={25}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_405:312)">
        <path
          d="M16.664 4.151h2.282V.176C18.553.122 17.198 0 15.621 0c-7.22 0-5.256 8.177-5.543 9.375H6.445v4.444h3.632V25h4.452V13.82h3.484l.553-4.444h-4.038c.195-2.942-.793-5.225 2.136-5.225z"
          fill="#3B5999"
        />
      </g>
      <defs>
        <clipPath id="clip0_405:312">
          <path fill="#fff" d="M0 0H25V25H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default SvgComponent
