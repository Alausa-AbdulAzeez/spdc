import React from "react";
import PropTypes from "prop-types";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const Button = ({
  children,
  variant = "contained", // Default to "contained"
  size = "medium", // Default to "medium"
  startIcon,
  endIcon,
  disabled = false,
  href,
  onClick,
  loading = false,
  buttonSize,
  width = "w-fit",
  iconStyles,
  linkState,
  openInSamePage = true,
  ...props
}) => {
  const baseStyles = "group w-fit   flex items-center relative cursor-pointer";

  // Define variant-specific styles
  const variantStyles = {
    contained: "bg-primary",
    outlined:
      "border border-[1.5px] border-primary text-primary hover:scale-90 hover:bg-primary hover:text-white",
    text: "bg-transparent",
    containedSecondary: "bg-white text-primary hover:scale-90",
  };

  // Define size-specific styles
  const sizeStyles = {
    small: `py-1 px-2 rounded-md`,
    medium: `${width} py-3 px-6 rounded-md`,
    large: `lg:h-[64px] h-[48px] ${width} py-[8px] px-[12px] text-[16px] leading-[28px] font-[600] lg:text-[20px]  rounded-[8px]  lg:py-[17px] lg:px-[32px] lg:rounded-[12px]`,
  };

  const disabledStyles = "opacity-50 cursor-not-allowed";

  // Merge all styles
  const styles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${
    disabled ? disabledStyles : ""
  }`;

  // Render as a link if `href` is provided
  if (href) {
    return (
      <Link
        to={href}
        state={linkState}
        className={styles}
        target={openInSamePage ? undefined : "_blank"}
        rel="noopener noreferrer"
        {...props}
      >
        {startIcon && (
          <Icon icon={startIcon} className={`mr-2 ${iconStyles}`} />
        )}
        {children}
        {endIcon && (
          <div className="w-fit overflow-hidden flex items-center">
            <img
              src={endIcon}
              alt="Arrow right"
              className="hover-slide-in-top transition-all ease-linear"
            />
          </div>
        )}
      </Link>
    );
  }

  // Render as a button
  return (
    <button
      className={styles}
      onClick={onClick}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <span className="spinner" />
      ) : (
        <>
          {startIcon && (
            <div className="w-fit overflow-hidden flex items-center">
              <img
                src={startIcon}
                alt="Arrow right"
                className="hover-slide-in-top transition-all ease-linear"
              />
            </div>
          )}
          {children}
          {endIcon && (
            <div className="w-fit overflow-hidden flex items-center">
              <img
                src={endIcon}
                alt="Arrow right"
                className="hover-slide-in-top transition-all ease-linear"
              />
            </div>
          )}
        </>
      )}
    </button>
  );
};

export default Button;
