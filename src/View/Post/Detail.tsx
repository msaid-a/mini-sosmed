import React from "react";
import { Button, Container, Text } from "../../Component";
import { useGetCommentPost, useGetDetailPost } from "../../hooks/post";
import { useParams } from "react-router-dom";

interface parms {
  id: string;
}

const Comment: React.FC = () => {
  const params: parms = useParams();
  const {
    data,
    isValidating: loadDetail,
    mutate: mutateDetail,
  } = useGetDetailPost(parseInt(params.id));
  const {
    data: dataComment,
    isValidating: loadPost,
    mutate: mutatePost,
  } = useGetCommentPost(parseInt(params.id));

  return (
    <Container loading={loadDetail}>
      <Container className=" px-96">
        <Text.Heading className="text-center mb-5" h={2}>
          Detail Post
        </Text.Heading>
        <Text.Heading h={6}>{data?.title}</Text.Heading>
        <Text.Paragraph>{data?.body}</Text.Paragraph>

        <form className="flex flex-wrap gap-3 w-full p-5">
          <label className="relative flex-1 flex flex-col">
            <Text.Span className="font-bold mb-3">Name</Text.Span>
            <input
              className="rounded-md peer pl-2 pr-2 py-2 border-2 border-gray-200 placeholder-gray-300"
              type="text"
              placeholder="Anonymous"
            />
          </label>

          <label className="relative flex-1 flex flex-col">
            <Text.Span className="font-bold flex items-center gap-3 mb-3">
              Email
              <Text.Span className="relative group">
                <Text.Span className="hidden group-hover:flex justify-center items-center px-2 py-1 text-xs absolute -right-2 transform translate-x-full -translate-y-1/2 w-max top-1/2 bg-black text-white">
                  {" "}
                  
                </Text.Span>
              </Text.Span>
            </Text.Span>
            <input
              className="rounded-md peer pl-2 pr-2 py-2 border-2 border-gray-200 placeholder-gray-300"
              type="text"
              placeholder="Anonymous@mail.com"
            />
          </label>
          <label className="relative w-full flex flex-col">
            <Text.Span className="font-bold mb-3">*Write Comment</Text.Span>
            <textarea
              className="rounded-md peer pl-2 pr-2 py-2 border-2 border-gray-200 placeholder-gray-300"
              name="card_number"
              placeholder="Write here...."
            />
          </label>
          <Button>Add Post For This user</Button>
        </form>

        <Text.Paragraph className=" mt-12">Comment :</Text.Paragraph>

        {dataComment?.map((val) => (
          <Container className=" mt-7">
            <Text.Paragraph className=" font-semibold">
              {val.name}
            </Text.Paragraph>
            <Text.Paragraph className=" text-gray-500">
              {val.email}
            </Text.Paragraph>
            <Text.Paragraph className=" mb-4">{val.body}</Text.Paragraph>
            <hr className=" mb-9" />
          </Container>
        ))}
      </Container>
    </Container>
  );
};

export default Comment;
