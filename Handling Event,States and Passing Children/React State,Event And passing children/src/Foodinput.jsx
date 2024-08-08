import styles from './Foodinput.module.css';

const Foodinput = () => {
  const onChange_event = (event) => {
    console.log(event);
  }

  return (
    <>
      <h1 className="text-center">Healthy Food</h1>
      <input type="text" placeholder="Enter Text here" className={styles.Foodinput}
        onChange={onChange_event}
      />

    </>
  )
}
export default Foodinput;