import React from "react";

const AdminStatsCard = ({ title, value, icon }) => {
  return (
    <div className="bg-white shadow-md rounded-xl p-5 border">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-gray-500 text-sm">{title}</h3>
          <p className="text-2xl font-bold mt-2">{value}</p>
        </div>

        <div className="text-3xl">
          {icon}
        </div>
      </div>
    </div>
  );
};

export default AdminStatsCard;