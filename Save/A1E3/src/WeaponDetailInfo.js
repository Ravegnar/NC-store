import Button from "./Button.js";

export default function WeaponDetailInfo(props) {
  const {weapon, onProductAdd} = props;
  return (
    <>
      <p>
        {weapon.info} sold at <strong>${weapon.price}</strong> per
        piece.
      </p>
      <Button onClick={() => onProductAdd(weapon)}>${weapon.price}</Button>
    </>
  );
}