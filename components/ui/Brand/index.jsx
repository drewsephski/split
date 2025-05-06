import Image from "next/image"

const Brand = ({ ...props }) => (
    <div className="flex items-center">
        <Image
            src="/split.svg"
            alt="Split logo"
            {...props}
            width={86}
            height={48}
            priority
            className="filter dark:invert" // This will make the logo white in dark mode
        />
    </div>
)
export default Brand