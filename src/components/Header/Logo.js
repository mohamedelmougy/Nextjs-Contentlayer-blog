import Link from "next/link";
import Image from "next/image";
import profileImg from "@/public/profile-img.png";
const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-3 text-dark dark:text-light">
      <div className="w-12 w-16 mr-2 overflow-hidden border border-solid rounded-full md:w-16 border-dark dark:border-gray md:mr-4">
        <Image
          src={profileImg}
          alt="logo"
          className="w-full h-auto rounded-full"
          sizes="33vw"
          priority
          
        />
      </div>
      <span className="text-lg font-bold dark:font-semibold md:text-xl">Mohamed Elmougy</span>
    </Link>
  );
};

export default Logo;
