export default function ProductDetailPreview(props) {
  const {product} = props;
  return (
    <>
      <p className="mb-8">
        {product.info}
      </p>
    </>
  );
}