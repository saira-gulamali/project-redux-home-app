import { useSelector } from "react-redux";
import { selectPostIds, getPostsStatus, getPostsError } from "./postsSlice";
import PostsExcerpt from "./PostsExcerpt";
import { postStatusIndex } from "./postsSlice";

const PostsList = () => {
  const orderedPostIds = useSelector(selectPostIds);
  const postStatus = useSelector(getPostsStatus);
  const error = useSelector(getPostsError);

  let content;
  if (postStatus === postStatusIndex.loading) {
    content = <p>"Loading..."</p>;
  } else if (postStatus === postStatusIndex.succeeded) {
    content = orderedPostIds.map((postId) => (
      <PostsExcerpt key={postId} postId={postId} />
    ));
  } else if (postStatus === postStatusIndex.failed) {
    content = <p>{error}</p>;
  }

  return <section>{content}</section>;
};
export default PostsList;
