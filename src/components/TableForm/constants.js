import AddressSelect from "./AddressSelect/AddressSelect";

const addressData = {
  address_1: {
    bound: [59.84660399, 30.29496392],
    location: "Кубинская улица, 76к3, Санкт-Петербург",
    id: "address_1",
    key: 1,
  },
  address_2: {
    bound: [59.82934196, 30.42423701],
    location: "Бухарестская улица, 158, Санкт-Петербург",
    id: "address_2",
    key: 2,
  },
  address_3: {
    bound: [59.83567701, 30.38064206],
    location: "Дунайский проспект, 34/16, Санкт-Петербург",
    id: "address_3",
    key: 3,
  },
  address_4: {
    bound: [59.84660399, 30.29496392],
    location: "Кубинская улица, 76к3, Санкт-Петербург",
    id: "address_4",
    key: 4,
  },
  address_5: {
    bound: [59.83567701, 30.38064206],
    location: "Дунайский проспект, 34/16, Санкт-Петербург",
    id: "address_5",
    key: 5,
  },
  address_6: {
    bound: [59.82934196, 30.42423701],
    location: "Бухарестская улица, 158, Санкт-Петербург",
    id: "address_6",
    key: 6,
  },
  address_7: {
    bound: [59.82761295, 30.41705607],
    location: "Загребский бульвар, 45, Санкт-Петербург",
    id: "address_7",
    key: 7,
  },
  address_8: {
    bound: [59.84660399, 30.29496392],
    location: "Кубинская улица, 76к3, Санкт-Петербург",
    id: "address_8",
    key: 8,
  },
  address_9: {
    bound: [59.82761295, 30.41705607],
    location: "Загребский бульвар, 45, Санкт-Петербург",
    id: "address_9",
    key: 9,
  },
  address_10: {
    bound: [59.84660399, 30.29496392],
    location: "Кубинская улица, 76к3, Санкт-Петербург",
    id: "address_10",
    key: 10,
  },
};

const addressOption = Object.keys(addressData).map((id) => ({
  ...addressData[id],
}));

const columns = [
  {
    title: "№",
    dataIndex: "key",
  },
  {
    title: "Зона Погрузки",
    dataIndex: ["loadingPoint", "location"],
    render: (address, record) => {
      return (
        <AddressSelect
          address={address}
          application={record}
          point={"loadingPoint"}
        />
      );
    },
  },
  {
    title: "Зона разгрузки",
    dataIndex: ["dropPoint", "location"],
    render: (address, record) => {
      return (
        <AddressSelect
          address={address}
          application={record}
          point={"dropPoint"}
        />
      );
    },
  },
];

export { addressData, columns, addressOption };
