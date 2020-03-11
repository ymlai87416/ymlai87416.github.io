import React, {Component} from 'react';

class ToolList extends Component {
    state = {
        tools: []
    }

    componentDidMount(){
        //hard code all the tools here
        var arr = [ 
            {
                title: 'dec to bin converter',
                path: '#/dec2bin',
            },
         ];
        this.setState({tools: arr})
    }

    render(){
        const tools = this.state.tools.map((tool, i) => <li key={i}><a href={"./"+tool.path}>{tool.title}</a></li>)
        const divStyle = {
            textAlign: 'left',
            margin: '10px'
        }

        return(
            <div style={divStyle}>
                <h2>All tools</h2> 
                <ul>
                   {tools}
                </ul> 
            </div>
        )
    }
}


export default ToolList;