export type FooterProps = {
  title: string;
  subtitle: string;
  reference: string;
  backgroundImage: {
    src: string;
    alt: string;
  };
  button: {
    text: string;
    link: string;
  };
  socialMedia: {
    id: number;
    button: {
      src: string;
      alt: string;
      link: string;
    };
  }[];
};
