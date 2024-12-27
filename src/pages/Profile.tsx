import React from 'react';
import { Award, Book, Clock, Star, Trophy, User } from 'lucide-react';

const Profile = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Profile Header */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
            alt="Profile"
            className="w-24 h-24 rounded-full object-cover"
          />
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-2xl font-bold">Alex Johnson</h1>
            <p className="text-gray-600">Full Stack Developer</p>
            <div className="mt-4 flex flex-wrap justify-center md:justify-start gap-4">
              <Stat icon={<Book className="h-5 w-5" />} value="12" label="Courses" />
              <Stat icon={<Trophy className="h-5 w-5" />} value="8" label="Certificates" />
              <Stat icon={<Clock className="h-5 w-5" />} value="156" label="Hours" />
            </div>
          </div>
        </div>
      </div>

      {/* Progress Section */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Current Progress</h2>
          <div className="space-y-4">
            <ProgressCard
              title="Advanced JavaScript"
              progress={75}
              image="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
            />
            <ProgressCard
              title="React Fundamentals"
              progress={90}
              image="https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
            />
            <ProgressCard
              title="Node.js Basics"
              progress={45}
              image="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
            />
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Achievements</h2>
          <div className="grid grid-cols-2 gap-4">
            <AchievementCard
              icon={<Award className="h-8 w-8 text-yellow-500" />}
              title="Quick Learner"
              description="Completed 5 courses in a month"
            />
            <AchievementCard
              icon={<Star className="h-8 w-8 text-yellow-500" />}
              title="Top Performer"
              description="Scored 95% in assessments"
            />
            <AchievementCard
              icon={<User className="h-8 w-8 text-indigo-500" />}
              title="Team Player"
              description="Helped 20+ students"
            />
            <AchievementCard
              icon={<Trophy className="h-8 w-8 text-indigo-500" />}
              title="Code Master"
              description="Solved 100+ challenges"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const Stat = ({ icon, value, label }: { icon: React.ReactNode; value: string; label: string }) => (
  <div className="flex items-center gap-2">
    {icon}
    <div>
      <div className="font-semibold">{value}</div>
      <div className="text-sm text-gray-500">{label}</div>
    </div>
  </div>
);

const ProgressCard = ({ title, progress, image }: { title: string; progress: number; image: string }) => (
  <div className="flex items-center gap-4">
    <img src={image} alt={title} className="w-12 h-12 rounded-lg object-cover" />
    <div className="flex-1">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium">{title}</span>
        <span className="text-sm text-gray-500">{progress}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className="bg-indigo-600 h-2 rounded-full"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  </div>
);

const AchievementCard = ({ icon, title, description }: { 
  icon: React.ReactNode; 
  title: string; 
  description: string; 
}) => (
  <div className="p-4 border rounded-lg">
    {icon}
    <h3 className="font-semibold mt-2">{title}</h3>
    <p className="text-sm text-gray-600">{description}</p>
  </div>
);

export default Profile;