import React from "react";
import { Container, Text, Card } from "../../Component";
import { useGetAlbum } from "../../hooks/album";


const Album: React.FC = () => {

  const {
    data: dataAlbum,
    isValidating: loadAlbum,
    mutate: mutateAlbum,
  } = useGetAlbum();

  return (
    <Container loading={loadAlbum}>
      <Container className=" px-96">
        <Text.Heading className="text-center mb-5" h={2}>
          List Album
        </Text.Heading>



        {dataAlbum?.map((val) => (
        <Text.Link to={`/albums/${val.id}`}>
          <Card title={val.title} className=" mt-7">
          </Card>
        </Text.Link>
        ))}
      </Container>
    </Container>
  );
};

export default Album;
