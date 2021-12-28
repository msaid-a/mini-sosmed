import React from "react";
import { Card, Container, Flex, Text } from "../../Component";
import { useGetUserDetail } from "../../hooks/user";
import { useGetPostUser } from "../../hooks/post";

import { useParams } from "react-router-dom";

interface parms {
  id: string;
}

const Post: React.FC = () => {
  const params: parms = useParams();
  const { data, isValidating: loadUser } = useGetUserDetail(
    parseInt(params.id)
  );
  const { data: dataPost, isValidating: loadPost } = useGetPostUser(
    parseInt(params.id)
  );

  const loading = loadUser || loadPost;

  return (
    <Container className="p-4" loading={loading}>
      <Text.Heading h={2} className="text-center">
        Post
      </Text.Heading>
      <Container className=" ml-7">
        <Text.Heading h={5} className=" ml-44">
          Detail User
        </Text.Heading>
        <Flex.Row colPerRow="2" className=" px-40">
          <Flex.Col>
            <Flex.Row colPerRow="3">
              <Flex.Col>
                <Text.Paragraph>Full Name</Text.Paragraph>
              </Flex.Col>
              <Flex.Col width="10px">
                <Text.Paragraph>:</Text.Paragraph>
              </Flex.Col>
              <Flex.Col>
                <Text.Paragraph>{data?.name}</Text.Paragraph>
              </Flex.Col>
            </Flex.Row>
            <Flex.Row colPerRow="3">
              <Flex.Col>
                <Text.Paragraph>Username</Text.Paragraph>
              </Flex.Col>
              <Flex.Col width="10px">
                <Text.Paragraph>:</Text.Paragraph>
              </Flex.Col>
              <Flex.Col>
                <Text.Paragraph>{data?.username}</Text.Paragraph>
              </Flex.Col>
            </Flex.Row>
            <Flex.Row colPerRow="3">
              <Flex.Col>
                <Text.Paragraph>Email</Text.Paragraph>
              </Flex.Col>
              <Flex.Col width="10px">
                <Text.Paragraph>:</Text.Paragraph>
              </Flex.Col>
              <Flex.Col width="50%">
                <Text.Paragraph>{data?.email}</Text.Paragraph>
              </Flex.Col>
            </Flex.Row>

            <Flex.Row colPerRow="3">
              <Flex.Col>
                <Text.Paragraph>Phone Number</Text.Paragraph>
              </Flex.Col>
              <Flex.Col width="10px">
                <Text.Paragraph>:</Text.Paragraph>
              </Flex.Col>
              <Flex.Col width="50%">
                <Text.Paragraph>{data?.phone}</Text.Paragraph>
              </Flex.Col>
            </Flex.Row>
          </Flex.Col>
          <Flex.Col>
            <Flex.Row colPerRow="3">
              <Flex.Col>
                <Text.Paragraph>Website</Text.Paragraph>
              </Flex.Col>
              <Flex.Col width="10px">
                <Text.Paragraph>:</Text.Paragraph>
              </Flex.Col>
              <Flex.Col>
                <Text.Paragraph>{data?.website}</Text.Paragraph>
              </Flex.Col>
            </Flex.Row>
            <Flex.Row colPerRow="3">
              <Flex.Col>
                <Text.Paragraph>Address</Text.Paragraph>
              </Flex.Col>
              <Flex.Col width="10px">
                <Text.Paragraph>:</Text.Paragraph>
              </Flex.Col>
              <Flex.Col>
                <Text.Paragraph>{`${data?.address?.street} ${data?.address?.suite} ${data?.address?.city} ${data?.address?.zipcode} `}</Text.Paragraph>
              </Flex.Col>
            </Flex.Row>
            <Flex.Row colPerRow="3">
              <Flex.Col>
                <Text.Paragraph>Company</Text.Paragraph>
              </Flex.Col>
              <Flex.Col width="10px">
                <Text.Paragraph>:</Text.Paragraph>
              </Flex.Col>
              <Flex.Col width="50%">
                <Text.Paragraph>{data?.company?.name},</Text.Paragraph>
                <Text.Paragraph>{data?.company?.catchPhrase}</Text.Paragraph>
              </Flex.Col>
            </Flex.Row>
          </Flex.Col>
        </Flex.Row>
      </Container>

      <Container>
        <Flex.Row colPerRow="4" className=" mx-auto">
          {dataPost?.map((val) => (
            <Flex.Col>
              <Card title={val.title} style={{ minHeight: 200 }}>
                <Text.Paragraph>{val.body}</Text.Paragraph>
              </Card>
            </Flex.Col>
          ))}
        </Flex.Row>
      </Container>
    </Container>
  );
};

export default Post;
