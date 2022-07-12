import { SearchIcon } from "@heroicons/react/solid";



export default function Wedgets() {
  return (
    <div className="xl:w-[600px] hidden lg:inline ml-8 space-y-5">
      <div className="w-[90%]   top-0 bg-white py-1.5 z-50">
        <div className=" flex items-center p-3 rounded-full  ">
          <input  className=" inset-0 rounded-full border-none " type="text" placeholder="جستجو در توییتر" />
          <SearchIcon className="h-5 " />
        </div>
      </div>
    </div>
  )
}
