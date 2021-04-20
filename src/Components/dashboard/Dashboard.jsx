import React from 'react';
import { Redirect } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
class DashBoard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            token: '',
            cardlist: [],
            newsList: [],
            newsTitle: "",
            newsDesc: "",
            newsUrl: "",
            imgUrl:""
        }


        this.saveNews = this.saveNews.bind(this);
        this.handleOnClick = this.handleOnClick.bind(this);
        this.fetchFunction = this.fetchFunction.bind(this)

    }
    componentDidMount() {
        console.log("Mount");
        let token = localStorage.getItem('token');
        console.log(token);
        this.setState({ token });
        let apikey = "e79d8f4f7f104caa8c1b4819c859f750";
        let apiurl = "https://newsapi.org/v2/top-headlines?country=in&apikey=" + apikey
        this.fetchFunction(apiurl)
    }


    saveNotes(data) {
        this.newsService.getAllNews(data);
        this.getAllNews().then(data => {
            console.log(data);
            this.setState({
                newsList: data
            })
        })
    }


    async saveNews(newsdata) {
        console.log("Newsdata")
        console.log(newsdata)
        //console.log(newsdata.url)
        return fetch("http://localhost:3002/news", {
            method: "post",
            headers: {
                'content-Type': "application/json"
            },
            body: JSON.stringify(newsdata),
        })
    }


    getAllNews() {
        this.newsService.getAllNews()

    }

    componentWillMount() {
        console.log("will Mount");
        let token = localStorage.getItem('token');
        console.log(token);
        this.setState({ token: token });
    }


    async handleOnClick(value) {
        console.log(value)
        this.state = {
            newsTitle: value.title,
            newsDesc: value.description,
            newsUrl: value.url,
            imgUrl:value.urlToImage
        }

        this.saveNews(this.state)

    }

    async fetchFunction(apiurl) {
        let cardlist = this.state.cardlist

        let loginData = await fetch(apiurl)
            .then((response) => response.json())
            .then(data => {
                data.articles.forEach(element => {
                    cardlist.push(element)

                });

                return data;
            });

        this.setState({
            cardlist
        })
        return {
            payload: loginData.articles
        }


    }


    render() {
        console.log(this.state.cardlist);
        if (this.state.token != null) {
            return (
     


                <div>
                    {this.state.cardlist}
                    {this.state.cardlist.map((user, i) => (
                
                        <Card key={i} style={{ display: 'flex', flexDirection: 'row' }}>


                            <Card.Body>
                                <Card.Title>Title : {user.title}</Card.Title>
                                <Card.Img src={user.urlToImage} alt="Image Unavailable" ></Card.Img>
                                <Card.Text> Description :
                            {user.description}
                                </Card.Text>
                                <Button variant="primary" type="submit" onClick={() => this.handleOnClick(user)} >Read More</Button>
                            </Card.Body>
                        </Card>


                    ))}
                </div>
            )
        }
        else {
            return <Redirect to=''></Redirect>
        }

    }
}

export default DashBoard