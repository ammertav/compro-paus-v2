import Culture from "@/components/career/Culture";
import OpenRoles from "@/components/career/OpenRoles";
import ClosingCta from "@/components/layout/ClosingCta";
import PageHero from "@/components/layout/PageHero";
import TextLink from "@/components/ui/TextLink";
import { careerClosing, careerHero } from "@/data/career";
import { careerTeaser } from "@/data/home";

export default function Career() {
    return (
        <>
            <title>Career | PAUS</title>
            <PageHero
                image={careerHero.image}
                label={careerHero.label}
                title={careerTeaser.title}
                description={careerHero.description}
            >
                <TextLink href={careerHero.rolesLink.href}>
                    {careerHero.rolesLink.label}
                </TextLink>
            </PageHero>
            <Culture />
            <OpenRoles />
            <ClosingCta
                label={careerClosing.label}
                title={careerClosing.title}
                links={careerClosing.links}
            />
        </>
    );
}
