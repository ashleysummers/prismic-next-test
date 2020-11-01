import styles from './heroheadline.module.scss'
import globalStyles from 'bootstrap/dist/css/bootstrap.css'
import cx from 'classnames'

function HeroHeadline({ headline, tagline }) {
  //let { url, alt } = backgroundImage

  return (
    <div className="row">
      <div className={styles.heroHeadline}>
        <div className="col-md-12">

          <div className="text-center">
            <h1>{headline}</h1>
            <h3>{tagline}</h3>
          </div>
        </div>
      </div></div>
  )
}
export default HeroHeadline