import React from "react";
import "./MultipleSelect.css";

import { Select } from "antd";
import type { SelectProps } from "antd";

const options: SelectProps["options"] = [];

for (let i = 10; i < 36; i++) {
  options.push({
    label: i.toString(36) + i,
    value: i.toString(36) + i,
  });
}

const handleChange = (value: string[]) => {
  console.log(`selected ${value}`);
};

const MultipleSelect: React.FC = () => (
  <Select
    mode="multiple"
    allowClear
    style={{ width: "100%" }}
    placeholder="Please select"
    defaultValue={["a10", "c12"]}
    onChange={handleChange}
    options={options}
  />
);

export default MultipleSelect;
