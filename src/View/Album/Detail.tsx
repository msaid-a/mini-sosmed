import React from "react";
import { Container, Text, Image, Card, Flex } from "../../Component";
import { useGetPhotosAlbum } from "../../hooks/album";
import { useParams } from "react-router-dom";

interface parms {
  id: string;
}
const Albums: React.FC = () => {
  const params: parms = useParams();

  const { data, isValidating } = useGetPhotosAlbum(parseInt(params.id));
  return (
    <Container>
      <Container className=" px-36">
        <Text.Heading h={2} className="text-center mb-12">
          List Photos of Albums
        </Text.Heading>
        <Flex.Row colPerRow="3">
          {data?.map((val) => (
            <Flex.Col>
              <Text.Link to={`/photos/${val.id}`}>
                <Card title={val.title} style={{ minHeight: 280 }}>
                  <Image src={val.thumbnailUrl} className="mx-auto" />
                </Card>
              </Text.Link>
            </Flex.Col>
          ))}
        </Flex.Row>
      </Container>
    </Container>
  );
};

export default Albums;
