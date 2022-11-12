export default function ProductDetailStats(props) {
  const {product} = props;
  return (
    <>
      <p className="mb-8">
        {product.info}
      </p>
    </>
  );
}