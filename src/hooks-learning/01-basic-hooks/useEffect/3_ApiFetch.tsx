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
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="bg-gray-900 text-white w-full max-w-md p-6 rounded-lg shadow-lg space-y-4">
        
        <h2 className="text-xl font-semibold text-gray-300 text-center">
          API Fetch (Run Once on Mount)
        </h2>

        <div className="space-y-2">
          {users.map((item) => (
            <div
              key={item.id}
              className="bg-gray-800 px-4 py-2 rounded text-gray-200"
            >
              {item.name}
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default ApiFetch;