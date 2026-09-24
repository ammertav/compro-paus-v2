import PageHero from "@/components/layout/PageHero";
import TextLink from "@/components/ui/TextLink";
import { notFound } from "@/data/notFound";

export default function NotFound() {
    return (
        <>
            <title>Page not found | PAUS</title>
            <PageHero
                label={notFound.label}
                title={notFound.title}
                description={notFound.description}
                className="min-h-[max(560px,72vh)]"
            >
                <TextLink href={notFound.link.href}>
                    {notFound.link.label}
                </TextLink>
            </PageHero>
        </>
    );
}
