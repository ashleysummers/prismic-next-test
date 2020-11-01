import styles from './ctahero.module.scss'

function CTAHero({ headline, tagline, ctaText, ctaLink, backgroundImage, ctaBoxColor }) {
    //let { url, alt } = backgroundImage

    return (
      <div className={styles.ctaHero} style={{backgroundImage: `url(${backgroundImage.url})`}}>
        
        <div className={styles.ctaContainer} style={{backgroundColor: ctaBoxColor}}>
        {/*<img alt={alt} src={`${url}`} width="100" height="100" />*/}
        
        <div className="text">
          <h2>{headline}</h2>
          <h3 className="mb-3">{tagline}</h3>
          <a href={ctaLink} className="btn-block mb-3">{ctaText} &raquo;</a>          
        </div>
        </div>
      </div>

      
    )
  }
  export default CTAHero