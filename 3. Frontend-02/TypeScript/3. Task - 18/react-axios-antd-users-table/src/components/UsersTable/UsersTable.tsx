import { useEffect, useState } from "react";
import type { User } from "../../types/user";
import { getUsers } from "../../api";
import { Table, type TableProps } from "antd";

export default function UsersTable() {
  const [data, setData] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getUsers()
      .then(setData)
      .finally(() => setLoading(false));
  }, []);

  const columns: TableProps["columns"] = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Username",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "City",
      dataIndex: ["address", "city"],
      key: "city",
    },
  ];

  return (
    <Table rowKey="id" loading={loading} columns={columns} dataSource={data} />
  );
}
