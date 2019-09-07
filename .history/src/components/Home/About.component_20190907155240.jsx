import React from 'react';
import './Home.styles.css'
import {Link} from 'react-router-dom'
const About = () =>{
    return(
       <div>

<div className="box">
    <div className="container">
     	<div className="row">
			 
			    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
               
					<div className="box-part text-center">
                    <Link>
                    </Link>    
						<div className="title">
                            <br/>
							<h4>Search anew</h4>
						</div>
                        
						<div className="text">
                        <span>Our poke-search engine is as hot as Charizard. </span>
	
						</div>
                        	
                        
					 </div>
				</div>	 
				
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
               
               <div className="box-part text-center">
                   
               <img className='blocks' src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/565f709d-4b54-4fc8-84bb-4e34b72ad8ad/dcis2l3-3ebafb82-899a-4706-b848-df70e4fe3f8d.png/v1/fill/w_600,h_481,strp/pokedex_kanto_by_thekevmeister_dcis2l3-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NDgxIiwicGF0aCI6IlwvZlwvNTY1ZjcwOWQtNGI1NC00ZmM4LTg0YmItNGUzNGI3MmFkOGFkXC9kY2lzMmwzLTNlYmFmYjgyLTg5OWEtNDcwNi1iODQ4LWRmNzBlNGZlM2Y4ZC5wbmciLCJ3aWR0aCI6Ijw9NjAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.XJhfVEEy4pFMiZ4r2581rQryNJHD9mGNorwuV_FRbqg" alt=""/>
                   <div className="title">
                       <br/>
                       <h4>Compare your Pokedex!</h4>
                   </div>
                   
                   <div className="text">
                   <span>The ultimate Pokedex in your hands!</span>

                   </div>
                       
                   
                </div>
           </div>	 
				
           <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
               
               <div className="box-part text-center">
                   
               <img className='blocks' src="https://sites.google.com/site/cc2016mhc/_/rsrc/1468869514581/home/who-s-that-pokemon-1/title.png?height=306&width=400" alt=""/>
                   <div className="title">
                       <br/>
                       <h4>Be Surprised</h4>
                   </div>
                   
                   <div className="text">
                   <span>Discover Pokemons you've never saw before. </span>

                   </div>
                       
                   
                </div>
           </div>	 
				
     	 
				
        	 
				
           
		
		</div>		
    </div>
</div>
       </div>
    )
}
export default About;