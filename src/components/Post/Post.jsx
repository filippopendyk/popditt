import { FaAngleUp } from 'react-icons/fa';
import { FaAngleDown } from 'react-icons/fa'

export default function Post({post}){

    return (
        <div className="flex bg-post-ups-bg">
            <div className="flex flex-col">
                <FaAngleUp/>
                    {post.ups}
                <FaAngleDown/>
            </div>
            <div>

            </div>
        </div>
    )

}