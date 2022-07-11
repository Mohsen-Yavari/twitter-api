import { EmojiHappyIcon, PhotographIcon } from "@heroicons/react/solid"
import Image from 'next/image';
export default function Input() {
  return (
    <div className="  border-b border-gray-200 p-3 space-x-3" >
            <Image src="/img/img-resume.jpg" alt="me" width="25" height="25" className="rounded-full hover:brightness-95 " />
        <div className="w-full divide-y divide-gray-200">
            <div className="">
                <textarea className="w-full border-none focus:ring-0 text-lg placeholder-gray-500 tracking-wide min-h-[50px]" rows="2" placeholder="دنبال چه میگردی؟"></textarea>
            </div>
            <div className="flex items-center justify-between pt-2">
                <div className="flex">
                    <PhotographIcon className="h-10 w-10 text-sky-500 hover:bg-sky-100 hoverEffect p-2" />
                    <EmojiHappyIcon className="h-10 w-10 text-sky-500 hover:bg-sky-100 hoverEffect p-2" />
                </div>
                <button className="bg-blue-400 text-white px-4 py-1.5 rounded-full font-bold shadow-md hover:brightness-95 disabled:opacity-50" >توییت</button>
            </div>
        </div>
    </div>
  )
}
