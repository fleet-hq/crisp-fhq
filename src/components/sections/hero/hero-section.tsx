import { BookingForm } from './booking-form';

interface HeroSectionProps {
  backgroundImage?: string;
  title?: string;
  subtitle?: string;
}

export function HeroSection({
  backgroundImage = '/images/hero-bg.jpg',
  title = '',
  subtitle = '',
}: HeroSectionProps) {
  return (
    <section className="relative z-10 pb-8 sm:pb-0">
      {/* Background Image */}
      <div
        className="relative h-112.5 bg-cover bg-center bg-no-repeat md:h-135"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Hero Text */}
        {(title || subtitle) && (
          <div className="absolute inset-0 flex flex-col items-center justify-center px-4 -mt-12 text-center">
            {title && (
              <h1 className="font-barlow font-bold text-white whitespace-pre-line text-4xl sm:text-5xl md:text-[56px] leading-[112%] tracking-[-0.02em]">
                {title}
              </h1>
            )}
            {subtitle && (
              <p className="mt-4 max-w-3xl font-barlow font-normal text-white/90 text-sm sm:text-[16px] leading-[117%] tracking-[-0.02em]">
                {subtitle}
              </p>
            )}
          </div>
        )}
      </div>

      {/* Booking Form - Positioned to overlap */}
      <div className="relative mx-auto max-w-[1200px] px-0 sm:px-6 lg:px-8">
        <div className="-mt-16 md:-mt-20">
          <BookingForm />
        </div>
      </div>
    </section>
  );
}
