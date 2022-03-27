import { fetchAllTopics } from "../apiRequests/api";
import {useEffect, useState} from 'react'
import TopicCard from "./TopicCard"

export default function AllTopics () {
    const [allTopics, setAllTopics] = useState([])
    useEffect(() => {
        fetchAllTopics().then((topics) => {
            setAllTopics(topics)
        })
    },[])

    return (
        <section>
        {allTopics.map((topic) => {
            return ( <div>
                <TopicCard key={topic.slug} topic={topic}/>
            </div>
            )
        })}
        </section>
    )
}