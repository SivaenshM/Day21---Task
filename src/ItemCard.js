import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Rating from "@mui/material/Rating";
import itemImg from "./itemImg.jpg";
import CartContext from "./CartContext";
import { useContext } from "react";

function ItemCard({ item }) {
  const { state, dispatch } = useContext(CartContext);

  return (
    <Card style={{ width: "16rem" }} className="item">
      <div className="itemImg">
        {item.sale && <span class="notify-badge">sale</span>}
        <Card.Img variant="top" src={itemImg} />
      </div>
      <Card.Body className="itemBody">
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>
          {item.rating && (
            <Rating
              name="read-only"
              value={item.rating}
              readOnly
              size="small"
            />
          )}
          <div className="text-center">
            <span className="text-decoration-line-through">
              {item.initial_price}
            </span>{" "}
            &nbsp;
            <span>{item.price}</span>
          </div>
        </Card.Text>
        {state.cart.some((p) => p.id === item.id) ? (
          <Button
            variant="primary"
            onClick={() =>
              dispatch({
                type: "remove_from_cart",
                payload: item,
              })
            }
          >
            Remove from Cart
          </Button>
        ) : (
          <Button
            onClick={() => {
              dispatch({
                type: "add_to_cart",
                payload: item,
              });
            }}
            variant="secondary"
          >
            Add to Cart
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default ItemCard;