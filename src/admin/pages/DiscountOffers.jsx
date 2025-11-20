import React, { useMemo, useState } from "react";
import usePageTitle from "../../hooks/usePageTitle";
import {
  offerCategories,
  discountOffers,
  insuranceOffers,
  insuranceFilters,
} from "../data/discountOffersData";
import "./Wallet.css";
import "./DiscountOffers.css";

const DiscountOffers = () => {
  usePageTitle("Discount & Offers");
  const [activeCategory, setActiveCategory] = useState("apps");
  const [expandedInsurance, setExpandedInsurance] = useState(
    insuranceOffers[0]?.id || null
  );

  const filteredOffers = useMemo(
    () => discountOffers.filter((offer) => offer.category === activeCategory),
    [activeCategory]
  );

  return (
    <div className="admin-page discount-offers-page">
      <section className="discount-section">
        <div className="discount-section-header">
          <h1 className="discount-title">Discount & Offers</h1>
        </div>

        <div className="dashboard-table-section discount-offers-panel">
          <div className="table-controls justify-content-between">
            <div className="transaction-tabs">
              {offerCategories.map((category) => (
                <button
                  key={category.id}
                  className={`tab-btn ${
                    activeCategory === category.id ? "active" : ""
                  }`}
                  onClick={() => setActiveCategory(category.id)}
                >
                  {category.label} ({category.count.toString().padStart(2, "0")})
                </button>
              ))}
            </div>
          </div>

          <div className="discount-app-grid">
            {filteredOffers.map((offer) => (
              <div key={offer.id} className="discount-app-card">
                <div className="discount-app-main">
                  <img src={offer.icon} alt={offer.name} />
                  <div>
                    <h3>{offer.name}</h3>
                    <p>{offer.description}</p>
                  </div>
                </div>
                <a href={offer.url} className="discount-app-link">
                  {offer.cta}
                  <i className="bi bi-box-arrow-up-right ms-1"></i>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="discount-section">
        <div className="discount-section-header">
          <h2 className="discount-subtitle">Insurance</h2>
        </div>

        <div className="dashboard-table-section discount-insurance-panel">
          <div className="consultancy-filters">
            {insuranceFilters.map((filter) => (
              <div key={filter.id} className="consultancy-filter">
                <span className="consultancy-filter-label">{filter.label}</span>
                <div className="consultancy-select">
                  <select defaultValue="">
                    <option value="" disabled>
                      {filter.placeholder}
                    </option>
                    {filter.options.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  <span className="consultancy-select-caret">
                    <i className="bi bi-chevron-down"></i>
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="insurance-list">
            {insuranceOffers.map((offer) => {
              const isExpanded = expandedInsurance === offer.id;
              return (
                <div
                  key={offer.id}
                  className={`insurance-card ${isExpanded ? "expanded" : ""}`}
                >
                  <div className="insurance-card-header">
                    <div className="insurance-brand">
                      <img src={offer.icon} alt={offer.name} />
                      <span>{offer.name}</span>
                    </div>
                    <div className="insurance-details">
                      <div>
                        <span className="insurance-label">Deductible</span>
                        <p>{offer.deductible}</p>
                      </div>
                      <div>
                        <span className="insurance-label">Net Coverage</span>
                        <p>{offer.coverage}</p>
                      </div>
                      <div>
                        <span className="insurance-label">Premium</span>
                        <p>{offer.premium}</p>
                      </div>
                    </div>
                    <div className="insurance-actions">
                    <button type="button" className="dark-btn">
                      Add to compare
                    </button>
                    <button
                      type="button"
                      className="light-btn"
                      onClick={() =>
                        setExpandedInsurance(
                          isExpanded ? null : offer.id
                        )
                      }
                    >
                      {isExpanded ? "Hide" : "Know More"}
                      <i
                        className={`bi ${
                          isExpanded ? "bi-chevron-up" : "bi-chevron-down"
                        } ms-1`}
                      ></i>
                    </button>
                  </div>
                  </div>

                  {isExpanded && (
                    <div className="insurance-features">
                      <span className="insurance-feature-title">Feature</span>
                      <ul>
                        {offer.features.map((feature) => (
                          <li key={feature}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                  )}                  
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default DiscountOffers;
