import { Form, Select } from "antd";
import "antd/dist/reset.css";
import { addressOption } from "../constants";


function AddressSelect({ address, application, point }) {
  const handleFilterOption = (input, option) => {
    return option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0;
  };

  return (
    <Form.Item name={[String(application.key), point]} initialValue={address}>
      <Select
        bordered={false}
        showSearch
        filterOption={handleFilterOption}
      >
        {addressOption.map(({id, location}) => (
            <Select key={id} value={id}>
            {location}
            </Select>
        ))}
      </Select>
    </Form.Item>
  );
}

export default AddressSelect;
