import { Card, CardHeader } from '@/components/ui/card';
import React, { FC } from 'react';

interface Props {
  imageURL: string;
  imageAlt: string;
  founderDescription: string;
}

const HelloFromFounder: FC<Props> = ({
  imageURL,
  imageAlt,
  founderDescription,
}): JSX.Element => {
  return (
    <Card>
      <CardHeader className="p-6">
        <div className="flex justify-center">
          <img className="rounded h-32 w-24" alt={imageAlt} src={imageURL} />
        </div>
        <p className="text-center p">{founderDescription}</p>
      </CardHeader>
    </Card>
  );
};

export default HelloFromFounder;

