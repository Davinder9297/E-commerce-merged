import { RWebShare } from "react-web-share";

export default function Share(){
    return(<>
    <RWebShare
                data={{
                    text: "Web Share - Grocerify",
                    url: "https://www.linkedin.com/in/davinder--kumar/",
                    title: "Grocerify",
                }}
                onClick={() =>
                    console.log("shared successfully!")
                }
            >
                <button>Share on Web</button>
            </RWebShare>
    </>)
}