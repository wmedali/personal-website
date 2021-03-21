import React, { Component } from "react";
import { Card, CardHeader, CardText } from "material-ui/Card";
import Chip from "material-ui/Chip";
import "./timeline.css";

class TimelineComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      expanded1: false,
      expanded2: false,
      expanded3: false,
    };
  }

  async componentDidMount() {}

  componentWillUnmount() {}

  handleExpandChange = (expanded1) => {
    this.setState({ expanded1: expanded1 });
  };

  handleExpandChange2 = (expanded2) => {
    this.setState({ expanded2: expanded2 });
  };

  handleExpandChange3 = (expanded3) => {
    this.setState({ expanded3: expanded3 });
  };

  handleExpand = () => {
    this.setState({ expanded: true });
  };

  handleExpand2 = () => {
    this.setState({ expanded2: true });
  };

  handleExpand3 = () => {
    this.setState({ expanded3: true });
  };

  handleReduce = () => {
    this.setState({ expanded1: false });
  };

  handleReduce2 = () => {
    this.setState({ expanded2: false });
  };

  handleReduce3 = () => {
    this.setState({ expanded3: false });
  };
  render() {
    return (
      <div className="timeline">
        <p className="headline">Working experience</p>
        <div className="timeline-entry">
          <Card>
            <CardHeader
              title="QA Engineer"
              subtitle="Younited Credit"
              actAsExpander={true}
              showExpandableButton={true}
            />
            <CardText expandable={true}>
              March 2019 - June 2020. QA Lead of Partnership and Marketplace
              projects.
              <br />
              <br />
              <div className="timeline-entries">
                <div className="timeline-entry-chip">
                  <Chip>BDD</Chip>
                </div>
                <div className="timeline-entry-chip">
                  <Chip>Postman</Chip>
                </div>
                <div className="timeline-entry-chip">
                  <Chip>Azure Pipelines</Chip>
                </div>
                <div className="timeline-entry-chip">
                  <Chip>E2E Testing</Chip>
                </div>
                <div className="timeline-entry-chip">
                  <Chip>User Testing</Chip>
                </div>
                <div className="timeline-entry-chip">
                  <Chip>Cypress</Chip>
                </div>
                <div className="timeline-entry-chip">
                  <Chip>Azure Devops</Chip>
                </div>
              </div>
            </CardText>
          </Card>
        </div>
        <div className="timeline-entry">
          <Card
            expanded={this.state.expanded1}
            onExpandChange={this.handleExpandChange}
          >
            <CardHeader
              title="Test & Integration Engineer"
              subtitle="Safran Identity & Security (aka Morpho)"
              actAsExpander={true}
              showExpandableButton={true}
            />
            <CardText expandable={true}>
              July 2016 - March 2019. Tester in Biometric acquisition and Identity cards production software.
              <br />
              <br />
              <div className="timeline-entries">
                <div className="timeline-entry-chip">
                  <Chip>Jenkins</Chip>
                </div>
                <div className="timeline-entry-chip">
                  <Chip>sikuliX</Chip>
                </div>
                <div className="timeline-entry-chip">
                  <Chip>Bash</Chip>
                </div>
                <div className="timeline-entry-chip">
                  <Chip>Java 7</Chip>
                </div>
                <div className="timeline-entry-chip">
                  <Chip>Testlink</Chip>
                </div>
                <div className="timeline-entry-chip">
                  <Chip>Test writing & execution</Chip>
                </div>
                <div className="timeline-entry-chip">
                  <Chip>Confluence, JIRA</Chip>
                </div>
              </div>
            </CardText>
          </Card>
        </div>
      </div>
    );
  }
}

export default TimelineComponent;
