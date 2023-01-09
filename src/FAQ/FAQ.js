import React from 'react'
import Faq from "react-faq-component";
import './FAQ.css'
function FAQ() {

  const data = {
    rows: [
        {
            title: "1)	How far in advance can your flight be booked?",
            content: `You can easily book your flight two hours prior to the time of departure. Also, you can book your flight 330 days early.`,
        },
        {
            title: "2)	How can I obtain the information about my flight?",
            content:
                "You can contact our customer service which is available 24*7.",
        },
        {
            title: "3)	Can I cancel my flight booking?",
            content: `Yes, you can do that. `,
        },
        {
            title: "4)	Can I book a private jet flight?",
            content: "Yes, you can do that.",
        },
        {
          title: "5)	How can I save more on my flight bookings?",
          content: "Look for offers and book accordingly. ",
      },
    ],
  };

  const styles = {
    
    titleTextColor: "black",
    rowTitleColor: "black",
    // rowContentColor: 'grey',
    // arrowColor: "red",
  };
  
  const config = {
     animate: true,
    arrowIcon: "",
    tabFocus: true
  };

  return (
    <>
     <div className="container">
        <h3 className="text-center fw-bold mb-5 faq-heading">
          What Travelers Are Asking? 
        </h3>
        <div className="bg-light faq-container">
        <Faq
                data={data}
                styles={styles}
                config={config}
            />
          <div className="row mx-auto justify-content-center my-auto query-wrapper">
            <input className="queryinp col-6 my-auto"placeholder="Ask your query Here" type="text"/>
            <button className="askbtn col-6"type="submit">Ask now</button>
          </div>
        </div>
        </div></>
  )
}

export default FAQ