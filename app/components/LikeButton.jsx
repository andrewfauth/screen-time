import {FaRegHeart, FaHeart} from 'react-icons/fa'
import {useState} from 'react'
import { useFetcher } from '@remix-run/react'

function LikeButton({show, user}) {
  const fetcher = useFetcher()
  const [like, setLike] = useState(user?.likes?.includes(show))

  return (
    <fetcher.Form method="post">
      <input type="hidden" name="show" value={show} />
      <button
        name="action"
        value={like ? "like" : "unlike"}
        type={user ? "submit" : "button"}
        onClick={() => setLike(!like)} 
        className='relative group'
      >
        <div className="absolute opacity-0 -top-12 group-hover:opacity-100 bg-white text-center text-black font-bold py-1 w-24 rounded-full -left-10 text-sm">
          <div className="w-2 h-2 bg-white absolute left-0 right-0 mx-auto rotate-45 -bottom-[4px]"></div>
          {user ? like ? "Unlike" : "Like" : "Login to like"}
        </div>
        {
          like ?
            <FaHeart className="text-white text-xl" />
          :  
            <FaRegHeart className="text-white text-xl hover:scale-110 duration-100" />
        }
      </button>
    </fetcher.Form>
  )
}

export default LikeButton