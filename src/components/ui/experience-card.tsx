import Balancer from 'react-wrap-balancer';

import Image from 'next/image';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Reveal } from '@/components/ui/reveal';

interface ExperienceCardProps {
  company: string;
  date: string;
  description: string;
  image?: string;
  skills?: string[];
  title: string;
}

export function ExperienceCard({ company, date, description, image, skills, title }: ExperienceCardProps) {
  return (
    <Card className="w-full">
      <Reveal initial={{ opacity: 0, y: -50 }} whileInView={{ opacity: 1, transition: { duration: 0.4 }, y: 0 }}>
        <CardHeader>
          {image && (
            <Image alt="Company Logo" className="mb-4 rounded-lg object-cover" height="1000" src={image} width="1200" />
          )}

          <CardTitle className="font-heading text-xl md:text-2xl">
            <Balancer preferNative={false} ratio={0.4}>
              {title} · {company}
            </Balancer>
          </CardTitle>

          <CardDescription>{date}</CardDescription>
        </CardHeader>
      </Reveal>
      <CardContent className="flex flex-col gap-4 font-heading">
        <Reveal initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, transition: { duration: 0.4 }, x: 0 }}>
          <Balancer as="p" className="leading-7 md:text-lg" preferNative={false} ratio={0.1}>
            {description}
          </Balancer>
        </Reveal>
        {skills && (
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <Reveal
                initial={{ opacity: 0, y: 30 }}
                key={skill}
                whileInView={{ opacity: 1, transition: { delay: index / 40, duration: 0.1 }, y: 0 }}
              >
                <Badge variant="default">{skill}</Badge>
              </Reveal>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
