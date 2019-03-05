import React from 'react';

function PortfolioItem(props) {
  return (
    <li className="portfolio-item">
      <a className="portfolio-item-a" href="asf">
        <div className="portfolio-item-img-wrap">
          <img className="portfolio-item-img" src={props.item.src?props.item.src:'./images/portfolio/timthumb.png'} alt="" />
        </div>
        <p className="portfolio-item-title">{props.item.title}</p>
        <p className="portfolio-item-desc">{props.item.desc}</p>
        <button className="button portfolio-item-button">Подробнее...</button>
      </a>
    </li>
  );
}

export default PortfolioItem;