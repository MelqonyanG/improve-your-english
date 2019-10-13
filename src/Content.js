import React from 'react';
import Show from './Show';
import Practice from './Practice';

function orderWords(words, order){
    if (order === 'alphabetical'){
        words.sort(function (a, b) {
            if (a[0].toLowerCase() > b[0].toLowerCase()) {
                return 1;
            }
            if (b[0].toLowerCase() > a[0].toLowerCase()) {
                return -1;
            }
            return 0;
        });

    }else if (order === 'random'){
        var currentIndex = words.length, temporaryValue, randomIndex;
        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = words[currentIndex];
            words[currentIndex] = words[randomIndex];
            words[randomIndex] = temporaryValue;
        }
    }
    return words;
}

function fixDirection(words, direction){
    const result = [];
    for (let i=0; i<words.length; i+=1){       
        if(words[i].trim().length > 0){
            let arm = words[i].split("*")[1].trim();
            let eng = words[i].split("*")[0].trim();
            if(direction){
                result.push([arm, eng]);
            }else{
                result.push([eng, arm])
            }
        }
    }
    return result;
}

export default class Content extends React.Component{
    constructor(props){
        super(props);        
        this.state = {
            all: [],
            wrong: [],
            correct: [],
            update: true
        }
    }

    componentDidMount(){
        const {level} = this.props;
        var request = new XMLHttpRequest();
        request.open('GET', `https://melqonyang.github.io/improve-your-english/words/${level}.txt`, true);
        request.send(null);
        request.onreadystatechange = () => {
            if (request.readyState === 4 && request.status === 200) {
                var type = request.getResponseHeader('Content-Type');
                if (type.indexOf("text") !== 1) {
                    this.setState({all: request.responseText.split('\n')});
                }
            }
        }
    }

    componentWillReceiveProps(nextProps){
        this.setState({update: true});
        if(this.props.level !== nextProps.level){
            const {level} = nextProps;
            var request = new XMLHttpRequest();
            request.open('GET', `https://melqonyang.github.io/spelling-checker/words/${level}.txt`, true);
            request.send(null);
            request.onreadystatechange = () => {
                if (request.readyState === 4 && request.status === 200) {
                    var type = request.getResponseHeader('Content-Type');
                    if (type.indexOf("text") !== 1) {
                        this.setState({all: request.responseText.split('\n')});
                    }
                }
            } 
        }
        
    }

    shouldComponentUpdate(nextProps, nextState) {            
        if (nextState.update || nextProps.mode === 'show') {          
            return true;
        } else {
            return false;
        }
    }

    addWord = (word, isCorrect) => {
        const {wrong, correct} = this.state;       
        if(!isCorrect){      
            this.setState({update: false});              
            if (!wrong.includes(word)){
                wrong.push(word);
                this.setState({wrong});
            }
            if (correct.includes(word)){
                correct.pop(correct.indexOf(word));
                this.setState({correct});
            }
        }else{
            this.setState({update: true});
            if (!correct.includes(word)){
                correct.push(word);
                this.setState({correct});
            }
            if (wrong.includes(word)){
                wrong.pop(wrong.indexOf(word));
                this.setState({wrong});
            }
        }
    }

    render(){
        const {mode, direction, count, order} = this.props;
        let words = this.state[count];       
        const {correct, wrong} = this.state;
        words = fixDirection(words, direction);       
        words = orderWords([...words], order);
        
        return (
            <div>
                {mode === 'show' ? <Show words={words} direction={direction} correct={correct} wrong={wrong}/> : <Practice words={words} direction={direction} addWord={this.addWord}/>}
            </div>
        )
    }
}