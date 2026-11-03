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
