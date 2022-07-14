import axios from 'axios'
import React, { Component } from 'react'
import SearchBar from '../shared/SearchBar'
import { ReactComponent as NoData } from '../assets/no-data.svg';


export default class Home extends Component {

    state={
        resultados:[],//la respuesta de la API
        loading:false//cambiarlo para mostrar un estado de loading [tentativo]
    }
    handleSearch = async (term) => {
        this.setState({loading:true})
        const res= await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_API_KEY}&q=${term}&limit=10&rating=G`)
        console.log(res.data.data)
        this.setState({loading:false, resultados:res.data.data})
    }

    handleClean = () => {
        this.setState({resultados:[]})
    }


        
  render() {
    return (
     <>
        <SearchBar 
            handleSearch={this.handleSearch} 
            handleClean={this.handleClean} 
        />
        {
            this.state.resultados.length === 0 ?  <NoData style={{height:200, width:200}} />:
            this.state.loading ? <p>Loading...</p> : 
            this.state.resultados.map( gifObject => 
            <img src={gifObject.images.downsized.url} 
            key={gifObject.id} 
            alt={gifObject.slug} />  )
         }
     </>
    )
  }
}
//imlnM928AVwegDYMo5PhUriDYlVftv22
