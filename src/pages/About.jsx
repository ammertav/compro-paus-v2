import CompanyDetails from "@/components/about/CompanyDetails";
import Leadership from "@/components/about/Leadership";
import Story from "@/components/about/Story";
import Values from "@/components/about/Values";
import VisionMission from "@/components/about/VisionMission";
import ClosingCta from "@/components/layout/ClosingCta";
import PageHero from "@/components/layout/PageHero";
import { aboutClosing, aboutHero } from "@/data/about";
import { company } from "@/data/company";

export default function About() {
    return (
        <>
            <title>About | PAUS</title>
            <PageHero
                image={aboutHero.image}
                label={aboutHero.label}
                title={aboutHero.title}
                description={company.summary}
            />
            <Story />
            <VisionMission />
            <Values />
            <Leadership />
            <CompanyDetails />
            <ClosingCta title={aboutClosing.title} links={aboutClosing.links} />
        </>
    );
}
