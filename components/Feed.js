import { SparklesIcon } from "@heroicons/react/solid";
import Input from "./Input";
import Post from "./Post";

export default function Feed() {

const posts =[
  {
    id:1,
    name:"علی",
    username:"ali1230",
    userImg:"https://images.unsplash.com/photo-1461800919507-79b16743b257?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    img:"https://images.unsplash.com/photo-1521575107034-e0fa0b594529?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cG9zdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    text:"علی از تهرانم",
    timestamp:"اخرین بازدید 10دقیقه پیش",
  },
 
  {
    id:2,
    name:"رضا",
    username:"ali1230",
    userImg:"https://media.istockphoto.com/photos/dedicated-female-student-of-asian-ethnicity-having-online-class-via-picture-id1344252964?b=1&k=20&m=1344252964&s=170667a&w=0&h=aXAOOx8yMDSrapaNgTInvdxOrkwp82pnC-qOprji5So=",
    img:"https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cG9zdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    text:"رضا از شیرازم",
    timestamp:"اخرین بازدید 5 روز پیش",
  },
 
]

  return (
    <div className="xl:mr-[370px] border-l border-r border-gray-200 xl:min-w-[576px] sm:mr-[73px] flex-grow max-w-xl ">
        <div className="flex py-2 sticky top-0 z-50 bg- border-b border-gray-200">
            <h2 className="text-lg sm:text-xl font-bold cursor-pointer">خانه</h2>
            <div className="hoverEffect flex items-center justify-center px-0 mr-auto w-9 h-9">
                <SparklesIcon className="h-5 " />
            </div>
        </div>
        <Input />
        {posts.map((post)=>(
          <Post key={post.id} post={post} />
        ))}
    </div>
  )
}
