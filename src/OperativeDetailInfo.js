import Button from "./Button.js";

export default function OperativeDetailInfo(props) {
  const {operative, onProductAdd} = props;
  return (
    <>
      <p>
        {operative.info} sold at <strong>${operative.price}</strong> per
        piece.
      </p>
      <Button onClick={() => onProductAdd(operative)}>${operative.price}</Button>
    </>
  );
}