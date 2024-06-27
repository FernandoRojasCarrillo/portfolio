export type NavLinksProps = {
  name: string;
  link: string;
  image?: {
    src: string;
    alt: string;
  };
  links?: NavContactLinkProps[];
};

export type NavContactLinkProps = {
  id: number;
  button: {
    src: string;
    alt: string;
    link: string;
  };
};
