import React from 'react';

function Sidebar(props) {
  return (
    <>
      <div
        className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark"
        style={{ width: '280px', height: '800px' }}
      >
        <a
          href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
        >
          <svg className="bi pe-none me-2" width="40" height="32">
            <use xlinkHref="#bootstrap"></use>
          </svg>
          <span className="fs-4">Sidebar</span>
        </a>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <a
              href="#"
              className={`nav-link text-white ${props.selectedTab === "Home" ? "active" : ""}`}
              aria-current="page"
              onClick={() => props.setSelectedTab("Home")}
            >
              <svg className="bi pe-none me-2" width="16" height="16">
                <use xlinkHref="#home"></use>
              </svg>
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className={`nav-link text-white ${props.selectedTab === "Create Post" ? "active" : ""}`}
              onClick={() => props.setSelectedTab("Create Post")}
            >
              <svg className="bi pe-none me-2" width="16" height="16">
                <use xlinkHref="#speedometer2"></use>
              </svg>
              Create Post
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
