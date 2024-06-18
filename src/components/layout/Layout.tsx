import { LayoutProps } from "@/types/layout/layout"
import { Footer } from "@/components/footer/Footer"
import { Header } from "@/components/header/Header"

export const Layout = ({ children, header, footer }: LayoutProps) => {
  return (
    <div className="isolate relative bg-black-100 min-h-screen flex flex-col overflow-clip" >
      <Header data={header} />
      {children}
      <Footer data={footer} />
    </div>
  )
}

