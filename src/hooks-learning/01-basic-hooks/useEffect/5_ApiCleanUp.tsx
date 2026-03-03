"use client";
import { useEffect, useState } from "react";

type User = {
  id: number;
  name: string;
};

const INITIAL_DATA: User[] = [];

const ApiCleanUp = (): React.JSX.Element => {
  const [users, setUsers] = useState<User[]>(INITIAL_DATA);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchUsers = async (): Promise<void> => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users", {
          signal,
        });
        const data = (await res.json()) as User[];
        setUsers(data);
      } catch (error) {
        if ((error as Error).name === "AbortError") {
          console.log("Fetch aborted");
        } else {
          console.error("Error fetching users", error);
        }
      }
    };

    fetchUsers();

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <div className="w-full max-w-md bg-gray-900 text-white rounded-lg p-6 shadow-lg space-y-3">
      
      <h2 className="text-xl font-semibold text-gray-300 text-center">
        API Fetch with Cleanup
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
  );
};

export default ApiCleanUp;