const About = () => {
  return (
    <section className="py-24 bg-gradient-silk relative">
      {/* Decorative Pattern */}
      <div className="absolute inset-0 silk-texture opacity-30"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div>
                <h2 className="font-display text-5xl md:text-6xl font-bold text-maroon mb-6 leading-tight">
                  Where Heritage Meets
                  <span className="block text-navy">Haute Couture</span>
                </h2>
                
                <div className="paisley-border mb-8"></div>
              </div>

              <p className="font-body text-lg text-foreground/80 leading-relaxed">
                Our collection celebrates the rich tapestry of Indian textiles through meticulously handcrafted pieces. From regal lehengas adorned with intricate zardozi work to sophisticated sarees woven with threads of gold, each garment tells a story of timeless beauty and uncompromising quality.
              </p>

              <p className="font-body text-lg text-foreground/80 leading-relaxed">
                Every thread is a testament to the masterful artisans who have perfected their craft over generations, creating pieces that are not just clothing, but works of art that celebrate India's magnificent textile heritage.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 pt-8">
                <div className="text-center">
                  <div className="font-display text-3xl font-bold text-gold mb-2">500+</div>
                  <div className="font-body text-sm text-muted-foreground">Master Artisans</div>
                </div>
                <div className="text-center">
                  <div className="font-display text-3xl font-bold text-gold mb-2">50+</div>
                  <div className="font-body text-sm text-muted-foreground">Years Heritage</div>
                </div>
                <div className="text-center">
                  <div className="font-display text-3xl font-bold text-gold mb-2">1000+</div>
                  <div className="font-body text-sm text-muted-foreground">Unique Pieces</div>
                </div>
              </div>
            </div>

            {/* Image Placeholder */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-elegant bg-gradient-to-br from-gold/20 to-gold/10">
                <div className="w-full h-[600px] flex items-center justify-center">
                  <div className="text-center">
                    <p className="font-display text-2xl text-gold/60">Heritage Collection</p>
                    <p className="font-body text-sm text-muted-foreground mt-2">Coming Soon</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-maroon/30 to-transparent"></div>
              </div>
              
              {/* Floating Accent */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gold/20 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-navy/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;