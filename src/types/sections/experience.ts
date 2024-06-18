export type ExperienceProps = {
  title: string;
  cards: ExperienceCardProps[];
};

export type ExperienceCardProps = {
  title: string;
  description: string;
  company: string;
  image: {
    src: string;
    alt: string;
  };
};
