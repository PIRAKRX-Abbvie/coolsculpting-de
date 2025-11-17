import { SVGProps } from "react"

const Checkmark = (props: SVGProps<SVGSVGElement>) => (
    <svg {...props} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M13.7091 22L9.16364 17.5687L9 17.4092L10.6727 15.7784L13.7091 18.7386L21.4182 10L23 11.3471L13.7091 22Z"
            fill={props.fill} />
    </svg>

)

export default Checkmark