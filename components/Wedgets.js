import { SearchIcon } from "@heroicons/react/solid";
import News from "./News";
import {useState} from "react";


export default function Wedgets({newsResults,randomUsersResult}) {
  const [articleNumber,setArticleNumber] = useState(3);
  const [randomNumber,setRandomNumber] = useState(3);
  return (
    <div className="xl:w-[600px] hidden lg:inline mr-8 space-y-5">
      <div className="sticky w-[90%]   top-0 bg-white py-2 z-50">
        <div className=" flex items-center p-3 rounded-full  ">
          <input  className=" inset-0 rounded-full border-none " type="text" placeholder="جستجو در توییتر" />
          <SearchIcon className="h-5 " />
        </div>
      </div>

      <div className=" text-gray-700 space-y-3 bg-gray-100 rounded-xl pt-2 w-[90%] xl:w-[75%]">
      <h4 className="font-bold text-xl px-4">مقالات انگلیسی</h4>
      {newsResults.slice(0,articleNumber).map((article)=>(
        <News key={article.tittle} article={article} />
      ))}
      <button onClick={() =>setArticleNumber(articleNumber + 3)} className="text-blue-300 pr-3 pb-3 hover:text-blue-400">بیشتر</button>
      </div>
      {/* //randomUsersResult */}
      <div className="sticky top-16 text-gray-700 space-y-3 bg-gray-100 pt-2 rounded-xl w-[90%] xl:w-[75%]">
          <h4 className="font-bold text-xl px-4">دنبال کردن افراد</h4>
          {
            randomUsersResult.slice(0,randomNumber).map((randomUsers)=>(
              <div key={randomUsers.login.username} className="flex items-center px-4 py-2 cursor- hover:bg-gray-200">
                  <img className="rounded-full" width="40" src={randomUsers.picture.thumbnail} alt="" />
                  <div className="trunkate mr-4 leading-5">
                    <h4 className="font-bold hover:underline text-[14px] trunkate">{randomUsers.login.username}</h4>
                    <h5 className="text[13px] text-gray-500 trunkate">{randomUsers.name.first + " " + randomUsers.name.last}</h5>
                  </div>
                  <button className="mr-auto bg-black text-white rounded-full text-sm px-3.5 py-1.5 font-bold ">follow</button>
              </div>
            ))
          }
          <button onClick={()=>setRandomNumber(randomNumber + 3)} className="text-blue-300 pr-4 pb-3 hover:text-blue-400">بیشتر</button>
      </div>
    </div>
  )
}
