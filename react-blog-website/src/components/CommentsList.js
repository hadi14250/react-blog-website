const CommentsList = ({ comments }) => (
    <>
    <h3>Comments:</h3>
    {comments.map(comment => (
        comment.postedBy && comment.text &&
        <div className="comment" key={comment.postedBy + ': ' + comment.text}>
            <h4>{comment.postedBy}</h4>
            <p>{comment.text}</p>
        </div>
    ))}
    </>
);

export default CommentsList;