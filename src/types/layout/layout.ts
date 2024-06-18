import { FooterProps } from "./footer";
import { HeaderProps } from "./header";

export type LayoutProps = {
  children: React.ReactNode;
  header: HeaderProps;
  footer: FooterProps;
};
