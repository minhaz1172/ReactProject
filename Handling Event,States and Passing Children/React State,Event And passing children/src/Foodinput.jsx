import styles from './Foodinput.module.css';

const Foodinput = () => {
  return (
    <>
      <h1 className="text-center">Healthy Food</h1>
      <input type="text" placeholder="Enter Text here" className={styles.Foodinput}
        onChange={(event) => console.log(event)}
      />

    </>
  )
}
export default Foodinput;