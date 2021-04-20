import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
class DisplayCard extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            newsTitle: "",
            newsDesc: "",
            newsUrl: ""
        }

    }



    render() {

        return (

            <div>
                {this.props.list.map((user) => (

                    <Card style={{ display: 'flex', flexDirection: 'row' }}>


                        <Card.Body>
                            <Card.Title>Title : {user.newsTitle}</Card.Title>
                            <Card.Img src={user.imgUrl} alt="Image Unavailable" ></Card.Img>
                            <Card.Text> Description :
                            {user.newsDesc}
                            </Card.Text>
                            <Button variant="primary" type="submit" onClick={() => this.handleOnClick(user)} >Read More</Button>
                        </Card.Body>
                    </Card>



                ))}
            </div>



        )
    }

}
export default DisplayCard