import React from 'react'

export const Footer = () => {

    let footerStyle = {
      position: "relative",
      top: "70vh",
      width:"100% ",
      
    }

    return (
        <footer className= "bg-dark text-light" style={footerStyle}>
           
           <br/>
          In our hustle bustle routine, we use to forget some of our important works which was supposed to complete. This web-app will help you to pen-down all your to-do list and allows you to update accordingly. <br/><br/>

           copyright &copy; <br/> Designed and developed by Amit Deo <br/>
           follow me on github : amitdeo60

        </footer>
    )
}
