import styles from "./Container.module.css"
import './App.css'
const Container = (props) => {
  return (
    <div className={styles.container}>
      {props.children}
    </div>

  )

};
export default Container;
