// import React,{useState,useEffect} from 'react'
// import { View, Text,SafeAreaView,FlatList,TouchableOpacity,Image } from 'react-native'
// import tw from 'tailwind-react-native-classnames'
// import axios from "axios"
// import { db } from "../firebase"
// import Plotly from 'react-native-plotly';


// // const GRAPH_URL = 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-chart?symbol=';
// // const KEY_URL = `&region=US&rapidapi-key=${key}&x-rapidapi-host=${host}&interval=5m&range=1d`

// const Graph = ({graph,height,width}) => {

// 	const [XValues, setXValues] = useState({});
//     	const [YValues, setYValues] = useState({});
    
//     	let StockXValues =[];
//     	let StockYValues =[];

// useEffect(() => {
// 	let data = graph;
	
// 	for (var key in data['Time Series (Daily)']) {
// 	  StockXValues.push(key);
// 	  StockYValues.push(data['Time Series (Daily)'][key]['1. open']);
// 	 }
// 	 setYValues(StockYValues);
// 	 setXValues(StockXValues);
// 	}, [data]);
	
// 	       const  layout = {
	    
// 		 paper_bgcolor:'black',
// 		 plot_bgcolor:'black',
// 		 height: `${height}`,
// 		 width: `${width}`,
// 		 autoMargin:true,
// 		 margin: {
// 		   l: 0,
// 		   r: 0,
// 		   b: 0,
// 		   t: 0,
// 		   p:4
// 		 },
// 		 xaxis: {
// 		   autorange: true,
// 		   showgrid: false,
// 		   zeroline: false,
// 		   showline: false,
// 		   autotick: true,
// 		   ticks: '',
// 		   showticklabels: true
// 		 },
// 		 yaxis: {
// 		   autorange: true,
// 		   showgrid: false,
// 		   zeroline: false,
// 		   showline: false,
// 		   autotick: true,
// 		   ticks: '',
// 		   showticklabels: true
// 		 }
// 	       };
	     
// 	       const config = { displayModeBar: false }
// 	       const data = {
// 		x: XValues,
// 		y: YValues,
// 		type: 'scatter',
// 	      };
	       
// 	return (
// 		<View>
			
//         <Plotly
//           data={data}
//           config={config}
// 	  layout={layout}
//         />
      
// 		</View>
// 	)
// }

// export default Graph
