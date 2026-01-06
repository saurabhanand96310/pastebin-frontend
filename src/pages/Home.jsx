import { useState } from "react";

export default function Home() {
  const [content, setContent] = useState("");
  const [link, setLink] = useState("");

  const submitPaste = async () => {
    const res = await fetch("http://localhost:5000/api/paste", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        content,
        expiresInSeconds: 3600,
        maxViews: 5
      })
    });

    const data = await res.json();
    setLink(data.url);
  };

  return (
    <div>
      <h2>Create Paste</h2>
      <textarea
        rows="10"
        cols="50"
        value={content}
        onChange={e => setContent(e.target.value)}
      />
      <br />
      <button onClick={submitPaste}>Create</button>

      {link && (
        <p>
          Share link: <a href={link}>{link}</a>
        </p>
      )}
    </div>
  );
}
