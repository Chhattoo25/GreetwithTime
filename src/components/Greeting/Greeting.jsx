import React, { useState } from 'react'
import styles from  './Greeting.module.css'
const Greeting = () => {

 let data = new Date(2022,8,31,1)
   data = data.getHours()
 let time = new Date().toLocaleDateString() 
 let time2 = new Date().toLocaleTimeString()
 let greeting = ''

  const cssStyle = {}

 if(data>=1 && data<12){
  
  greeting = 'Good morning'
  cssStyle.color= 'green'
 }
 else if(data>=12 && data<20) {
  greeting = 'Good Afternoon'
  cssStyle.color = 'orange'
 }
 else{
 greeting = "Good Night"
 cssStyle.color = 'blue'
 }
  return (
    <>
   <div className={styles.box}>
   <h1 className={styles.greet} >Hello sir, <span style={cssStyle} >{greeting}</span>  </h1>
    <h4 className={styles.date}>{`Date : ${time}`}</h4>
    <h4 className={styles.date}>{`Time : ${time2}`}</h4>
   </div>
    </>
  )
}

export default Greeting