import Image from 'next/image';

interface AboutSectionProps {
  paragraphs: string[];
  image?: string;
  imageAlt?: string;
}

export function AboutSection({
  paragraphs,
  image = '/images/founders.jpg',
  imageAlt = '',
}: AboutSectionProps) {
  return (
    <section id="about" className="bg-white pb-24 pt-8 sm:pb-16 sm:pt-4 lg:pb-20 scroll-mt-20">
      <div className="mx-auto max-w-222 mobile-section-padding lg:px-0">
        <div className="flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
          {/* Text Content */}
          <div className="w-full lg:max-w-95">
            {paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className={`section-paragraph text-justify text-slate-600 ${index > 0 ? 'mt-4' : ''}`}
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Image */}
          <div className="relative aspect-4/3 w-full shrink-0 overflow-hidden rounded-[10px] lg:aspect-auto lg:h-71.25 lg:w-95.25">
            <Image
              src={image}
              alt={imageAlt}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
