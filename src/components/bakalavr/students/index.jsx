import React, { useState } from "react";
import { InboxOutlined, UploadOutlined } from "@ant-design/icons";
import { Button, Form, Upload, Input } from "antd";
import { BooContainer, Wrapper } from "./style";
import AboutStudents from "../aboutStudent";

const formItemLayout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 14,
  },
};

const normFile = (e) => {
  console.log("Upload event:", e);

  if (Array.isArray(e)) {
    return e;
  }

  return e?.fileList;
};

const Students = () => {
  const [obj, setObj] = useState("");

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    setObj(values);
  };

  const postData = () => {
    axios({
      method: "POST",
      url: "url:/start/comment",
      data: obj,
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <BooContainer>
      <Wrapper>
        <Form name="validate_other" {...formItemLayout} onFinish={onFinish}>
          <Form.Item {...formItemLayout} name="myText" label="Text">
            <Input placeholder="Please input your text" />
          </Form.Item>

          <Form.Item label="Rasm">
            <Form.Item
              name="myImage"
              valuePropName="fileList"
              getValueFromEvent={normFile}
              noStyle
            >
              <Upload.Dragger name="files" action="url:/start/comment">
                <p className="ant-upload-drag-icon">
                  <InboxOutlined />
                </p>
                <p className="ant-upload-text">
                  Click or drag file to this area to upload
                </p>
                <p className="ant-upload-hint">
                  Support for a single or bulk upload.
                </p>
              </Upload.Dragger>
            </Form.Item>
          </Form.Item>

          <Form.Item
            wrapperCol={{
              span: 12,
              offset: 6,
            }}
          >
            <Button type="primary" htmlType="submit" onClick={() => postData()}>
              Submit
            </Button>
          </Form.Item>
        </Form>
        <AboutStudents />
      </Wrapper>
    </BooContainer>
  );
};
export default Students;
