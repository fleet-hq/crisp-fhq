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
          <div className="absolute inset-0 flex flex-col items-center justify-center px-6 -mt-8 text-center sm:px-4 sm:-mt-12">
            {title && (
              <h1 className="font-barlow font-bold text-white whitespace-pre-line text-[26px] leading-[110%] tracking-[-0.02em] sm:text-4xl sm:leading-[112%] md:text-5xl lg:text-[56px]">
                {title}
              </h1>
            )}
            {subtitle && (
              <p className="mt-3 max-w-85 font-barlow font-normal text-white/90 text-[13px] leading-[150%] tracking-[-0.02em] sm:mt-4 sm:max-w-2xl sm:text-sm sm:leading-[140%] md:max-w-3xl md:text-[16px] md:leading-[117%]">
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
