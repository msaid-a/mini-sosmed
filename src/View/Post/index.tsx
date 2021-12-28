import React from "react";
import { Container, Text, Card } from "../../Component";
import { useGetPost } from "../../hooks/post";
import { useParams } from "react-router-dom";

const Post: React.FC = () => {
  const {
    data: dataPost,
    isValidating: loadPost,
    mutate: mutatePost,
  } = useGetPost();
  

  return (
    <Container loading={loadPost}>
      <Container className=" px-96">
        <Text.Heading className="text-center mb-5" h={2}>
          List Post
        </Text.Heading>

        {dataPost?.map((val) => (
          <Text.Link to={`/post/${val.id}`}>
            <Card title={val.title} className=" mt-7">
              <Text.Paragraph className=" mb-4">{val.body}</Text.Paragraph>
            </Card>
          </Text.Link>
        ))}
      </Container>
    </Container>
  );
};

export default Post;
