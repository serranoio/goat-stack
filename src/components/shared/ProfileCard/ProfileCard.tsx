import { FC } from 'react';

interface Props {
  imageURL: string;
  imageAlt: string;
  imageContent: JSX.Element;
  name: string;
}

const ProfileCard: FC<Props> = ({ imageURL, imageAlt, imageContent }) => {
  return (
    <figure className="flex justify-center align-center absolute top-3 right-3 gap-2">
      <img className="rounded-full h-16 w-16" src={imageURL} alt={imageAlt} />
      {imageContent}
    </figure>
  );
};
export default ProfileCard;

