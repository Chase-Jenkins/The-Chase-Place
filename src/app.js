import React from 'react';
import qacontent from "./qacontent";
import List from "./list";
import './app.css'

class Home extends React.Component {

    state = {
        currentIndex: -1
    };

    handleChange = i => {
        this.setState({
            currentIndex:i
        });
    };

    render() {
        const {handleChange} = this;
        const {currentIndex} = this.state;

        return (
            <div>
            {qacontent.map(function(e, i) {
                return (
                    <List
                    q={e.q}
                    a={e.a}
                    handleChange={handleChange}
                    key={i}
                    index={i}
                    currentIndex={currentIndex}
                    />
                );
            })}
            </div>
        );
    }
}

export default Home;
