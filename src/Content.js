import React from 'react';

function readWords(level){
    console.log(level);
    var request = new XMLHttpRequest();
    request.open('GET', `https://melqonyang.github.io/spelling-checker/${level}.txt`, true);
    request.send(null);
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            var type = request.getResponseHeader('Content-Type');
            if (type.indexOf("text") !== 1) {
                console.log(request.responseText.split('\n'));
            }
        }
    }
    return []
}

export default class Content extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            words: readWords(props.level),
            wrongs: {},
            corrects: {}
        }
    }

    render(){
        const {level, mode, direction, count, order} = this.props;
        return (
            <div>
                {level +  mode + direction+ count+ order}
            </div>
        )
    }
}