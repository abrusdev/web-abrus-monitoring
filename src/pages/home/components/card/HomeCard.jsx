import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(() => ({
  container: {
    width: 400,
    height: 200,
    background: '#181D28',
    borderRadius: 8
  }
}))

function HomeCard() {
  const styles = useStyles();

  return (
    <div className={styles.container}>
      <h2>Budget</h2>
    </div>
  )
}

export default HomeCard;