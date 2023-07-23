import React from "react";
import { Modal } from "antd";
import "./AssessmentModal.css";
import { Button, Checkbox, Form, Input } from "antd";

import closeIcon from "../../assets/closeIcon.svg";
import SelectComponent from "../SelectComponent";
import MultipleSelect from "../MultipleSelect";
import TimePickerComponent from "../TimePickerComponent";

const CloseIcon = () => {
  return (
    <div style={{ height: "1.875rem", width: "1.875rem" }}>
      <img src={closeIcon} />
    </div>
  );
};

const onFinish = (values: any) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};

interface AssessmentModalProps {
  visible: boolean;
  onClose: () => void;
}

const AssessmentModal: React.FC<AssessmentModalProps> = ({
  visible,
  onClose,
}) => {
  return (
    <Modal
      title={
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <p
            style={{
              color: "#1C4980",
              fontFamily: "Inter",
              fontSize: "1.25rem",
              fontStyle: "normal",
              fontWeight: "600",
            }}
          >
            Create new assessment
          </p>
          <button
            onClick={onClose}
            style={{
              background: "transparent",
              border: "none",
              cursor: "pointer",
            }}
          >
            <i>
              <img src={closeIcon} />
            </i>
          </button>
        </div>
      }
      visible={visible}
      onCancel={onClose}
      closeIcon={false}
      footer={[
        <button
          onClick={onClose}
          style={{
            borderRadius: "0.5rem",
            border: "none",
            backgroundColor: "#0073E6",
            color: "#FFFFFF",
            display: "flex",
            height: "2.5rem",
            padding: "0.625rem 1.875rem",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            boxShadow: "0px -4px 50px 0px rgba(0, 0, 0, 0.09)",
          }}
        >
          Save
        </button>,
      ]}
    >
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 24 }}
        style={{ maxWidth: 600 }}
        layout="vertical"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label={<p className="form-item-label">Name of assessment</p>}
          name="assessment"
          labelCol={{ span: 16 }}
        >
          <Input placeholder="Type Here" />
        </Form.Item>
        <Form.Item
          label={<p className="form-item-label">Purpose of the test is</p>}
          name="purpose"
          labelCol={{ span: 16 }}
        >
          <SelectComponent />
        </Form.Item>
        <Form.Item
          label={<p className="form-item-label">Description</p>}
          name="description"
          labelCol={{ span: 16 }}
        >
          <SelectComponent />
        </Form.Item>
        <Form.Item
          label={<p className="form-item-label">Skills</p>}
          name="skills"
          labelCol={{ span: 16 }}
        >
          <MultipleSelect />
        </Form.Item>
        <Form.Item
          label={<p className="form-item-label">Duration of assessment</p>}
          name="duration"
          labelCol={{ span: 16 }}
          wrapperCol={{ span: 24 }}
        >
          <TimePickerComponent />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default AssessmentModal;
