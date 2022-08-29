import BlogCard from '../components/BlogCard'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      THIS IS THE HOME

      <BlogCard
        title='Sakura Trees'
        description='The importance of sakura trees in japanese culture'
        image='https://images.unsplash.com/photo-1611053571700-93bc64a26af9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=685&q=80'
        link='https://www.google.com/search?q=sakura+trees&sxsrf=ALiCzsbm6nJd5GlkqIMklLQyljfxeGxq3A:1661721384039&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjDqL7Guur5AhXA_bsIHfVNBtUQ_AUoAXoECAEQAw&biw=958&bih=919&dpr=1'
      />
    </div>
  )
}
