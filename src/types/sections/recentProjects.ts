import { MotionValue } from "framer-motion";

export type ProductCardProps = {
  title: string | React.ReactNode;
  description: string;
  link: any;
  image: {
    desktop: string;
    mobile: string;
    alt: string;
  };
  className?: string;
  translateY: MotionValue<number>;
  translateX: MotionValue<number>;
};
