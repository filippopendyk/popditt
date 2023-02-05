import { FaAngleUp } from 'react-icons/fa';
import { FaAngleDown } from 'react-icons/fa'
import { IconContext } from 'react-icons';
import Numeral from 'react-numeral';
import "./Post.css";


export default function Post({post}){

    const redirectToRedditPost = () => {
        window.location.href = `https://reddit.com${post.permalink}`;
    }

    console.log(post);

    return (
        <div className="flex mb-6 post-container">
            <div className="flex flex-col bg-post-ups-bg p-4 text-center items-center w-12">
                <IconContext.Provider value={{margin: "auto", textAlign: "center"}}>
                    <FaAngleUp/>
                    {
                        post.ups > 1000 ? <Numeral value={(post.ups)}  format={"0.0a"}/> : post.ups
                    }
                    <FaAngleDown/>
                </IconContext.Provider>
            </div>
            <div 
                onClick={redirectToRedditPost}
                className='px-2 py-1 bg-[#fff] post-content-container'>
                <p>
                <strong>{post.subreddit_name_prefixed} </strong>
                Posted by {post.author}
                </p>
                <h2>{post.title ? post.title : post.subtitle}</h2>
                <p className='overflow-hidden'>{post.selftext}</p>  
                {
                    post.thumbnail.includes("https://") ? <img src={post.thumbnail} alt="post thumbnail" sizes="250" width="250" className='py-2'/> : null
                }

            </div>
        </div>
    )

}