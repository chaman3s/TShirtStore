// src/components/Home/HomePage.jsx
import { useState } from "react"
import ImageGrid from "../../components/ImageGrid/index"
import data from "./data"

export default function Home() {
  const [selectedImage,SetSelectedImage]=useState (null)
 console.log(data)
  return(
    <div>
      {selectedImage==null(<ImageGrid data={data} Styles={{Div:{"fontSize":"32px"} ,img:[{}],allImg:{width:"149px"}}}/>):(
        
      )}
    </div>
  )
  
}
