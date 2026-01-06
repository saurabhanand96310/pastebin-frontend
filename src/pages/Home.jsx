import { useState } from "react";

export default function Home() {
  const [content, setContent] = useState("");
  const [link, setLink] = useState("");
  const [error, setError] = useState("");

  const submitPaste = async () => {
    setError("");
    setLink("");

    if (!content.trim()) {
      setError("Content cannot be empty");
      return;
    }

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/paste`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          content,
          expiresInSeconds: 3600, // 1 hour expiry
          maxViews: 5             // max 5 views
        })
      });

      if (!res.ok) {
        throw new Error("Failed to create paste");
      }

      const data = await res.json();
      setLink(data.url);
      setContent("");
    } catch (err) {
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h2 className="text-2xl font-bold mb-4">Create Paste</h2>

      <textarea
        className="border-2 p-2 w-full max-w-xl"
        rows="10"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Enter your text here..."
      />

      <button
        className="border-2 px-4 py-2 mt-3"
        onClick={submitPaste}
      >
        Create
      </button>

      {error && <p className="text-red-600 mt-2">{error}</p>}

      {link && (
        <p className="mt-4">
          Share link:{" "}
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            {link}
          </a>
        </p>
      )}
    </div>
  );
}
