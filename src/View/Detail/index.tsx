import React, { useState, useEffect } from "react";
import {
  Card,
  Container,
  Flex,
  Text,
  Button,
  ModalComponent,
} from "../../Component";
import { useGetUserDetail } from "../../hooks/user";
import { useGetPostUser } from "../../hooks/post";
import { useGetAlbumByUsers } from "../../hooks/album";
import { useParams } from "react-router-dom";
import { iPost } from "../../models";
import api from "../../api";

interface parms {
  id: string;
}

const Post: React.FC = () => {
  const params: parms = useParams();
  const [postState, setPostState] = useState<iPost[]>([]);
  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");
  const [loadingPost, setLoadingPost] = useState(false);

  const [modalEdit, setModalEdit] = useState(false);

  const [titleEdit, setTitleEdit] = useState<string>("");
  const [bodyEdit, setBodyEdit] = useState<string>("");
  const [index, setIndex] = useState<number>(0);

  const [record, setRecord] = useState<any>({});

  const { data, isValidating: loadUser } = useGetUserDetail(
    parseInt(params.id)
  );
  const { data: dataPost, isValidating: loadPost } = useGetPostUser(
    parseInt(params.id)
  );

  const { data: dataAlbum, isValidating: loadAlbum } = useGetAlbumByUsers(
    parseInt(params.id)
  );

  useEffect(() => {
    if (dataPost) {
      setPostState(dataPost);
    }
  }, [dataPost]);

  const handleAddPost = async (e?: any) => {
    if (!title || !body) {
      alert("Field Wajib Di isi");
      e.preventDefault();
    } else {
      const copPostState = [...postState];
      try {
        setLoadingPost(true);
        await api.sosmedApi.addPost({
          title,
          body,
          userId: parseInt(params.id),
        });
        copPostState.push({
          title,
          body,
          userId: parseInt(params.id),
          id: Math.random() * 1000,
        });
        setPostState(copPostState);
        alert("Succes");
        setLoadingPost(false);
      } catch (error) {
        setLoadingPost(false);
        alert("Error");
      }
    }
  };

  const handleEditPost = async (e?: any) => {
    if (!titleEdit || !bodyEdit) {
      alert("Field Wajib Di isi");
      e.preventDefault();
    } else {
      const copPostState = [...postState];
      try {
        setLoadingPost(true);
        await api.sosmedApi.putPost(
          {
            title: titleEdit,
            body: bodyEdit,
            userId: record.userId,
            id: record.id,
          },
          record.id
        );
        copPostState[index] = {
          title: titleEdit,
          body: bodyEdit,
          userId: record.userId,
          id: record.id,
        };
        setPostState(copPostState);
        alert("Succes");
        setModalEdit(false);
        setLoadingPost(false);
      } catch (error) {
        setLoadingPost(false);
        alert("Error");
      }
    }
  };

  const handleDeletePost = async (id: any, index: number) => {
    const copPostState = [...postState];
    try {
      setLoadingPost(true);
      await api.sosmedApi.deletePost(id);
      if (index > -1) {
        copPostState.splice(index, 1);
      }
      setPostState(copPostState);
      alert("Succes");
      setModalEdit(false);
      setLoadingPost(false);
    } catch (error) {
      setLoadingPost(false);
      alert("Error");
    }
  };

  const handleModalEdit = (record: iPost, index: number) => {
    setRecord(record);
    setIndex(index);
    setTitleEdit(record.title);
    setBodyEdit(record.body);
    setModalEdit(true);
  };

  const loading = loadUser || loadAlbum;

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      width: 500,
      height: 400,
    },
  };

  return (
    <Container className="p-4">
      <Text.Heading h={2} className="text-center">
        Detail User
      </Text.Heading>
      <Container className=" ml-7" loading={loading}>
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
      <hr />
      {/* Post */}
      <Container className=" mt-10" loading={loadPost}>
        <Text.Heading h={4} className=" ml-3 mb-3">
          Post of User
        </Text.Heading>
        <form
          className="flex flex-wrap gap-3 w-full p-5"
          onSubmit={(e) => e.preventDefault()}
        >
          <label className="relative flex-1 flex flex-col">
            <Text.Span className="font-bold mb-3">*Title</Text.Span>
            <input
              className="rounded-md peer pl-2 pr-2 py-2 border-2 border-gray-200 placeholder-gray-300"
              type="text"
              placeholder="Anonymous"
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>
          <label className="relative w-full flex flex-col">
            <Text.Span className="font-bold mb-3">*Body</Text.Span>
            <textarea
              className="rounded-md peer pl-2 pr-2 py-2 border-2 border-gray-200 placeholder-gray-300"
              name="card_number"
              placeholder="Write here...."
              onChange={(e) => setBody(e.target.value)}
            />
          </label>
          <Button onClick={() => handleAddPost()}>
            Add Post For This user
          </Button>
        </form>
        <Flex.Row colPerRow="4" className=" mx-auto">
          {postState?.map((val, index) => (
            <Flex.Col>
              <Text.Link to={`/post/${val.id}`}>
                <Card title={val.title} style={{ minHeight: 230 }}>
                  <Text.Paragraph>{val.body}</Text.Paragraph>
                  <Container></Container>
                </Card>
              </Text.Link>
              <Container className="flex justify-end pt-1">
                <Button
                  className="mr-2"
                  onClick={() => handleModalEdit(val, index)}
                >
                  Edit
                </Button>
                <Button
                  style={{ background: "red" }}
                  onClick={() => handleDeletePost(val.id, index)}
                >
                  Delete
                </Button>
              </Container>
            </Flex.Col>
          ))}
        </Flex.Row>
      </Container>

      {/* Album */}
      <Container className=" mt-10">
        <Text.Heading h={4} className=" ml-3 mb-3">
          Album of User
        </Text.Heading>
        <Flex.Row colPerRow="4" className=" mx-auto">
          {dataAlbum?.map((val) => (
            <Flex.Col>
              <Text.Link to={`/albums/${val.id}`}>
                <Card title={val.title} style={{ minHeight: 130 }}></Card>
              </Text.Link>
            </Flex.Col>
          ))}
        </Flex.Row>
      </Container>
      <ModalComponent
        isOpen={modalEdit}
        onRequestClose={() => setModalEdit(false)}
        style={customStyles}
        overlayClassName="Overlay"
      >
        <Container style={{ display: "flex", justifyContent: "flex-end" }}>
          <Text.Span onClick={() => setModalEdit(false)}>X</Text.Span>
        </Container>
        <form
          className="flex flex-wrap gap-3 w-full p-5"
          onSubmit={(e) => e.preventDefault()}
        >
          <label className="relative flex-1 flex flex-col">
            <Text.Span className="font-bold mb-3">*Title</Text.Span>
            <input
              className="rounded-md peer pl-2 pr-2 py-2 border-2 border-gray-200 placeholder-gray-300"
              type="text"
              placeholder="Anonymous"
              onChange={(e) => setTitleEdit(e.target.value)}
              defaultValue={titleEdit}
            />
          </label>
          <label className="relative w-full flex flex-col">
            <Text.Span className="font-bold mb-3">*Body</Text.Span>
            <textarea
              className="rounded-md peer pl-2 pr-2 py-2 border-2 border-gray-200 placeholder-gray-300"
              name="card_number"
              placeholder="Write here...."
              onChange={(e) => setBodyEdit(e.target.value)}
              defaultValue={bodyEdit}
            />
          </label>
          <Button onClick={() => handleEditPost()}>Simpan</Button>
        </form>
      </ModalComponent>
    </Container>
  );
};

export default Post;
