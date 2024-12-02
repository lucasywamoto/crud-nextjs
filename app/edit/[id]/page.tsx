"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { getItem, updateItem } from "../../../utils/crud";

export default function EditPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    const item = getItem(Number(params.id));
    if (item) {
      setName(item.name);
      setDescription(item.description);
    }
  }, [params.id]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateItem(Number(params.id), { name, description });
    router.push("/");
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Edit Item</h1>
      <form onSubmit={handleSubmit} className="card p-4 shadow-sm">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-control"
            placeholder="Enter the item's name"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="form-control"
            placeholder="Enter a description"
            rows={4}
            required
          ></textarea>
        </div>
        <div className="d-flex justify-content-between">
          <button type="submit" className="btn btn-primary">
            Update
          </button>
          <button
            type="button"
            onClick={() => router.push("/")}
            className="btn btn-secondary"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
