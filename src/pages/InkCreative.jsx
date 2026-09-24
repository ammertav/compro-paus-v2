import Offerings from "@/components/ink/Offerings";
import SelectedWork from "@/components/ink/SelectedWork";
import Services from "@/components/ink/Services";
import ClosingCta from "@/components/layout/ClosingCta";
import PageHero from "@/components/layout/PageHero";
import { brands } from "@/data/brands";
import { inkClosing, inkHero } from "@/data/inkCreative";

const ink = brands[1];

export default function InkCreative() {
    return (
        <>
            <title>INK.Creative | PAUS</title>
            <PageHero
                image={inkHero.image}
                breadcrumb={inkHero.breadcrumb}
                logo={
                    <img
                        src={ink.logo}
                        alt={ink.name}
                        className="h-[clamp(56px,5vw,80px)]"
                    />
                }
                title={inkHero.title}
                description={inkHero.description}
                className="min-h-[max(640px,92vh)]"
            />
            <Services />
            <Offerings />
            <SelectedWork />
            <ClosingCta
                label={inkClosing.label}
                title={inkClosing.title}
                links={inkClosing.links}
            />
        </>
    );
}
