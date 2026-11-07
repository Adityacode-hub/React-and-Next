when to do server action
---------------------------
form submission
create/update//delete
internal  ui mutation

not used in the public api webhook realtime app 
------------------------------------------------
external clients
Heavy backend logic
realtime app
webhooks
public api

//changing the font 
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {children}
      </body>
    </html>
  );
}


my-project/
├── app/
│   ├── layout.tsx
│   └── globals.css
├── public/
├── fonts/
│   ├── MyFont-Regular.woff2
│   ├── MyFont-Bold.woff2
│   └── MyFont-Medium.woff2

import localFont from "next/font/local";

const myFont = localFont({
  src: [
    {
      path: "../fonts/MyFont-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/MyFont-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/MyFont-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-custom",
});

//this is the method to use
<body className={myFont.className}>
  {children}
</body>


//form mei server action post request perform krta aur waha se sara data server ko bhej deta h rather than boilerplate code and all


<link is just like the <a> tag of the html it is used to visit the another page wihout rerendering </link>

<Script/> in the Nextjs
 the optimised version of the html <script>
  used to load third-party scripts
  provides loading startegies
  imporves performance and page speed


  <Image/> from "next/image" instead of <img>
  -automatic image optimisation
  -lazy loading..
  - Responsive image
  -Layout shift prevention
  -Modern Format like web
  --these optimisation imprive page performance and loading speed

import Image from "next/imgae"
export default function Page()
{
  return(
    <Image src="/profile.png"
    width={500}
    height={500}
    alt="Profile Image"
    />
  )
}

Important Required Props:-
--------------------------
.src
.width
.height
.alt
when u are using local image form the public folder then it is not required to give the height and width of the image
simple:
 <Image src={"/image.png"}
alt="test image"
width:{200}
height:{300}
/>
//Note when we are using the remote url then it is important that  we need to put the height and width so that bowser can reserve space and avoid layout shifts

important most important is 
-------------------------------------
REMOTE PATTERNS:- remote patterns is a configuration in next.config.js that tells Next.js which extends image source are allowed when using the next/image component
By default Next.js block remote image for the security reasons so you must whitelist external image domains using remotepatterns.


//this should be done under the next.config.ts

import type {Nextconfig} from "next"
const config:NextConfig={
  images:{
    remotepatterns:[
      {
        protocols:'https',
        hostname:'s3.amaazonawa.com',
        port:'',
        pathname:'/my-bucket/** */'
        search:'',
      },
    ]
  }
}