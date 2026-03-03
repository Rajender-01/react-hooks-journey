"use client";
import { useEffect, useState } from "react";

type User = {
  id: number;
  name: string;
};

const INITIAL_DATA: User[] = [];

const ApiFetch = (): React.JSX.Element => {
  const [users, setUsers] = useState<User[]>(INITIAL_DATA);
  useEffect(() => {
    const fetchUsers = async (): Promise<void> => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = (await res.json()) as User[];
      setUsers(data);
    };
    fetchUsers();
  }, []);
  return (
    <div>
      {users.map((item) => {
        return <div key={item.id}>{item.name}</div>;
      })}
    </div>
  );
};

export default ApiFetch;
