import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Paste() {
  const { id } = useParams();
  const [content, setContent] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(`http://localhost:5000/api/paste/${id}`)
      .then(res => {
        if (!res.ok) throw new Error("Expired or not found");
        return res.json();
      })
      .then(data => setContent(data.content))
      .catch(() => setError("Paste expired or not found"));
  }, [id]);

  if (error) return <h3>{error}</h3>;

  return (
    <pre>{content}</pre>
  );
}
