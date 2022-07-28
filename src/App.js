import React, { useState } from "react";
import axios from 'axios';
import styled from "styled-components";

import './components/recipecomponent';
import {Header,AppIcon,SearchIcon} from './components/headercomponent';
import {RecipeListContainer,RecipeContainer,CoverImage,RecipeName,IngredientsText,SeeMoreText} from './components/recipecomponent';

// const APP_ID = "6df758bc";
// const APP_KEY="ce87e16d9ea3b18bb88b778a18b688be";
// const url="www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata"

const Container=styled.div` display:flex;
                            flex-direction:column; `;

const RecipeComponent=(props)=>{
  return(
    <RecipeContainer>
                 <CoverImage src="/burger.svg" />
                 <RecipeName>Matar Paneer</RecipeName>
                 <IngredientsText>Ingredients</IngredientsText>
                 <SeeMoreText>See Complete Recipe</SeeMoreText>
      </RecipeContainer>
  );
}                            


function App() {
 
  const [timeoutId , updateTimeoutId]=useState();
  
const fetchRecipe=(searchString)=>{
  axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata').then(resp => {
  console.log(resp.data);
});
}

 const onTextChange=(event)=>{
  clearTimeout(timeoutId); 
    const timeout=setTimeout(()=> fetchRecipe(event.target.value),400);
    updateTimeoutId(timeout);
 }

  return (
      <Container>
         <Header>
        
          <appNameComponent>
          <AppIcon src="/burger.svg" />
          Recipe Finder
          </appNameComponent>

          <searchComponent>
            <SearchIcon src="search2.svg" />
            <input placeholder="Search recipe"
              onChange={onTextChange}></input>
          </searchComponent>
         </Header>

            <RecipeListContainer>
              <RecipeComponent />
              <RecipeComponent />
              <RecipeComponent />
              <RecipeComponent />
              
            </RecipeListContainer>
      </Container>
    
  );
}

export default App;
