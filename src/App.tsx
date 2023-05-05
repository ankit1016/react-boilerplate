import { createTheme, ThemeProvider } from "@mui/material/styles"
import React, { useEffect, useState } from "react"
import { themeOptions } from "theme/mui-theme-styles"
import "./App.scss"
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {Copyright} from "components/copyright";
import {collections} from "./data/collection";
import ReactJson from "react-json-view";
import {product} from "./data/product";
import Card from "components/Card";
import Header from "components/header";
import Footer from "components/footer";

function App() {
  const [appIsReady, setAppIsReady] = useState(false)

  const [data,setData]=useState(collections)

  useEffect(()=>{
   setData(collections)
  },[collections])

   console.log("check teh data",data)

  useEffect(() => {
    setAppIsReady(true)
  }, [])

  if (!appIsReady) return null

  return <ThemeProvider theme={createTheme(themeOptions)}>
    <>
   
      <div >
      <Header/>
          <div className="product-listing">
           <div className="card-container">
                {data.map((val)=><Card key={val.id} data={val}/>)}
                </div>
          </div>

          <Footer value={data} setValue={setData}/>
       
        <Copyright />
      </div>
    </>
  </ThemeProvider>
}

export default App
