import Link from "next/link";
import { MdOutlineTranslate } from "react-icons/md";

const Footer = () => {
  return (
    <div className="m-9 lg:mx-40">
      <div className="flex flex-row gap-44 md:block lg:hidden">
        <div className="flex flex-col underline text-neutral-400 gap-2">
          <Link href="/">FAQ</Link>
          <Link href="/">Account</Link>
          <Link href="/">Investor Relations</Link>
          <Link href="/">Ways href Watch</Link>
          <Link href="/">Privacy</Link>
          <Link href="/">Corporate Information</Link>
          <Link href="/">Speed Test</Link>
          <Link href="/">Only on Netflix</Link>
        </div>

        <div className="flex flex-col underline text-neutral-400 gap-2">
          <Link href="/">Help Center</Link>
          <Link href="/">Media Center</Link>
          <Link href="/">Contact Us</Link>
          <Link href="/">Legal Notices</Link>
        </div>
      </div>

      <div className=" flex-row gap-44 lg:flex hidden">
        <div className="flex flex-col gap-2 underline text-neutral-400">
          <Link href="/">FAQ</Link>
          <Link href="/">Investor Relations</Link>
          <Link href="/">Privacy</Link>
          <Link href="/">Speed Test</Link>
        </div>

        <div className="flex flex-col gap-2 underline text-neutral-400">
          <Link href="/">Help Center</Link>
          <Link href="/">Jobs</Link>
          <Link href="/">Cookie Preferences</Link>
          <Link href="/">Legal Notices</Link>
        </div>
        <div className="flex flex-col gap-2 underline text-neutral-400">
          <Link href="/">Account</Link>
          <Link href="/">Ways href Watch</Link>
          <Link href="/">Corporate Information</Link>
          <Link href="/">Only on Netflix</Link>
        </div>

        <div className="flex flex-col gap-2 underline text-neutral-400">
          <Link href="/">Media Center</Link>
          <Link href="/">Terms of Use</Link>
          <Link href="/">Contact Us</Link>
        </div>
      </div>

      <div className="flex flex-row  items-center border border-gray-300 w-28 rounded-md justify-center p-1 my-6">
        <MdOutlineTranslate className="text-2xl mx-2" />
        <select className="bg-transparent w-full text-center outline-none">
          <option className="text-black">English</option>
          <option className="text-black">Hindi</option>
        </select>
      </div>
      <p className="text-neutral-300 text-sm"> Netflix India</p>
    </div>
  );
};
export default Footer;
