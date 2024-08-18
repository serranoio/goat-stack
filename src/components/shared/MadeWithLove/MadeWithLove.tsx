import { Github, Instagram, InstagramIcon } from 'lucide-react';
import { FC, useState } from 'react';

interface Props {
  githubHandle: string;
  instagramHandle: string;
}

const MadeWithLove: FC<Props> = (props): JSX.Element => {
  const [madeWithLove, setMadeWithLove] = useState(
    Math.trunc(Math.random() * 10 + 1)
  );

  const getHeartType = () => {
    if (madeWithLove === 1) {
      return '❤️';
    } else if (madeWithLove === 2) {
      return '🧡';
    } else if (madeWithLove === 3) {
      return '💛';
    } else if (madeWithLove === 4) {
      return '💚';
    } else if (madeWithLove === 5) {
      return '💙';
    } else if (madeWithLove === 6) {
      return '💜';
    } else if (madeWithLove === 7) {
      return '🖤';
    } else if (madeWithLove === 8) {
      return '🤍';
    } else if (madeWithLove === 9) {
      return '🤎';
    }
    return '💕';
  };

  return (
    <div className="flex justify-center gap-4">
      <p>Made with love {getHeartType()}</p>{' '}
      <span className="flex gap-2">
        <a
          target="_blank"
          className="text-primary"
          href={`https://www.instagram.com/${props.instagramHandle}`}
        >
          <Instagram />
        </a>
        <a
          target="_blank"
          className="text-primary"
          href={`https://github.com/${props.githubHandle}`}
        >
          <Github />
        </a>
      </span>
    </div>
  );
};

export default MadeWithLove;

