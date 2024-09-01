import React, { useState } from 'react'
import styled from 'styled-components'
import { IoMdArrowDropup } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";

const Frequency = () => {

  const sections = [
    {
      id: "General",
      title: "General",
      sectiones: [
        {
          title: "Why should I sell on Grocerify?",
          description:
            "Grocerify is a trusted and leading e-commerce platform with over 45 crore+ customers across 19000+ pin codes in India. By selling on Grocerify, you gain access to a vast customer base and India's largest shopping festival, The Big Billion Days, along with other major shopping events. The cost of doing business on Grocerify is also low, providing a lucrative opportunity for sellers.",
        },
        {
          title: "How does selling on Grocerify.com work?",
          description:
            "Selling on Grocerify.com is a simple process. Create an account with your GSTIN, valid mobile number, email ID, bank account, and address details. List your products on the platform and manage orders. You can choose to pack and ship the products yourself or utilise Grocerify's Fulfilment by Grocerify (GF) service for hassle-free logistics management. Payments are disbursed within 7* days from the date of product dispatch.",
        },
        {
          title:
            "What is the minimum listing quantity to sell on Grocerify.com?",
          description:
            "To start selling on Grocerify.com, you only need a minimum of 1 product to list. However, it is recommended to have more products to leverage the wide customer reach and trust of millions of Grocerify users.",
        },
        {
          title: "What products can I sell on Grocerify.com?",
          description:
            "Grocerify.com offers a wide range of categories for sellers to choose from, including clothing, electronics, jewellery, home furnishings, books, mobiles, beauty products, kitchenware, and many more. However, some categories may require prior quality approval before going live on the platform.",
        },
        {
          title: "What do I need to register to sell on Grocerify.com?",
          description:
            "To register and sell products on Grocerify.com, you will need the following details: Business information, Contact details (email ID and phone number), Tax registration details, such as GSTIN (mandatory for taxable products) and PAN (mandatory for Book Sellers).",
        },
        {
          title: "Can I sell on Grocerify.com without having a website?",
          description:
            "Absolutely! You can sell on Grocerify.com without having a website. Once registered, you will gain access to the Grocerify Seller Hub, where you can list your products and start selling. Please note that Grocerify charges a small fee when your product is sold.",
        },
        {
          title: "What is FAssured?",
          description:
            "FAssured by Grocerify is a special reliability program that offers additional visibility to your products. It includes extra quality checks and ensures faster delivery within 2-4 days. Having the FAssured tag guarantees more orders, increased visibility, faster delivery, and higher quality standards. By obtaining the FAssured badge, you can achieve better revenue and build trust with customers.",
        },
        {
          title: "Can I offer both products and services on Grocerify.com?",
          description:
            "Currently, Grocerify allows sellers to offer only physical products for sale on the platform. However, as a third-party service provider, you can offer specific services to Grocerify sellers to assist them in growing their businesses.",
        },
      ],
    },
    {
      id: "FeesCharges",
      title: "Fees & Charges",
      sectiones: [
        {
          title: "Who decides the price of my products?",
          description:
            "As a seller on Grocerify.com, you have full control over the pricing of your products. You can set the price based on your business strategy and the market dynamics. The seller dashboard also provides analysis and recommendations to help you determine the optimal price for your products.",
        },
        {
          title: "What are the charges for selling on Grocerify.com?",
          description:
            "Grocerify.com does not charge any fees for listing your products on its platform. However, upon a successful sale, there is a small marketplace fee applicable as a percentage of the selling price. You can refer to the Grocerify Seller Fee details for more information.",
        },
        {
          title: "Will I get charged for listing products on Grocerify.com?",
          description:
            "No, there are no charges for listing your products on Grocerify.com. Listing your products is free of cost.",
        },
        {
          title: "How and when do I get paid?",
          description:
            "Once your product is picked up and successfully delivered to the customer, you will receive payment within as fast as 7* days. Payments are securely and regularly transferred directly to your registered bank account after deducting the relevant Grocerify fees.",
        },
      ],
    },
    {
      title: "Managing Your Account",
      id: "ManagingAccount",
      sectiones: [
        {
          title: "How do I list my products on Grocerify.com?",
          description:
            "To list your products on Grocerify.com, you need to follow these steps: Obtain brand approval from Grocerify's Brand Regulation Team. Choose the appropriate category for your product. Provide detailed product information such as size, model, colour, brand, etc. If you need any assistance or guidance, you can always reach out to the Grocerify Seller Support Team.",
        },
        {
          title: "How do I manage my orders on Grocerify.com?",
          description:
            "Managing orders on Grocerify.com is convenient with our seller dashboard. You have three options: Pack and ship the orders yourself using your preferred packaging, marking them as 'ready to dispatch' within the given timeline. Our logistics partner will pick up the orders and deliver them to customers. Use Fulfilment by Grocerify (GF) service, where Grocerify handles the packaging and shipping for you.",
        },
        {
          title: "What do I need to list my products on Grocerify.com?",
          description:
            "To list products on Grocerify.com, you need to provide product details, set competitive prices, include high-quality images, manage your inventory, and provide accurate shipping information.",
        },
        {
          title:
            "Can I get help with catalogue development (product images, descriptions, etc.)?",
          description:
            "Yes, Grocerify offers dedicated catalogue services to help sellers enhance their product images and descriptions. You can opt for Premium Catalog Services to ensure maximum visibility and customer trust. Additionally, the IGNITE program provides image editing and product cataloguing services at an affordable price, giving your business a kickstart.",
        },
      ],
    },
    {
      title: "Services",
      id: "Services",
      sectiones: [
        {
          title: "Do you offer protection against fraud?",
          description:
            "Yes, Grocerify.com provides protection against fraud through the Seller Protection Fund (SPF) program. Sellers are eligible for monetary compensation for orders where the returned products have been damaged or missing.",
        },
        {
          title:
            "Can customers leave feedback and why is customer feedback important?",
          description:
            "Yes, customers can leave feedback and ratings for the products they purchase. Customer feedback is important as it helps build trust and credibility for the seller. Positive feedback and high ratings enhance the seller's reputation, attracting more customers and increasing sales. It also provides valuable insights for sellers to improve their products and services.",
        },
        {
          title: "Do I need GST to sell on Grocerify?",
          description:
            "Yes, sellers are required to have GST registration to sell products on Grocerify. For most categories, a regular GSTIN is mandatory. However, for the 'Only Books' category, PAN (Permanent Account Number) is mandatory.",
        },
        {
          title:
            "I am having trouble during registration. Can I get some help?",
          description:
            "If you are facing any issues during the registration process, please provide your details in the form at the end of this section. Our team will promptly assist you with your registration.",
        },
      ],
    },
    {
      id: "GF",
      title: "Fulfillment by Grocerify (GF)",
      sectiones: [
        {
          title: "What is Fulfilment by Grocerify (GF)?",
          description:
            "Fulfilment by Grocerify (GF) is an exclusive program where Grocerify stores, packs, and delivers your products to customers. It also handles customer service and returns. It offers a hassle-free way to manage your inventory and ensure timely delivery and customer satisfaction.",
        },
        {
          title: "How does GF work?",
          description:
            "Once you register for GF, you send your products to Grocerify's Fulfilment Centers. Grocerify stores and manages your inventory. When an order is placed, Grocerify packs and ships the products to the customer. Grocerify also handles returns and provides quality assurance.",
        },
        {
          title: "Do I need a minimum number of items to avail GF?",
          description:
            "No, there is no minimum requirement. You can avail GF for any number of items, ranging from one to multiple items, across various categories.",
        },
        {
          title: "What are the benefits of GF?",
          description:
            "By using GF, you can enjoy the following benefits: Quality assurance and trusted customer experience. No need to invest in storage infrastructure. No impact on seller service metrics. Faster procurement and delivery for higher customer satisfaction.",
        },
      ],
    },
  ];

  const [Active, setActive] = useState(sections[0])

  const [selectedSection, setSelectedSection] = useState(null);
  const [toggleState, setToggleState] = useState({});

  const handleToggle = (mainSectionId, subSectionTitle) => {
    setToggleState((prevState) => ({
      ...prevState,
      [mainSectionId]: {
        ...prevState[mainSectionId],
        [subSectionTitle]: !prevState[mainSectionId]?.[subSectionTitle],
      },
    }));
  };

  const scrollToSection = (id) => {
    setSelectedSection(id);
    const section = document.getElementById(id);
    window.scrollTo({
      top: section.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <Wrapper>
      <div className="nav" >
        <ul>
          {sections.map((section, ind) => (
            <li key={section.id}>
              <div
                onClick={() => setActive(sections[ind])}
                style={{
                  color:
                    Active.id == sections[ind].id ? "green" : "black",
                  cursor: 'pointer'
                }}
              >
                {section.title}
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="general">
        <div
          className="main-section"
        >
          <h2 style={{ fontSize: '30px', color: 'green  ' }}>{Active.title}</h2>
          {Active.sectiones.map((subSection) => (
            <section style={{ cursor: 'pointer' }} onClick={() =>
              handleToggle(Active.id, subSection.title)
            } key={subSection.title} id={subSection.title}>
              <div className="title">
                <p>{subSection.title}</p>
                <button

                >
                  {toggleState[Active.id]?.[subSection.title] ? (
                    <IoMdArrowDropup />
                  ) : (
                    <IoMdArrowDropdown />
                  )}
                </button>
              </div>
              {toggleState[Active.id]?.[subSection.title] && (
                <p>{subSection.description}</p>
              )}
            </section>
          ))}
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  font-family: Arial, Helvetica, sans-serif;

  .nav {
    width: 25%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    /* background-color: #f0ecec; */
    color: #060606;
    padding: 10px 20px;
  }

  .nav ul {
    position: sticky;
    top: 90px;
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  .nav ul li {
    /* display: inline; */
    margin-right: 20px;
    margin-top: 2rem;
  }

  .nav ul li a {
    color: #010101;
    text-decoration: none;
    font-size: 1.4rem;
  }

  /* Section styling */
  .general {
    width: 75%;
    background: #ecfeec;
    padding: 1rem 2rem 3rem 2rem;
  }
  .main-section {
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  }
  section {
    width: 95%;
    padding: 1rem 5rem 0 1rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  }
  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1rem;
  }
  p {
    margin-top: 0rem;
  }
  button {
    border: none;
    background: transparent;
    cursor: pointer;
    font-weight: bold;
    font-size: 1.4rem;
  }
`;

export default Frequency