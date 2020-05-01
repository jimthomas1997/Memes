import React, {Component} from 'react'

class Memegenerator extends Component{
    constructor(){
        super()
        this.state={
            topText:"",
            bottomText:"",
            randomimg:"https://i.imgflip.com/1bij.jpg",
            allmemeimages:[]

        }
        this.handleChange=this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
    }
    
    componentDidMount(){
        fetch("https://api.imgflip.com/get_memes")
        .then(response =>response.json())
        .then(response =>{
            const {memes}=response.data
            this.setState({allmemeimages:memes})
        })
    }

    handleChange(event){
        const {name,value}=event.target
        this.setState({[name]:value})

    }

    handleSubmit(event){
        event.preventDefault()
        const randNum=Math.floor(Math.random()*this.state.allmemeimages.length)
        const randMemeImg=this.state.allmemeimages[randNum].url
        this.setState({randomimg:randMemeImg})

    }
    
    render(){
    return(
        <div>
            <form onSubmit={this.handleSubmit}>
            <input 
             type="text" 
             name="topText" 
             placeholder="TOP TEXT" 
             value={this.state.topText}
             onChange={this.handleChange}
             />
            <input type="text" 
             name="bottomText"
             placeholder="BOTTOM TEXT"
             value={this.state.bottomText}
             onChange={this.handleChange}
            />
            <button>Gen</button>
            </form>
            
            <div>
                <img src={this.state.randomimg}/>
                <h1 style={{marginTop: "-330px" ,color:"white"}}>{this.state.topText}</h1>
                <h1 className="bottom">{this.state.bottomText}</h1>
            </div>
        </div>

    )}
}
export default Memegenerator