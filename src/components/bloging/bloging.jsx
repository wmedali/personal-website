import React, { Component } from "react";
import { Card, CardHeader, CardActions } from "material-ui/Card";
import "./bloging.css";
import FlatButton from "material-ui/FlatButton";
class BlogingComponent extends Component {
  render() {
    return (
      <div className="blog">
        <p className="headline">Checkout my blog posts</p>
        <div className="article-entry">
          <Card>
            <CardHeader
              avatar="https://miro.medium.com/max/1024/1*fVBL9mtLJmHIH6YpU7WvHQ.png"
              title="How to generate automated test reports using Postman"
            />
            <CardActions>
              <FlatButton
                label="Read"
                href="https://medium.com/younited-tech-blog/generate-automated-test-reports-using-postman-b9c8cd53b955"
                target="_blank"
              />
            </CardActions>
          </Card>
        </div>
        <div className="article-entry">
          <Card>
            <CardHeader
              avatar="https://miro.medium.com/max/1024/1*fVBL9mtLJmHIH6YpU7WvHQ.png"
              title="Integrate automated test in Azure DevOps using the Postman API"
            />
            <CardActions>
              <FlatButton
                label="Read"
                href="https://medium.com/younited-tech-blog/integrate-automated-test-in-azure-devops-using-the-postman-api-288f5566bf11"
                target="_blank"
              />
            </CardActions>
          </Card>
        </div>
        <div className="article-entry">
          <Card>
            <CardHeader
              avatar="https://miro.medium.com/max/1024/1*fVBL9mtLJmHIH6YpU7WvHQ.png"
              title="Distribute your API automated test reports using Azure Blob Storage"
            />
            <CardActions>
              <FlatButton
                label="Read"
                href="https://medium.com/younited-tech-blog/upload-api-test-reports-to-azure-storage-f8bb3834ccd2"
                target="_blank"
              />
            </CardActions>
          </Card>
        </div>
        <div className="article-entry">
          <Card>
            <CardHeader
              avatar="https://miro.medium.com/max/1024/1*fVBL9mtLJmHIH6YpU7WvHQ.png"
              title="Serve yourself combining Postman and Express"
            />
            <CardActions>
              <FlatButton
                label="Read"
                href="https://medium.com/younited-tech-blog/serve-yourself-combining-postman-and-express-3fd1dd9f545c"
                target="_blank"
              />
            </CardActions>
          </Card>
        </div>
        
        
      </div>
    );
  }
}

export default BlogingComponent;
