import React, { Component } from 'react';
import axios from 'axios';
import ReactLoading from 'react-loading';
import { Media, Form, FormGroup, FormControl, Button} from 'react-bootstrap';

class GitHub extends Component {
    constructor(){
        super();
    
        this.state = {
            data: [],
            searchTerm: '',
            isLoading : false
        }

       this.handleChange = this.handleChange.bind(this);
       this.handleSubmit = this.handleSubmit.bind(this);

    }


    handleChange(e) {
        this.setState({ searchTerm: e.target.value })
    }

    handleSubmit(e){
        e.preventDefault();
        this.setState({
            isLoading: true
        })

        this.getGitHubData(this.state.searchTerm);

    }



    getGitHubData(_searchTerm){
        axios.get(`https://api.github.com/search/users?q=${_searchTerm}`)
            .then( res => {
                this.setState({ 
                    isLoading: false,
                    data: res.data.items
                })

                console.log(this.state.data)

            });
    }

    render(){

        const listUsers = this.state.data.map ( (user) =>
        <Media key={user.id}>
        <Media.Left>
            <a href={user.html_url}>
                <img width={64} height={64} src={user.avatar_url} alt={user.login} />
            </a>
        </Media.Left>
        <Media.Body>
            <Media.Heading>{user.login}</Media.Heading>
            <p>Score: {user.score}</p>
        </Media.Body>
        </Media>
    )

        return(
            <div className="container">
                <div className="row">
                <Form inline onSubmit={this.handleSubmit}>
                    <FormGroup controlId="searchForm">
                        <FormControl type="text" value={this.state.searchTerm} placeholder="Enter Search Term" onChange={this.handleChange} />                    
                    </FormGroup>
                    {''}
                    <Button type="submit" onSubmit={this.handleSubmit}>Look Up</Button>
                </Form>
               
                {this.state.isLoading && <ReactLoading type="spinningBubbles" color="#444" />}
                 {listUsers.length === 0 ? <p>Please enter a username in the searchbox above.</p> :  <h3>{listUsers.length} Github Users Found</h3> }
                {listUsers}
                </div>
            </div>
        )
    }

}

export default GitHub;