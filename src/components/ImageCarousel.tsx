
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from '@/lib/utils';

// High-resolution AI-related images
const carouselImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200",
    alt: "Circuit board closeup"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200",
    alt: "White robot"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200",
    alt: "Digital code"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=1200",
    alt: "Colorful code"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200",
    alt: "Woman using laptop"
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200",
    alt: "Holographic technology"
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200",
    alt: "Circuit patterns"
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1488229297570-58520851e868?auto=format&fit=crop&w=1200",
    alt: "Data center"
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1535378620166-273708d44e4c?auto=format&fit=crop&w=1200",
    alt: "Neural network visualization"
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1200",
    alt: "AI robotics"
  }
];

const ImageCarousel = () => {
  // Set up auto-scroll effect
  const [api, setApi] = React.useState<any>();
  
  React.useEffect(() => {
    if (!api) {
      return;
    }
    
    // Auto scroll every 3 seconds
    const autoScrollInterval = setInterval(() => {
      api.scrollNext();
    }, 3000);
    
    // Clean up interval on component unmount
    return () => clearInterval(autoScrollInterval);
  }, [api]);

  return (
    <section className="py-8 md:py-12 overflow-hidden bg-gradient-to-r from-iafourchette-blue/5 to-iafourchette-purple/5 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center gradient-text">
          Intelligence Artificielle en Action
        </h2>
        
        <div className="relative">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            orientation="horizontal"
            className="w-full"
            setApi={setApi}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {carouselImages.map((image) => (
                <CarouselItem key={image.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="overflow-hidden rounded-xl shadow-lg h-64 md:h-80">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className={cn(
                        "w-full h-full object-cover transition-all duration-500",
                        "hover:scale-110"
                      )}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:block">
              <CarouselPrevious className="left-2" />
              <CarouselNext className="right-2" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default ImageCarousel;
