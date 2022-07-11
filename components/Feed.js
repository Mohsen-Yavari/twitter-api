import { SparklesIcon } from "@heroicons/react/solid";


export default function Feed() {
  return (
    <div className="xl:mr-[370px] border-l border-r border-gray-200 xl:min-w-[576px] sm:mr-[73px] flex-grow max-w-xl ">
        <div className="flex py-2 sticky top-0 z-50 bg- border-b border-gray-200">
            <h2 className="text-lg sm:text-xl font-bold cursor-pointer">خانه</h2>
            <div className="hoverEffect flex items-center justify-center px-0 mr-auto w-9 h-9">
                <SparklesIcon className="h-5 " />
            </div>
        </div>
    </div>
  )
}
