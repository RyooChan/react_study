import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name: "류찬",
        comment: "류찬은 진짜 천재다...",
    },
    {
        name: "갓찬",
        comment: "진짜 인정하는 부분이다.",
    },
    {
        name: "야나두",
        comment: "야, 너도 영어할수 있어.",
    },
]

function CommentList(props) {
    return (
        <div>
            {comments.map((comment) => {
                return (
                    <Comment name={comment.name} comment={comment.comment} />
                );
            })}
        </div>
    );
}

export default CommentList;