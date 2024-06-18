import { Metadata } from "next";

export const generateMetadata = (): Metadata => {
  const data = {
    title: "Fernando Rojas's Portfolio",
    description: "Modern & minimalist software portfolio",
    image:
      "https://res.cloudinary.com/dleo66u17/image/upload/v1718668268/experience_dfebaq.webp",
    url: "https://fernandorojas.vercel.app/",
  };

  const { title, description, image, url } = data;

  return {
    title,
    description,
    openGraph: {
      type: "website",
      url,
      title,
      description,
      images: [
        {
          url: image,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "Fernando Rojas",
      creator: "Fernando Rojas",
      title,
      description,
      images: [image],
    },
    verification: {
      google: "DC-HgxVO8FVppPY_uLkKG_C8Rl4cBe0htZkPvC49nlY",
    },
  };
};
