
export default function ArticleCard ({topic}) {

const imageArray = ["https://akm-img-a-in.tosshub.com/indiatoday/images/story/202012/chris-ried-ieic5Tq8YMk-unsplas_1200x768.jpeg?bEhcYQAShJnLf0Mtu4JYq8YzICfhz2rB&size=770:433", 'https://i2-prod.football.london/incoming/article17909924.ece/ALTERNATES/s810/0_GettyImages-1210995196.jpg', 'https://i0.wp.com/post.healthline.com/wp-content/uploads/2020/07/1296x728-header.jpg?w=1575']
    

console.log(topic)
if (topic.slug === 'coding') return (
        <div class="container">
  <img src={imageArray[0]} alt="Avatar" class="image"/>
  <div class="overlay">
    <div class="text">Hello World</div>
  </div>
</div>
    )
}




{/* <article key={topic.slug}> 
            <h2>{topic.slug}</h2>
            <h3>{topic.description}</h3>
        </article> */}