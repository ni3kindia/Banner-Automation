import '../views/grid.css'



const Bannergallery2 = ()=>{



const images=['1',' 2','3',' 4','1',' 2','3',' 4','1',' 2','3',' 4','1',' 2','3',' 4',]

const result= images.map((item,index)=>

{

return ( <div key={index} class="item-class">{item}</div>)

});

return <div className="flex-container " >{result}</div>
};

export default  Bannergallery2;