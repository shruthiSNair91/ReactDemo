import styled from "styled-components";

export const Header=styled.div` color:white;
background-color:black;
display:flex;
flex-direction:row;
align-items:center;
justify-content:space-between;
padding:20px;
font-size:25px;
font-weight:bold;
box-shadow:0 3px 6px 0 #555;
`;  

export const AppIcon = styled.img `  width:36px;
height:36px; margin-left:15px;            
  `;
  
export const appNameComponent= styled.div` display:flex;
          align-items:center`;
export const searchComponent= styled.div` display:flex;
          flex-directon:row;
          padding:15px;
          border-radius:6px;
          width:50%; 
          background-color:white;
         `;
 export const searchInput=styled.input `border:none;
        outline:none;
        
        font-size:16px; font-weight:bold;
        `;
export const SearchIcon = styled.img ` width:36px;
        height:36px; `;

