import { ChartBarIcon, ChatAltIcon, DotsHorizontalIcon, HeartIcon, ShareIcon, TrashIcon } from "@heroicons/react/solid";


export default function post({post}) {
  return (<div className="p-3 cursor-pointer border-b border-gray-200">
        {/* image */}
        <img src={post.userImg} alt="user-img" className="w-11 h-11 rounded-full mr-4" />

        {/* right side */}
        <div className="">
        {/* header */}
            <div className="flex items-center justify-between">
              {/* post  user info*/}
              <div className="flex items-center space-x-2 whitespace-nowrap">
                <h4 className="font-bold text-[15px] sm:text-[16px] hover:underline">{post.name}</h4>
                <span className="text-sm sm:text-[15px]">@{post.username} - </span>
                <span className="text-sm sm:text-[15px] hover:underline">{post.timestamp}</span>
              </div>
               {/*dot icon */}
            <DotsHorizontalIcon className="h-10 hoverEffect w-10 hover:bg-sky-100 hover:text-sky-500 p-2"/>

            </div>

           
        </div>
        {/* post text */}
        <p className="text-grray-800 text-[15px] sm:text-[16px] mb-4">{post.text}</p>

        {/* post image */}
        <img className="rounded-2xl mr-2" src={post.img} alt="" />

        {/* icons */}

        <div className="flex justify-between text-gray-500 p-2">
            <ChatAltIcon className="h-9 w-9 hoverEffect p-2 hover:text-sky-500 hover:bg-sky-100" />
            <TrashIcon className="h-9 w-9 hoverEffect p-2 hover:text-red-500 hover:bg-red-100" />
            <HeartIcon className="h-9 w-9 hoverEffect p-2 hover:text-red-600 hover:bg-red-100" />
            <ShareIcon className="h-9 w-9 hoverEffect p-2 hover:text-sky-500 hover:bg-sky-100" />
            <ChartBarIcon className="h-9 w-9 hoverEffect p-2 hover:text-sky-500 hover:bg-sky-100" />
        </div>

    </div>
  )
}
