import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

function PortfolioItem(props) {
  return (
    <li className="portfolio-item">
      <a className="portfolio-item-a" target="_blanck" href={props.item.href}>
        <div className="portfolio-item-img-wrap">
          <img className="portfolio-item-img" src={props.item.src?props.item.src:'./images/portfolio/timthumb.png'} alt="" />
        </div>
        <h2 className="portfolio-item-title">{props.item.title}</h2>
        <p className="portfolio-item-desc">{props.item.desc}</p>
        <Button classes='portfolio-item-button' text='Подробнее...' />
      </a>
    </li>
  );
}

PortfolioItem.propTypes = {
  item: PropTypes.exact({
    href: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    type: PropTypes.array.isRequired,
    src: PropTypes.string
  })
};

export default PortfolioItem;