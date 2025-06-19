import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

// Define the review type
interface Review {
  id: number;
  name: string;
  location: string;
  rating: number;
  comment: string;
  projectType: string;
  image: string;
}

// Sample review data
const reviews: Review[] = [
  {
    id: 1,
    name: "Rahul Sharma",
    location: "Visakhapatnam",
    rating: 5,
    comment: "The team at Prism Ceilings transformed our living room completely. The detailed work on our false ceiling has become a conversation starter whenever we have guests over.",
    projectType: "Residential Gypsum Ceiling",
    image: "https://images.unsplash.com/photo-1600121848594-d8644e57abab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxpdmluZyUyMHJvb20lMjBjZWlsaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
  },
  {
    id: 2,
    name: "Priya Patel",
    location: "Vizianagaram",
    rating: 5,
    comment: "We hired Prism for our restaurant renovation, and they delivered beyond expectations. The suspended ceiling design with integrated lighting creates the perfect ambiance for our customers.",
    projectType: "Commercial PVC Ceiling",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
  },
  {
    id: 3,
    name: "Ankit Reddy",
    location: "Visakhapatnam",
    rating: 4,
    comment: "Professional team with excellent attention to detail. They completed our office ceiling installation on time and within budget. The lighting integration is particularly impressive.",
    projectType: "Office Ceiling with LED Lighting",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8b2ZmaWNlJTIwY2VpbGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
  },
  {
    id: 4,
    name: "Meera Gupta",
    location: "Vizianagaram",
    rating: 5,
    comment: "The custom ceiling design in our bedroom is absolutely stunning. The team was professional, punctual and kept the workspace clean throughout the installation process.",
    projectType: "Custom Bedroom Ceiling",
    image: "https://images.unsplash.com/photo-1540518614846-7eded433c457?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmVkcm9vbSUyMGNlaWxpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
  }
];

export default function ReviewsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const nextReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };
  
  const prevReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
  };
  
  const review = reviews[currentIndex];
  
  return (
    <section id="reviews" className="py-20 px-6 bg-[#0c0c0c]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-light mb-4">OUR <span className="font-semibold">PROJECTS</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            See our recent work and what our clients have to say about their experience with Prism Ceilings.
          </p>
        </div>
        
        <div className="relative">
          <div className="glass-card p-8 md:p-10 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <motion.div
                key={review.id + "image"}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="h-[300px] md:h-[400px] overflow-hidden rounded-lg"
              >
                <img 
                  src={review.image} 
                  alt={review.projectType} 
                  className="w-full h-full object-cover"
                />
              </motion.div>
              
              <motion.div
                key={review.id + "content"}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col justify-center"
              >
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i}
                      size={20} 
                      fill={i < review.rating ? "white" : "none"} 
                      className={i < review.rating ? "text-white" : "text-gray-600"}
                    />
                  ))}
                </div>
                
                <p className="text-gray-300 text-lg italic mb-6">"{review.comment}"</p>
                
                <div className="mt-auto">
                  <p className="text-xl font-medium">{review.name}</p>
                  <p className="text-gray-400">{review.location}</p>
                  <div className="mt-4 inline-block px-4 py-2 bg-white/10 rounded-full text-sm">
                    {review.projectType}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
          
          <div className="flex justify-center mt-8 gap-4">
            <button 
              onClick={prevReview}
              className="p-3 glass-card rounded-full hover:bg-white/10 transition"
            >
              <ChevronLeft size={24} />
            </button>
            
            <div className="flex gap-2 items-center">
              {reviews.map((_, index) => (
                <button 
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`size-2 rounded-full transition ${
                    index === currentIndex ? 'bg-white' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
            
            <button 
              onClick={nextReview}
              className="p-3 glass-card rounded-full hover:bg-white/10 transition"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
