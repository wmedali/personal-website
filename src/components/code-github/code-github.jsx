import React, {Component} from 'react';
import {
    Card,
    CardHeader,
    CardActions,
    CardText
} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

import './code-github.css';

class CodeGithubComponent extends Component {

    render() {
        return (
            <div className="code-github">
              <p className="headline">Look at my code, you might find something helpful</p>
                <Card>
                  <CardHeader
                    subtitle="Github Repository"
                    title="wmedali/personal-website"
                    avatar="github.png"
                  />
                <CardText>
                        I often contribute to open source projects or publish some helpful examples about test automation.
                    </CardText>
                    <CardActions>
                        <FlatButton label="View on github" href="https://github.com/wmedali/personal-website" target="_blank"/>
                    </CardActions>
                </Card>
            </div>
        );
    }
}

export default CodeGithubComponent;
