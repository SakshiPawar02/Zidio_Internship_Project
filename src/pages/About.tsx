import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, Globe, Award, BookOpen, Code2, Rocket, Heart } from 'lucide-react';

const About = () => {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center space-y-6">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text"
        >
          Transforming Tech Education
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-gray-600 max-w-3xl mx-auto"
        >
          Zidio is revolutionizing the way developers learn and grow through interactive learning experiences, real-world projects, and a supportive global community.
        </motion.p>
      </section>

      {/* Mission & Values */}
      <section className="grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl shadow-md p-8">
          <div className="flex items-center gap-3 mb-4">
            <Target className="h-6 w-6 text-indigo-600" />
            <h2 className="text-2xl font-bold">Our Mission</h2>
          </div>
          <p className="text-gray-600 leading-relaxed">
            To democratize technology education by providing accessible, high-quality learning experiences that empower individuals to master modern development skills and advance their careers in the ever-evolving tech landscape.
          </p>
        </div>
        <div className="bg-white rounded-xl shadow-md p-8">
          <div className="flex items-center gap-3 mb-4">
            <Heart className="h-6 w-6 text-indigo-600" />
            <h2 className="text-2xl font-bold">Our Values</h2>
          </div>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-center gap-2">
              <div className="w-2 h-2 bg-indigo-600 rounded-full" />
              <span>Excellence in Education</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="w-2 h-2 bg-indigo-600 rounded-full" />
              <span>Innovation in Learning</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="w-2 h-2 bg-indigo-600 rounded-full" />
              <span>Community-Driven Growth</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="w-2 h-2 bg-indigo-600 rounded-full" />
              <span>Inclusive Technology</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Stats */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <StatCard icon={<Users />} value="50,000+" label="Active Learners" />
        <StatCard icon={<BookOpen />} value="200+" label="Courses" />
        <StatCard icon={<Globe />} value="120+" label="Countries" />
        <StatCard icon={<Award />} value="15,000+" label="Certificates Issued" />
      </section>

      {/* Features */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-center">Why Choose Zidio?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Code2 className="h-8 w-8 text-indigo-600" />}
            title="Interactive Learning"
            description="Learn by doing with our hands-on coding environment and real-time feedback system."
          />
          <FeatureCard
            icon={<Rocket className="h-8 w-8 text-indigo-600" />}
            title="Career Growth"
            description="Build a portfolio of real projects and earn industry-recognized certifications."
          />
          <FeatureCard
            icon={<Users className="h-8 w-8 text-indigo-600" />}
            title="Community Support"
            description="Join a global community of developers sharing knowledge and experiences."
          />
        </div>
      </section>

      {/* Team */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-center">Meet Our Team</h2>
        <div className="grid md:grid-cols-4 gap-6">
          <TeamMember
            image="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
            name="Sarah Chen"
            role="Founder & CEO"
          />
          <TeamMember
            image="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
            name="David Wilson"
            role="CTO"
          />
          <TeamMember
            image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
            name="Emily Rodriguez"
            role="Head of Education"
          />
          <TeamMember
            image="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
            name="Michael Park"
            role="Lead Developer"
          />
        </div>
      </section>
    </div>
  );
};

const StatCard = ({ icon, value, label }: { icon: React.ReactNode; value: string; label: string }) => (
  <div className="bg-white rounded-xl shadow-md p-6 text-center">
    <div className="flex justify-center mb-2 text-indigo-600">
      {React.cloneElement(icon as React.ReactElement, { className: 'h-8 w-8' })}
    </div>
    <div className="text-2xl font-bold">{value}</div>
    <div className="text-gray-600 text-sm">{label}</div>
  </div>
);

const FeatureCard = ({ icon, title, description }: { 
  icon: React.ReactNode; 
  title: string; 
  description: string; 
}) => (
  <div className="bg-white rounded-xl shadow-md p-6">
    <div className="mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const TeamMember = ({ image, name, role }: { image: string; name: string; role: string }) => (
  <div className="bg-white rounded-xl shadow-md p-6 text-center">
    <img src={image} alt={name} className="w-24 h-24 rounded-full mx-auto mb-4 object-cover" />
    <h3 className="font-semibold">{name}</h3>
    <p className="text-gray-600 text-sm">{role}</p>
  </div>
);

export default About;