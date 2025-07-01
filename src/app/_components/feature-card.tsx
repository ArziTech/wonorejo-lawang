// components/FeatureCard.tsx
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'; // Using shadcn Card

interface FeatureCardProps {
  icon: string; // Could be an actual SVG/React component or an emoji/character
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
      <Card className="text-center">
        <CardHeader className="flex justify-center items-center pb-4">
          <span className="text-green-600 text-5xl">{icon}</span>
        </CardHeader>
        <CardContent>
          <CardTitle className="text-xl font-semibold text-gray-800 mb-2">
            {title}
          </CardTitle>
          <p className="text-gray-600">{description}</p>
        </CardContent>
      </Card>
  );
};

export default FeatureCard;