import React from 'react';
import "./Blog.css";

const Blog = () => {
    return (
        <div className="container mt-5">
            <h2 className="text-center mb-5">Question and Answer</h2>
                    <div className="blogText">
                        <h4>
                            Difference between nodejs
                            <span className="text-danger"> javascript</span> and
                            <span className="text-danger"> nodejs</span>
                        </h4>
                        <p>
                            Authentication is the process of verifying if the user
                            is valid. If he is a valid user he may have access to
                            some data. And will be able to view the data at his
                            will. <br /> Wheraes, the Authorization is the process
                            of verifying if the user has access to specified
                            document. So unintention data access is handled through
                            this process.
                        </p>
                    </div>

                    <div className="blogText">
                        <h4>
                            When should you use
                            <span className="text-danger"> mongodb</span> and when should you use
                            <span className="text-danger"> nodejs</span>
                        </h4>
                        <p>
                            Authentication is the process of verifying if the user
                            is valid. If he is a valid user he may have access to
                            some data. And will be able to view the data at his
                            will. <br /> Wheraes, the Authorization is the process
                            of verifying if the user has access to specified
                            document. So unintention data access is handled through
                            this process.
                        </p>
                    </div>

                    <div className="blogText">
                        <h4>
                            Difference between
                            <span className="text-danger"> sql</span> and
                            <span className="text-danger"> nosql</span>
                        </h4>
                        <p>
                            Authentication is the process of verifying if the user
                            is valid. If he is a valid user he may have access to
                            some data. And will be able to view the data at his
                            will. <br /> Wheraes, the Authorization is the process
                            of verifying if the user has access to specified
                            document. So unintention data access is handled through
                            this process.
                        </p>
                    </div>
                    
                    <div className="blogText">
                        <h4>What is the purpose of <span className="text-danger">jwt</span>  and how does it work?
                        </h4>
                        <p>
                            Firebase has many benifit. Firstly it takes lots of hassle from our hand by removing the risk of data breaching. And its super easy to use.<br /> There are other way of implementation of authentication. Such as
                            <span className="text-success"> Stych, Amazon Cognito, Ory, Okta, Frontegg.</span>
                        </p>
                    </div>

            </div>
    );
};

export default Blog;