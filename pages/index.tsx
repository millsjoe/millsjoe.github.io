import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import About from './components/about'
import Header from './components/header'

const test = "new"
const Home: NextPage = () => {
  return (
    <div className={styles.container}>
    <Header />
    <About />
    </div>
  )
}

export default Home
