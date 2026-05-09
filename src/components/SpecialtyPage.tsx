import { About } from "@/components/About";
import { CTA } from "@/components/CTA";
import { FAQ } from "@/components/FAQ";
import { Hero } from "@/components/Hero";
import { PageShell } from "@/components/PageShell";
import { Services } from "@/components/Services";
import { doctor } from "@/lib/site";
import type { SeoLandingPage } from "@/lib/seo-pages";
import { routePaths } from "@/lib/seo-pages";

type SpecialtyPageProps = {
  page: SeoLandingPage;
};

export function SpecialtyPage({ page }: SpecialtyPageProps) {
  return (
    <PageShell>
      <main>
        <Hero
          id="specialty-home"
          badge={page.badge}
          title={page.heroTitle}
          description={page.heroDescription}
          highlights={page.heroHighlights}
          imageSrc={page.image}
          imageAlt={page.imageAlt}
          primaryAction={{ label: "Book Appointment", href: routePaths.book }}
          secondaryAction={{
            label: "WhatsApp Now",
            href: doctor.whatsappLink,
            target: "_blank",
            rel: "noreferrer"
          }}
          compact
        />

        <About
          eyebrow="Specialty Overview"
          title={page.overviewTitle}
          description={page.overviewDescription}
          body={page.overviewBody}
          points={page.overviewPoints}
          snapshotItems={page.snapshotItems}
          snapshotLabel="At a Glance"
        />

        <Services
          eyebrow="Treatment Focus"
          title="Conditions commonly evaluated and treated"
          description="Treatment advice is based on symptoms, clinical findings, imaging when needed, and recovery goals."
          featured={page.featuredCards}
          additional={page.secondaryCards}
          additionalLabel="Related Orthopaedic Care"
          featuredActionLabel="Learn more"
        />

        <FAQ
          eyebrow="Specialty FAQ"
          title="Frequently asked questions"
          description={page.faqDescription}
          faqs={page.faqs}
        />

        <CTA
          eyebrow="Book Consultation"
          title="Speak with Dr. Sandeep Kanugula"
          description="Book a consultation for evaluation, treatment guidance, and clear next-step planning."
          primaryAction={{ label: "Book Appointment", href: routePaths.book }}
          secondaryAction={{
            label: "WhatsApp Now",
            href: doctor.whatsappLink,
            target: "_blank",
            rel: "noreferrer"
          }}
          links={page.relatedLinks}
        />
      </main>
    </PageShell>
  );
}
