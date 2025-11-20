import React, { useMemo, useState } from "react";
import usePageTitle from "../../hooks/usePageTitle";
import buyProfileRows from "../data/profileBuyData";
import ProfileSellModal from "../components/ProfileSellModal";
import "./Wallet.css";
import "./ProfileSell.css";

const tabConfig = [
  { id: "all", label: "All" },
  { id: "pending", label: "Pending" },
  { id: "accepted", label: "Accepted" },
  { id: "rejected", label: "Rejected" },
];

const statusBadgeClass = (status) => {
  switch (status) {
    case "purchased":
    case "accepted":
      return "status-successful";
    case "process":
    case "pending":
      return "status-process";
    case "rejected":
      return "status-failed";
    default:
      return "status-process";
  }
};

const ProfileBuy = () => {
  usePageTitle("Buy Profile");
  const [activeTab, setActiveTab] = useState("all");
  const [searchValue, setSearchValue] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedActionRow, setSelectedActionRow] = useState(null);

  const counts = useMemo(() => ({
    all: buyProfileRows.length,
    pending: buyProfileRows.filter((row) => row.status === "pending" || row.status === "process").length,
    accepted: buyProfileRows.filter((row) => row.status === "accepted" || row.status === "purchased").length,
    rejected: buyProfileRows.filter((row) => row.status === "rejected").length,
  }), []);

  const filteredRows = useMemo(() => {
    return buyProfileRows.filter((row) => {
      const matchesTab =
        activeTab === "all"
          ? true
          : activeTab === "pending"
          ? row.status === "pending" || row.status === "process"
          : activeTab === "accepted"
          ? row.status === "accepted" || row.status === "purchased"
          : row.status === "rejected";

      const matchesSearch = `${row.profileType} ${row.userName} ${row.userHandle}`
        .toLowerCase()
        .includes(searchValue.toLowerCase());
      return matchesTab && matchesSearch;
    });
  }, [activeTab, searchValue]);

  const handleAction = (row, action) => {
    setSelectedActionRow({ ...row, action });
    setShowModal(true);
  };

  return (
    <div className="admin-page profile-sell-page">
      <div className="profile-sell-header">
        <h1 className="profile-sell-heading">Buy Profile</h1>
      </div>

      <div className="dashboard-table-section">
        <div className="table-header">
          <h2 className="table-title mb-0">Activity</h2>
          <div className="dropdown">
            <button className="view-all-btn" type="button" data-bs-toggle="dropdown">
              Export <i className="bi bi-chevron-down ms-2"></i>
            </button>
            <ul className="dropdown-menu dropdown-menu-end">
              <li><a className="dropdown-item" href="#">CSV</a></li>
              <li><a className="dropdown-item" href="#">XLS</a></li>
              <li><a className="dropdown-item" href="#">PDF</a></li>
            </ul>
          </div>
        </div>
        <div className="table-container-wrapper">
          <div className="table-controls justify-content-between">
            <div className="transaction-tabs">
              {tabConfig.map((tab) => (
                <button
                  key={tab.id}
                  className={`tab-btn ${activeTab === tab.id ? "active" : ""}`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label} ({counts[tab.id] ?? 0})
                </button>
              ))}
            </div>
            <div className="d-flex align-items-center gap-2">
              <button className="filter-btn">
                <i className="bi bi-funnel"></i>
              </button>
              <div className="search-box">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchValue}
                  onChange={(event) => setSearchValue(event.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="table-container">
            <table className="data-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Profile Type</th>
                  <th>Date</th>
                  <th>User Name Link</th>
                  <th>Status</th>
                  <th>Amount</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {filteredRows.map((row, index) => (
                  <tr key={row.id}>
                    <td>{index + 1}</td>
                    <td>{row.profileType}</td>
                    <td>{row.date}</td>
                    <td>
                      <a href="#" className="profile-buy-handle">
                        {row.userHandle}
                        <i className="bi bi-link-45deg ms-1"></i>
                      </a>
                    </td>
                    <td>
                      <span className={`transaction-status ${statusBadgeClass(row.status)}`}>
                        {row.status === "process"
                          ? "Process"
                          : row.status === "purchased"
                          ? "Purchased"
                          : row.status.charAt(0).toUpperCase() + row.status.slice(1)}
                      </span>
                    </td>
                    <td className="table-amount">{row.amount}</td>
                    <td>
                      <div className="dropdown">
                        <button
                          className="transaction-menu-btn"
                          type="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="bi bi-three-dots-vertical"></i>
                        </button>
                        <ul className="dropdown-menu dropdown-menu-end">
                          <li>
                            <a
                              className="dropdown-item"
                              href="#"
                              onClick={(event) => {
                                event.preventDefault();
                                handleAction(row, "view");
                              }}
                            >
                              View
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="#"
                              onClick={(event) => {
                                event.preventDefault();
                                handleAction(row, "accept");
                              }}
                            >
                              Accept
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="#"
                              onClick={(event) => {
                                event.preventDefault();
                                handleAction(row, "reject");
                              }}
                            >
                              Reject
                            </a>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                ))}
                {filteredRows.length === 0 && (
                  <tr>
                    <td colSpan={7} className="text-center py-4">
                      No records found for the selected filters.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          <div className="table-pagination mt-3">
            <div className="pagination-info">
              <span>{filteredRows.length} results</span>
            </div>
            <div className="pagination-controls">
              <button type="button" disabled>
                ‹
              </button>
              <span>1/1</span>
              <button type="button" disabled>
                ›
              </button>
            </div>
          </div>
        </div>
      </div>

      <ProfileSellModal show={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
};

export default ProfileBuy;
