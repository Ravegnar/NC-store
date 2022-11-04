export default function WeaponDetailInfo(props) {
  const {weapon, onProductAdd} = props;
  return (
    <>
      <p className="mb-8">
        {weapon.info}
      </p>
    </>
  );
}