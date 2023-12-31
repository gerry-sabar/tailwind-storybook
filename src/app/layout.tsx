import './globals.css'
import type { Metadata } from 'next'
import localFont from 'next/font/local'

const gilroyFont = localFont({
  variable: '--font-family-gilroy',
  src: [
    {
      path: '../../public/fonts/gilroy-medium.woff2',
      weight: '500',
      style: 'normal'
    },
    {
      path: '../../public/fonts/gilroy-regular.woff2',
      weight: 'normal',
      style: 'normal'
    },
    {
      path: '../../public/fonts/gilroy-semibold.woff2',
      weight: '600',
      style: 'normal'
    },
    {
      path: '../../public/fonts/gilroy-bold.woff2',
      weight: 'bold',
      style: 'normal'
    },
    {
      path: '../../public/fonts/gilroy-extrabold.woff2',
      weight: '900',
      style: 'normal'
    }
  ]
});

const allRoundGothic = localFont({
  variable: '--font-family-allRoundGothic',
  src: [
    {
      path: '../../public/fonts/allroundgothic-demi.woff2',
      weight: 'normal',
      style: 'normal'
    },
    {
      path: '../../public/fonts/allroundgothic-bold.woff2',
      weight: 'bold',
      style: 'normal'
    }
  ]
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
      <meta charSet="UTF-8" />
        {/* <meta name="viewport" content="width=device-width, initial-scale=1.0" /> */}
        <title>Document</title>
        {/* <script src="https://cdn.tailwindcss.com"></script> */}
      </head>      
      <body className={`${gilroyFont.variable} ${allRoundGothic.variable}`}>{children}</body>
    </html>
  )
}
