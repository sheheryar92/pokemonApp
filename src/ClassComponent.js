import React from 'react'


export default  class ClassComponent extends React.Component{
constructor(props) {
    super(props)
    this.state = {
        name: 'react state',
        counter: 0
    }


    this.changeHandler = this.changeHandler.bind(this);

    this.increment= this.increment.bind(this)
    this.decrement= this.decrement.bind(this)
    this.reset= this.reset.bind(this)
}

 

    

     changeHandler () {

    this.setState({
        name: 'state has been changed'
    })
}

increment () {
this.setState({counter: this.state.counter +1})}


decrement () {
    this.setState({counter: this.state.counter -1})}

    reset () {
        this.setState({counter:  0})}

    render() {

return (
<div>


<h1>hello world from class component :  {this.state.name}</h1>
<div>
<h2>{this.state.counter}</h2>
<div>
<button onClick={this.increment}>increment</button>
<button onClick={this.decrement}>decrement</button>
<button onClick={this.reset}>reset</button>
</div>
</div>

<button onClick={this.changeHandler}>Click to change</button>

</div>
)

    }
}


