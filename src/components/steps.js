import React from 'react';
import './steps.css'; 

function Steps() {
  return (
    <div>
      <div className="header">
        <h1>k-NN Algorithm Steps</h1>
      </div>
      <div className="container">
        <div className="step">
          <h2>Step 1: Load the Data</h2>
          <p>Load the dataset containing examples with their corresponding labels.</p>
        </div>
        <div className="step">
          <h2>Step 2: Choose the Number of Neighbors (k)</h2>
          <p>Determine the value of k, which represents the number of nearest neighbors to consider for classification or regression.</p>
        </div>
        <div className="step">
          <h2>Step 3: Calculate Distance</h2>
          <p>Calculate the distance between the query instance and all the instances in the dataset using a distance metric such as Euclidean distance.</p>
        </div>
        <div className="step">
          <h2>Step 4: Find Nearest Neighbors</h2>
          <p>Identify the k instances with the smallest distances to the query instance.</p>
        </div>
        <div className="step">
          <h2>Step 5: Determine Majority Vote</h2>
          <p>For classification problems, determine the class labels of the k nearest neighbors and perform a majority vote to decide the class label of the query instance. For regression problems, calculate the average of the k nearest neighbors' target values.</p>
        </div>
        <div className="step">
          <h2>Step 6: Output Result</h2>
          <p>Output the predicted class label (for classification) or the predicted value (for regression) for the query instance.</p>
        </div>
      </div>
      <div className="footer">
        <p><button className="button" onClick={() => window.location.href = '/WeatherPage'}> Home </button></p>
      </div>
    </div>
  );
}

export default Steps;
