import { useParams } from "react-router-dom";

export default function Feed() {
   let { feedTopic } = useParams();
   if(!feedTopic){
    feedTopic = "home";
   }
    return (
        <div>
            <h2>{feedTopic}</h2>
        </div>
    )
}