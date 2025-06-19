import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CircleCheck, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';
import CostCalculator from '../components/CostCalculator';
import ReviewsSection from '../components/ReviewsSection';
import HeroScene from '../components/HeroScene';
import ContactForm from '../components/ContactForm';
import ImageCarousel from '../components/ImageCarousel';
import SectionScene from '../components/SectionScene';
export default function Home() {
  const servicesRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Manrope:wght@200;300;400;500;600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    return () => {
      document.head.removeChild(link);
    };
  }, []);
  const calculatorRef = useRef<HTMLDivElement>(null);
  
  const scrollToServices = () => {
    servicesRef.current?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  
  const scrollTocalculator = () => {
    calculatorRef.current?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  
  const features = [
    'Premium Quality Materials',
    'Expert Installation',
    'Competitive Pricing',
    'Regional Expertise in Visakhapatnam & Vizianagaram',
    'Expanding to Surrounding Areas',
    'Quality work',
    'Professional installation',
    'Modern designs',
    'Perfect finish'
  ];
  
  
  
  return <div style={{
    fontFamily: 'Poppins, sans-serif'
  }}>
      {/* Hero Section */}
    <section>
      <div className="absolute inset-0 z-0 overflow-hidden" style={{
        height: '600px'
      }}>
    <ImageCarousel images={["https://images.unsplash.com/photo-1598928636135-d146006ff4be?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80", 
                            "https://img.freepik.com/premium-photo/sleek-sophistication-unveiling-essence-modern-luxury-minimalist-living-rooms_881299-85211.jpg?ga=GA1.1.1862466227.1749313098&semt=ais_hybrid&w=740", 
                            "https://5.imimg.com/data5/ANDROID/Default/2024/2/389478002/HY/XI/VZ/213156780/product-jpeg-500x500.jpg",
                            "https://img.freepik.com/premium-photo/living-room-with-couch-coffee-table-plant_878566-333.jpg?ga=GA1.1.1862466227.1749313098&semt=ais_hybrid&w=740",
                            "https://www.coowinwpc.com/wp-content/uploads/2023/04/5-Creative-Bedroom-PVC-Ceiling-Designs.jpg"]} className="w-full h-full" />
    
      </div>
        
        <HeroScene />
        
        

        <div className="max-w-7xl mx-auto px-6 pt-32 pb-20 relative z-10">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 1
        }} className="max-w-5xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light leading-tight mb-6">
              <TypeAnimation sequence={['ELEVATE YOUR', 1000, 'ELEVATE YOUR SPACE...', 1000, 'TRANSFORM YOUR SPACE...', 1000, 'REIMAGINE YOUR SPACE...', 1000]} wrapper="span" speed={50} repeat={Infinity} />
              <br />
              <span className="font-semibold">WITH PRISM</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl">
              Prism Ceilings specializes in exquisite gypsum and PVC ceiling designs 
              that transform ordinary spaces into architectural masterpieces.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={scrollToServices} className="btn btn-primary flex items-center gap-2">
                <span>Explore Services</span>
                <ArrowRight size={18} />
              </button>
              <Link onClick={scrollTocalculator} className="btn flex items-center gap-2">
                <span>Calculate Costs</span>
                <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" ref={servicesRef} className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-5xl font-light mb-4">OUR <span className="font-semibold">SERVICES</span></h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We provide comprehensive ceiling solutions backed by years of expertise and craftsmanship.
            </p>
          </div>

          <div className="mb-10">
            <SectionScene type="services" className="mx-auto max-w-md" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[{
            title: "Gypsum Ceilings",
            description: "Custom gypsum ceiling designs including coffered ceilings, tray ceilings, and artistic moldings.",
            image: "https://img.interiorcompany.com/interior/webproduct/382638709048378162881.png?aio=w-1200;"
          }, {
            title: "PVC Ceilings",
            description: "Premium PVC ceiling solutions for residential and commercial spaces with water-resistant properties.",
            image: "https://2.wlimg.com/product_images/bc-full/2023/9/12260027/false-ceiling-pvc-designing-services-1689835835-6990869.jpeg"
          }, {
            title: "Aluminium Grid False Ceiling",
            description: "Modern aluminium grid false ceiling systems ideal for office spaces, providing acoustic benefits and contemporary aesthetics.",
            image: "https://iotiq.co.in/assets/images/solutions/office/hospital-3.jpeg"
          }, {
            title: "Electrical Services",
            description: "Complete electrical solutions including accent lighting, LED installations, and smart lighting systems.",
            image: "https://t4.ftcdn.net/jpg/06/25/85/23/360_F_625852375_yYBNmWpScK91VbAxkKvmyE3HWEzOkkDx.jpg"
          }, {
            title: "Painting Services",
            description: "Professional painting services with premium paints and finishes to complement your ceiling design.",
            image: "https://yaalmozhipainting.in/wp-content/uploads/2022/10/final-dl.beatsnoop.com-Qj2PVNzyaD.jpg"
          }, {
            title: "Custom Designs",
            description: "Bespoke ceiling designs created to match your specific aesthetic and functional requirements.",
            image: "https://i.etsystatic.com/27556570/r/il/61b7c5/5909110108/il_570xN.5909110108_83zl.jpg"
          }, {
            title: "Maintenance",
            description: "Repair and maintenance services to keep your ceilings looking pristine for years to come.",
            image: "https://www.ozburn-hesseycompany.com/wp-content/uploads/2024/01/Ozburn-hessey-nashville-recycled-ceiling-tiles.jpg"
          }].map((service, index) => <motion.div key={index} initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: index * 0.1
          }} viewport={{
            once: true
          }} className="glass-card overflow-hidden group">
                <div className="h-48 overflow-hidden">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-medium mb-2">{service.title}</h3>
                  <p className="text-gray-400">{service.description}</p>
                </div>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* Calculator Section */}
    
      <section id="calculator" ref={calculatorRef} className="py-20 px-6 bg-[#0c0c0c]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-5xl font-light mb-4">COST <span className="font-semibold">CALCULATOR</span></h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Get an instant estimate for your ceiling project based on your room dimensions and design preferences.
              We offer different ceiling types and quality tiers to match your budget and requirements.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
            <div>
              <SectionScene type="gypsum" className="mb-4" />
              <h3 className="text-xl font-medium mb-2 text-center">Gypsum Ceiling</h3>
              <p className="text-gray-400 text-center">Seamless designs with elegant finishing</p>
            </div>
            <div>
              <SectionScene type="pvc" className="mb-4" />
              <h3 className="text-xl font-medium mb-2 text-center">PVC Ceiling</h3>
              <p className="text-gray-400 text-center">Water-resistant and low maintenance</p>
            </div>
            <div>
              <SectionScene type="grid" className="mb-4" />
              <h3 className="text-xl font-medium mb-2 text-center">Aluminium Grid</h3>
              <p className="text-gray-400 text-center">Professional finish for offices</p>
            </div>
          </div>
          
          <CostCalculator />
        </div>
      </section>

      {/* Reviews Section */}
      <ReviewsSection />
      
      

    {/* Why Choose Us Section */}
  <section className="py-10 px-6">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Why Choose Prism Ceilings?
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                With expertise spanning Visakhapatnam and Vizianagaram, we're expanding our premium ceiling solutions to serve more regions with quality and precision.
              </p>
              <div className="space-y-4">
                {features.map((feature, index) => <div key={index} className="flex items-center space-x-3">
                    <CircleCheck className="text-green-400 flex-shrink-0" size={20} />
                    <span className="text-gray-300">{feature}</span>
                  </div>)}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=200&fit=crop" alt="Quality work" className="rounded-lg hover:scale-105 transition-transform duration-300" />
              <img src="https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=300&h=200&fit=crop" alt="Professional installation" className="rounded-lg hover:scale-105 transition-transform duration-300 mt-8" />
              <img src="https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=300&h=200&fit=crop" alt="Modern designs" className="rounded-lg hover:scale-105 transition-transform duration-300 -mt-8" />
              <img src="https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=300&h=200&fit=crop" alt="Perfect finish" className="rounded-lg hover:scale-105 transition-transform duration-300" />
            </div>
          </div>
        </div>
    
  </section>
      
      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div initial={{
            opacity: 0,
            x: -30
          }} whileInView={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.5
          }} viewport={{
            once: true
          }}>
              <h2 className="text-3xl md:text-5xl font-light mb-6">GET IN <span className="font-semibold">TOUCH</span></h2>
              <p className="text-gray-400 mb-10">
                We serve Visakhapatnam, Vizianagaram, and expanding to nearby regions. 
                Contact us to discuss your ceiling project and transform your space.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 glass-card rounded-full">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Phone</h3>
                    <p className="text-gray-400">+91 9059711183</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 glass-card rounded-full">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Email</h3>
                    <p className="text-gray-400">prismceilings@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 glass-card rounded-full">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Locations</h3>
                    <p className="text-gray-400">Visakhapatnam, Vizianagaram, and surrounding areas</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h2 className="text-xl font-light">
                PRISM <span className="font-semibold">CEILINGS</span>
              </h2>
            </div>
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Prism Ceilings. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>;
  };

