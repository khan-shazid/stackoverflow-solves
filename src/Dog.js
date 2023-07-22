function Dog (props) {
    function setFave() {
      props.setFave(props.image);
      props.setPicked(!props.picked);
    }
      
    return (
      <img
        src={props.image}
        onClick={setFave}
      >
      </img>   
    )
  }
  
  export default Dog