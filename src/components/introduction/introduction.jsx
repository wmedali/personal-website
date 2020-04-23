import React, {Component} from 'react';
import './introduction.css';
import Avatar from 'material-ui/Avatar';


class IntroductionComponent extends Component {
    render() {
        return (
          <div className="introduction">
            <Avatar src="avatar.jpg" size={150}/>
            <p className="introduction-text">
              Loves coding, coffee and e-skating. <br/>
              Traveler, surfer and defender of peace. <br/>
              QA & Automation engineer, currently living in Paris, France.
            </p>
          </div>
        );
    }
}

export default IntroductionComponent;
