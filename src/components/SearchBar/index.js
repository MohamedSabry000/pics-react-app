import React from 'react';
import {Icon, Input} from 'semantic-ui-react';
import { InputGroup, FormControl, Button } from "react-bootstrap";

class SearchBar extends React.Component{

    state = { 
        term: '', 
        placeholder: 'Our Pic is?'
    };

    onFormSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state.term)
    }

    render(){
        return(
            <div className="ui segment">
                <form className="ui form" onSubmit={ this.onFormSubmit }>
                    <InputGroup>
                        <FormControl
                        style={{width:"auto"}}
                        placeholder={this.state.placeholder}
                        aria-label={this.state.placeholder}
                        aria-describedby={this.state.placeholder}
                        onChange={(e)=>this.setState({term: e.target.value})}
                        />
                        <Button variant="outline-secondary" id="button-addon2" type="submit">
                            <Icon name='search' inverted circular link />
                        </Button>
                    </InputGroup>
                </form>
                
            </div>
        )
    }
};

export default SearchBar;