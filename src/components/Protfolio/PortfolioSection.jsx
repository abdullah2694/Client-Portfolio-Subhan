import PropTypes from 'prop-types';
import './Portfolio.scss';
import SectionHeading from '../SectionHeading/SectionHeading';
import { useState } from 'react';
import SinglePortfolio from './SinglePortfolio';
import Modal from '../Modal/Modal';

const PortfolioSection = ({ data }) => {
  // Modal
  const [modal, setModal] = useState(false);
  const [tempData, setTempData] = useState({ imgLinks: [], title: '', subTitle: '', details: [] });
  const [activeFilter, setActiveFilter] = useState("All");

  const getData = (imgLinks, title, subTitle, details) => {
    setTempData({ imgLinks, title, subTitle, details });
    setModal(true);
  };

  const modalClose = () => {
    setModal(false);
  };

  const { portfolioItems } = data;
  const filters = ["All", "TikTok Shop", "Amazon", "Social Media Marketing", "Shopify", "AI Agents"];

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };

  const filteredItems = activeFilter === "All" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category && item.category.includes(activeFilter));

  return (
    <>
      <section id="portfolio">
        <div className="st-height-b100 st-height-lg-b80"></div>
        <SectionHeading title={'Portfolio'} />
        <div className="container">
          <div className="portfolio-filter text-center mb-5">
            {filters.map((filter, index) => (
              <button 
                key={index} 
                className={`st-filter-btn ${activeFilter === filter ? 'active' : ''}`}
                onClick={() => handleFilterChange(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
          <div className="row">
            {filteredItems.map((element, index) => (
              <SinglePortfolio data={element} key={index} getData={getData} />
            ))}
          </div>
        </div>
        <div className="st-height-b100 st-height-lg-b80"></div>
      </section>
      {modal === true ? (
        <Modal
          imgLinks={tempData.imgLinks}
          title={tempData.title}
          subTitle={tempData.subTitle}
          details={tempData.details}
          modalClose={modalClose}
        />
      ) : ""}
    </>
  );
};

PortfolioSection.propTypes = {
  data: PropTypes.object,
};

export default PortfolioSection;


