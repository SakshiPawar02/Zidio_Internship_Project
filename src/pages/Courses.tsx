import React from 'react';
import { Search, Filter, Star } from 'lucide-react';

const Courses = () => {
  return (
    <div className="space-y-8">
      {/* Search and Filter Section */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search courses..."
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <button className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-50">
          <Filter className="h-5 w-5" />
          <span>Filter</span>
        </button>
      </div>

      {/* Course Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course, index) => (
          <CourseCard key={index} {...course} />
        ))}
      </div>
    </div>
  );
};

const CourseCard = ({ 
  title, 
  description, 
  image, 
  instructor, 
  rating, 
  students, 
  price 
}: CourseType) => (
  <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6 space-y-4">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
      <div className="flex items-center gap-2">
        <img src={instructor.avatar} alt={instructor.name} className="w-8 h-8 rounded-full" />
        <span className="text-sm text-gray-600">{instructor.name}</span>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1">
          <Star className="h-4 w-4 text-yellow-400 fill-current" />
          <span className="text-sm">{rating}</span>
          <span className="text-sm text-gray-500">({students} students)</span>
        </div>
        <span className="font-semibold">${price}</span>
      </div>
    </div>
  </div>
);

type CourseType = {
  title: string;
  description: string;
  image: string;
  instructor: {
    name: string;
    avatar: string;
  };
  rating: number;
  students: number;
  price: number;
};

const courses: CourseType[] = [
  {
    title: "Advanced JavaScript Patterns",
    description: "Master modern JavaScript design patterns and best practices",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    instructor: {
      name: "Sarah Johnson",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
    },
    rating: 4.8,
    students: 1234,
    price: 89.99
  },
  {
    title: "React & Redux Masterclass",
    description: "Build scalable applications with React and Redux",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    instructor: {
      name: "Michael Chen",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
    },
    rating: 4.9,
    students: 2341,
    price: 94.99
  },
  {
    title: "Node.js Backend Development",
    description: "Create robust backend services with Node.js",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    instructor: {
      name: "David Wilson",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
    },
    rating: 4.7,
    students: 1876,
    price: 79.99
  }
];

export default Courses;