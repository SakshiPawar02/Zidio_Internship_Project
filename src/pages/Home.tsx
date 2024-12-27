import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Brain, Users, Trophy } from 'lucide-react';

const Home = () => {
  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="text-center space-y-8">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text"
        >
          Learn. Code. Innovate.
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-gray-600 max-w-2xl mx-auto"
        >
          Experience the future of learning with AI-powered personalized paths and interactive coding challenges.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex justify-center gap-4"
        >
          <button className="px-8 py-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors">
            Get Started
          </button>
          <button className="px-8 py-3 border-2 border-indigo-600 text-indigo-600 rounded-full hover:bg-indigo-50 transition-colors">
            View Courses
          </button>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <FeatureCard 
          icon={<Brain className="h-8 w-8 text-indigo-600" />}
          title="AI-Powered Learning"
          description="Personalized learning paths adapted to your pace and style"
        />
        <FeatureCard 
          icon={<Rocket className="h-8 w-8 text-indigo-600" />}
          title="Interactive Playground"
          description="Practice coding in real-time with instant feedback"
        />
        <FeatureCard 
          icon={<Users className="h-8 w-8 text-indigo-600" />}
          title="Collaborative Learning"
          description="Join study groups and learn together in real-time"
        />
        <FeatureCard 
          icon={<Trophy className="h-8 w-8 text-indigo-600" />}
          title="Earn Micro-Credentials"
          description="Get recognized for your skills with verified badges"
        />
      </section>

      {/* Featured Courses */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-center">Featured Courses</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <CourseCard 
            image="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            title="Full-Stack Web Development"
            description="Master modern web development with MERN stack"
            level="Intermediate"
            duration="12 weeks"
          />
          <CourseCard 
            image="https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            title="AI & Machine Learning"
            description="Build intelligent applications from scratch"
            level="Advanced"
            duration="10 weeks"
          />
          <CourseCard 
            image="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            title="Cloud Architecture"
            description="Design scalable cloud solutions"
            level="Intermediate"
            duration="8 weeks"
          />
        </div>
      </section>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }: { 
  icon: React.ReactNode; 
  title: string; 
  description: string; 
}) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
  >
    <div className="space-y-4">
      {icon}
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </motion.div>
);

const CourseCard = ({ image, title, description, level, duration }: {
  image: string;
  title: string;
  description: string;
  level: string;
  duration: string;
}) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="bg-white rounded-xl shadow-md overflow-hidden"
  >
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6 space-y-4">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-gray-600">{description}</p>
      <div className="flex justify-between text-sm text-gray-500">
        <span>{level}</span>
        <span>{duration}</span>
      </div>
    </div>
  </motion.div>
);

export default Home;