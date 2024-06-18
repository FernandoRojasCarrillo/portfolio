export type RecentProjectsProps = {
  data: {
    title: string;
    description: string;
    cards: ProjectsCard[];
  };
};

export type ProjectsCard = {
  title: string;
  description: string;
  thumbnail: string;
  link: {
    text: string;
    href: string;
  };
};
