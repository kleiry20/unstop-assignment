import React, { useEffect, useRef, useState } from "react";
import "./MultipleInput.css";
import type { InputRef } from "antd";
import { Input, Tag, theme } from "antd";
import { TweenOneGroup } from "rc-tween-one";

const MultipleInput: React.FC = () => {
  const { token } = theme.useToken();
  const [tags, setTags] = useState(["Tag 1", "Tag 2", "Tag 3"]);
  const [inputVisible, setInputVisible] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef<InputRef>(null);

  useEffect(() => {
    if (inputVisible) {
      inputRef.current?.focus();
    }
  }, [inputVisible]);

  const handleClose = (removedTag: string) => {
    const newTags = tags.filter((tag) => tag !== removedTag);
    console.log(newTags);
    setTags(newTags);
  };

  const showInput = () => {
    setInputVisible(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleInputConfirm = () => {
    if (inputValue && tags.indexOf(inputValue) === -1) {
      setTimeout(() => {
        setTags([...tags, inputValue]);
      }, 100);
    }
    setInputVisible(false);
    setInputValue("");
  };

  const forMap = (tag: string) => {
    const tagElem = (
      <Tag
        closable
        onClose={(e) => {
          e.preventDefault();
          handleClose(tag);
        }}
        className="tag-style"
      >
        {tag}
      </Tag>
    );
    return (
      <span key={tag} style={{ display: "inline-block" }}>
        {tagElem}
      </span>
    );
  };

  const tagChild = tags.map(forMap);

  const tagPlusStyle = {
    background: token.colorBgContainer,
    borderStyle: "dashed",
  };

  return (
    <>
      <div
        style={{
          borderRadius: " 0.5rem 0.5rem 0rem 0rem",
          border: "1px solid var(--system-divider, #DDE5EA)",
          padding: "1rem",
          borderBottom: "none",
        }}
        className={`${inputVisible}`}
      >
        <TweenOneGroup
          enter={{
            scale: 0.8,
            opacity: 0,
            type: "from",
            duration: 100,
          }}
          onEnd={(e) => {
            if (e.type === "appear" || e.type === "enter") {
              (e.target as any).style = "display: inline-block";
            }
          }}
          leave={{ opacity: 0, width: 0, scale: 0, duration: 200 }}
          appear={false}
        >
          {tagChild}
          {inputVisible}
        </TweenOneGroup>
      </div>
      <Input
        ref={inputRef}
        type="text"
        size="small"
        value={inputValue}
        onChange={handleInputChange}
        onBlur={handleInputConfirm}
        onPressEnter={handleInputConfirm}
        placeholder="Type Here"
        style={{ borderRadius: "0 0 0.5rem 0.5rem" }}
      />
    </>
  );
};

export default MultipleInput;
