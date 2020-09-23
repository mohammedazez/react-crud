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
            {/* <h3>name: {item.name}</h3>
            <h3>Avatar: {item.avatar}</h3> */}
            <div className="container">
              {/* <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="https://i.pinimg.com/originals/b8/bf/86/b8bf8658dd216b2ec14a1b9a27123f20.gif"
                />
                <img src={item.avatar} />
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>Omagat who is this picture</Card.Text>
                  <Button variant="primary">See The profile</Button>
                </Card.Body>
              </Card> */}
              <CardDeck>
                <Card>
                  {/* <Card.Img
                    variant="top"
                    src="https://i.pinimg.com/originals/b8/bf/86/b8bf8658dd216b2ec14a1b9a27123f20.gif"
                  /> */}
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
                  {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
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
                  {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
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
