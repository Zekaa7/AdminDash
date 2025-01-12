import BackButton from "@/components/BackButton";
import PostsPagination from "@/components/post/PostsPagination";
import PostsTable from "@/components/post/PostsTable";
import React from "react";

function PostPage() {
  return (
    <>
      <BackButton text="Go Back" link="/" />
      <PostsTable />
      <PostsPagination />
    </>
  );
}

export default PostPage;
