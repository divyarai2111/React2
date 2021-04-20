import React from 'react';
import { Redirect } from 'react-router';
import DisplayCard from '../displayCard/DisplayCard'

class ReadNow extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            newsArr: [],
            token: '',
        }
        this.saveNews = this.saveNews.bind(this);

    }



    componentDidMount() {
        let token = localStorage.getItem('token');
        this.setState({ token });
        this.saveNews()
    }


    componentWillMount() {
   
        let token = localStorage.getItem('token');
        this.setState({ token: token });
    }

    // componentDidMount() {
    //     this.saveNews()
    //     console.log(this.saveNews())
    //     console.log()
    // }
    async saveNews() {


        console.log("dndnfd")
        // let savedNewsData = await fetch("http://localhost:3002/news")
        let loginData = await fetch("http://localhost:3002/news")
            .then((response) => response.json())
            .then(data => {
                console.log(data)
                this.setState({
                    newsArr: data
                })

            });
        console.log("aray vlaues")
        console.log(this.state.newsArr)


    }

    async handleOnClick(value) {
        // console.log(value)
        this.state = {
            newsTitle: value.title,
            newsDesc: value.description,
            newsUrl: value.url
        }

        this.saveNews(this.state)

    }


    render() {
        if (this.state.token != null) {
            return (

                <div>

                    <DisplayCard list={this.state.newsArr}></DisplayCard>


                </div>)
        } else {
            return <Redirect to=''></Redirect>
        }





    }

}
export default ReadNow