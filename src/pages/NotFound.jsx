import Button from "@/components/ui/Button";
import PageHero from "@/components/ui/PageHero";

export default function NotFound() {
    return (
        <>
            <title>Page not found | PAUS</title>

            <PageHero
                label="404"
                title={
                    <>
                        This page{" "}
                        <span className="font-medium">doesn&apos;t exist</span>.
                    </>
                }
                description="The link may be broken, or the page may have moved."
            >
                <div className="mt-10">
                    <Button href="/">Back to home</Button>
                </div>
            </PageHero>
        </>
    );
}
