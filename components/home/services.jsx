import Link from "next/link";

import Category from "./Category";
import { DreamHome, SmartInvest, PropertyValue, PropertyManagement } from "./categoriesIcons";

export default function Services() {
    return (
        <section className="grid grid-cols-2 gap-5 lg:grid-cols-4 border-[10px] border-[#1A1A1A] p-5 items-center">
            <Link className="flex flex-col h-full" href="/properties">
                <Category name="Find Your Dream Home" icon={<DreamHome />} />
            </Link>
            <Link className="flex flex-col h-full" href="#">
                <Category name="Unlock Property Value" icon={<PropertyValue />} />
            </Link>
            <Link className="flex flex-col h-full" href="#">
                <Category name="Effortless Property Management" icon={<PropertyManagement />} />
            </Link>
            <Link className="flex flex-col h-full" href="#">
                <Category name="Smart Investments, Informed Decisions" icon={<SmartInvest />} />
            </Link>
        </section>

    )
}