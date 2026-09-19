import Button from "../ui/Button";
import Card from "../ui/Card";
import Container from "../ui/Container";
import Glow from "../ui/Glow";
import Heading from "../ui/Heading";
import SectionLabel from "../ui/SectionLabel";
import { products } from "@/data/brands";

export default function Products() {
    return (
        <section className="relative mt-20 overflow-hidden bg-primary py-24 text-white md:mt-27.5 md:py-30">
            <Glow position="bottom-left" onDark />

            <Container className="relative z-10">
                <SectionLabel onDark className="rv mb-6">
                    Products
                </SectionLabel>
                <Heading className="rv mb-5 max-w-[18em] text-[clamp(28px,3.2vw,50px)]">
                    Built in-house by Ammertav,{" "}
                    <span className="font-medium">starting with BePOS</span>.
                </Heading>
                <p className="rv mb-14 max-w-[32em] text-[17px] leading-[1.8] text-white/64">
                    Point of sale, fully under control, for businesses
                    outgrowing manual records, loose cashier oversight, and
                    messy stock across branches.
                </p>

                <div className="rv grid gap-6.5 md:grid-cols-3">
                    {products.map((product) => (
                        <Card
                            key={product.name}
                            onDark
                            eyebrow={product.status}
                            title={product.name}
                        >
                            {product.description}
                        </Card>
                    ))}
                </div>

                <div className="mt-12">
                    <Button href="/how-it-works#bepos" onDark>
                        See BePOS in detail
                    </Button>
                </div>
            </Container>
        </section>
    );
}
