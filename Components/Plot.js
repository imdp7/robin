import React,{useState,useEffect} from 'react'
import Plotly from 'react-native-plotly';

const Plot = () => {
	
		const data = {
		  x: [1, 2, 3, 4, 5],
		  y: [1, 2, 3, 4, 8],
		  type: 'scatter',
		};
		
		const layout = { title: 'My cool chart!' };

	      
		return (
		  <Plotly
		    data={data}
		    layout={layout}
		  />
		)
	      }
	
export default Plot
