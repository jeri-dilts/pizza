function CreatedPizzaView(props){
    // console.log(props.pizzas[0])
    return <div>
        {
        props.pizzas.map((pizza, i)=>(
            <p key={i}>{pizza.fields.name}</p>
            ))
        }
    </div>
}

export default CreatedPizzaView;