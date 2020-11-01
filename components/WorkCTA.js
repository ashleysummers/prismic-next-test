import styles from './workcta.module.scss'
import globalStyles from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import classNames from 'classnames'

function WorkCTA({ ctaText, ctaLink, clientName, workDescription, workSummary, clientImage, imageAlignment }) {
  //let { url, alt } = backgroundImage

  return (
    <div className="row">
      <div className={`col-md-6 ${styles.workCTA}`}>

        <h2>{clientName}</h2>
        <h3>{workDescription}</h3>
        <p>{workSummary}</p>
        <a href={ctaLink} className="btn">{ctaText} &raquo;</a>
      </div>      
      <div className={`col-md-6 ${classNames({'order-first': (imageAlignment == 'Left')})}`}>
        <img src={`${clientImage.url}`} className="img-fluid" />
      </div>
    </div>
  )
}
export default WorkCTA