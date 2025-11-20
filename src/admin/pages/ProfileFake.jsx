import React, { useMemo, useState } from "react";
import usePageTitle from "../../hooks/usePageTitle";
import fakeProfileRows from "../data/profileFakeData";
import FakeProfileReportModal from "../components/FakeProfileReportModal";
import "./Wallet.css";
import "./ProfileSell.css";

const tabConfig = [
  { id: "report", label: "Report" },
  { id: "incoming", label: "Incoming" },
  { id: "success", label: "Success" },
];

const ProfileFake = () => {
  usePageTitle("Fake Profile");
  const [activeTab, setActiveTab] = useState("report");
  const [searchValue, setSearchValue] = useState("");
  const [showReportModal, setShowReportModal] = useState(false);

  const counts = useMemo(() => ({
    report: fakeProfileRows.filter((row) => row.status === "report").length,
    incoming: fakeProfileRows.filter((row) => row.status === "incoming").length,
    success: fakeProfileRows.filter((row) => row.status === "success").length,
  }), []);

  const filteredRows = useMemo(() => {
    return fakeProfileRows.filter((row) => {
      const matchesTab = activeTab ? row.status === activeTab : true;
      const matchesSearch = `${row.platform} ${row.profileUrl}`
        .toLowerCase()
        .includes(searchValue.toLowerCase());
      return matchesTab && matchesSearch;
    });
  }, [activeTab, searchValue]);

  return (
    <div className="admin-page profile-sell-page">
      <div className="profile-sell-header">
        <h1 className="profile-sell-heading">Fake profile</h1>
        <button type="button" className="dark-btn" onClick={() => setShowReportModal(true)}>
          Request To Report
        </button>
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
                  <th>Platform</th>
                  <th>Profile URL</th>
                  <th>Reported By Users</th>
                  <th>Date</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {filteredRows.map((row, index) => (
                  <tr key={row.id}>
                    <td>{index + 1}</td>
                    <td>{row.platform}</td>
                    <td>
                      <a href={row.profileUrl} className="profile-buy-handle" target="_blank" rel="noreferrer">
                        {row.profileUrl}
                        <i className="bi bi-box-arrow-up-right ms-1"></i>
                      </a>
                    </td>
                    <td>{row.reportedCount}</td>
                    <td>{row.date}</td>
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
                            <a className="dropdown-item" href="#">
                              View
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Mark as Success
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item text-danger" href="#">
                              Remove
                            </a>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                ))}
                {filteredRows.length === 0 && (
                  <tr>
                    <td colSpan={6} className="text-center py-4">
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
      <FakeProfileReportModal
        show={showReportModal}
        onClose={() => setShowReportModal(false)}
      />
    </div>
  );
};

export default ProfileFake;
