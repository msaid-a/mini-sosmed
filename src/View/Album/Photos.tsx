import React from "react";
import { Container, Text, Image } from "../../Component";
import { useGetDetailPhotos } from "../../hooks/album";
import { useParams } from "react-router-dom";

interface parms {
  id: string;
}

const Detail: React.FC = () => {
  const params: parms = useParams();

  const { data, isValidating } = useGetDetailPhotos(parseInt(params.id));
  return (
    <Container loading={isValidating}>
      <Container className=" px-96 text-center" >
        <Text.Heading h={2}>Detail Photos</Text.Heading>
        <Image className="mx-auto mb-4 mt-4" src={data?.url} />
        <Text.Heading h={5}>{data?.title}</Text.Heading>
      </Container>
    </Container>
  );
};

export default Detail;
