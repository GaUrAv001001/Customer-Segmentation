// // import { response } from 'express'
// import React, { useEffect, useState } from 'react'
// import axios from "axios"
// import './CustomsegA.css'

// const CustomsegA = () => {

//   const handleClick = (targetValue) => {
//     // axios.get(`http://localhost:8800/CustomsegA/${targetValue}`)
//     axios.get(`http://localhost:8800/CustomsegA/${targetValue}`)
//         .then(response => {
//             console.log(response.data);
//         })
//         .catch(error => {
//             console.error(error);
//         });
// }



//   const [dataA, setData] = useState([])

//   useEffect(()=>{
//     const fetchalldata = async ()=>{
//       try{
//         const res = await axios.get("http://localhost:8800/CustomsegA/0")
//         setData(res.data)
//       }catch(err){
//         console.log(err)
//       }
//     }
//     fetchalldata()
//   },[])




//   return (
//     <div>
//       <div>
//         {/* <ul className='ul-seg'>
//           {dataA.map((item) => (
//             <li key={item.ID}>{item.Ratings},{item.Names}</li>
            
//           ))}
//         </ul> */}
//         <div className='btn-data-a'>
//                 <button className='btn-data' onClick={() => this.handleClick(0)}>LOW</button>
//                 <button className='btn-data' onClick={() => this.handleClick(1)}>MEDIUM</button>
//                 <button className='btn-data' onClick={() => this.handleClick(2)}>HIGH</button>
//         </div>

//       </div>

//     </div>
//   )
// }

// export default CustomsegA



// code 2
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import './CustomsegA.css';

// const CustomsegA = () => {
//   const handleClick = (targetValue) => {
//     axios.get(`http://localhost:8800/CustomsegA/${targetValue}`) // Updated the URL
//       .then(response => {
//         // Handle the response data here
//         console.log(response.data);
//       })
//       .catch(error => {
//         // Handle any errors
//         console.error(error);
//       });
//   };

//   const [dataA, setData] = useState([]);

//   useEffect(() => {
//     const fetchalldata = async () => {
//       try {
//         const res = await axios.get("http://localhost:8800/CustomsegA/0"); // You can specify a default value (0) for the initial request
//         setData(res.data);
//       } catch (err) {
//         console.log(err);
//       }
//     };
//     fetchalldata();
//   }, []);

//   return (
//     <div>
//       <div>
//         <div className='btn-data-a'>
//           <button className='btn-data' onClick={() => handleClick(0)}>Button 1</button>
//           <button className='btn-data' onClick={() => handleClick(1)}>Button 2</button>
//           <button className='btn-data' onClick={() => handleClick(2)}>Button 3</button>
//         </div>
//         <div>
//                   <ul>
//           {dataA.map((item) => (
//             <li key={item.ID}>{item.Ratings}: {item.Names}</li>
//           ))}
//         </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CustomsegA;


// code 3
// import React, { useState } from 'react';
// import axios from 'axios';
// import './CustomsegA.css';

// const CustomsegA = () => {
//   const [dataA, setData] = useState([]);
//   const [percentage, setPercentage] = useState(0);
//   const [targetValue, setTargetValue] = useState(null);

//   const fetchData = async (buttonValue) => {
//     // Set targetValue based on the button clicked
//     if (buttonValue === 0) {
//       setTargetValue(0);
//     } else if (buttonValue === 1) {
//       setTargetValue(1);
//     }else if (buttonValue === 2){
//       setTargetValue(2)
//     }

//     try {
//       const res = await axios.get(`http://localhost:8800/CustomsegA/${targetValue}`);
//       setPercentage(res.data.percentage)
//       setData(res.data);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   return (
//     <div>
//       <div className='btn-data-a'>
//         <button
//           className='btn-data'
//           onClick={() => fetchData(0)} // Set targetValue to 0 when Button 1 is clicked
//         >
//           LOW
//         </button>
//         <button
//           className='btn-data'
//           onClick={() => fetchData(1)} // Set targetValue to 1 when Button 2 is clicked
//         >
//           MEDIUM
//         </button>
//         <button
//           className='btn-data'
//           onClick={() => fetchData(2)} // Set targetValue to 2 when Button 1 is clicked
//         >
//           HIGH
//         </button>
//       </div>
//       {targetValue !== null && dataA.length > 0 && (
//         <div className='ext-data'>
//           <ul className='ul-ext'>
//             {dataA.map((item) => (
//               <li className='li-ext' key={item.ID}>{item.Names}</li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CustomsegA;




// code 4

import React, { useState } from 'react';
import axios from 'axios';
import './CustomsegA.css';

const CustomsegA = () => {
  const [dataA, setData] = useState([]);
  const [percentage, setPercentage] = useState(0);
  const [targetValue, setTargetValue] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = async (buttonValue) => {
    setTargetValue(buttonValue);
    setError(null);

    try {
      const response = await axios.get(`http://localhost:8800/CustomsegAWithPercentage/${buttonValue}`);
      setPercentage(response.data.percentage);
      setData(response.data.data);
    } catch (err) {
      setError('An error occurred while fetching data.');
      console.error(err);
    } finally {
    }
  };

  return (
    <div>
      <div className='btn-data-a'>
        <button
          className='btn-data'
          onClick={() => fetchData(0)} // Set targetValue to 0 when Button 1 is clicked
        >
          High
        </button>
        <button
          className='btn-data'
          onClick={() => fetchData(1)} // Set targetValue to 1 when Button 2 is clicked
        >
          Low
        </button>
        <button
          className='btn-data'
          onClick={() => fetchData(2)} // Set targetValue to 2 when Button 1 is clicked
        >
          Medium
        </button>
      </div>
      {error && <p>Error: {error}</p>}
      <p className='perc'>Data Percentage: {percentage}%</p>
      {targetValue !== null && dataA.length > 0 && (
        <div className='ext-data'>
          <ul className='ul-ext'>
            {dataA.map((item) => (
              <li className='li-ext' key={item.ID}>{item.Names}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CustomsegA;








