import Balancer from 'react-wrap-balancer';

import Image from 'next/image';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Reveal } from '@/components/ui/reveal';

interface ExperienceCardProps extends ExperienceItem {
  index: number;
}

export function ExperienceCard({
  company,
  date,
  description,
  employmentType,
  image,
  index,
  skills,
  title,
}: ExperienceCardProps) {
  return (
    <Card className="w-full">
      <CardHeader>
        {image && (
          <Image
            alt="Company Logo"
            className="mb-4 animate-reveal rounded-lg object-cover"
            height="900"
            loading={index < 1 ? 'eager' : 'lazy'}
            src={image}
            width="900"
          />
        )}

        <CardTitle className="font-heading text-xl font-semibold md:text-2xl">
          <Balancer preferNative={false} ratio={0.4}>
            {title} · {company}
          </Balancer>
        </CardTitle>

        <CardDescription className="text-lg">
          {employmentType} | {date}
        </CardDescription>
      </CardHeader>

      <CardContent className="flex flex-col">
        <Reveal
          transition={{ duration: 0.4 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <Balancer as="p" className="text-base/loose md:text-lg/loose" preferNative={false} ratio={0.3}>
            {description}
          </Balancer>
        </Reveal>
        {skills && (
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <Reveal
                key={skill}
                transition={{ delay: index / 40, duration: 0.1 }}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
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
