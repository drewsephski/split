import Image from 'next/image'
import freshbooks from '../../../public/logos/freshbooks.svg'
import sendgrid from '../../../public/logos/sendgrid.svg'
import figma from '../../../public/logos/figma.svg'
import auth0 from '../../../public/logos/auth0.svg'
import notion from '../../../public/logos/notion.svg'
import asana from '../../../public/logos/asana.svg'
import algolia from '../../../public/logos/algolia.svg'
import clickup from '../../../public/logos/clickup.svg'
import SectionWrapper from '../../SectionWrapper'

const logos = [
    {
        src: freshbooks,
        alt: "freshbooks"
    },
    {
        src: sendgrid,
        alt: "sendgrid"
    },
    {
        src: figma,
        alt: "figma"
    },
    {
        src: clickup,
        alt: "clickup"
    },
    {
        src: algolia,
        alt: "algolia"
    },
    {
        src: asana,
        alt: "asana"
    },
    {
        src: notion,
        alt: "notion"
    },
    {
        src: auth0,
        alt: "auth0"
    },
]


const LogoGrid = () => (
    <SectionWrapper>
        <div className="custom-screen">
            <h2 className="font-semibold text-sm text-gray-800 dark:text-white text-center">
                Trusted by the largest companies
            </h2>
            <div className="mt-8 flex justify-center">
                <ul className="inline-grid grid-cols-2 gap-x-10 gap-y-12 md:gap-x-16 md:gap-y-16 md:grid-cols-3 lg:grid-cols-4">
                    {
                        logos.map((item, idx) => (
                            <li key={idx} className="relative">
                                <Image src={item.src} alt={item.alt} className="dark:filter dark:invert" />
                                <span className="sr-only dark:not-sr-only dark:absolute dark:top-full dark:left-1/2 dark:transform dark:-translate-x-1/2 dark:text-white dark:text-xs dark:mt-1 dark:font-medium">
                                    {item.alt}
                                </span>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    </SectionWrapper>
)

export default LogoGrid