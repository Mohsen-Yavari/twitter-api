import { SearchIcon } from "@heroicons/react/solid";
import News from "./News";
import {useState} from "react";


export default function Wedgets({newsResults}) {
  const [articleNumber,setArticleNumber] = useState(3);
  return (
    <div className="xl:w-[600px] hidden lg:inline mr-8 space-y-5">
      <div className="w-[90%]   top-0 bg-white py-2 z-50">
        <div className=" flex items-center p-3 rounded-full  ">
          <input  className=" inset-0 rounded-full border-none " type="text" placeholder="جستجو در توییتر" />
          <SearchIcon className="h-5 " />
        </div>
      </div>

      <div className="text-gray-700 space-y-3 bg-gray-100 rounded-xl pt-2 w-[90%] xl:w-[75%]">
      <h4 className="font-bold text-xl px-4">مقالات انگلیسی</h4>
      {newsResults.slice(0,articleNumber).map((article)=>(
        <News key={article.tittle} article={article} />
      ))}
      <button onClick={() =>setArticleNumber(articleNumber + 3)} className="text-blue-300 pr-3 pb-3 hover:text-blue-400">بیشتر</button>
      </div>
     
    </div>
  )
}
