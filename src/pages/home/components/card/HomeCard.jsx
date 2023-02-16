import { makeStyles } from '@material-ui/core/styles';
import { useContext } from "react";
import AppContext from "../../../../context/AppContext";


const useStyles = makeStyles(() => ({
  container: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    width: 350,
    height: 200,
    borderRadius: 8,
    overflow: 'hidden',
    padding: 20,
    background: ({ colors }) => colors.primaryColor,
    boxShadow: ({ colors }) => `1px 1px 10px 2px ${colors.primaryColor}20`
  },
  label: {
    fontSize: 12,
    fontWeight: 400,
    color: ({ colors }) => `${colors.whiteColor}60`,
  },
  value: {
    marginTop: 20,
    fontSize: 32,
    fontWeight: 500,
    color: ({ colors }) => colors.whiteColor,
  },
  bottomContainer: {
    position: 'absolute',
    left: 0,
    bottom: 0,

    display: 'flex',
    columnGap: 40,
    padding: '12px 20px',

    width: '100%',
    background: ({ colors }) => colors.secondaryColor,
  },
  bottomItem: {
    display: "flex",
    flexDirection: 'column'
  },
  bottomLabel: {
    fontSize: 12,
    fontWeight: 400,
    opacity: 0.6,
    color: ({ colors }) => colors.blackColor,
  },
  bottomValue: {
    fontSize: 14,
    fontWeight: 700,
    color: ({ colors }) => colors.blackColor,
  }
}))

function HomeCard() {
  const { colors, budget } = useContext(AppContext);

  const styles = useStyles({ colors });

  return (
    <div className={styles.container}>
      <p className={styles.label}>Ahli Kvartira</p>
      <h3 className={styles.value}>${budget}</h3>

      <div className={styles.bottomContainer}>
        <div className={styles.bottomItem}>
          <p className={styles.bottomLabel}>Members</p>
          <span className={styles.bottomValue}>7</span>
        </div>
        <div className={styles.bottomItem}>
          <p className={styles.bottomLabel}>Updated</p>
          <span className={styles.bottomValue}>3 hours ago</span>
        </div>
      </div>
    </div>
  )
}

export default HomeCard;