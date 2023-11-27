import { Button } from 'components'
import styles from './Home.module.scss'
import { useNavigate } from 'react-router-dom'
import VideoBackground from '../../assets/VideoBackground.mp4'

const Home = () => {
  const navigate = useNavigate()

  return(
    <section className={ styles.home }>
      <video className={ styles.homeBackground } autoPlay loop muted>
        <source src={ VideoBackground } type='video/mp4'/>
      </video>
      <div className={ styles.homeBackgroundLayer }>
        <span className={ styles.homeTitle }>Ciwin Product Manager</span>
        <span className={ styles.homeDescription }>Need a hand for managing your products? We're ready to help you.</span>
        <Button 
          customClass={ styles.homeButton } 
          click={ () => { navigate('/product') } } 
          name='See More'
        />
      </div>
    </section>
  )
}

export default Home