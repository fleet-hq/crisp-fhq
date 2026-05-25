import { AnnouncementBar, Header, Footer } from '@/components/layout';
import {
  HeroSection,
  FleetPreviewClient,
  FeaturesSection,
  AboutSection,
  TestimonialsSection,
  FAQSection,
  CTASection,
} from '@/components/sections';
import { siteContent } from '@/constants/site-content';

export default function HomePage() {
  return (
    <div className="min-h-screen">
  
      <Header />
      <HeroSection
        backgroundImage={siteContent.hero.backgroundImage}
        title={siteContent.hero.title}
        subtitle={siteContent.hero.subtitle}
      />
      <FleetPreviewClient
        title={siteContent.fleet.title}
        subtitle={siteContent.fleet.subtitle}
        description={siteContent.fleet.description}
      />
      <FeaturesSection
        title={siteContent.features.title}
        subtitle={siteContent.features.subtitle}
        features={siteContent.features.items}
      />
      <AboutSection
        paragraphs={siteContent.about.paragraphs}
        image={siteContent.about.image}
      />
      <TestimonialsSection
        title={siteContent.testimonials.title}
        subtitle={siteContent.testimonials.subtitle}
        testimonials={siteContent.testimonials.items}
      />
      <FAQSection
        description={siteContent.faqs.description}
        faqs={siteContent.faqs.items}
      />
      <CTASection
        title={siteContent.cta.title}
        description={siteContent.cta.description}
        backgroundImage={siteContent.cta.backgroundImage}
      />
      <Footer hasCTAOverlap />
    </div>
  );
}
