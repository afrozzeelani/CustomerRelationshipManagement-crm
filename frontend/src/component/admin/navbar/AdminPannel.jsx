import React from "react";
import Sidebar from "./AdminSidebar";
import AdminBody from "./AdminBody";

function AdminPanel() {
  return (
    <div className="d-flex w-100">
      <div style={{flex:'1'}} >
        <Sidebar />
      </div>
      <div style={{flex:'5', padding:"0"}} >
        <AdminBody />
      </div>
    </div>
  );
}

export default AdminPanel;
