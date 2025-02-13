"use client";

import { useState } from "react";

export default function CreateThread() {
  const [data, setData] = useState(null);

  const createThread = async () => {
    const response = await fetch("/api/thread", { method: "POST" });
    const result = await response.json();
    setData(result);
  };

  return (
    <div>
      <button onClick={createThread}>Create Thread</button>
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
}
