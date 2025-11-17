import { SVGProps } from "react"

const AngleUp = (props: SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none">
        <path
            fill={props.fill}
            stroke={props.fill}
            d="m12.779 7.045-.266.265a.063.063 0 0 1-.088 0L7.353 2.238 7 1.884l-.354.354L1.574 7.31a.062.062 0 0 1-.088 0l-.266-.265a.062.062 0 0 1 0-.089l-.353-.353.353.353 5.735-5.735a.062.062 0 0 1 .089 0l5.735 5.735a.062.062 0 0 1 0 .089Z"
        />
    </svg>
)

export default AngleUp
