
import { CardDemo } from "@/components/login-form";
import localFont from "next/font/local";

const myFont = localFont({
  src: "../../../public/Sacramento-Regular.ttf",
  display: "swap",
});

const LoginPage = () => {
  return (
    <>
    <div className="text-8xl flex justify-center items-center font-bold text-blue-950 py-7">
        <h1 className={myFont.className} >
        Welcome Back
      </h1>
    </div>

      <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-background p-6 md:p-10">
        <div className="w-full max-w-sm">
          <CardDemo />
        </div>
      </div>
    </>
  );
};

export default LoginPage;
