import React from 'react'
import Styles from "./home.module.css"
import TypeWriter from "typewriter-effect"
import { Image } from '@chakra-ui/react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import  KeyCarousel from '../components/Slider';
const data=[
  {
    name:"HTML",
    img:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABHVBMVEUXNFnkTSb4+fnxZSn////r6+sAM1voTiSrRTgAJ1GUnKnr7/D7/PwUMljwYynrWSgAIE3kQhAAHEsJLVXwXBGNmKjwWQgbOl7j5unV2+BfbYPosqr5xrj61MjAxcz73dNYZ4A+UW3owLjkPgBtfZHpycOjrbkAFUjtTiLq2NLr8/TxYB4xS2vkQg7kRhnYSypzPUkAAD1/P0SXQj4lNlXPSi5ZOk48N1HqUBGKQETnpZn2oYTHSS+4RjbkWDXr5OLnlob1l3fASDJIW3ayusTIztV9iZtrepBhO0xuPUhLOFKRQT/xvbL4uKTmemP0jmfzfk3kYUTmgm7lZknzhV3nn5H97OXybTfmcVbzgVX4wK/3rJLtgWCjRDrmjnyydUCcAAAJ8UlEQVR4nO2daUPaShSGA0UiJpEliFrrvpRFgnWt1t1qW1ttqy1t9dr//zNuEkkyM2fIQrycyJ3nm4EEH2dCXs6ZoCQJBAKBQCAQCAQCgUAgEAgEAoFAIBgMtJyH5rtZzwWjMc/UmVcjjsHdCHZ4AsHVEY9VV1Gf97aOjdub9bORYOyn5pbcny/Iv5okFea8o3qvNUcc4OzJFXMTGQ+l5HgX0sTmyYK1ScqEYNI8gn7BbPAER4hHZgqd15pXySOsatKToo0ratpFdQ0lcuuE9XfVVjPpYBTz186NEc/MjHnTUZ8nnqk67vpL8sDq3BMP4pMblhjDtDLuDkphhniAMCRe6zkaZlY6s9E8kanBGhjDdNo5s0qTlMrgGGbeFzom1OYBMkxn5u396SEcKEP1/LW5f+6C2TpAhumM+Vtr0gQ1hEk01MgQQBt4nLPXw0eZAm8jhmH6zesOJWBoDuKSw4cL8nedeOk9YF38gEw6s5TTFGYbkiF3kDqGkqY75Faph9+4D+h2LAWG6sTrFbANx5CLY0jsRcWviRL9KDRMZ0bgUQfLMA1fZNAMOUcVhsJQGPbJMENdJdT33lVxYAznybCmzg+g4dmS94N6/obYLYGZpifDuZw3iOocvuFYh5ExmEt7NCy4n5rU89JrbEP1jVuYfTJDXXcGMXOmhTA8K7FV5ic19Pn01LOh89E3c16Sgg3T71cYRuIVUPtgqJVmMqqqZpRVLYwhVR62GYk1in0wlKTC2ZyJ1ZIIYQjIrCTfUHI+OQ6uoYswFIbC8H9pKGmKdbF6JJN2f9ecSmyeyDEXXW01rXoPT7KGF8S+dE+35L2aXVq1Dee8p/OIeT2U9A8zHh/cX0dfIjbDqKiPTXq8ZB7WxlfcXcd06o+jv/SO6rhr+sikHzNxu8J6wUMP3OyQK7nAh7Wcuys7+jrnqBpxMA6FJ257CwQCgUAgEAwc2f6BJLg23C/WcRSz61W5P1Q3kAw/VlP9QcYaw+1+GVY/DbzhR6S3mku5T4byJY6gtNnqk2FqB8kwu9WnQWxtYhnu98dQ3kISlLKnPRjmR8PjGiK90fRo+CI0ruE+muFGnwyH0QzX+2T4Gc1w7b81zDuGSKHNCqYDb7jdH8PqGpahtBNdsKcx3EYzlP5bQ3cfrEhjTtM+GeINYS/B9JkZ9hBMwxuOuvsgGh4AQ6MYwNtyEKwhXiw1DR9YQ2NvKoAvrwK4KrOGD4iGn1nD5nJd8ScNlt4xzFZYQ7TQZtcTGcPilDLkT6DhtDOG7uVwF9EQ1BOLe7EN75JkKF2yhkZ8wyvWEDG0SdImMDyObfiuwRpiVdpsgOF1Pa7hV8fQOWYVUxDGtsPYht/YSCMjTlJObDNiG/5KUKTh1aKKsQ3ZC36qhWoIYlsz7jtNGlzw0SpttuEwMKzFNGwDQ7RKm20IgmlzgRrE6KltNkmxlFdPpGPb0QJk2p+rBmuIGEu5sY0yrC02GQI/PTmCCai02YDYxgRTI8US+hOwG2mQGsDdDI2/5OWiDmsA0Q0vUVcB77AKMhXb6odPYIjVHn0EtIHl77QhGMTQhu4eeLVEC1CLkg/J07B+DU7EyIZoDeCOIYhth0fk5fA4tiFeA7hjCKttlOFesVfDZIQ2nqFBxjZlKr7hKbIhaAM3l4kLovKlGdsQNZbyqm1UMFWWezZ0Iw1qaAsT2+IaotahJF6T1PhJxTYQTN9WfAGxFDm08Qyp2Da0DJj15SuotGGt2nMAbWDjhjKM+vkQVNrkbVxBSQKx7dq/jhHVEDnSmNO0xca2W1/BIMMfwBBZkNMkpWJbVEOVrZbKqJU22xCubYtj2AY1DHxDUG0rxjJMVi3RNgSxbdG/nuhvCNujyKHNNNwNqCfGNcRsHj4agtV7AU1Sf8NXoD2KW2mTQsS2aIagPYpvCG9JCGiS+hves6FNRg7eJpvQ0Hc5hr/hCTBEbQDbZEE98dZ3Pc0dwzRlCGMpth+vDSxHWRNV+UEZggYwanu0Yxhx9R7zCbhxQhk6m5PRAO4YRrwlgTW8pwzZyyFuA7hjCGJbJMPyFSkIG8DIlTbbEDRJoxm+Ig0T1gDuGMLbSoxFArZgyhhWZknDaWCIdH8sZbgGGmw/awRfir6GZcoQhjb0WMq7k7S4R1RqlJrsa9hok4Zg1V4VP7RJ0k7A6r1DX8MXVMaBq/awK20WAav36t9lP8Nf/qENuT3agTWUf9d7NfwDDLErbTbwbuDwho0//NDm7oMtZ8G5JYGapUwbmDGkQxtYtYdeS7SALUSZfKNh28CMIR3aXjCGmDcieHAMqTYw0ySlDenQBmuJCQhtwW1gpknKGN6RhnBN20EiDEFsK9JN0sWmIXMNG41KhfoAPJ2sVXsOMLY1qSapMrR8fCu7lnnHrtz4dk9FtoTdauHBi210LUpR6rWFm9vFotExbJQrf06m2xkWYIjdAO4A17Zx6olKfai2d2MsGvlypXFyB+0skhnaAlfvkWM5tPzzn6tZrp0FDG2I98cSBKzeYyThl6p7/AGVNvxaogVcvXfrs2Dfr14KDNEbwI/A1XvfuwtGMsRe0+YQsHovvKHqxFLPMBGnIW/1nk8L0cewDWIpenv0EVhPNGr1rt0ZP8Mk1hIt4L2y8u3estJFsqth++obCN6JCG281Xsp2by030wdDXEsuYbtVyflinsTd5KahzZdvnvPKC7+/rt8xEoCw/bsux8V7zaLBIY2n684kY3m4fVejZqwtGH77uuvSoPSS6ChdNlFsDOUxuHfhSNFAYbq9Ltf5TJrl0jDTT9D27K5eH1ce5ywj4bp9j07NQncOYB7MwlBkKE9YRcPb6ZqdpfbfF/hTE2OYWoc26xDNuS3CxpN4/Z44f5bo+vgMYYJaB4+EuErTmTjbYAdYYi/ps2BE9u6E2Kdd7JqiRaRmqRRDBMS2iJ+914IQzfSJCS08VbvxTDM592nJqPSZgHriT0ajuappyYllkqSFuULhbsZMnYWiYk0nCZpVMM81EslptJmMR7DcHQ03+0sTkYD2Cbbq+Eof/Acw8QMoZQ9rVblkO+neULP52myXK0m5nIoWf8l4dNGKxVKMh9sZx2otfEJ6z8idCGbze6sH7TkQMu8deb5D17rYH0H7T8++JLNbm5v7JsTNsRQdtGrVvc3tjcTadfB+tOvPaSCh5I3eHLqYU1K5uDRWBN29zTEhKXsWqe7CZ2afMwJ+/FhK5yk+ayth4+Jnpp8zN94Z31Y9r+MmO8r8vD6jvT89DqY0+5yY6vLaWlt3d+4fE5Tk485YdeGwVlpTc3hT89wavIxPS53D1LOhDWnZupg9/L5Tk0+1sXyoWX9d6Fq6yHZl7zeMc+4zfWN9c3nf+b5Mdh2AoFAIBAIBAKBQCAQCAQCgUAgEAji8C+fyNxiRlpi9QAAAABJRU5ErkJggg=="
  },
  {
    name:"CSS",
    img:"data:image/png;base64,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"
  },
  {
    name:"JAVASCRIPT",
    img:"data:image/jpeg;base64,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"
  },
  {
    name:"REACTJS",
    img:"data:image/png;base64,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"
  },
  {
    name:"NODEJS",
    img:"data:image/png;base64,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"
  },
  {
    name:"MONGODB",
    img:"data:image/png;base64,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"
  },
]

const Home = () => {
  return (
    <div className={Styles.home} id="#home">
      <div className={Styles.main}>
      {/* <div className={Styles.profile}> */}
        <Image src="https://i.ibb.co/yYtQGyD/IMG-20220904-202325-removebg-preview-1.png" 
      boxSize={["sm","md","md","xl"]} alt="Profile-Pic"/>
      {/* </div> */}
      <div className={Styles.about1}>
      <TypeWriter
       options={{
        autoStart: true,
        loop: true,
       }}
        onInit={(typewriter)=>{
        typewriter.typeString("Hello everyone!")
        .pauseFor(1000)
        .deleteAll()
        .typeString("My name is Harsh")
        .pauseFor(1000)
        .deleteAll()
        .typeString("I'm a Full Stack Web Developer")
        .pauseFor(1000)
        .start()
      }}/> 
      </div>
    </div>
    <h2 className={Styles.techLabel}>Some of the tech stacks that i've learned</h2>
    
    <KeyCarousel slides={data} />

    </div>
  )
}

export default Home