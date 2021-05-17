import React, { Component, useEffect, useState } from "react";

import Navigation from "./src/navigation";
import {store} from './src/redux/store';
import {Provider} from 'react-redux';


export default function App() {
  

  console.disableYellowBox = true;
  return (
  		<Provider store={store}>
			<Navigation/>
    	</Provider>
  );
}
