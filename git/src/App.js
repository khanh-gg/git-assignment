import React from "react";

function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      {/* Nút Xin chào */}
      <button onClick={() => alert("xin chào")}>Xin chào</button>

      <br /><br />

      {/* Nút Tạm biệt */}
      <button onClick={() => alert("tạm biệt")}>Tạm biệt</button>
    </div>
  );
}

export default App;
