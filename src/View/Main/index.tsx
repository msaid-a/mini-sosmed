import React from "react";
import { Card, Container, Flex, Text } from "../../Component";
import { useGetUser } from "../../hooks/user";

const Main: React.FC = () => {
  const { data, isValidating: loading, mutate } = useGetUser();
  return (
    <Container className=" p-4" loading={loading}>
      <Text.Heading h={3} className="text-center mb-12">
        List User
      </Text.Heading>
      <Flex.Row colPerRow="4" className=" justify-center">
        {data?.map((val) => (
          <Flex.Col>
            <Card title={val.name} className=" w-full">
              <Flex.Row colPerRow="3">
                <Flex.Col>
                  <Text.Paragraph>Username</Text.Paragraph>
                </Flex.Col>
                <Flex.Col width="10px">
                  <Text.Paragraph>:</Text.Paragraph>
                </Flex.Col>
                <Flex.Col>
                  <Text.Paragraph>{val.username}</Text.Paragraph>
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
                  <Text.Paragraph>{val.email}</Text.Paragraph>
                </Flex.Col>
              </Flex.Row>
              <Flex.Row colPerRow="3">
                <Flex.Col>
                  <Text.Paragraph>Website</Text.Paragraph>
                </Flex.Col>
                <Flex.Col width="10px">
                  <Text.Paragraph>:</Text.Paragraph>
                </Flex.Col>
                <Flex.Col>
                  <Text.Paragraph>{val.website}</Text.Paragraph>
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
                  <Text.Paragraph>{val.phone}</Text.Paragraph>
                </Flex.Col>
              </Flex.Row>
            </Card>
          </Flex.Col>
        ))}
      </Flex.Row>
    </Container>
  );
};

export default Main;
