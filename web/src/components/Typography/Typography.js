import React from "react";
import styles from "./Typography.module.scss";
import { cn } from "../../lib/helpers";

const withTypographyProps = (Component) => ({
  className = "",
  align,
  ...props
}) => {
  return (
    <Component
      {...props}
      className={
        className && align ? cn(className, `align-${align}`) : className
      }
    />
  );
};

const Heading1 = withTypographyProps(({ className, children, ...props }) => (
  <h1 {...props} className={cn(styles.Heading1, className)}>
    {children}
  </h1>
));
const Heading2 = withTypographyProps(({ className, children, ...props }) => (
  <h2 {...props} className={cn(styles.Heading2, className)}>
    {children}
  </h2>
));
const Heading3 = withTypographyProps(({ className, children, ...props }) => (
  <h3 {...props} className={cn(styles.Heading3, className)}>
    {children}
  </h3>
));
const Heading4 = withTypographyProps(({ className, children, ...props }) => (
  <h4 {...props} className={cn(styles.Heading4, className)}>
    {children}
  </h4>
));
const Subtitle = withTypographyProps(({ className, children, ...props }) => (
  <h5 {...props} className={cn(styles.Subtitle, className)}>
    {children}
  </h5>
));
const Subtitle2 = withTypographyProps(({ className, children, ...props }) => (
  <h6 {...props} className={cn(styles.Subtitle2, className)}>
    {children}
  </h6>
));
const Body1 = withTypographyProps(({ className, children, ...props }) => (
  <p {...props} className={cn(styles.Body1, className)}>
    {children}
  </p>
));
const Body2 = withTypographyProps(({ className, children, ...props }) => (
  <p {...props} className={cn(styles.Body2, className)}>
    {children}
  </p>
));
const Caption = withTypographyProps(({ className, children, ...props }) => (
  <p {...props} className={cn(styles.Caption, className)}>
    {children}
  </p>
));

export {
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Subtitle,
  Subtitle2,
  Body1,
  Body2,
  Caption,
};
