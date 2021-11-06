import * as React from "react"

const Profile = (props) => {
    return (
        <svg
            width={22}
            height={22}
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M11 2.613a2.887 2.887 0 110 5.775 2.887 2.887 0 01.001-5.775H11zm.001 12.373c4.084 0 8.388 2.008 8.388 2.888v1.513H2.613v-1.512c0-.878 4.303-2.887 8.387-2.887l.001-.002zM11 0a5.5 5.5 0 10-.005 11A5.5 5.5 0 0011 0zm0 12.374c-3.671 0-11 1.844-11 5.501V22h22v-4.125c0-3.657-7.328-5.501-11-5.501z"
                fill="#2C423A"
            />
        </svg>
    )
}

export default Profile 
