import clsx from "clsx";

export default function Button(props) {
  const { children, disabled, outline, className, ...rest } = props;

  const classNames = clsx({
      btn: true,
      "btn-default": !outline,
      "btn-outline": outline,
    },
    className
  );

  return (
    <button className={classNames} disabled={disabled} {...rest}>
      {children}
    </button>
  );
}