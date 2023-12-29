import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import Typical from "react-typical";
import {CgFacebook, CgInstagram, CgTwitter} from 'react-icons/cg';
import { useNavigate } from 'react-router-dom';


const Navbar = () => {

  const [cards] = useState([
    {
      image: 'https://cdn.educba.com/academy/wp-content/uploads/2019/10/Behavioral-Marketing-Segmentation.png',
      title:'Behavioral segmentationa',
      text:'Behavioral segmentation is a type of marketing strategy that filters and groups potential customers based on shared behavioral patterns.',

    },
    {
      image: 'https://www.questionpro.com/blog/wp-content/uploads/2023/02/demographic-analysis.jpg',
      title:'Demographic Segmentation',
      text:'Demographic segmentation in marketing is a type of consumer segmentation that involves grouping consumers based on shared demographic characteristics to create better marketing campaigns.',

    },
    {
      image: 'https://www.voxco.com/wp-content/uploads/2021/07/Psychographics1.jpg',
      title:'Psychographic Segmentation',
      text:' Psychographic segmentation breaks down your customer groups into segments that influence buying behaviors, such as: beliefs, values, lifestyle, social status, opinions and activities.',

    },
    {
      image: 'https://i.ytimg.com/vi/xdNjlUTQGHo/maxresdefault.jpg',
      title:'Geographic Segmentation',
      text:'Geographic segmentation is a marketing strategy used to target products or services at people who live in, or shop at, a particular location. It works on the principle that people in that location have similar needs, wants, and cultural considerations.',

    },
    {
      image: 'https://vereigenmedia.com/wp-content/uploads/2023/03/What-is-Technographic-Segmentation-in-B2B.webp',
      title:'Technographic Segmentation',
      text:'Technographic segmentation is a process of dividing a market into segments based on technology usage. This approach can provide insights into which technologies are being used by customers and prospects, how they are using them, and what Jour needs they have.',

    },
    {
      image: 'https://cdn.infocleanse.com/wp-content/uploads/2021/10/firmographics-segmentation-featured-banner.jpg',
      title:'Firmographic Segmentation',
      text:'Firmographic data is types of information that can be used to categorize organizations, such as geographic area, number of clients, type of organization, industry, technologies used and so on. The data is used to segment organizations into meaningful categories.',

    },
  ])


  const history = useNavigate();
  const more = () => {
    history("/more");
  }

  return (
    <>
      <div className="main">
        <div className="c2">
          {""}
          <h1 className="head1">
            {" "}
            <Typical
              loop={Infinity}
              steps={[
                "Customer Segmentation",
                3000,
                "",
                // 8000,
                // "",
                // 8000,
              ]}
            />
          </h1>
        </div>
        <div className="c3">
          Customer segmentation is the practice of dividing a customer base into
          groups of individuals that have similar characteristics relevant to
          marketing, such as age, gender, interests and spending habits.
        </div>
      </div>
      <div className="b1">
        ------------ Brief about customer segmentation ------------
      </div>
      <div className="nav3">
        <div className="nav3b">
          <h1>
            <span>"</span>What Is Customer Segmentation?<span>"</span>
          </h1>
        </div>
        <div className="nav3a">
          Customer segmentation is the process of separating customers into
          groups based on common similarities and characteristics. This can
          range from geographic and demographic factors, such as age, location,
          and income, to psychographic and behavioral factors, such as what
          motivates them to shop and how they prefer to shop. Customers are
          categorized using market research, industry and competitor analysis,
          and customer data. When capturing user information, companies should
          focus on zero-party and first-party data, which includes their contact
          information, purchase history, marketing communication preferences,
          and survey responses. Segmentation helps businesses customize their
          marketing strategies to provide shoppers with the brand experiences
          they're looking for. This can range from sending targeted email
          campaigns to designing in-store displays to serving personalized
          digital ads. As a result, customers feel more connected and engaged.
          Personalization can lead to customer loyalty and brand advocacy,
          especially when companies nurture the business-consumer relationship
          in the right ways.
        </div>
      </div>
      <div className="Cseg">
        <div className="customseg">
          <NavLink to="/Customseg">
            <button className="btn"> customer segmentation</button>
          </NavLink>
        </div>
        <div className="btn_txt">
          "Click the above button to perfom segmentation"
        </div>
      </div>

      <div className="main_i">
        <div className="container">
          <h1 className="head2">Types of customer segmentation</h1>
          <div className="cards">
            {
              cards.map((card, i)=>(
                <div key={i} className="card">
                <img src={card.image} alt="error!" />
                <h3>{card.title}</h3>
                <p>{card.text}</p>
                <div className="btnd">
                <button className="btn1" onClick={more}>more</button>
                </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>

      <div className="footer">
            <div className="c1">
            <div className="cnt">Content</div>
            <div className="line"></div>
              <ul className="c12">
                <li className="c13">About</li>
                <li className="c13">Contact</li>
                <li className="c13">Suggestion</li>
                <li className="c13">Query</li>
              </ul>
              <div className="line"></div>
              <ul className="c12">
                <li className="ic1"><CgInstagram/></li>
                <li className="ic2"><CgFacebook/></li>
                <li className="ic3"><CgTwitter/></li>
              </ul>
            </div>
      </div>
    </>
  );
};

export default Navbar;
