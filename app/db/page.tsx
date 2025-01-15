// src/app/page.tsx
import { query } from "@/lib/db"; // 导入数据库工具

export default async function HomePage() {
  // 这里你可以直接使用 async 函数，因为 page 组件默认是 Server Component
  const users = await query("SELECT * FROM users");

  return (
    <>
      <h1>Users</h1>
      {users.length > 0 ? (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.username} ({user.email})
            </li>
          ))}
        </ul>
      ) : (
        <p>No users found.</p>
      )}
    </>
  );
}
