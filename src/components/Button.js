
import { classNames } from "@/utils";

export default function Button({
  disable,
  className,
  overrideClassNames = false,
  children,
  ...restProps
}) {
  let defaultClassName =
    "inline-flex items-center flex-1 justify-center rounded-[14px] bg-violet-700 p-[.8rem] flex-shrink-0 text-white text-center text-[17px] font-semibold"
  !disable
    ? null
    : (defaultClassName += disable
        ? " cursor-not-allowed "
        : " cursor-pointer");


  return (
    <button
      className={
        overrideClassNames ? className : classNames(defaultClassName, className)
      }
      disabled={disable}
      {...restProps}
    >
      {children}
    </button>
  );

}
