import Products from "@/components/ammertav/Products";
import Projects from "@/components/ammertav/Projects";
import Services from "@/components/ammertav/Services";
import ClosingCta from "@/components/layout/ClosingCta";
import PageHero from "@/components/layout/PageHero";
import { ammertavClosing, ammertavHero } from "@/data/ammertav";
import { brands } from "@/data/brands";

const ammertav = brands[0];

export default function Ammertav() {
    return (
        <>
            <title>Ammertav | PAUS</title>
            <PageHero
                image={ammertavHero.image}
                breadcrumb={ammertavHero.breadcrumb}
                logo={
                    <img
                        src={ammertav.logo}
                        alt={ammertav.name}
                        className="h-[clamp(40px,4vw,60px)]"
                    />
                }
                title={ammertavHero.title}
                description={ammertavHero.description}
                className="min-h-[max(640px,92vh)]"
            />
            <Services />
            <Products />
            <Projects />
            <ClosingCta
                label={ammertavClosing.label}
                title={ammertavClosing.title}
                links={ammertavClosing.links}
            />
        </>
    );
}
