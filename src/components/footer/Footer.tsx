import { textFormat } from "@/lib/text";
import { FooterProps } from "@/types/layout/footer"
import Image from "next/image";
import { MagicButton } from "@/components/ui/magicButton";
import { FaLocationArrow } from "react-icons/fa";
import Link from "next/link";


export const Footer = ({ data }: {
  data: FooterProps
}) => {
  const { backgroundImage, title, subtitle, reference, button, socialMedia } = data;

  return (
    <footer className="container w-full pb-8 mt-[100px]" id="contact">
      <div className="overflow-hidden absolute inset-0 -z-10">
        <div className="w-full absolute left-0 -bottom-72 min-h-96">
          <Image
            src={backgroundImage.src}
            alt={backgroundImage.alt}
            width={0}
            height={0}
            className="w-full h-full opacity-50"
          />
        </div>
      </div>

      <div className="flex flex-col gap-6 items-center">
        <h1 className="heading lg:max-w-[55vw]">
          {textFormat(title)}
        </h1>

        <p className="text-white-200 text-center">
          {textFormat(subtitle)}
        </p>

        <Link href="mailto:diego27fernando72@gmail.com" className="mt-4 md:mt-8 max-sm:w-full">
          <MagicButton
            containerClassName="w-full"
            className="flex gap-3 items-center justify-center md:px-16"
          >
            {button.text}
            <FaLocationArrow />
          </MagicButton>
        </Link>
      </div>

      <div className="flex mt-16 md:flex-row flex-col gap-6 justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light max-w-64 max-md:text-center">
          {textFormat(reference)}
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {
            socialMedia.map(({ id, button }) => (
              <Link
                key={id}
                href={button.link}
                target="blank"
                className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300">
                <Image
                  src={button.src}
                  alt={button.alt}
                  width={20}
                  height={20}
                />
              </Link>
            ))
          }
        </div>
      </div>
    </footer>
  )
}
