// Tab.js
import React, { useState } from "react";
import PropTypes from "prop-types";

//css
import "./tab.css";

const Tab = ({ tabs, defaultActiveKey, onChange }) => {
  const [activeKey, setActiveKey] = useState(defaultActiveKey || tabs[0].key);

  const handleTabClick = (key) => {
    setActiveKey(key);
    if (onChange) {
      onChange(key);
    }
  };

  return (
    <div className="tabs">
      <div className="tab-header">
        {tabs.map((tab) => (
          <div
            key={tab.key}
            className={`tab-item ${activeKey == tab.key ? "active" : ""}`}
            onClick={() => handleTabClick(tab.key)}
          >
            {tab.tab}
          </div>
        ))}
      </div>
      <div className="tab-content">
        {tabs.find((tab) => tab.key === activeKey)?.content}
      </div>
    </div>
  );
};

Tab.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      tab: PropTypes.node.isRequired,
      content: PropTypes.node.isRequired,
    })
  ).isRequired,
  defaultActiveKey: PropTypes.string,
  onChange: PropTypes.func,
};

export default Tab;
