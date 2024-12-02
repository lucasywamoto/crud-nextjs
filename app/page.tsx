"use client";

import { getItems, deleteItem } from "../utils/crud";
import Link from "next/link";

export default function HomePage() {
  const items = getItems();
  const handleDelete = (id: number) => {
    deleteItem(id);
    window.location.reload(); // Refresh the page to reflect changes
  };
  return (
    <div className="container m-5">
      <h1 className="fw-bold">Item List</h1>
      <ul className="list-inline">
        {items.map((item) => (
          <li
            key={item.id}
            className="p-4 mb-3 border border-secondary-subtle border-1 rounded"
          >
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <button
              onClick={() => handleDelete(item.id)}
              className="btn btn-danger me-3"
            >
              Delete
            </button>
            <Link href={`/edit/${item.id}`} className="btn btn-warning">
              Edit
            </Link>
          </li>
        ))}
      </ul>
      <Link href="/create">
        <button className="btn btn-primary">Add New Item</button>
      </Link>
    </div>
  );
}
