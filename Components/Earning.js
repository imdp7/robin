// import React,{useState,useEffect} from 'react'
// import Plotly from 'react-native-plotly';
// import axios from "axios";

// function Earning({item}) {
//   const[ear,setEar] = useState([]);
//   const [XValues, setXValues] = useState({});
//   const [YValues, setYValues] = useState({});
//   const [expected,setExpected] = useState({});

//     let StockXValues =[];
//     let StockYValues =[];
//     let ExpectedValue = [];

//     useEffect(() => {
      
//       return axios
//         .request(`https://www.alphavantage.co/query?function=EARNINGS&apikey=HQA5E3338OQ9XD9H&symbol=${item?.name}`)
//         .then((res) => {
//           let e = res.data?.quarterlyEarnings;
//           let ear = e.slice(0,4);
//           setEar(ear);
//           })
//         .catch((error) => {
//           console.error("Error", error.message);
//         });
      
//   },[]); 
      
//     useEffect(() => {
//       const data = ear;
//       for (var key in data) {
//      StockXValues.push(data[key]['fiscalDateEnding']);
//      StockYValues.push(data[key]['reportedEPS']);
//      ExpectedValue.push(data[key]['estimatedEPS'])
//     }
//     setYValues(StockYValues);
//     setXValues(StockXValues);
//     setExpected(ExpectedValue);
    
//   }, [StockXValues,StockYValues,ExpectedValue]);

//   const  layout = {
//     barmode:'group',
//     paper_bgcolor:'transparent',
//     plot_bgcolor:'transparent',
//     height:400,
//     width:800,
//     autosize: true,

//     font: {
//       family: 'Arial',
//       size: 15,
//       color: '#000000'
//           },
//           margin: {
//       l: 100,
//       r: 50,
//       b: 50,
//       t: 50,
//       pad: 4
//           },
    
//     xaxis: {
//       autorange: true,
//       showgrid: false,
//       zeroline: false,
//       showline: false,
//       autotick: true,
//       ticks: '',
//       showticklabels: true,
//       fixedrange:true,
//     },
//     yaxis: {
//       autorange: true,
//       showgrid: false,
//       zeroline: false,
//       showline: false,
//       autotick: true,
//       ticks: '',
//       showticklabels: true,
//       fixedrange:true,
//     }
//         };

//   const config = { displayModeBar: false }

//     return (
        
//         <Plotly
//           data={[
//             {
//               x: XValues,
//               y: YValues,
//               type: 'scatter',
//               mode: 'markers',
//               marker: {color: 'red',size:15},
//               hovertemplate: '%{y}',
//               name: 'Actual',
//               opacity: 1,
//               symbol:'circle',
//               autotick: false,
//               dtick: 10,
              
//             },
            
//             {
//               x: XValues,
//               y: expected,
//               type: 'scatter',
//               mode: 'markers',
//               marker: {color: 'white',size:15},
//               hovertemplate: '%{y}',
//               name: 'Expected',
//               opacity: 0.3,
//               autotick: false,
//               dtick: 10,
              
//             }
//           ]
//           }
//           layout={layout}
//           config={config}
//         />
//     )
// }

// export default Earning
