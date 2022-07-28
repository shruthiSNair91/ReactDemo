
import styled from "styled-components";

export const RecipeListContainer=styled.div` display:flex;
fex-direction:row;
padding:30px;
justify-content:space-evenly;
flex-wrap:wrap;
`;

export const RecipeContainer=styled.div` display:flex;
    flex-direction:column;
    padding:10px;
    box-shadow:0 3px 10px 0 #aaa;
    gap:20px;`;

 export const CoverImage=styled.img`height:200px;`;

 export const RecipeName=styled.span ` font-size:18px;
 font-weight:bold;
 color:black;
 margin:10px 0;`;

 export const IngredientsText=styled.span `font-size:18px;
     border:solid 1px green;
     cursor:pointer;
     padding:5px;
     border-radius:4px;
     color:green;
     text-align:center;
     margin-bottom:5px;`;

export const SeeMoreText =styled(IngredientsText) `color:#eb3300;
border: solid 1px #eb3300`;

/* <RecipeContainer>
                 <CoverImage src="/burger.svg" />
                 <RecipeName>Matar Paneer</RecipeName>
                 <IngredientsText>Ingredients</IngredientsText>
                 <SeeMoreText>See Complete Recipe</SeeMoreText>
</RecipeContainer>

export default RecipeContainer; */