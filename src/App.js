import React from 'react';
import './App.css';
import Header from './component/header/Header';
import ResultsContainer from './component/ResultsContainer/ResultsContainer';
import SearchBox from './component/SearchBox/SearchBox';


const name = require('@rstacruz/startup-name-generator');

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            headerText: 'Name Finder!',
            headerExpanded: true,
            suggestedNames: [],
        };
    }

    handleInputChange = (inputText) => {
        this.setState({
            headerExpanded: !inputText,
            suggestedNames: inputText ? name(inputText) : [],
        });
    };

    render() {
        return (
            <div>
                <Header
                    headerExpanded={this.state.headerExpanded}
                    headTitle={this.state.headerText}
                />
                <SearchBox onInputChage={this.handleInputChange} />
                <ResultsContainer suggestedNames={this.state.suggestedNames} />
            </div>
        );
    }
}

export default App;