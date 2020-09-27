import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getProduct } from "../redux/actions/product.actions";
import { Spinner, Card, CardDeck } from "react-bootstrap";
import "./Product.css";

function Product(props) {
  console.log(props);
  const getProduct = props.getProduct;

  useEffect(() => {
    getProduct();
  }, [getProduct]);

  return (
    <div>
      <h1>Here we are the list the good people</h1>
      {props.isLoading === true ? (
        <Spinner animation="border" />
      ) : (
        props.products.map((item, index) => (
          <div key={index}>
            <div className="container">
              <CardDeck>
                <Card>
                  <img className="gambar" src={item.avatar} alt="people" />
                  <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>Omagat Who is this picture</Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </Card.Footer>
                </Card>
                <Card>
                  <img className="gambar" src={item.avatar} alt="people" />
                  <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>Omagat Who is this picture</Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </Card.Footer>
                </Card>
                <Card>
                  <img className="gambar" src={item.avatar} alt="people" />
                  <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>Omagat Who is this picture</Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </Card.Footer>
                </Card>
              </CardDeck>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

const mapStateToProps = (props) => {
  console.log(props);
  return {
    products: props.data,
    isLoading: props.isLoading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getProduct: () => dispatch(getProduct()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);
