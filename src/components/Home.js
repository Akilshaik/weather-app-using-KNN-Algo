import React from "react";
import "./Home.css";




function Home() {
    const  weatherLoad=()=>{
        window.location.href = '/weatherPage'

    }
  return (
    <div>
      <header>
        <h1>k-Nearest Neighbors (k-NN) Algorithm</h1>
      </header>
      <section>
        <h2>What is k-NN?</h2>
        <p>
          The k-Nearest Neighbors algorithm (k-NN) is a simple,
          easy-to-implement supervised machine learning algorithm that can be
          used to solve both classification and regression problems. It's a lazy
          learning algorithm as it doesn't explicitly learn a model. Instead, it
          chooses to memorize the training instances which are then used as
          “knowledge” for the prediction phase.
        </p>
      </section>
      <section>
        <h2>How Does k-NN Work?</h2>
        <p>
          The k-NN algorithm works by finding the distances between a query and
          all the examples in the data, selecting the specified number examples
          (k) closest to the query, then votes for the most frequent label (in
          the case of classification) or averages the labels (in the case of
          regression).
        </p>
      </section>
      <section>
        <h2>Applications of k-NN</h2>
        <p>
          k-NN can be used in a variety of settings, including:
          <ul>
            <li>Handwriting detection</li>
            <li>Weather prediction</li>
            <li>Image recognition</li>
            <li>Recommendation systems</li>
            <li>Search engines</li>
            <li>And many more areas</li>
          </ul>
        </p>
      </section>
      <section>
        <h2>Implementation of K-NN </h2>
        <p>
          We made an simple application of Weather prediction, Here we implement
          K-NN and show how to actual this Algorithm Works.
        </p>
        <button className="button" onClick={weatherLoad}> Home </button>
      </section>
      <footer>
        <p></p>
      </footer>
    </div>
  );
}

export default Home;
