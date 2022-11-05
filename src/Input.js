import clsx from "clsx";

export default function Input(props) {
    const {placeholder, required, type = "text", className, ...rest} = props

    const classNames = clsx({input: true}, className);

    return (<>
        <label className="label">
                {placeholder}
                {required && <span className="input-required">*</span>}
            <div>
                <input className={classNames}
                    required={required}
                    type={type}
                    placeholder={placeholder}
                    {...rest}
                    />
            </div>
        </label>
    </>)
}