import React, { useState, useMemo } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  flexRender,
} from "@tanstack/react-table";
import "./Dashboard.css";

// Import images with placeholders
const followersIcon = "/src/assets/follow-icon.svg";
const unfollowersIcon = "/src/assets/unfollow-icon.svg";
const editIcon = "/src/assets/edit-icon.svg";
const profileImage = "/src/assets/profile-image.png";
const searchIcon = "/src/assets/search-icon.svg";
const filterIcon = "/src/assets/filter-icon.svg";
const facebookIcon = "/src/assets/facebook-icon.svg";
const instagramIcon = "/src/assets/instagram-icon.svg";
const linkedinIcon = "/src/assets/linkedin-icon.svg";
const pinterestIcon = "/src/assets/pinterest-icon.svg";
const telegramIcon = "/src/assets/telegram-icon.svg";
const tiktokIcon = "/src/assets/tiktok-icon.svg";
const twitchIcon = "/src/assets/twitch-icon.svg";
const twitterIcon = "/src/assets/twitter-icon.svg";
const youtubeIcon = "/src/assets/youtube-icon.svg";
const spotifyIcon = "/src/assets/spotify-icon.svg";

const Dashboard = () => {
  const [timeframe, setTimeframe] = useState("days");

  // Sample data for the chart
  const chartData = [
    { day: "Sun", Android: 320, IOS: 180 },
    { day: "Mon", Android: 280, IOS: 220 },
    { day: "Tue", Android: 350, IOS: 190 },
    { day: "Wed", Android: 290, IOS: 250 },
    { day: "Thu", Android: 380, IOS: 210 },
    { day: "Fri", Android: 400, IOS: 280 },
    { day: "Sat", Android: 320, IOS: 240 },
  ];

  // Sample data for the table
  const tableData = [
    {
      id: 1,
      name: "Ann Culhane",
      username: "@anne_cullane",
      platform: "Facebook",
      date: "23-05-2025",
    },
    {
      id: 2,
      name: "Ahmad Rosser",
      username: "@ahmad_rosser",
      platform: "Facebook",
      date: "23-05-2025",
    },
    {
      id: 3,
      name: "Zain Calzoni",
      username: "@zain_calzoni",
      platform: "Facebook",
      date: "23-05-2025",
    },
    {
      id: 4,
      name: "Leo Stanton",
      username: "@leo_stanton",
      platform: "Facebook",
      date: "23-05-2025",
    },
    {
      id: 5,
      name: "Kaiya Vetrovs",
      username: "@kaiyan_vetrovs",
      platform: "Facebook",
      date: "23-05-2025",
    },
    {
      id: 6,
      name: "Sarah Johnson",
      username: "@sarah_j",
      platform: "Instagram",
      date: "22-05-2025",
    },
    {
      id: 7,
      name: "Mike Chen",
      username: "@mike_chen",
      platform: "Twitter",
      date: "22-05-2025",
    },
    {
      id: 8,
      name: "Emma Wilson",
      username: "@emma_w",
      platform: "LinkedIn",
      date: "21-05-2025",
    },
    {
      id: 9,
      name: "David Brown",
      username: "@david_b",
      platform: "YouTube",
      date: "21-05-2025",
    },
    {
      id: 10,
      name: "Lisa Davis",
      username: "@lisa_d",
      platform: "TikTok",
      date: "20-05-2025",
    },
  ];

  // Table columns definition
  const columns = useMemo(
    () => [
      {
        accessorKey: "select",
        header: "#",
        cell: ({ row }) => (
          <input
            type="checkbox"
            checked={row.getIsSelected()}
            onChange={row.getToggleSelectedHandler()}
          />
        ),
      },
      {
        accessorKey: "name",
        header: "NAME",
        cell: ({ getValue }) => (
          <span className="table-name">{getValue()}</span>
        ),
      },
      {
        accessorKey: "username",
        header: "USERNAME",
        cell: ({ getValue }) => (
          <span className="table-username">{getValue()}</span>
        ),
      },
      {
        accessorKey: "platform",
        header: "PLATFORM",
        cell: ({ getValue }) => (
          <span className="table-platform">{getValue()}</span>
        ),
      },
      {
        accessorKey: "date",
        header: "DATE",
        cell: ({ getValue }) => (
          <span className="table-date">{getValue()}</span>
        ),
      },
    ],
    []
  );

  const [globalFilter, setGlobalFilter] = useState("");
  const [sorting, setSorting] = useState([]);

  const table = useReactTable({
    data: tableData,
    columns,
    state: {
      globalFilter,
      sorting,
    },
    onGlobalFilterChange: setGlobalFilter,
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  });

  return (
    <div className="dashboard">
      {/* Metrics Cards */}
      <div className="row">
        <div className="col-md-7">
          <div className="dashboard-metrics">
            <div className="metric-card followers-card">
              <div className="metric-icon">
                <img src={followersIcon} alt="Followers" />
              </div>
              <div className="metric-content">
                <h3 className="metric-title d-flex align-items-center gap-2">
                  Total Followers
                  <div className="metric-change positive">
                    <span className="change-icon">↗</span>
                    +15.03%
                  </div>
                </h3>
                <div className="metric-value m-0">1500</div>
              </div>
            </div>

            <div className="metric-card unfollowers-card">
              <div className="metric-icon">
                <img src={unfollowersIcon} alt="Unfollowers" />
              </div>
              <div className="metric-content">
                <h3 className="metric-title d-flex align-items-center gap-2">Total Unfollowers
                <div className="metric-change negative">
                  <span className="change-icon">↘</span>
                  -5.03%
                </div>
                </h3>
                <div className="metric-value m-0">200</div>
                
              </div>
            </div>
          </div>

          {/* Chart Section */}
          <div className="dashboard-chart-section">
            <div className="chart-header">
              <h2 className="chart-title">Download's Statics</h2>
              <div className="timeframe-selector">
                <button
                  className={`timeframe-btn ${
                    timeframe === "days" ? "active" : ""
                  }`}
                  onClick={() => setTimeframe("days")}
                >
                  Days
                </button>
                <button
                  className={`timeframe-btn ${
                    timeframe === "weekly" ? "active" : ""
                  }`}
                  onClick={() => setTimeframe("weekly")}
                >
                  Weekly
                </button>
                <button
                  className={`timeframe-btn ${
                    timeframe === "monthly" ? "active" : ""
                  }`}
                  onClick={() => setTimeframe("monthly")}
                >
                  Monthly
                </button>
              </div>
            </div>

            <div className="chart-container">
              <ResponsiveContainer width="100%" height={300}>
                <BarChart
                  data={chartData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="Android" fill="#3B82F6" />
                  <Bar dataKey="IOS" fill="#F97316" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
        <div className="col-md-5">
          {/* Profile Card */}
          <div className="dashboard-profile-card">
            <div className="profile-header">
              <button className="edit-btn">
                <img src={editIcon} alt="Edit" />
              </button>
            </div>
            <div className="profile-content">
              <div className="profile-image">
                <img src={profileImage} alt="Sonam Kumari" />
              </div>
              <div className="profile-info">
                <div className="profile-name">
                  Sonam Kumari
                  <span className="verified-badge">✓</span>
                </div>
                <div className="profile-id">CA00786YTIGTW</div>
                <div className="profile-contact">
                  <div className="contact-item">
                    <span className="contact-label">Email:</span>
                    <span className="contact-value">sonam@gmail.com</span>
                  </div>
                  <div className="contact-item">
                    <span className="contact-label">Phone:</span>
                    <span className="contact-value">+1 345678900</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="social-icons">
              <img src={facebookIcon} alt="Facebook" />
              <img src={instagramIcon} alt="Instagram" />
              <img src={linkedinIcon} alt="LinkedIn" />
              <img src={pinterestIcon} alt="Pinterest" />
              <img src={telegramIcon} alt="Telegram" />
              <img src={tiktokIcon} alt="TikTok" />
              <img src={twitchIcon} alt="Twitch" />
              <img src={twitterIcon} alt="Twitter" />
              <img src={youtubeIcon} alt="YouTube" />
              <img src={spotifyIcon} alt="Spotify" />
            </div>
          </div>
        </div>
      </div>

      {/* Recent Visit Table */}
      <div className="dashboard-table-section">
        <div className="table-header">
          <h2 className="table-title">Recent Visit</h2>
          <button className="view-all-btn">View All</button>
        </div>

        <div className="table-controls">
          <div className="search-box">
            <img src={searchIcon} alt="Search" />
            <input
              type="text"
              placeholder="Search..."
              value={globalFilter}
              onChange={(e) => setGlobalFilter(e.target.value)}
            />
          </div>
          <button className="filter-btn">
            <img src={filterIcon} alt="Filter" />
          </button>
        </div>

        <div className="table-container">
          <table className="data-table">
            <thead>
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <th
                      key={header.id}
                      onClick={header.column.getToggleSortingHandler()}
                    >
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                      {header.column.getIsSorted() === "asc"
                        ? " ↑"
                        : header.column.getIsSorted() === "desc"
                        ? " ↓"
                        : ""}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody>
              {table.getRowModel().rows.map((row) => (
                <tr key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <td key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="table-pagination">
          <div className="pagination-info">
            <span>1-10 of 97</span>
            <select>
              <option>10</option>
              <option>25</option>
              <option>50</option>
            </select>
            <span>Rows per page</span>
          </div>
          <div className="pagination-controls">
            <button>‹</button>
            <span>1/10</span>
            <button>›</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
