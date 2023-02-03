import styles from "./MyButton.module.scss";
import PropTypes from "prop-types";
import cn from "classnames";
const MyButton = ({
  title = "Заказать",
  bold = false,
  uppercase = false,
  outline = false,
  size = "md",
  background = "primary",
  animation = true,
  round = false,
}) => {
  let clazz = cn(styles.button, {
    [styles.primary]: background === "primary",
    [styles.secondary]: background === "secondary",
    [styles.round]: round,
    [styles.uppercase]: uppercase,
    [styles.bold]: bold,
    [styles.outline]: outline,
    [styles.lg]: size === "lg",
    [styles.glare]: animation,
  });
  return <button className={clazz}>{title}</button>;
};

MyButton.propTypes = {
  title: PropTypes.string,
  bold: PropTypes.string,
  uppercase: PropTypes.bool,
  outline: PropTypes.bool,
  size: PropTypes.oneOfType(["md", "lg"]),
  background: PropTypes.oneOfType(["primary", "secondary"]),
  round: PropTypes.bool,
  animation: PropTypes.bool,
};

export default MyButton;
