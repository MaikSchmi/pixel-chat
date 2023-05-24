import Image from "next/image";
import AuthForm from "./components/AuthForm";

export default function Home(): JSX.Element {
    return (
      <div 
        className="
        flex
        min-h-full
        flex-col
        justify-center
        py-12
        sm:px-6
        lg:px-8
        bg-amber-100
      ">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <Image 
              src="/images/logo.png" 
              alt="logo"
              height="72"
              width="72"
              className="mx-auto w-auto"
            />
            <h2 
              className="
                mt-6
                text-center
                text-4xl
                font-bold
                tracking-tight
                text-gray-900
                pixel-fnt
                
              ">
              Sign in to your account
            </h2>
        </div>
        <AuthForm />
      </div>
    )
  }
  