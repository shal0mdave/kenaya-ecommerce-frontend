import * as React from "react"

function SvgComponent(props) {
  return (
    <svg
      width={68}
      height={53}
      viewBox="0 0 68 53"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M61.322.87H5.909A5.919 5.919 0 000 6.777v39.393c0 3.246 2.643 5.909 5.909 5.909h55.413c3.246 0 5.909-2.643 5.909-5.909V6.778c0-3.246-2.643-5.909-5.91-5.909zm-.816 3.938L33.74 31.574 6.744 4.808h53.762zM3.939 45.355V7.575l18.972 18.809L3.939 45.355zm2.786 2.786l18.983-18.984 6.652 6.595a1.97 1.97 0 002.78-.006l6.485-6.486 18.88 18.88H6.726zm56.566-2.786l-18.88-18.88L63.29 7.594v37.761z"
        fill="#2C423A"
      />
    </svg>
  )
}

export default SvgComponent
