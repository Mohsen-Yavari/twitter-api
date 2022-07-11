import Image from "next/image";
import SidbarMenuItem from "./SidbarMenuItem";
import { BellIcon,BookmarkIcon, DotsCircleHorizontalIcon, HashtagIcon, HomeIcon, InboxIcon ,ClipboardIcon,UserIcon, DotsHorizontalIcon} from '@heroicons/react/solid'


export default function Sidbar() {
  return (
    <div className="hidden sm:flex flex-col p-2 xl:items-start fixed h-full">
        {/* twitter logo */}

        <div className="hoverEffect p-0 hover:bg-blue-100 xl:px-1">
            <Image width="50" height="50" src="data:image/png;base64,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"></Image>
        </div>

        {/* Menu */}
        <div className="mt-4 mb-2.5 xl:items-center">
            <SidbarMenuItem text="خانه" Icon={HomeIcon} active />
            <SidbarMenuItem text="جستجو" Icon={HashtagIcon} />
            <SidbarMenuItem text="اطلاعیه" Icon={BellIcon} />
            <SidbarMenuItem text="پیام ها" Icon={InboxIcon} />
            <SidbarMenuItem text="ذخیره" Icon={BookmarkIcon} />
            <SidbarMenuItem text="لیست" Icon={ClipboardIcon} />
            <SidbarMenuItem text="نمایه" Icon={UserIcon} />
            <SidbarMenuItem text="بیشتر" Icon={DotsCircleHorizontalIcon} />

        </div>
        {/* button  */}
        <button className="bg-blue-400 text-white rounded-full w-56 h-12 font-old shadow-md hover:brightness-95 text-lg hidden xl:inline">توییت</button>

        {/* mini profile */}
        <div className="hoverEffect text-gray-700 flex items-center justify-center xl:justify-end mt-auto xl:mr-2">
        <Image src="/img/img-resume.jpg" alt="me" width="25" height="25" className="rounded-full " />
        <div className="leading-5 hidden xl:inline">
            <h4 className="font-bold">محسن یاوری</h4>
            <p className="text-gray-500">@mohsenCode</p>
            <DotsHorizontalIcon className="h-5 xl:ml-8" />
        </div>
        </div>
    </div>
  )
}
