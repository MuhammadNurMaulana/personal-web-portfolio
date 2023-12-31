import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ status: true, message: "Fething Succes", data });
}

const data = [
  {
    title: "Maulana Personal Website",
    link: "https://maulana-personal-website.vercel.app/",
    github: "https://github.com/Maulana-Code/maulana-personal-website",
    tag: [
      {
        tag: "Website",
      },
      {
        tag: "Portfolio",
      },
    ],
    image: "/images/project2.webp",
    alt: "Personal Website Portofolio",
    desc: "Personal website portfolio built with projects with Next JS, Tailwind, Framer and several features such as home, about, projects, articles, responsiveness and many more.",
    img: [
      {
        image: "/images/tailwind.png",
        alt: "Tailwind CSS",
        title: "TailwindCSS",
        name: "next",
      },
      {
        image: "/images/typescript.png",
        alt: "Typescript",
        title: "Typescript",
      },
    ],
  },

  {
    title: "Linder Construction",
    link: "https://linder-construction.vercel.app/",
    github: "https://github.com/MuhammadNurMaulana/linder-construction",
    tag: [
      {
        tag: "Website",
      },
      {
        tag: "Company",
      },
    ],
    image: "/images/project1.webp",
    alt: "Linder Construction",
    desc: "Linder Construction Company, a company that operates in the field of building construction with modern designs and also presents beautiful buildings. I created this website using the latest technology Next Js and Tailwind CSS with featured main project, blog, service, ervices, contact, about, home, all projects. We are ready to help you build the building you want, please contact us.",
    img: [
      {
        image: "/images/tailwind.png",
        alt: "Tailwind CSS",
        title: "TailwindCSS",
        name: "next js",
      },
      {
        image: "/images/typescript.png",
        alt: "Typescript",
        title: "Typescript",
      },
    ],
  },

  {
    title: "Rire - NFT`s",
    link: "https://maulana-v2.vercel.app/",
    github: "https://github.com/MuhammadNurMaulana/Website_NFTs",
    tag: [
      {
        tag: "Website",
      },
      {
        tag: "NFT`s Marketplace",
      },
    ],
    image: "/images/project3.webp",
    alt: "Personal Website Portofolio",
    desc: "Official website of Rire - NFT`s, a NFT`s marketplace. Is an website that features an attractive look, responsive and beatiful design with several features such as home, marketplace, rankings, and any more. I create this website using technology React, Tailwind CSS",
    img: [
      {
        image: "/images/react.png",
        alt: "React",
        title: "React",
      },
      {
        image: "/images/javascript.png",
        alt: "Javascript",
        title: "Javascript",
      },
      {
        image: "/images/vite.png",
        alt: "Vite",
        title: "Vite",
      },
      {
        image: "/images/tailwind.png",
        alt: "TailwindCSS",
        title: "TailwindCSS",
      },
    ],
  },

  {
    title: "Maulana V2",
    link: "https://maulana-v2.vercel.app/",
    github: "https://github.com/MuhammadNurMaulana/maulana.V2",
    tag: [
      {
        tag: "Website",
      },
      {
        tag: "Personal",
      },
    ],
    image: "/images/project4.webp",
    alt: "Personal Website Portofolio",
    desc: "Open Source personal website portfolio and blog projects built with React Js, Tailwind and several features such as home, about, projects, articles,blog, responsiveness and many more.",
    img: [
      {
        image: "/images/react.png",
        alt: "React",
        title: "React",
      },
      {
        image: "/images/typescript.png",
        alt: "Typescript",
        title: "Typescript",
      },
      {
        image: "/images/vite.png",
        alt: "Vite",
        title: "Vite",
      },
      {
        image: "/images/tailwind.png",
        alt: "TailwindCSS",
        title: "TailwindCSS",
      },
    ],
  },
];
