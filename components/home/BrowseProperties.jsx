'use client'
import Link from "next/link";
const BrowseProperties = (props) => {
    return (
        <Link
            href="/properties"
            rel="noopener"
            className="text-regular font-normal text-center bg-[#703BF7] rounded-lg w-auto">
            <div className="button">
                {props.title}
            </div>

        </Link>
    );
}

export default BrowseProperties;